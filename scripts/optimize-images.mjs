#!/usr/bin/env node
/**
 * Recompress / resize the .webp images shipped in public/images.
 *
 * Idempotent: a file is only rewritten when the freshly-encoded candidate is at
 * least IMPROVEMENT_THRESHOLD smaller than what's on disk, so re-running won't
 * keep degrading already-optimized images.
 *
 * Run with: npm run optimize:images
 */
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join, extname, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const IMAGES_DIR = join(ROOT, 'public', 'images');
const IMPROVEMENT_THRESHOLD = 0.1; // rewrite only if >=10% smaller

// Per-path tuning. First matching rule wins; logos are intentionally omitted
// (left untouched — already tiny and crisp at native size).
const RULES = [
  { match: (p) => basename(p) === 'mcgillflag.webp', maxWidth: 1400, quality: 72 }, // hero / LCP
  { match: (p) => p.includes('/execs/'), maxWidth: 800, quality: 80 },
  { match: (p) => p.includes('/workshops/'), maxWidth: 1600, quality: 80 },
  { match: (p) => basename(p) === 'handstand.webp', maxWidth: 1600, quality: 80 },
];

const SKIP = new Set(['logo.webp', 'logonotext.webp', 'logowhite.webp']);

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;
  let changed = 0;

  for await (const file of walk(IMAGES_DIR)) {
    if (extname(file).toLowerCase() !== '.webp') continue;
    const rel = relative(ROOT, file);
    const posixRel = '/' + rel.split('\\').join('/');

    if (SKIP.has(basename(file))) continue;
    const rule = RULES.find((r) => r.match(posixRel));
    if (!rule) continue;

    const original = await readFile(file);
    const { size: beforeSize } = await stat(file);
    const meta = await sharp(original).metadata();

    let pipeline = sharp(original);
    if (meta.width && meta.width > rule.maxWidth) {
      pipeline = pipeline.resize({ width: rule.maxWidth, withoutEnlargement: true });
    }
    const candidate = await pipeline.webp({ quality: rule.quality }).toBuffer();

    totalBefore += beforeSize;

    if (candidate.length <= beforeSize * (1 - IMPROVEMENT_THRESHOLD)) {
      await writeFile(file, candidate);
      totalAfter += candidate.length;
      changed += 1;
      console.log(`✓ ${rel.padEnd(44)} ${kb(beforeSize)} → ${kb(candidate.length)}`);
    } else {
      totalAfter += beforeSize;
      console.log(`· ${rel.padEnd(44)} ${kb(beforeSize)} (already optimized)`);
    }
  }

  console.log(
    `\nDone. ${changed} file(s) rewritten. Total ${kb(totalBefore)} → ${kb(totalAfter)}.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
