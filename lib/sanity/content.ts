import { client } from './client';
import {
  siteSettingsQuery,
  contactInfoQuery,
  navigationQuery,
  servicesQuery,
  closingStepsQuery,
  valuesQuery,
  pageBySlugQuery,
} from './queries';

/**
 * Content access layer.
 *
 * Each getter fetches from Sanity and falls back to the site's baseline copy
 * when the dataset is empty or unreachable. This means the site renders
 * identically whether or not Sanity has been seeded — and the moment an editor
 * publishes a change, it flows through on the next build. No page ever breaks
 * on an empty dataset.
 */

// Portable Text helpers so fallbacks share the renderer with Sanity content.
let _k = 0;
const pk = () => `f${(_k++).toString(36)}`;
export function ptParas(...paras: string[]) {
  return paras.map((text) => ({
    _type: 'block', _key: pk(), style: 'normal', markDefs: [],
    children: [{ _type: 'span', _key: pk(), text, marks: [] }],
  }));
}

async function safe<T>(promise: Promise<T>, fallback: T): Promise<T> {
  try {
    const v = await promise;
    if (v == null || (Array.isArray(v) && v.length === 0)) return fallback;
    return v;
  } catch {
    return fallback;
  }
}

// ---------------------------------------------------------------- singletons
export type SiteSettings = {
  title: string; description: string; copyright: string; tagline: string;
  earnestMoneyUrl: string; orderEmail: string; underwriters: string; projectProposalUrl?: string;
};
const SITE_SETTINGS_FALLBACK: SiteSettings = {
  title: 'Woodland Estate & Title',
  description:
    'Personable, transparent, attorney-led property settlements in Washington DC, Virginia and Maryland. A clearing house for buyers, sellers, lenders, and their agents, with particular care for complicated files.',
  copyright: '©2018 by Woodland Estate & Title',
  tagline: 'Attorney-led property settlements, steady and thorough. The way closings ought to feel.',
  earnestMoneyUrl: 'https://woodlandtitledc.paymints.io/create-account',
  orderEmail: 'woodlandteam@woodlandtitle.com',
  underwriters: 'Fidelity National Title Insurance Company · Stewart Title Guaranty Company',
};
export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await safe(client.fetch(siteSettingsQuery), null as SiteSettings | null);
  return { ...SITE_SETTINGS_FALLBACK, ...(data || {}) };
}

export type ContactInfo = {
  addressLine1: string; addressLine2: string; mapUrl: string; mapEmbedUrl: string;
  phone: string; phoneTel: string; fax: string; email: string; hours?: string;
};
const CONTACT_FALLBACK: ContactInfo = {
  addressLine1: '659 C Street, SE', addressLine2: 'Washington, DC 20003',
  mapUrl: 'https://maps.google.com/?q=659+C+Street+SE+Washington+DC+20003',
  mapEmbedUrl: 'https://www.google.com/maps?q=659+C+Street+SE+Washington+DC+20003&output=embed',
  phone: '(202) 516-6855', phoneTel: '2025166855', fax: '(202) 888-1179',
  email: 'woodlandteam@woodlandtitle.com', hours: 'By appointment',
};
export async function getContactInfo(): Promise<ContactInfo> {
  const data = await safe(client.fetch(contactInfoQuery), null as ContactInfo | null);
  return { ...CONTACT_FALLBACK, ...(data || {}) };
}

export type NavLink = { label: string; href: string; external?: boolean; cta?: boolean };
export type Navigation = { header: NavLink[]; footerExplore: NavLink[]; footerResources: NavLink[] };
const NAV_FALLBACK: Navigation = {
  header: [
    { label: 'Services', href: '/services' },
    { label: 'Closing Process', href: '/closing-process' },
    { label: 'Code of Conduct', href: '/code-of-conduct' },
    { label: 'Contact', href: '/contact' },
    { label: 'Send Earnest Money', href: 'https://woodlandtitledc.paymints.io/create-account', external: true, cta: true },
  ],
  footerExplore: [
    { label: 'Services', href: '/services' },
    { label: 'Closing Process', href: '/closing-process' },
    { label: 'Code of Conduct', href: '/code-of-conduct' },
    { label: 'Contact', href: '/contact' },
  ],
  footerResources: [
    { label: 'Security', href: '/security' },
    { label: 'Utility Links', href: '/utilities' },
  ],
};
export async function getNavigation(): Promise<Navigation> {
  const data = await safe(client.fetch(navigationQuery), null as Navigation | null);
  if (!data) return NAV_FALLBACK;
  return {
    header: data.header?.length ? data.header : NAV_FALLBACK.header,
    footerExplore: data.footerExplore?.length ? data.footerExplore : NAV_FALLBACK.footerExplore,
    footerResources: data.footerResources?.length ? data.footerResources : NAV_FALLBACK.footerResources,
  };
}

