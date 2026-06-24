/**
 * @fileoverview Types for the config-array package.
 * @author Nicholas C. Zakas
 */

/**
 * A file matcher used in `files` and `ignores`.
 */
export type FileMatcher = string | ((filePath: string) => boolean);

/**
 * An entry in a config's `files` array.
 *
 * A subarray means all matchers must match.
 */
export type FilesMatcher = FileMatcher | FileMatcher[];

/**
 * The config types allowed in the `extraConfigTypes` option.
 */
export type ExtraConfigType = "array" | "function";

export interface ConfigObject {
	/**
	 * The base path for files and ignores.
	 */
	basePath?: string;

	/**
	 * The files to include.
	 */
	files?: FilesMatcher[];

	/**
	 * The files to exclude.
	 */
	ignores?: FileMatcher[];

	/**
	 * The name of the config object.
	 */
	name?: string;

	// may also have any number of other properties
	[key: string]: unknown;
}
