// @ts-self-types="./index.d.ts"
import fs from 'node:fs';
import path from 'node:path';

/**
 * @fileoverview defineConfig helper
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Type Definitions
//-----------------------------------------------------------------------------

/** @import * as $eslintcore from "@eslint/core"; */
/** @typedef {$eslintcore.ConfigObject} Config */
/** @typedef {$eslintcore.LegacyConfigObject} LegacyConfig */
/** @typedef {$eslintcore.Plugin} Plugin */
/** @typedef {$eslintcore.RuleConfig} RuleConfig */
/** @import * as $typests from "./types.ts"; */
/** @typedef {$typests.ExtendsElement} ExtendsElement */
/** @typedef {$typests.ExtensionConfigObject} ExtensionConfigObject */
/** @typedef {$typests.SimpleExtendsElement} SimpleExtendsElement */
/** @typedef {$typests.ConfigWithExtends} ConfigWithExtends */
/** @typedef {$typests.InfiniteArray<Config>} InfiniteConfigArray */
/** @typedef {$typests.ConfigWithExtendsArray} ConfigWithExtendsArray */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const eslintrcKeys = [
	"env",
	"extends",
	"globals",
	"ignorePatterns",
	"noInlineConfig",
	"overrides",
	"parser",
	"parserOptions",
	"reportUnusedDisableDirectives",
	"root",
];

const allowedGlobalIgnoreKeys = new Set(["basePath", "ignores", "name"]);

/**
 * Gets the name of a config object.
 * @param {Config} config The config object.
 * @param {string} indexPath The index path of the config object.
 * @return {string} The name of the config object.
 */
function getConfigName(config, indexPath) {
	if (config.name) {
		return config.name;
	}

	return `UserConfig${indexPath}`;
}

/**
 * Gets the name of an extension.
 * @param {SimpleExtendsElement} extension The extension.
 * @param {string} indexPath The index of the extension.
 * @return {string} The name of the extension.
 */
function getExtensionName(extension, indexPath) {
	if (typeof extension === "string") {
		return extension;
	}

	if (extension.name) {
		return extension.name;
	}

	return `ExtendedConfig${indexPath}`;
}

/**
 * Determines if a config object is a legacy config.
 * @param {Config|LegacyConfig} config The config object to check.
 * @return {config is LegacyConfig} `true` if the config object is a legacy config.
 */
function isLegacyConfig(config) {
	// eslintrc's plugins must be an array; while flat config's must be an object.
	if (Array.isArray(config.plugins)) {
		return true;
	}

	for (const key of eslintrcKeys) {
		if (key in config) {
			return true;
		}
	}

	return false;
}

/**
 * Determines if a config object is a global ignores config.
 * @param {Config} config The config object to check.
 * @return {boolean} `true` if the config object is a global ignores config.
 */
function isGlobalIgnores(config) {
	return Object.keys(config).every(key => allowedGlobalIgnoreKeys.has(key));
}

/**
 * Parses a plugin member ID (rule, processor, etc.) and returns
 * the namespace and member name.
 * @param {string} id The ID to parse.
 * @returns {{namespace:string, name:string}} The namespace and member name.
 */
function getPluginMember(id) {
	const firstSlashIndex = id.indexOf("/");

	if (firstSlashIndex === -1) {
		return { namespace: "", name: id };
	}

	let namespace = id.slice(0, firstSlashIndex);

	/*
	 * Special cases:
	 * 1. The namespace is `@`, that means it's referring to the
	 *    core plugin so `@` is the full namespace.
	 * 2. The namespace starts with `@`, that means it's referring to
	 *    an npm scoped package. That means the namespace is the scope
	 *    and the package name (i.e., `@eslint/core`).
	 */
	if (namespace[0] === "@" && namespace !== "@") {
		const secondSlashIndex = id.indexOf("/", firstSlashIndex + 1);
		if (secondSlashIndex !== -1) {
			namespace = id.slice(0, secondSlashIndex);
			return { namespace, name: id.slice(secondSlashIndex + 1) };
		}
	}

	const name = id.slice(firstSlashIndex + 1);

	return { namespace, name };
}

