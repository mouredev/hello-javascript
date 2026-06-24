/**
 * @fileoverview Types for the plugin-kit package.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import type {
	RuleDefinition,
	RuleDefinitionTypeOptions,
	RuleVisitor,
} from "@eslint/core";

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * Defaults for non-language-related `RuleDefinition` options.
 */
export interface CustomRuleTypeDefinitions {
	RuleOptions: unknown[];
	MessageIds: string;
	ExtRuleDocs: Record<string, unknown>;
}

/**
 * A helper type to define language specific specializations of the `RuleDefinition` type.
 *
 * @example
 * ```ts
 * type YourRuleDefinition<
 * 	Options extends Partial<CustomRuleTypeDefinitions> = {},
 * > = CustomRuleDefinitionType<
 * 	{
 * 		LangOptions: YourLanguageOptions;
 * 		Code: YourSourceCode;
 * 		Visitor: YourRuleVisitor;
 * 		Node: YourNode;
 * 	},
 * 	Options
 * >;
 * ```
 */
export type CustomRuleDefinitionType<
	LanguageSpecificOptions extends Omit<
		RuleDefinitionTypeOptions,
		keyof CustomRuleTypeDefinitions
	>,
	Options extends Partial<CustomRuleTypeDefinitions>,
> = RuleDefinition<
	// Language specific type options (non-configurable)
	LanguageSpecificOptions &
		Required<
			// Rule specific type options (custom)
			Options &
				// Rule specific type options (defaults)
				Omit<CustomRuleTypeDefinitions, keyof Options>
		>
>;

/**
 * Adds matching `:exit` selector properties for each key of a `RuleVisitor`.
 */
export type CustomRuleVisitorWithExit<RuleVisitorType extends RuleVisitor> = {
	[Key in keyof RuleVisitorType as
		| Key
		| `${Key & string}:exit`]: RuleVisitorType[Key];
};

/**
 * A map of names to string values, or `null` when no value is provided.
 */
export type StringConfig = Record<string, string | null>;

/**
 * A map of names to boolean flags.
 */
export type BooleanConfig = Record<string, boolean>;
