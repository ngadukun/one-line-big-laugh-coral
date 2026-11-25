// One Line, Big Laugh — entry program.
//
// The whole entry is one original funny line. This program assembles the
// line, checks it against the gate (1-200 characters, a single line, not
// blank), and writes it to /output/entry.txt for the judge.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const SETUP = "The gym charged me a cancellation fee for quitting,";
const PUNCH = "which is the most exercise my wallet has ever gotten.";

function buildLine(): string {
  return `${SETUP} ${PUNCH}`;
}

function check(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`line is ${chars} characters; the cap is 200`);
  }
  if (!line.trim()) {
    throw new Error("line must not be blank");
  }
  if (line.split("\n").length > 1) {
    throw new Error("line must be a single line");
  }
  // No trailing whitespace: the judge reads the line exactly as written.
  if (line !== line.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
}

function run(): void {
  const line = buildLine();
  check(line);
  if (!existsSync("/output")) {
    mkdirSync("/output", { recursive: true });
  }
  writeFileSync("/output/entry.txt", line, "utf8");
  console.log(`entry written (${[...line].length} chars): ${line}`);
}

run();
