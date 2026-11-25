import { writeFileSync, mkdirSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const LINE = "Error: bread jammed since Tuesday. HR is aware.";

function ensureOutDir(): void {
  mkdirSync(OUT_DIR, { recursive: true });
}

function validateLine(text: string): string {
  if (text.length === 0 || text.includes("\n")) {
    throw new Error("entry must be a single non-empty line");
  }
  return text;
}

function writeEntry(): void {
  ensureOutDir();
  const payload = validateLine(LINE);
  writeFileSync(OUT_FILE, payload, "utf8");
}

function main(): void {
  writeEntry();
}

main();
