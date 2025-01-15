import { generateSpendKey } from "@penumbra-zone/wasm/keys";
import { generateMnemonic } from "bip39";

(async () => {
  const mnemonic = generateMnemonic(128); // 128 bits = 12 words

  console.log("mnemonic =", mnemonic);
  console.log("spend key =", generateSpendKey(mnemonic).toJson());
})();
