/**
 * @fileoverview Types for object-schema package.
 */

/**
 * Built-in validation strategies.
 */
export type BuiltInValidationStrategy =
	| "array"
	| "boolean"
	| "number"
	| "object"
	| "object?"
	| "string"
	| "string!";

/**
 * Built-in merge strategies.
 */
export type BuiltInMergeStrategy = "assign" | "overwrite" | "replace";

/**
 * Custom merge strategy.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/eslint/rewrite/pull/90#discussion_r1687206213
export type CustomMergeStrategy = (target: any, source: any) => any;

/**
 * Custom validation strategy.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/eslint/rewrite/pull/90#discussion_r1687206213
export type CustomValidationStrategy = (value: any) => void;

interface BasePropertyDefinition {
	/**
	 * Indicates if the property is required.
	 */
	required?: boolean;

	/**
	 * The other properties that must be present when this property is used.
	 */
	requires?: string[];
}

/**
 * Property definition that specifies explicit merge and validation strategies.
 * This form cannot include a `schema`.
 */
export interface PropertyDefinitionWithStrategies extends BasePropertyDefinition {
	/**
	 * The schema for the object value of this property.
	 */
	schema?: never;

	/**
	 * The strategy to merge the property.
	 */
	merge: BuiltInMergeStrategy | CustomMergeStrategy;

	/**
	 * The strategy to validate the property.
	 */
	validate: BuiltInValidationStrategy | CustomValidationStrategy;
}

/**
 * Property definition that uses a nested `schema`.
 * When `schema` is present, merge and validation strategies are optional.
 */
export interface PropertyDefinitionWithSchema extends BasePropertyDefinition {
	/**
	 * The schema for the object value of this property.
	 */
	schema: ObjectDefinition;

	/**
	 * The strategy to merge the property.
	 */
	merge?: BuiltInMergeStrategy | CustomMergeStrategy;

	/**
	 * The strategy to validate the property.
	 */
	validate?: BuiltInValidationStrategy | CustomValidationStrategy;
}

/**
 * Property definition.
 */
export type PropertyDefinition =
	| PropertyDefinitionWithStrategies
	| PropertyDefinitionWithSchema;

/**
 * Object definition.
 */
export type ObjectDefinition = Record<string, PropertyDefinition>;
