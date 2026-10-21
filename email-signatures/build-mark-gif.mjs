/**
 * Build the animated circle-W mark for the email signature.
 *
 * Mirrors the site footer: the lettered ring makes a slow half turn around the
 * still W and settles in the normal logo position. The GIF is written with no
 * loop extension, so mail clients play it a single time. Outlook for Windows
 * only shows frame one, where the ring is still turned DEGREES from rest.
 *
 * Run from the repo root:
 *   node email-signatures/build-mark-gif.mjs [framesDir]
 *
 * Needs sharp (repo dependency) and ffmpeg on PATH.
 */
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';

const COLOR = '#1B365D';   // --navy
const BG = '#FFFFFF';
const SIZE = 176;          // 2x of the 88px display size
const DEGREES = 180;       // half turn, ending at rest
const SECONDS = 4.5;
const FPS = 25;            // GIF delays are whole 1/100 s, so 25fps = an even 4 per frame
const SUPERSAMPLE = 2;     // render large, downscale, for steadier letter edges
const START_HOLD = 0.5;    // seconds the starting pose sits still before the turn
const OUT = path.resolve('public/assets/email/woodland-mark-spin.gif');
const STILL = path.resolve('public/assets/email/woodland-mark.png');

const framesDir = process.argv[2] || path.join(os.tmpdir(), 'woodland-mark-frames');

const inner = (svg) =>
  svg.replace(/^[\s\S]*?<g id="Layer_1-2">/, '').replace(/<\/g>\s*<\/svg>\s*$/, '');

const ring = inner(await readFile('public/assets/circle-ring-white.svg', 'utf8'));
const w = inner(await readFile('public/assets/circle-w-white.svg', 'utf8'));

// Both source SVGs share viewBox 0 0 88.25 89.49; the site rotates the ring
// about the center of that box, so we do the same.
const cx = 88.25 / 2;
const cy = 89.49 / 2;
const side = 94;
const vb = `${cx - side / 2} ${cy - side / 2} ${side} ${side}`;

const frame = (deg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${SIZE * SUPERSAMPLE}" height="${SIZE * SUPERSAMPLE}">
  <style>.cls-1{fill:${COLOR};}</style>
  <rect x="${cx - side / 2}" y="${cy - side / 2}" width="${side}" height="${side}" fill="${BG}"/>
  <g transform="rotate(${deg.toFixed(3)} ${cx} ${cy})">${ring}</g>
  ${w}
</svg>`;

const ease = (t) => -(Math.cos(Math.PI * t) - 1) / 2; // ease-in-out sine

await rm(framesDir, { recursive: true, force: true });
await mkdir(framesDir, { recursive: true });
await mkdir(path.dirname(OUT), { recursive: true });

const count = Math.round(SECONDS * FPS);
for (let i = 0; i <= count; i++) {
  const deg = -DEGREES + DEGREES * ease(i / count);
  await sharp(Buffer.from(frame(deg)))
    .resize(SIZE, SIZE, { kernel: 'lanczos3' })
    .flatten({ background: BG })
    .png()
    .toFile(path.join(framesDir, `f${String(i).padStart(3, '0')}.png`));
}

await sharp(Buffer.from(frame(0))).resize(SIZE, SIZE, { kernel: 'lanczos3' }).flatten({ background: BG }).png().toFile(STILL);

execFileSync('ffmpeg', [
  '-y', '-loglevel', 'error',
  '-framerate', String(FPS),
  '-i', path.join(framesDir, 'f%03d.png'),
  '-vf', 'split[a][b];[a]palettegen=max_colors=8:reserve_transparent=0[p];[b][p]paletteuse=dither=none:diff_mode=rectangle',
  '-loop', '-1',
  OUT,
]);

// Hold the first frame: its delay lives in the first Graphic Control
// Extension (21 F9 04, flags, delay lo, delay hi), in 1/100 s.
const gif = await readFile(OUT);
const gce = gif.indexOf(Buffer.from([0x21, 0xf9, 0x04]));
const delay = Math.round(100 / FPS + START_HOLD * 100);
gif.writeUInt16LE(delay, gce + 4);
await writeFile(OUT, gif);

console.log(`wrote ${OUT} (${count + 1} frames) and ${STILL}`);
