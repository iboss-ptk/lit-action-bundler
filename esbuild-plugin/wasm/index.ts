import { createRequire } from "module";
import path from "path";

import { createBase64UriForWasm } from "./util.ts";
import * as wasmHelper from "./wasm-helper.ts";
import { generateGlueCode } from "./wasm-parser.ts";

export const wasmPlugin = {
  name: "vite-plugin-wasm",
  setup(build) {
    const NAMESPACE = "vite-plugin-wasm-namespace";

    build.onResolve({ filter: /\.wasm$/ }, (args) => ({
      path: createRequire(args.importer).resolve(args.path),
      namespace: NAMESPACE,
    }));

    build.onLoad({ filter: /.*/, namespace: NAMESPACE }, async (args) => {
      const dataUri = await createBase64UriForWasm(args.path);
      const contents = `
import { WebAssembly } from 'polywasm'
const wasmUrl = "${dataUri}";
const initWasm = ${wasmHelper.code};
${await generateGlueCode(args.path, {
  initWasm: "initWasm",
  wasmUrl: "wasmUrl",
})}
`;

      return {
        contents,
        loader: "js",
        resolveDir: path.dirname(args.path),
      };
    });
  },
};
