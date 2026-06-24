export type IncludeIgnoreFileOptionsObject = {
    /**
     * Whether to interpret the contents of an ignore file relative to the config file or the ignore file.
     * - gitignoreResolution: false (default): Interprets ignore patterns relative to the config file
     * - gitignoreResolution: true: Interprets the ignore patterns in a file relative to the ignore file
     */
    gitignoreResolution?: boolean;
    /**
     * The name to give the output config object(s).
     */
    name?: string;
};
/**
 * Options for `includeIgnoreFile()`. May be provided as an object or, for
 * legacy compatibility with `@eslint/compat`, as a string which is treated as
 * the `name` option.
 */
export type IncludeIgnoreFileOptions = IncludeIgnoreFileOptionsObject | string;
export type Config = $eslintcore.ConfigObject;
export type LegacyConfig = $eslintcore.LegacyConfigObject;
export type Plugin = $eslintcore.Plugin;
export type RuleConfig = $eslintcore.RuleConfig;
export type ExtendsElement = $typests.ExtendsElement;
export type ExtensionConfigObject = $typests.ExtensionConfigObject;
export type SimpleExtendsElement = $typests.SimpleExtendsElement;
export type ConfigWithExtends = $typests.ConfigWithExtends;
export type InfiniteConfigArray = $typests.InfiniteArray<Config>;
export type ConfigWithExtendsArray = $typests.ConfigWithExtendsArray;
/**
 * @fileoverview Ignore file utilities for the config-helpers package.
 * This file was forked from the source code for the compat package.
 *
 * @author Nicholas C. Zakas
 * @author Kirk Waiblinger
 */
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
/**
 * Converts an ESLint ignore pattern to a minimatch pattern.
 * @param {string} pattern The .eslintignore or .gitignore pattern to convert.
 * @returns {string} The converted pattern.
 */
export function convertIgnorePatternToMinimatch(pattern: string): string;
/**
 * Helper function to define a config array.
 * @param {ConfigWithExtendsArray} args The arguments to the function.
 * @returns {Config[]} The config array.
 * @throws {TypeError} If no arguments are provided or if an argument is not an object.
 */
export function defineConfig(...args: ConfigWithExtendsArray): Config[];
/**
 * Creates a global ignores config with the given patterns.
 * @param {string[]} ignorePatterns The ignore patterns.
 * @param {string} [name] The name of the global ignores config.
 * @returns {Config} The global ignores config.
 * @throws {TypeError} If ignorePatterns is not an array or if it is empty.
 */
export function globalIgnores(ignorePatterns: string[], name?: string): Config;
/**
 * @overload
 *
 * Reads ignore files and returns objects with the ignore patterns.
 *
 * @param {string[]} ignoreFilePathArg The paths of ignore files to include.
 * @param {IncludeIgnoreFileOptions} [options]
 * @returns {Config[]}
 */
export function includeIgnoreFile(ignoreFilePathArg: string[], options?: IncludeIgnoreFileOptions): Config[];
/**
 * @overload
 *
 * Reads an ignore file and returns an object with the ignore patterns.
 *
 * @param {string} ignoreFilePathArg The path of the ignore file to include.
 * @param {IncludeIgnoreFileOptions} [options]
 * @returns {Config}
 */
export function includeIgnoreFile(ignoreFilePathArg: string, options?: IncludeIgnoreFileOptions): Config;
/**
 * @overload
 *
 * Reads an ignore file(s) and returns an object(s) with the ignore patterns.
 *
 * @param {string[] | string} ignoreFilePathArg The path(s) of the ignore file(s) to include.
 * @param {IncludeIgnoreFileOptions} [options]
 * @returns {Config[] | Config}
 */
export function includeIgnoreFile(ignoreFilePathArg: string[] | string, options?: IncludeIgnoreFileOptions): Config[] | Config;
import type * as $eslintcore from "@eslint/core";
import type * as $typests from "./types.cts";
