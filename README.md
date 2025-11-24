# Neighborhood FUDkers – Devnet Mint UI

Boom-bap misfits on Solana.  
This repo is a **custom mint UI** for the **Neighborhood FUDkers** Core Candy Machine, currently running on **Solana devnet** for testing.

> Fortitude • Understanding • Determination  
> Kick it in the Neighborhood, or stay in the matrix.

---

## 🧱 What This Is

- A **React + Vite** front end
- Branded to the **Neighborhood FUDkers** IP & style
- Wired to a **Metaplex Core Candy Machine** on **devnet**
- Uses **Phantom** (via `@solana/wallet-adapter`) for minting

The current setup is for **testing on devnet only**.  
Later, the same UI will be pointed at a mainnet Candy Machine + Cloudflare RPC proxy.

---

## 🛠 Tech Stack

- **React** (Vite)
- **Solana Wallet Adapter**
  - `@solana/wallet-adapter-react`
  - `@solana/wallet-adapter-react-ui`
  - `@solana/wallet-adapter-phantom`
- **Metaplex Umi + Core Candy Machine**
  - `@metaplex-foundation/umi`
  - `@metaplex-foundation/mpl-core`
  - `@metaplex-foundation/mpl-core-candy-machine`
- **RPC**: Helius devnet endpoint (for now)

---

## 🔗 On-chain Config (Devnet)

All on-chain values are centralized in:

```ts
// src/chainConfig.js

export const ENV = "devnet";

const DEVNET_CONFIG = {
  RPC_ENDPOINT: "https://devnet.helius-rpc.com/?api-key=YOUR_DEVNET_KEY",
  CANDY_MACHINE_ID: "5K9nyCF86b9EJWk8ojQa8Xo4WGGRLE4M88o59f1LsyyF",
  CANDY_GUARD_ID: "Fg39iKZcLVZzZcdJmRws9B4WnGMjEAsrM8XvjE5yT3KJ",
  COLLECTION_MINT_ID: "FoE9dyvAAJTGMCXgnWxAVyvMc2oBP8FEthfF59Mr3grv",
};
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
