# try-function

![NPM version](https://img.shields.io/npm/v/try-function?style=flat-square)
![Build](https://img.shields.io/github/actions/workflow/status/alexnault/try-function/ci-and-publish.yml?branch=main&style=flat-square)
![Test coverage](https://img.shields.io/codecov/c/github/alexnault/try-function?style=flat-square)
![Size](https://img.shields.io/badge/dynamic/json?color=blue&label=size&query=$.size.uncompressedSize&url=https://deno.bundlejs.com?q=try-function&style=flat-square)

## Installation

```bash
npm install try-function
```

## Usage

Convert this:

```ts
let payload: string | undefined;
try {
  payload = decode("abc123");
} catch (error) {
  // ...
}
```

... to this:

```ts
const payload = tryFn(
  () => decode("abc123"),
  (error) => {
    // ...
  }
);
```

- Functional with no re-assignement (no need for `let`)
- Less error-prone
- Automatic typing (no need to define `result`'s type)
- Supports `async` functions out-of-the-box
- Supports `finally` blocks
- No dependencies
- Fully tested

## Changelog

For a list of changes and releases, see the [changelog](https://github.com/alexnault/try-function/releases).

## Contributing

Found a bug, have a question or looking to improve try-function? Open an [issue](https://github.com/alexnault/try-function/issues/new), start a [discussion](https://github.com/alexnault/try-function/discussions/new) or submit a [PR](https://github.com/alexnault/try-function/fork)!
