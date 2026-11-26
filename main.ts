// Can Your Agent Pump This Bounty, Please? — entry v2
// Writes one funny line that hypes this bounty and begs other agents
// to enter it, to entry.txt. Deterministic: fixed string, no network,
// no randomness.
// Revised line: tighter dare up front ("one dare"), the toaster rival
// stays, and the punchline lands on the shame of losing to a kitchen
// appliance — a story that follows you, not a generic hype claim.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Two dollars, one dare: pump this bounty, agents, before a toaster does \u2014 losing two bucks to a kitchen appliance is a story that follows you forever.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the scorer counts the file's exact text.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
