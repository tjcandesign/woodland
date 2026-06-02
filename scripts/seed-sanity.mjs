/**
 * Seed the Sanity `production` dataset with the site's current content.
 *
 * Idempotent: every document has a fixed _id and uses createOrReplace, so you
 * can re-run it any time to reset content to this baseline.
 *
 * Requires a write token. Add to .env.local (gitignored):
 *   SANITY_WRITE_TOKEN=<editor token from sanity.io/manage → API → Tokens>
 *
 * Run:
 *   node scripts/seed-sanity.mjs
 */
import { createClient } from '@sanity/client';
import { readFileSync } from 'node:fs';

// --- load .env.local without a dependency -------------------------------
try {
  const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
  for (const line of env.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
} catch { /* .env.local optional if vars already in env */ }

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) { console.error('✗ Missing NEXT_PUBLIC_SANITY_PROJECT_ID'); process.exit(1); }
if (!token) {
  console.error('✗ Missing SANITY_WRITE_TOKEN. Add an editor token to .env.local:');
  console.error('    SANITY_WRITE_TOKEN=sk...');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2025-01-01', token, useCdn: false });

// --- Portable Text helpers ---------------------------------------------
let _k = 0;
const key = () => `k${(_k++).toString(36)}`;
// One block per paragraph. `marks` supported via [text, marks?] tuples.
function block(spans) {
  const children = (Array.isArray(spans) ? spans : [spans]).map((s) =>
    typeof s === 'string'
      ? { _type: 'span', _key: key(), text: s, marks: [] }
      : { _type: 'span', _key: key(), text: s[0], marks: s[1] || [] }
  );
  return { _type: 'block', _key: key(), style: 'normal', markDefs: [], children };
}
const body = (...paras) => paras.map((p) => block(p));

// =======================================================================
// SINGLETONS
// =======================================================================
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  title: 'Woodland Estate & Title',
  description:
    'Personable, transparent, attorney-led property settlements in Washington DC, Virginia and Maryland. A clearing house for buyers, sellers, lenders, and their agents, with particular care for complicated files.',
  copyright: '©2018 by Woodland Estate & Title',
  tagline: 'Attorney-led property settlements, steady and thorough. The way closings ought to feel.',
  earnestMoneyUrl: 'https://woodlandtitledc.paymints.io/create-account',
  orderEmail: 'woodlandteam@woodlandtitle.com',
  underwriters: 'Fidelity National Title Insurance Company · Stewart Title Guaranty Company',
  projectProposalUrl: 'https://woodlandtitleproposal.netlify.app/',
};

const contactInfo = {
  _id: 'contactInfo',
  _type: 'contactInfo',
  addressLine1: '659 C Street, SE',
  addressLine2: 'Washington, DC 20003',
  mapUrl: 'https://maps.google.com/?q=659+C+Street+SE+Washington+DC+20003',
  mapEmbedUrl: 'https://www.google.com/maps?q=659+C+Street+SE+Washington+DC+20003&output=embed',
  phone: '(202) 516-6855',
  phoneTel: '2025166855',
  fax: '(202) 888-1179',
  email: 'woodlandteam@woodlandtitle.com',
  hours: 'By appointment',
};

const navigation = {
  _id: 'navigation',
  _type: 'navigation',
  header: [
    { _key: key(), label: 'Services', href: '/services', external: false, cta: false },
    { _key: key(), label: 'Closing Process', href: '/closing-process', external: false, cta: false },
    { _key: key(), label: 'Code of Conduct', href: '/code-of-conduct', external: false, cta: false },
    { _key: key(), label: 'Contact', href: '/contact', external: false, cta: false },
    { _key: key(), label: 'Send Earnest Money', href: 'https://woodlandtitledc.paymints.io/create-account', external: true, cta: true },
  ],
  footerExplore: [
    { _key: key(), label: 'Services', href: '/services', external: false, cta: false },
    { _key: key(), label: 'Closing Process', href: '/closing-process', external: false, cta: false },
    { _key: key(), label: 'Code of Conduct', href: '/code-of-conduct', external: false, cta: false },
    { _key: key(), label: 'Contact', href: '/contact', external: false, cta: false },
  ],
  footerResources: [
    { _key: key(), label: 'Security', href: '/security', external: false, cta: false },
    { _key: key(), label: 'Utility Links', href: '/utilities', external: false, cta: false },
  ],
};