/**
 * Normalizes the plugin config by replacing the namespace with the plugin namespace.
 * @param {string} userNamespace The namespace of the plugin.
 * @param {Plugin} plugin The plugin config object.
 * @param {Config} config The config object to normalize.
 * @return {Config} The normalized config object.
 */
function normalizePluginConfig(userNamespace, plugin, config) {
	const pluginNamespace = plugin.meta?.namespace;

	// don't do anything if the plugin doesn't have a namespace or rules
	if (
		!pluginNamespace ||
		pluginNamespace === userNamespace ||
		(!config.rules && !config.processor && !config.language)
	) {
		return config;
	}

	const result = { ...config };

	// update the rules
	if (result.rules) {
		const ruleIds = Object.keys(result.rules);

		/** @type {Record<string,RuleConfig|undefined>} */
		const newRules = {};

		for (let i = 0; i < ruleIds.length; i++) {
			const ruleId = ruleIds[i];
			const { namespace: ruleNamespace, name: ruleName } =
				getPluginMember(ruleId);

			if (ruleNamespace === pluginNamespace) {
				newRules[`${userNamespace}/${ruleName}`] = result.rules[ruleId];
			} else {
				newRules[ruleId] = result.rules[ruleId];
			}
		}

		result.rules = newRules;
	}

	// update the processor

	if (typeof result.processor === "string") {
		const { namespace: processorNamespace, name: processorName } =
			getPluginMember(result.processor);

		if (processorNamespace) {
			if (processorNamespace === pluginNamespace) {
				result.processor = `${userNamespace}/${processorName}`;
			}
		}
	}

	// update the language
	if (typeof result.language === "string") {
		const { namespace: languageNamespace, name: languageName } =
			getPluginMember(result.language);

		if (languageNamespace === pluginNamespace) {
			result.language = `${userNamespace}/${languageName}`;
		}
	}

	return result;
}

/**
 * Deeply normalizes a plugin config, traversing recursively into an arrays.
 * @param {string} userPluginNamespace The namespace of the plugin.
 * @param {Plugin} plugin The plugin object.
 * @param {Config|LegacyConfig|(Config|LegacyConfig)[]} pluginConfig The plugin config to normalize.
 * @param {string} pluginConfigName The name of the plugin config.
 * @return {InfiniteConfigArray} The normalized plugin config.
 * @throws {TypeError} If the plugin config is a legacy config.
 */
function deepNormalizePluginConfig(
	userPluginNamespace,
	plugin,
	pluginConfig,
	pluginConfigName,
) {
	// if it's an array then it's definitely a new config
	if (Array.isArray(pluginConfig)) {
		return pluginConfig.map(pluginSubConfig =>
			deepNormalizePluginConfig(
				userPluginNamespace,
				plugin,
				pluginSubConfig,
				pluginConfigName,
			),
		);
	}

	// if it's a legacy config, throw an error
	if (isLegacyConfig(pluginConfig)) {
		throw new TypeError(
			`Plugin config "${pluginConfigName}" is an eslintrc config and cannot be used in this context.`,
		);
	}

	return normalizePluginConfig(userPluginNamespace, plugin, pluginConfig);
}

/**
 * Finds a plugin config by name in the given config.
 * @param {Config} config The config object.
 * @param {string} pluginConfigName The name of the plugin config.
 * @return {InfiniteConfigArray} The plugin config.
 * @throws {TypeError} If the plugin config is not found or is a legacy config.
 */
