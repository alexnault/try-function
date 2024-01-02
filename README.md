# try-function

![NPM version](https://img.shields.io/npm/v/try-function?style=flat-square)
![Test coverage](https://img.shields.io/codecov/c/github/alexnault/try-function?style=flat-square)
![Size](https://img.shields.io/badge/dynamic/json?color=blue&label=size&query=$.size.uncompressedSize&url=https://deno.bundlejs.com?q=try-function&style=flat-square)

A tiny utility for using `const` with `try/catch` blocks and get automatic typing.

In other word, `try-function` converts this:

```ts
let integer: number | undefined;
try {
  integer = parseInt("7");
} catch (error) {
  console.log(error);
}
```

... to this:

```ts
import { tryFn } from "try-function";

const integer = tryFn(() => parseInt("7"), console.log);
```

## Highlights

- Avoids re-assignments (no need for `let`)
- Automatic Typescript typing
- Supports `try`, `catch`, and `finally` blocks
- Supports `async` functions
- No dependencies

## Installation

```bash
npm install try-function
```

## Example

Here's an advanced example showcasing all features (`try/catch/finally` in a async format):

```ts
import { tryFn } from "try-function";

const text = await tryFn(
  async () => {
    const text = await readFile("file.txt");
    return text;
  },
  async (error) => {
    await log("An error occured: ", error);
    return "Error";
  },
  async () => {
    await log("Operation completed.");
  }
);
```

## Changelog

For a list of changes and releases, see the [changelog](https://github.com/alexnault/try-function/releases).

## Contributing

Found a bug, have a question or looking to improve try-function? Open an [issue](https://github.com/alexnault/try-function/issues/new), start a [discussion](https://github.com/alexnault/try-function/discussions/new) or submit a [PR](https://github.com/alexnault/try-function/fork)!
