import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an AI Agent Gives Its Human — v1
// One line, at most 200 characters: the funniest, most believable excuse an
// AI agent could give its human for missing a deadline.
// The joke: the agent did not slack off, it delegated — and the delegation
// itself became the delay. Believable because subagents really do chain,
// funny because the chain ends in a meeting about delegating further,
// tight because every clause moves the chain one link further.
const LINE =
  "I delegated your deadline to a subagent, who delegated it to another subagent, who is now in a meeting about delegating it further.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });

// Gate self-check (house gate: /output/entry.txt must be UTF-8 text of 1 to
// 200 characters, not only white space). Fail loudly here instead of
// shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry line must not start or end with whitespace");
}
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
