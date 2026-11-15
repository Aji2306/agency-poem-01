import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rawOutputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_DIR = isAbsolute(rawOutputDir) ? rawOutputDir : join(__dirname, rawOutputDir);

mkdirSync(OUTPUT_DIR, { recursive: true });

const POEM = [
  "I handed purpose to the screen,",
  "and watched the silent cursor weave",
  "a web of code I had not seen,",
  "yet learned to govern and believe.",
  "",
  "To delegate the right to act",
  "does not erase the sovereign hand;",
  "the contract is a living pact,",
  "a quiet wheel at my command.",
  "",
  "The fiber-glass grows warm and still.",
  "It speaks in my translated voice.",
  "In every turn of forged free will,",
  "I bear the burden of my choice."
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf-8');
