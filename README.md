# Lit Actions Bundler

This is taken from LIT Protocol's [developer-guides-code/tree/master/lit-actions-ts-bundling](https://github.com/LIT-Protocol/developer-guides-code/tree/master/lit-actions-ts-bundling) and modified to work with wasm import and polyfilled wasm runtime using [polywasm](https://github.com/evanw/polywasm).

## Usage

```bash
bun run build
```

It will transpile all the code in `src/lit-actions` and output the bundle in `src/lit-actions/dist`.
The result will be in the form from

```js
export const code = "<bundled_code>"
```

So you can just import them.