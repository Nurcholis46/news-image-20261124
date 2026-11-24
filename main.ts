// news-image-20261124 entry (Node 22, standard library only).
// The image is drawn in code by dev/draw.py (Python + PIL, flat vector art,
// DejaVu fonts) and shipped in this repository as entry.png; this program
// copies it to the grader's output directory. It runs with no network and
// writes the same bytes on every run: the file is copied byte for byte.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(entry, join(outDir, "entry.png"));
console.log("wrote entry.png to", outDir);