// ---------------------------------------------------------------- collections
export type PortableBlock = Record<string, unknown>;
export type Service = { _id: string; title: string; tag: string; audience: string; description: PortableBlock[]; order: number };
const SERVICES_FALLBACK: Service[] = [
  { _id: 'f-bs', title: 'Clarity from contract to keys.', tag: 'For Buyers & Sellers', audience: 'buyers-sellers', order: 1,
    description: ptParas('Buying or selling property is one of the most consequential transactions most people undertake. We handle the details with care so you can focus on what comes next: a clear title, protection against future claims, straightforward answers about costs, and secure access to every document along the way.') },
  { _id: 'f-pro', title: 'A reliable closing partner.', tag: 'For Professionals', audience: 'professionals', order: 2,
    description: ptParas("Lenders, agents, and their teams rely on us for proactive communication and a steady hand on the file, from the first call to the final disbursement. Full-service settlements, insurance quotes, seller's net calculations, and proactive, seamless closings — delivered with the same measured competence on every file.") },
];
export async function getServices(): Promise<Service[]> {
  return safe(client.fetch(servicesQuery), SERVICES_FALLBACK);
}

export type ClosingStep = { _id: string; title: string; subhead: string; body: PortableBlock[]; order: number };
const CLOSING_STEPS_FALLBACK: ClosingStep[] = [
  { _id: 'f-ts', title: 'Title Search', subhead: 'Ensuring Your Property Rights', order: 1,
    body: ptParas('We order and rigorously review the title history, and resolve any defects prior to closing, so you can enjoy your property free of any encumbrances.', 'We arrange property surveys to clarify exact boundaries and confirm no other party holds claims to the property.') },
  { _id: 'f-ti', title: 'Title Insurance', subhead: 'Guaranteeing Future Property Claims', order: 2,
    body: ptParas('Title insurance protects both you and your lender against any obstacles to clear and confident ownership.', 'Lenders require a one-time policy; homeowners may purchase additional coverage against future claims.') },
  { _id: 'f-es', title: 'Escrow', subhead: 'Holding The Settlement Funds in Trust & Disbursement', order: 3,
    body: ptParas('Once a contract is signed, the buyer produces earnest money, which we hold in trust through closing.', 'At settlement, we disburse those funds according to the contract: paying off existing liens, settling taxes and utilities, covering recording fees, and delivering the proceeds to the seller. Your lender produces a Closing Disclosure with the final figures at least three days before settlement, and we walk you through every line so nothing arrives as a surprise at the table.') },
];
export async function getClosingSteps(): Promise<ClosingStep[]> {
  return safe(client.fetch(closingStepsQuery), CLOSING_STEPS_FALLBACK);
}

export type Value = { _id: string; title: string; label: string; description: PortableBlock[]; order: number };
const VALUES_FALLBACK: Value[] = [
  { _id: 'f-tr', title: 'Transparency', label: 'Value 01', order: 1,
    description: ptParas('We value transparency and actively seek out the seller’s title insurance policy allowing us to offer significantly discounted insurance rates otherwise unavailable. We believe our knowledge of the title insurance industry is a benefit to you and put that into action by offering the best rate possible.') },
  { _id: 'f-ac', title: 'Accessibility', label: 'Value 02', order: 2,
    description: ptParas('We value your time and energy and respond quickly with complete, straight-forward answers so you can make informed decisions.') },
];
export async function getValues(): Promise<Value[]> {
  return safe(client.fetch(valuesQuery), VALUES_FALLBACK);
}

// ---------------------------------------------------------------- page heroes
export type Hero = { tag?: string; heading?: string; sub?: string; compact?: boolean };
export type PageDoc = { title?: string; metaDescription?: string; hero?: Hero };
export async function getPage(slug: string, fallback: PageDoc): Promise<PageDoc> {
  const data = await safe(client.fetch(pageBySlugQuery, { slug }), null as PageDoc | null);
  if (!data) return fallback;
  return { ...fallback, ...data, hero: { ...fallback.hero, ...(data.hero || {}) } };
}
