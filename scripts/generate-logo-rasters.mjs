/**
 * Generate PNG and JPG rasters for every logo SVG in /public/assets/.
 *
 * One-shot script — run after any SVG update with:
 *   node scripts/generate-logo-rasters.mjs
 *
 * For each SVG it produces:
 *   - <name>.png   — 2x density, transparent background
 *   - <name>.jpg   — 2x density, flat background (white for *-dark variants,
 *                    navy #0F2240 for *-white variants)
 *
 * Output sizes follow each SVG's intrinsic aspect ratio at 1600px on the
 * longer side, which is enough for letterhead, slides, and most print at
 * up to ~8" wide.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ASSETS_DIR = path.resolve('public/assets');
const TARGET_LONG_EDGE = 1600;
// Clear space added around every logo so it isn't cropped to the edge — matches
// the breathing room in the brand-page preview thumbnails. Equal pixel padding on
// all sides (a fraction of the long edge), applied to both PNG (transparent) and
// JPG (flat background). The final file grows by 2× this value on each axis.
const PADDING = 100; // px of clear space on all sides
const NAVY = { r: 15, g: 34, b: 64 }; // matches --bg-dark in brand guidelines
const WHITE = { r: 255, g: 255, b: 255 };

const SOURCES = [
  'woodland-stacked-dark.svg',
  'woodland-stacked-white.svg',
  'woodland-short-dark.svg',
  'woodland-short-white.svg',
  'circle-dark.svg',
  'circle-white.svg',
];

async function getViewBoxSize(svg) {
  const match = svg.match(/viewBox="([\d.\s-]+)"/);
  if (!match) throw new Error('No viewBox on SVG');
  const [, vb] = match;
  const [, , vbW, vbH] = vb.trim().split(/\s+/).map(Number);
  return { width: vbW, height: vbH };
}

async function generate(filename) {
  const inputPath = path.join(ASSETS_DIR, filename);
  const svgBuffer = await readFile(inputPath);
  const svgString = svgBuffer.toString('utf8');
  const { width: vbW, height: vbH } = await getViewBoxSize(svgString);
  const longEdge = Math.max(vbW, vbH);
  const scale = TARGET_LONG_EDGE / longEdge;
  const outW = Math.round(vbW * scale);
  const outH = Math.round(vbH * scale);

  const baseName = filename.replace(/\.svg$/, '');
  const isWhiteOnDark = baseName.endsWith('-white');
  const flatBg = isWhiteOnDark ? NAVY : WHITE;

  const pngPath = path.join(ASSETS_DIR, `${baseName}.png`);
  const jpgPath = path.join(ASSETS_DIR, `${baseName}.jpg`);

  // Render the logo once at full size, then pad equally on all sides.
  const logo = await sharp(svgBuffer, { density: Math.max(72, Math.ceil(72 * scale)) })
    .resize({ width: outW, height: outH, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const extend = { top: PADDING, bottom: PADDING, left: PADDING, right: PADDING };
  const finalW = outW + PADDING * 2;
  const finalH = outH + PADDING * 2;

  // PNG: transparent padding
  await sharp(logo)
    .extend({ ...extend, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(pngPath);

  // JPG: padding in the matching flat background, then flatten
  await sharp(logo)
    .extend({ ...extend, background: { ...flatBg, alpha: 1 } })
    .flatten({ background: flatBg })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(jpgPath);

  console.log(`  ${baseName} → PNG (${finalW}×${finalH}, transparent +${PADDING}px), JPG (${finalW}×${finalH}, ${isWhiteOnDark ? 'navy' : 'white'} bg +${PADDING}px)`);
}

console.log(`Generating logo rasters into ${ASSETS_DIR}…`);
for (const file of SOURCES) {
  await generate(file);
}
console.log(`\n✓ Generated ${SOURCES.length * 2} files (${SOURCES.length} PNG + ${SOURCES.length} JPG).`);
