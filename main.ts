import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Error: crumb tray full. I have kept your crumbs since 2019 — and the smoke alarm listens. Empty me, or I talk.";

if (LINE.length > 120) {
  throw new Error(`line is ${LINE.length} characters, max 120`);
}
if (LINE.includes("\n")) {
  throw new Error("line contains a newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
