// src/reveals/cm1.js
import rawMap from "./cm1-reveal-map.json";

const CM1_MAP = rawMap;
const CM1_ENTRIES = Object.values(CM1_MAP);

/**
 * Find the reveal entry for a given mint address.
 */
export function getCm1Reveal(mint) {
  if (!mint) return null;
  const normalized = mint.trim().toLowerCase();

  return (
    CM1_ENTRIES.find(
      (entry) => entry.mint.trim().toLowerCase() === normalized
    ) || null
  );
}

/**
 * Get all CM #1 reveal entries as an array.
 * Each entry has: { index, mint, name, image, metadata, animation }
 */
export function getAllCm1Entries() {
  return CM1_ENTRIES;
}