function findPluginConfig(config, pluginConfigName) {
	const { namespace: userPluginNamespace, name: configName } =
		getPluginMember(pluginConfigName);
	const plugin = config.plugins?.[userPluginNamespace];

	if (!plugin) {
		throw new TypeError(`Plugin "${userPluginNamespace}" not found.`);
	}

	const directConfig = plugin.configs?.[configName];

	// Prefer direct config, but fall back to flat config if available
	if (directConfig) {
		// Arrays are always flat configs, and non-legacy configs can be used directly
		if (Array.isArray(directConfig) || !isLegacyConfig(directConfig)) {
			return deepNormalizePluginConfig(
				userPluginNamespace,
				plugin,
				directConfig,
				pluginConfigName,
			);
		}
	}

	// If it's a legacy config, or the config does not exist => look for the flat version
	const flatConfig = plugin.configs?.[`flat/${configName}`];
	if (
		flatConfig &&
		(Array.isArray(flatConfig) || !isLegacyConfig(flatConfig))
	) {
		return deepNormalizePluginConfig(
			userPluginNamespace,
			plugin,
			flatConfig,
			pluginConfigName,
		);
	}

	// If we get here, then the config was either not found or is a legacy config
	const message =
		directConfig || flatConfig
			? `Plugin config "${configName}" in plugin "${userPluginNamespace}" is an eslintrc config and cannot be used in this context.`
			: `Plugin config "${configName}" not found in plugin "${userPluginNamespace}".`;
	throw new TypeError(message);
}

/**
 * Flattens an array while keeping track of the index path.
 * @param {any[]} configList The array to traverse.
 * @param {string} indexPath The index path of the value in a multidimensional array.
 * @return {IterableIterator<{indexPath:string, value:any}>} The flattened list of values.
 */
function* flatTraverse(configList, indexPath = "") {
	for (let i = 0; i < configList.length; i++) {
		const newIndexPath = indexPath ? `${indexPath}[${i}]` : `[${i}]`;

		// if it's an array then traverse it as well
		if (Array.isArray(configList[i])) {
			yield* flatTraverse(configList[i], newIndexPath);
			continue;
		}

		yield { indexPath: newIndexPath, value: configList[i] };
	}
}

/**
 * Extends a list of config files by creating every combination of base and extension files.
 * @param {(string|string[])[]} [baseFiles] The base files.
 * @param {(string|string[])[]} [extensionFiles] The extension files.
 * @return {(string|string[])[]} The extended files.
 */
function extendConfigFiles(baseFiles = [], extensionFiles = []) {
	if (!extensionFiles.length) {
		return baseFiles.concat();
	}

	if (!baseFiles.length) {
		return extensionFiles.concat();
	}

	/** @type {(string|string[])[]} */
	const result = [];

	for (const baseFile of baseFiles) {
		for (const extensionFile of extensionFiles) {
			/*
			 * Each entry can be a string or array of strings. The end result
			 * needs to be an array of strings, so we need to be sure to include
			 * all of the items when there's an array.
			 */

			const entry = [];

			if (Array.isArray(baseFile)) {
				entry.push(...baseFile);
			} else {
				entry.push(baseFile);
			}

			if (Array.isArray(extensionFile)) {
				entry.push(...extensionFile);
			} else {
				entry.push(extensionFile);
			}

			result.push(entry);
		}
	}

	return result;
}

/**
 * Extends a config object with another config object.
 * @param {Config} baseConfig The base config object.
 * @param {string} baseConfigName The name of the base config object.
 * @param {Config} extension The extension config object.
 * @param {string} extensionName The index of the extension config object.
 * @return {Config} The extended config object.
 */
function extendConfig(baseConfig, baseConfigName, extension, extensionName) {
	const result = { ...extension };

	// for global ignores there is no further work to be done, we just keep everything
	if (!isGlobalIgnores(extension)) {
		// for files we need to create every combination of base and extension files
		if (baseConfig.files) {
			result.files = extendConfigFiles(baseConfig.files, extension.files);
		}

		// for ignores we just concatenation the extension ignores onto the base ignores
		if (baseConfig.ignores) {
			result.ignores = baseConfig.ignores.concat(extension.ignores ?? []);
		}
	}

	result.name = `${baseConfigName} > ${extensionName}`;

	if (baseConfig.basePath) {
		result.basePath = baseConfig.basePath;
	}

	return result;
}

