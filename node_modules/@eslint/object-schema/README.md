# ObjectSchema Package

## Overview

A JavaScript object merge/validation utility where you can define a different merge and validation strategy for each key. This is helpful when you need to validate complex data structures and then merge them in a way that is more complex than `Object.assign()`. This is used in the [`@eslint/config-array`](https://npmjs.com/package/@eslint/config-array) package but can also be used on its own.

## Installation

For Node.js and compatible runtimes:

```shell
npm install @eslint/object-schema
# or
yarn add @eslint/object-schema
# or
pnpm install @eslint/object-schema
# or
bun add @eslint/object-schema
```

For Deno:

```shell
deno add @eslint/object-schema
```

## Usage

Import the `ObjectSchema` constructor:

```js
// using ESM
import { ObjectSchema } from "@eslint/object-schema";

// using CommonJS
const { ObjectSchema } = require("@eslint/object-schema");

const schema = new ObjectSchema({
	// define a definition for the "downloads" key
	downloads: {
		required: true,
		merge(value1 = 0, value2) {
			return value1 + value2;
		},
		validate(value) {
			if (typeof value !== "number") {
				throw new Error("Expected downloads to be a number.");
			}
		},
	},

	// define a strategy for the "versions" key
	versions: {
		required: true,
		merge(value1 = [], value2) {
			return value1.concat(value2);
		},
		validate(value) {
			if (!Array.isArray(value)) {
				throw new Error("Expected versions to be an array.");
			}
		},
	},
});

const record1 = {
	downloads: 25,
	versions: ["v1.0.0", "v1.1.0", "v1.2.0"],
};

const record2 = {
	downloads: 125,
	versions: ["v2.0.0", "v2.1.0", "v3.0.0"],
};

// make sure the records are valid
schema.validate(record1);
schema.validate(record2);

// merge together (schema.merge() accepts any number of objects)
const result = schema.merge(record1, record2);

// result looks like this:
// {
// 	downloads: 150,
// 	versions: ["v1.0.0", "v1.1.0", "v1.2.0", "v2.0.0", "v2.1.0", "v3.0.0"],
// }
```

## Tips and Tricks

### Named merge strategies

Instead of specifying a `merge()` method, you can specify one of the following strings to use a default merge strategy:

- `"assign"` - use `Object.assign()` to merge the two values into one object.
- `"overwrite"` - the second value always replaces the first.
- `"replace"` - the second value replaces the first if the second is not `undefined`.

For example:

```js
const schema = new ObjectSchema({
	name: {
		merge: "replace",
		validate() {},
	},
});
```

### Named validation strategies

Instead of specifying a `validate()` method, you can specify one of the following strings to use a default validation strategy:

- `"array"` - value must be an array.
- `"boolean"` - value must be a boolean.
- `"number"` - value must be a number.
- `"object"` - value must be a non-null object, including arrays and non-plain objects.
- `"object?"` - value must be an object or null, including arrays and non-plain objects.
- `"string"` - value must be a string.
- `"string!"` - value must be a non-empty string.

For example:

```js
const schema = new ObjectSchema({
	name: {
		merge: "replace",
		validate: "string",
	},
});
```

### Built-in strategy classes

The package also exports the built-in merge and validation strategies as two classes with static methods:

- `MergeStrategy` - built-in merge functions (`assign`, `overwrite`, `replace`).
- `ValidationStrategy` - built-in validation functions (`array`, `boolean`, `number`, `object`, `object?`, `string`, `string!`).

These are the same strategies used when you specify a strategy by name (for example, `merge: "replace"`). You can reference the functions directly if you prefer passing a function instead of a string:

```js
import {
	ObjectSchema,
	MergeStrategy,
	ValidationStrategy,
} from "@eslint/object-schema";

const schema = new ObjectSchema({
	name: {
		required: true,
		merge: MergeStrategy.replace,
		validate: ValidationStrategy["string!"],
	},
	options: {
		required: false,
		merge: MergeStrategy.assign,
		validate: ValidationStrategy["object?"],
	},
});
```

Note: Because `object?` and `string!` aren't valid identifiers, you must access them using bracket notation (for example, `ValidationStrategy["object?"]`).

### Subschemas

If you are defining a key that is, itself, an object, you can simplify the process by using a subschema. Instead of defining `merge()` and `validate()`, set a `schema` property that contains a schema definition, like this:

```js
const schema = new ObjectSchema({
	name: {
		schema: {
			first: {
				merge: "replace",
				validate: "string",
			},
			last: {
				merge: "replace",
				validate: "string",
			},
		},
	},
});

schema.validate({
	name: {
		first: "n",
		last: "z",
	},
});
```

### Remove Keys During Merge

If the merge strategy for a key returns `undefined`, then the key will not appear in the final object. For example:

```js
const schema = new ObjectSchema({
	date: {
		merge() {
			return undefined;
		},
		validate(value) {
			if (isNaN(Date.parse(value))) {
				throw new Error("Invalid date.");
			}
		},
	},
});

const object1 = { date: "5/5/2005" };
const object2 = { date: "6/6/2006" };

const result = schema.merge(object1, object2);

console.log("date" in result); // false
```

### Requiring Another Key Be Present

If you'd like the presence of one key to require the presence of another key, you can use the `requires` property to specify an array of other properties that any key requires. For example:

```js
const schema = new ObjectSchema({
	date: {
		merge() {
			return undefined;
		},
		validate(value) {
			if (isNaN(Date.parse(value))) {
				throw new Error("Invalid date.");
			}
		},
	},
	time: {
		requires: ["date"],
		merge(first, second) {
			return second;
		},
		validate(value) {
			// ...
		},
	},
});

// throws error: Key "time" requires keys "date".
schema.validate({
	time: "13:45",
});
```

In this example, even though `date` is an optional key, it is required to be present whenever `time` is present.

## License

Apache 2.0

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->

## Sponsors

The following companies, organizations, and individuals support ESLint's ongoing maintenance and development. [Become a Sponsor](https://eslint.org/donate)
to get your logo on our READMEs and [website](https://eslint.org/sponsors).

<h3>Platinum Sponsors</h3>
<p><a href="https://automattic.com"><img src="https://images.opencollective.com/automattic/d0ef3e1/logo.png" alt="Automattic" height="128"></a></p><h3>Gold Sponsors</h3>
<p><a href="https://qlty.sh/"><img src="https://images.opencollective.com/qltysh/33d157d/logo.png" alt="Qlty Software" height="96"></a></p><h3>Silver Sponsors</h3>
<p><a href="https://vite.dev/"><img src="https://images.opencollective.com/vite/d472863/logo.png" alt="Vite" height="64"></a> <a href="https://liftoff.io/"><img src="https://images.opencollective.com/liftoff/2d6c3b6/logo.png" alt="Liftoff" height="64"></a> <a href="https://stackblitz.com"><img src="https://avatars.githubusercontent.com/u/28635252" alt="StackBlitz" height="64"></a></p><h3>Bronze Sponsors</h3>
<p><a href="https://cybozu.co.jp/"><img src="https://images.opencollective.com/cybozu/933e46d/logo.png" alt="Cybozu" height="32"></a> <a href="https://opensource.sap.com"><img src="https://avatars.githubusercontent.com/u/2531208" alt="SAP" height="32"></a> <a href="https://www.crawljobs.com/"><img src="https://images.opencollective.com/crawljobs-poland/fa43a17/logo.png" alt="CrawlJobs" height="32"></a> <a href="#"><img src="https://images.opencollective.com/aeriusventilations-org/avatar.png" alt="aeriusventilation's Org" height="32"></a> <a href="https://depot.dev"><img src="https://images.opencollective.com/depot/39125a1/logo.png" alt="Depot" height="32"></a> <a href="https://icons8.com/"><img src="https://images.opencollective.com/icons8/7fa1641/logo.png" alt="Icons8" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://www.gitbook.com"><img src="https://avatars.githubusercontent.com/u/7111340" alt="GitBook" height="32"></a> <a href="https://herocoders.com"><img src="https://avatars.githubusercontent.com/u/37549774" alt="HeroCoders" height="32"></a> <a href="https://www.lambdatest.com"><img src="https://avatars.githubusercontent.com/u/171592363" alt="TestMu AI Open Source Office (Formerly LambdaTest)" height="32"></a></p>
<h3>Technology Sponsors</h3>
Technology sponsors allow us to use their products and services for free as part of a contribution to the open source ecosystem and our work.
<p><a href="https://netlify.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/netlify-icon.svg" alt="Netlify" height="32"></a> <a href="https://algolia.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/algolia-icon.svg" alt="Algolia" height="32"></a> <a href="https://1password.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/1password-icon.svg" alt="1Password" height="32"></a></p>
<!--sponsorsend-->
