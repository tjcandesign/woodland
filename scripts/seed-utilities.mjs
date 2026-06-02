/**
 * Seed Sanity `utilityListing` documents from lib/sanity/utilities-data.ts.
 * Idempotent (deterministic _ids + createOrReplace). Requires SANITY_WRITE_TOKEN.
 *
 *   node scripts/seed-utilities.mjs
 */
import { createClient } from '@sanity/client';
import { readFileSync } from 'node:fs';

try {
  const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
  for (const line of env.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
} catch { /* optional */ }

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;
if (!projectId || !token) {
  console.error('✗ Need NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN (in .env.local).');
  process.exit(1);
}

// Load the TS data module by stripping types with a tiny transform via dynamic import of a JS shim.
// Simplest robust path: import the .ts through a JSON-ish re-export. Since Node can't import .ts,
// we re-declare the import via the compiled structure: read & eval the exported array.
const dataSrc = readFileSync(new URL('../lib/sanity/utilities-data.ts', import.meta.url), 'utf8');
const match = dataSrc.match(/export const UTILITIES[^=]*=\s*(\[[\s\S]*?\n\];)/);
if (!match) { console.error('✗ Could not parse UTILITIES from utilities-data.ts'); process.exit(1); }
// eslint-disable-next-line no-eval
const UTILITIES = eval(match[1].replace(/\];$/, ']'));

const client = createClient({ projectId, dataset, apiVersion: '2025-01-01', token, useCdn: false });

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const docs = [];
for (const region of UTILITIES) {
  region.counties.forEach((c) => {
    c.providers.forEach((p, i) => {
      docs.push({
        _id: `utility.${region.region}.${slug(c.county)}.${slug(p.provider)}.${i}`,
        _type: 'utilityListing',
        provider: p.provider,
        region: region.region,
        county: c.county,
        linkLabel: p.linkLabel,
        url: p.url,
        phone: p.phone,
        phoneTel: p.phoneTel,
        email: p.email,
        order: i,
      });
    });
  });
}

(async () => {
  console.log(`Seeding ${docs.length} utility listings into ${projectId}/${dataset}…`);
  // chunk to keep transactions reasonable
  for (let i = 0; i < docs.length; i += 50) {
    let tx = client.transaction();
    for (const d of docs.slice(i, i + 50)) tx = tx.createOrReplace(d);
    await tx.commit();
  }
  console.log(`✓ Seeded ${docs.length} utility listings.`);
})().catch((e) => { console.error('✗ Utilities seed failed:', e.message); process.exit(1); });
