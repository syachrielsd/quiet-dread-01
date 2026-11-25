import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const comment =
  "Approved. Every function makes sense. The system does not. Merging anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), comment, "utf8");