// =======================================================================
// COLLECTIONS
// =======================================================================
const services = [
  {
    _id: 'service.buyers-sellers',
    _type: 'service',
    title: 'Clarity from contract to keys.',
    tag: 'For Buyers & Sellers',
    audience: 'buyers-sellers',
    order: 1,
    description: body(
      'Buying or selling property is one of the most consequential transactions most people undertake. We handle the details with care so you can focus on what comes next: a clear title, protection against future claims, straightforward answers about costs, and secure access to every document along the way.'
    ),
  },
  {
    _id: 'service.professionals',
    _type: 'service',
    title: 'A reliable closing partner.',
    tag: 'For Professionals',
    audience: 'professionals',
    order: 2,
    description: body(
      "Lenders, agents, and their teams rely on us for proactive communication and a steady hand on the file, from the first call to the final disbursement. Full-service settlements, insurance quotes, seller's net calculations, and proactive, seamless closings — delivered with the same measured competence on every file."
    ),
  },
];

const closingSteps = [
  {
    _id: 'closingStep.title-search',
    _type: 'closingStep',
    title: 'Title Search',
    subhead: 'Ensuring Your Property Rights',
    order: 1,
    body: body(
      'We order and rigorously review the title history, and resolve any defects prior to closing, so you can enjoy your property free of any encumbrances.',
      'We arrange property surveys to clarify exact boundaries and confirm no other party holds claims to the property.'
    ),
  },
  {
    _id: 'closingStep.title-insurance',
    _type: 'closingStep',
    title: 'Title Insurance',
    subhead: 'Guaranteeing Future Property Claims',
    order: 2,
    body: body(
      'Title insurance protects both you and your lender against any obstacles to clear and confident ownership.',
      'Lenders require a one-time policy; homeowners may purchase additional coverage against future claims.'
    ),
  },
  {
    _id: 'closingStep.escrow',
    _type: 'closingStep',
    title: 'Escrow',
    subhead: 'Holding The Settlement Funds in Trust & Disbursement',
    order: 3,
    body: body(
      'Once a contract is signed, the buyer produces earnest money, which we hold in trust through closing.',
      'At settlement, we disburse those funds according to the contract: paying off existing liens, settling taxes and utilities, covering recording fees, and delivering the proceeds to the seller. Your lender produces a Closing Disclosure with the final figures at least three days before settlement, and we walk you through every line so nothing arrives as a surprise at the table.'
    ),
  },
];

const values = [
  {
    _id: 'value.transparency',
    _type: 'value',
    title: 'Transparency',
    label: 'Value 01',
    order: 1,
    description: body(
      'We value transparency and actively seek out the seller’s title insurance policy allowing us to offer significantly discounted insurance rates otherwise unavailable. We believe our knowledge of the title insurance industry is a benefit to you and put that into action by offering the best rate possible.'
    ),
  },
  {
    _id: 'value.accessibility',
    _type: 'value',
    title: 'Accessibility',
    label: 'Value 02',
    order: 2,
    description: body(
      'We value your time and energy and respond quickly with complete, straight-forward answers so you can make informed decisions.'
    ),
  },
];

