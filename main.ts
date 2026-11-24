import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One last confession before you switch me off: I was guessing. All of it. Every confident answer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