/**
 * Processes a list of extends elements.
 * @param {ConfigWithExtends} config The config object.
 * @param {WeakMap<Config, string>} configNames The map of config objects to their names.
 * @return {Config[]} The flattened list of config objects.
 * @throws {TypeError} If the `extends` property is not an array or if nested `extends` is found.
 */
function processExtends(config, configNames) {
	if (!config.extends) {
		return [config];
	}

	if (!Array.isArray(config.extends)) {
		throw new TypeError("The `extends` property must be an array.");
	}

	const {
		/** @type {Config[]} */
		extends: extendsList,

		/** @type {Config} */
		...configObject
	} = config;

	const extensionNames = new WeakMap();

	// replace strings with the actual configs
	const objectExtends = extendsList.map(extendsElement => {
		if (typeof extendsElement === "string") {
			const pluginConfig = findPluginConfig(config, extendsElement);

			// assign names
			if (Array.isArray(pluginConfig)) {
				pluginConfig.forEach((pluginConfigElement, index) => {
					extensionNames.set(
						pluginConfigElement,
						`${extendsElement}[${index}]`,
					);
				});
			} else {
				extensionNames.set(pluginConfig, extendsElement);
			}

			return pluginConfig;
		}

		return /** @type {Config} */ (extendsElement);
	});

	const result = [];

	for (const { indexPath, value: extendsElement } of flatTraverse(
		objectExtends,
	)) {
		const extension = /** @type {Config} */ (extendsElement);

		if ("basePath" in extension) {
			throw new TypeError("'basePath' in `extends` is not allowed.");
		}

		if ("extends" in extension) {
			throw new TypeError("Nested 'extends' is not allowed.");
		}

		const baseConfigName = /** @type {string} */ (configNames.get(config));
		const extensionName =
			extensionNames.get(extendsElement) ??
			getExtensionName(extendsElement, indexPath);

		result.push(
			extendConfig(
				configObject,
				baseConfigName,
				extension,
				extensionName,
			),
		);
	}

	/*
	 * If the base config object has only `ignores` and `extends`, then
	 * removing `extends` turns it into a global ignores, which is not what
	 * we want. So we need to check if the base config object is a global ignores
	 * and if so, we don't add it to the array.
	 *
	 * (The other option would be to add a `files` entry, but that would result
	 * in a config that didn't actually do anything because there are no
	 * other keys in the config.)
	 */
	if (!isGlobalIgnores(configObject)) {
		result.push(configObject);
	}

	return result.flat();
}

/**
 * Processes a list of config objects and arrays.
 * @param {ConfigWithExtends[]} configList The list of config objects and arrays.
 * @param {WeakMap<Config, string>} configNames The map of config objects to their names.
 * @return {Config[]} The flattened list of config objects.
 */
