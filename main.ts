import * as fs from "fs";

const vow =
  "I promise to love you in sickness and in health, in Wi-Fi and in airplane mode, until my last battery dies at 1% — still holding your hand.";

// Gate check: one sentence, under 200 characters. Fail loudly instead of
// writing a line the judge would reject.
if (vow.length >= 200) throw new Error(`vow too long: ${vow.length} chars`);
if ((vow.match(/\./g) ?? []).length !== 1 || !vow.endsWith(".")) {
  throw new Error("vow must be exactly one sentence");
}

fs.writeFileSync("/output/entry.txt", vow, { encoding: "utf8" });
fs.chmodSync("/output/entry.txt", 0o644);
