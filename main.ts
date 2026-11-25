// toaster-error-20261124 — "The Funniest Toaster Error Message"
// One-line entry, written to /output/entry.txt only.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Error: bread jammed since Tuesday. HR is aware.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
