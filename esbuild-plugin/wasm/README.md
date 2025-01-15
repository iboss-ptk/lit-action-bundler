# Esbuild Wasm Plugin

This is taken from [vite-plugin-wasm](https://github.com/Menci/vite-plugin-wasm). It has esbuild plugin defined internally but not exported.

This also uses [polywasm](https://github.com/Menci/polywasm) to handle the wasm module instead of native WebAssembly due to [LIT Action runtime doesn't expose the WebAssembly API](https://github.com/LIT-Protocol/Node/blob/9e3c542c5ef319007e2174d82f5abf3977475452/rust/lit-actions/server/runtime.rs#L209).