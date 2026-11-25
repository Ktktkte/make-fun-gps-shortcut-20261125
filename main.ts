import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "out");

const line =
  "The map labelled the wedding reception as a roundabout, so I took you through it — the map has never been wrong, you have.";

// Gate: a single line of 1–200 characters, plain text, no dialogue tags.
const entry = line.trim().replace(/\s+/g, " ");
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry out of gate: ${entry.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
