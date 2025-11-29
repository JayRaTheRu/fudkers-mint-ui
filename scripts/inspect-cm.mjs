// scripts/inspect-cm.mjs

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCore } from "@metaplex-foundation/mpl-core";
import {
  mplCandyMachine,
  fetchCandyMachine,
} from "@metaplex-foundation/mpl-core-candy-machine";
import { publicKey } from "@metaplex-foundation/umi";

// 🔁 Your devnet config for CM #1
const RPC_ENDPOINT =
  "https://devnet.helius-rpc.com/?api-key=af2e60ed-0422-4853-bd1c-7e6c20cf66b6";

const CANDY_MACHINE_ID = "5K9nyCF86b9EJWk8ojQa8Xo4WGGRLE4M88o59f1LsyyF";

function toNum(value) {
  if (value == null) return null;
  if (typeof value === "number") return value;
  if (typeof value === "bigint") return Number(value);
  if (typeof value.toNumber === "function") return value.toNumber();
  return null;
}

async function main() {
  const umi = createUmi(RPC_ENDPOINT).use(mplCore()).use(mplCandyMachine());

  console.log("Fetching CM from devnet:", CANDY_MACHINE_ID);
  const cm = await fetchCandyMachine(umi, publicKey(CANDY_MACHINE_ID));

  console.log("\n=== Raw Candy Machine object (truncated) ===");
  console.dir(
    {
      publicKey: String(cm.publicKey),
      version: cm.version,
      itemsAvailable: toNum(
        cm.itemsAvailable ?? cm.data?.itemsAvailable ?? cm.config?.itemsAvailable
      ),
      itemsRedeemed: toNum(
        cm.itemsRedeemed ?? cm.data?.itemsRedeemed ?? cm.config?.itemsRedeemed
      ),
    },
    { depth: 4 }
  );

  const configLineSettings =
    cm.configLineSettings ??
    cm.data?.configLineSettings ??
    cm.config?.configLineSettings ??
    null;

  const hiddenSettings =
    cm.hiddenSettings ??
    cm.data?.hiddenSettings ??
    cm.config?.hiddenSettings ??
    null;

  console.log("\n=== configLineSettings ===");
  console.dir(configLineSettings, { depth: 6 });

  if (configLineSettings) {
    console.log(
      "\n→ isSequential:",
      configLineSettings.isSequential,
      "(false = random, true = sequential)"
    );
  }

  console.log("\n=== hiddenSettings ===");
  console.dir(hiddenSettings, { depth: 6 });
}

main().catch((err) => {
  console.error("Error inspecting CM:", err);
  process.exit(1);
});