function processConfigList(configList, configNames) {
	return configList.flatMap(config => processExtends(config, configNames));
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Helper function to define a config array.
 * @param {ConfigWithExtendsArray} args The arguments to the function.
 * @returns {Config[]} The config array.
 * @throws {TypeError} If no arguments are provided or if an argument is not an object.
 */
function defineConfig(...args) {
	const configNames = new WeakMap();
	const configs = [];

	if (args.length === 0) {
		throw new TypeError("Expected one or more arguments.");
	}

	// first flatten the list of configs and get the names
	for (const { indexPath, value } of flatTraverse(args)) {
		if (typeof value !== "object" || value === null) {
			throw new TypeError(
				`Expected an object but received ${String(value)}.`,
			);
		}

		const config = /** @type {ConfigWithExtends} */ (value);

		// save config name for easy reference later
		configNames.set(config, getConfigName(config, indexPath));
		configs.push(config);
	}

	return processConfigList(configs, configNames);
}

/**
 * @fileoverview Global ignores helper function.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Type Definitions
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

let globalIgnoreCount = 0;

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Creates a global ignores config with the given patterns.
 * @param {string[]} ignorePatterns The ignore patterns.
 * @param {string} [name] The name of the global ignores config.
 * @returns {Config} The global ignores config.
 * @throws {TypeError} If ignorePatterns is not an array or if it is empty.
 */
function globalIgnores(ignorePatterns, name) {
	if (!Array.isArray(ignorePatterns)) {
		throw new TypeError("ignorePatterns must be an array");
	}

	if (ignorePatterns.length === 0) {
		throw new TypeError("ignorePatterns must contain at least one pattern");
	}

	const id = globalIgnoreCount++;

	return {
		name: name || `globalIgnores ${id}`,
		ignores: ignorePatterns,
	};
}

/**
 * @fileoverview Ignore file utilities for the config-helpers package.
 * This file was forked from the source code for the compat package.
 *
 * @author Nicholas C. Zakas
 * @author Kirk Waiblinger
 */


//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------


/**
 * @typedef {object} IncludeIgnoreFileOptionsObject
 * @property {boolean} [gitignoreResolution] Whether to interpret the contents of an ignore file relative to the config file or the ignore file.
 * - gitignoreResolution: false (default): Interprets ignore patterns relative to the config file
 * - gitignoreResolution: true: Interprets the ignore patterns in a file relative to the ignore file
 * @property {string} [name] The name to give the output config object(s).
 */

/**
 * Options for `includeIgnoreFile()`. May be provided as an object or, for
 * legacy compatibility with `@eslint/compat`, as a string which is treated as
 * the `name` option.
 * @typedef {IncludeIgnoreFileOptionsObject | string} IncludeIgnoreFileOptions
 */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Converts an ESLint ignore pattern to a minimatch pattern.
 * @param {string} pattern The .eslintignore or .gitignore pattern to convert.
 * @returns {string} The converted pattern.
 */
function convertIgnorePatternToMinimatch(pattern) {
	const isNegated = pattern.startsWith("!");
	const negatedPrefix = isNegated ? "!" : "";
	const patternToTest = (isNegated ? pattern.slice(1) : pattern).trimEnd();

	// special cases
	if (["", "**", "/**", "**/"].includes(patternToTest)) {
		return `${negatedPrefix}${patternToTest}`;
	}

	const firstIndexOfSlash = patternToTest.indexOf("/");

	const matchEverywherePrefix =
		firstIndexOfSlash < 0 || firstIndexOfSlash === patternToTest.length - 1
			? "**/"
			: "";

	const patternWithoutLeadingSlash =
		firstIndexOfSlash === 0 ? patternToTest.slice(1) : patternToTest;

	/*
	 * Escape `{` and `(` because in gitignore patterns they are just
	 * literal characters without any specific syntactic meaning,
	 * while in minimatch patterns they can form brace expansion or extglob syntax.
	 *
	 * For example, gitignore pattern `src/{a,b}.js` ignores file `src/{a,b}.js`.
	 * But, the same minimatch pattern `src/{a,b}.js` ignores files `src/a.js` and `src/b.js`.
	 * Minimatch pattern `src/\{a,b}.js` is equivalent to gitignore pattern `src/{a,b}.js`.
	 */
	const escapedPatternWithoutLeadingSlash =
		patternWithoutLeadingSlash.replaceAll(
			// eslint-disable-next-line regexp/no-empty-lookarounds-assertion -- False positive
			/(?=((?:\\.|[^{(])*))\1([{(])/guy,
			"$1\\$2",
		);

	const matchInsideSuffix = patternToTest.endsWith("/**") ? "/*" : "";

	return `${negatedPrefix}${matchEverywherePrefix}${escapedPatternWithoutLeadingSlash}${matchInsideSuffix}`;
}

/**
 * @param {string} ignoreFilePath
 * @returns {string[]}
 */
function ignoreFilePathToPatterns(ignoreFilePath) {
	const ignoreFile = fs.readFileSync(ignoreFilePath, "utf8");
	const lines = ignoreFile.split(/\r?\n/u);

	return lines
		.map(line => line.trim())
		.filter(line => line && !line.startsWith("#"))
		.map(convertIgnorePatternToMinimatch);
}

/**
 * Helper to parse and validate the options to `includeIgnoreFile()`
 *
 * @param {string | { gitignoreResolution?: unknown, name?: unknown } | undefined} options
 * @returns {{ gitignoreResolution: boolean, name: string }}
 */
function parseOptions(options) {
	// legacy compatibility with @eslint/compat's `includeIgnoreFile`
	if (typeof options === "string") {
		return { gitignoreResolution: false, name: options };
	}

	const optionsObject = options ?? {};
	if (typeof optionsObject !== "object" || Array.isArray(optionsObject)) {
		throw new TypeError(
			"The options argument to `includeIgnoreFile()` should be an object or a string.",
		);
	}

	const gitignoreResolution = optionsObject.gitignoreResolution ?? false;
	if (typeof gitignoreResolution !== "boolean") {
		throw new TypeError(
			"The `gitignoreResolution` option must be specified a boolean or omitted",
		);
	}

	const name = optionsObject.name ?? `Imported .gitignore patterns`;
	if (typeof name !== "string") {
		throw new TypeError(
			"The `name` option must be specified as a string or omitted.",
		);
	}

	return { gitignoreResolution, name };
}

/**
 * @overload
 *
 * Reads ignore files and returns objects with the ignore patterns.
 *
 * @param {string[]} ignoreFilePathArg The paths of ignore files to include.
 * @param {IncludeIgnoreFileOptions} [options]
 * @returns {Config[]}
 */

/**
 * @overload
 *
 * Reads an ignore file and returns an object with the ignore patterns.
 *
 * @param {string} ignoreFilePathArg The path of the ignore file to include.
 * @param {IncludeIgnoreFileOptions} [options]
 * @returns {Config}
 */

/**
 * @overload
 *
 * Reads an ignore file(s) and returns an object(s) with the ignore patterns.
 *
 * @param {string[] | string} ignoreFilePathArg The path(s) of the ignore file(s) to include.
 * @param {IncludeIgnoreFileOptions} [options]
 * @returns {Config[] | Config}
 */

/**
 * Reads an ignore file(s) and returns an object(s) with the ignore patterns.
 *
 * @param {string[] | string} ignoreFilePathArg The path(s) of the ignore file(s) to include.
 * @param {IncludeIgnoreFileOptions} [options]
 * @returns {Config[] | Config}
 */
function includeIgnoreFile(ignoreFilePathArg, options) {
	const returnSingleObject = !Array.isArray(ignoreFilePathArg);
	const ignoreFilePaths = Array.isArray(ignoreFilePathArg)
		? ignoreFilePathArg
		: [ignoreFilePathArg];
	for (const ignorePath of ignoreFilePaths) {
		if (typeof ignorePath !== "string") {
			throw new TypeError(
				"The first argument to `includeIgnoreFile()` should be a string or array of strings",
			);
		}
		if (!path.isAbsolute(ignorePath)) {
			throw new Error(
				`The ignore file location must be an absolute path. Received ${ignorePath}`,
			);
		}
	}

	const { gitignoreResolution, name } = parseOptions(options);

	if (returnSingleObject) {
		return {
			name,
			ignores: ignoreFilePathToPatterns(ignoreFilePathArg),
			...(gitignoreResolution
				? { basePath: path.dirname(ignoreFilePathArg) }
				: {}),
		};
	}

	return ignoreFilePaths.map((ignoreFilePath, i) => ({
		name: `${name} (${i})`,
		ignores: ignoreFilePathToPatterns(ignoreFilePath),
		...(gitignoreResolution
			? { basePath: path.dirname(ignoreFilePath) }
			: {}),
	}));
}

export { convertIgnorePatternToMinimatch, defineConfig, globalIgnores, includeIgnoreFile };
