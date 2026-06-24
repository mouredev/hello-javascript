/**
 * @fileoverview Types for this package.
 */

import type { ConfigObject } from "@eslint/core";

/**
 * Infinite array type.
 */
export type InfiniteArray<T> = T | InfiniteArray<T>[];

/**
 * A config object that may appear inside of `extends`.
 * `basePath` and nested `extends` are not allowed on extension config objects.
 */
export type ExtensionConfigObject = Omit<ConfigObject, "basePath"> & {
	extends?: never;
};

/**
 * The type of array element in the `extends` property after flattening.
 */
export type SimpleExtendsElement = string | ExtensionConfigObject;

/**
 * The type of array element in the `extends` property before flattening.
 */
export type ExtendsElement =
	| SimpleExtendsElement
	| InfiniteArray<ExtensionConfigObject>;

/**
 * Config with extends. Valid only inside of `defineConfig()`.
 */
export interface ConfigWithExtends extends ConfigObject {
	extends?: ExtendsElement[];
}

export type ConfigWithExtendsArray = InfiniteArray<ConfigWithExtends>[];
