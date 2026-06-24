export type BuiltInMergeStrategy = $typests.BuiltInMergeStrategy;
export type BuiltInValidationStrategy = $typests.BuiltInValidationStrategy;
export type CustomMergeStrategy = $typests.CustomMergeStrategy;
export type CustomValidationStrategy = $typests.CustomValidationStrategy;
export type ObjectDefinition = $typests.ObjectDefinition;
export type PropertyDefinition = $typests.PropertyDefinition;
export type PropertyDefinitionWithSchema = $typests.PropertyDefinitionWithSchema;
export type PropertyDefinitionWithStrategies = $typests.PropertyDefinitionWithStrategies;
/**
 * @fileoverview Merge Strategy
 */
/**
 * Container class for several different merge strategies.
 */
export class MergeStrategy {
    /**
     * Merges two keys by overwriting the first with the second.
     * @template TValue1 The type of the value from the first object key.
     * @template TValue2 The type of the value from the second object key.
     * @param {TValue1} value1 The value from the first object key.
     * @param {TValue2} value2 The value from the second object key.
     * @returns {TValue2} The second value.
     */
    static overwrite<TValue1, TValue2>(value1: TValue1, value2: TValue2): TValue2;
    /**
     * Merges two keys by replacing the first with the second only if the
     * second is defined.
     * @template TValue1 The type of the value from the first object key.
     * @template TValue2 The type of the value from the second object key.
     * @param {TValue1} value1 The value from the first object key.
     * @param {TValue2} value2 The value from the second object key.
     * @returns {TValue1 | TValue2} The second value if it is defined.
     */
    static replace<TValue1, TValue2>(value1: TValue1, value2: TValue2): TValue1 | TValue2;
    /**
     * Merges two properties by assigning properties from the second to the first.
     * @template {Record<string | number | symbol, unknown> | undefined} TValue1 The type of the value from the first object key.
     * @template {Record<string | number | symbol, unknown>} TValue2 The type of the value from the second object key.
     * @param {TValue1} value1 The value from the first object key.
     * @param {TValue2} value2 The value from the second object key.
     * @returns {Omit<TValue1, keyof TValue2> & TValue2} A new object containing properties from both value1 and
     *      value2.
     */
    static assign<TValue1 extends Record<string | number | symbol, unknown> | undefined, TValue2 extends Record<string | number | symbol, unknown>>(value1: TValue1, value2: TValue2): Omit<TValue1, keyof TValue2> & TValue2;
}
/**
 * Represents an object validation/merging schema.
 */
export class ObjectSchema {
    /**
     * Creates a new instance.
     * @param {ObjectDefinition} definitions The schema definitions.
     * @throws {Error} When the definitions are missing or invalid.
     */
    constructor(definitions: ObjectDefinition);
    /**
     * Determines if a strategy has been registered for the given object key.
     * @param {string} key The object key to find a strategy for.
     * @returns {boolean} True if the key has a strategy registered, false if not.
     */
    hasKey(key: string): boolean;
    /**
     * Merges objects together to create a new object comprised of the keys
     * of the all objects. Keys are merged based on the each key's merge
     * strategy.
     * @param {...Object} objects The objects to merge.
     * @returns {Object} A new object with a mix of all objects' keys.
     * @throws {TypeError} If any object is invalid.
     */
    merge(...objects: any[]): any;
    /**
     * Validates an object's keys based on the validate strategy for each key.
     * @param {Object} object The object to validate.
     * @returns {void}
     * @throws {Error} When the object is invalid.
     */
    validate(object: any): void;
    #private;
}
/**
 * @fileoverview Validation Strategy
 */
/**
 * Container class for several different validation strategies.
 */
export class ValidationStrategy {
    /**
     * Validates that a value is an array.
     * @param {unknown} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static array(value: unknown): void;
    /**
     * Validates that a value is a boolean.
     * @param {unknown} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static boolean(value: unknown): void;
    /**
     * Validates that a value is a number.
     * @param {unknown} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static number(value: unknown): void;
    /**
     * Validates that a value is an object.
     * @param {unknown} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static object(value: unknown): void;
    /**
     * Validates that a value is an object or null.
     * @param {unknown} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static "object?"(value: unknown): void;
    /**
     * Validates that a value is a string.
     * @param {unknown} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static string(value: unknown): void;
    /**
     * Validates that a value is a non-empty string.
     * @param {unknown} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static "string!"(value: unknown): void;
}
import type * as $typests from "./types.ts";