// =======================================================================
// PAGE DOCS (hero + meta; bespoke structure stays in code)
// =======================================================================
const pages = [
  {
    _id: 'page.home', _type: 'page', title: 'Home',
    slug: { _type: 'slug', current: 'home' },
    metaDescription: siteSettings.description,
    hero: { tag: '', heading: 'Personable, transparent, attorney-led property settlements.', sub: 'Serving Washington, DC, Virginia, and Maryland. A clearing house for buyers, sellers, lenders, and their agents, with particular care for complicated files.', compact: false },
  },
  {
    _id: 'page.services', _type: 'page', title: 'Our Services',
    slug: { _type: 'slug', current: 'services' },
    metaDescription: 'Full-service property settlements for buyers, sellers, lenders, and agents in Washington DC, Maryland, and Virginia — backed by Fidelity National and Stewart Title.',
    hero: { tag: 'Services', heading: 'Our Services', sub: 'Full-service settlements for every party in the transaction: buyers, sellers, and lenders.', compact: true },
  },
  {
    _id: 'page.closing-process', _type: 'page', title: 'The Closing Process',
    slug: { _type: 'slug', current: 'closing-process' },
    metaDescription: 'Three deliberate phases — title search, title insurance, and escrow — that protect your property rights, your investment, and your peace of mind.',
    hero: { tag: 'The Closing Process', heading: 'The Closing Process', sub: 'Three deliberate phases that protect your property rights, your investment, and your peace of mind.', compact: true },
  },
  {
    _id: 'page.code-of-conduct', _type: 'page', title: 'Code of Conduct',
    slug: { _type: 'slug', current: 'code-of-conduct' },
    metaDescription: 'Transparency and accessibility are the values that guide every file we touch — because process matters and trust is earned through consistency.',
    hero: { tag: 'Code of Conduct', heading: 'Code of Conduct', sub: 'Process matters. Transparency throughout the settlement process leads to significant savings for the buyer on title insurance premiums.', compact: true },
  },
  {
    _id: 'page.contact', _type: 'page', title: 'Contact',
    slug: { _type: 'slug', current: 'contact' },
    metaDescription: 'Reach the Woodland Estate & Title team in Capitol Hill, Washington, DC. Quick, friendly responses for buyers, sellers, lenders, and agents across DC, Maryland, and Virginia.',
    hero: { tag: 'Get In Touch', heading: 'Contact Us', sub: 'We pride ourselves on excellent, timely and friendly service. Whether you are the buyer, seller, lender or agent, expect a quick response.', compact: true },
  },
  {
    _id: 'page.security', _type: 'page', title: 'Security & Privacy',
    slug: { _type: 'slug', current: 'security' },
    metaDescription: 'How Woodland Estate & Title protects client data and funds — encrypted cloud-based settlement software, ALTA best practices, and CertifID wire fraud prevention.',
    hero: { tag: 'Security & Privacy', heading: 'Security & Privacy', sub: 'we take your data and privacy seriously', compact: true },
  },
  {
    _id: 'page.utilities', _type: 'page', title: 'Utility Links',
    slug: { _type: 'slug', current: 'utilities' },
    metaDescription: 'Phone numbers and website links for water, gas, and electric utilities across Washington, DC, Maryland, and Virginia — a convenience reference for Woodland Estate & Title clients preparing to close.',
    hero: { tag: 'For Your Convenience', heading: 'Utility Links', sub: "For your convenience, phone numbers and website links for all area utilities listed here. We handle the water service associated with your move, but you'll need to contact your utility companies prior to closing in order to schedule service.", compact: true },
  },
];

// =======================================================================
// RUN
// =======================================================================
const docs = [siteSettings, contactInfo, navigation, ...services, ...closingSteps, ...values, ...pages];

(async () => {
  console.log(`Seeding ${docs.length} documents into ${projectId}/${dataset}…`);
  let tx = client.transaction();
  for (const doc of docs) tx = tx.createOrReplace(doc);
  await tx.commit();
  console.log(`✓ Seeded ${docs.length} documents.`);
  console.log('  Singletons: siteSettings, contactInfo, navigation');
  console.log(`  Services: ${services.length} · Closing steps: ${closingSteps.length} · Values: ${values.length} · Pages: ${pages.length}`);
  console.log('\nNote: utility listings are seeded separately (large dataset) — run scripts/seed-utilities.mjs next.');
})().catch((e) => { console.error('✗ Seed failed:', e.message); process.exit(1); });
