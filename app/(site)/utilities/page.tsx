import type { Metadata } from 'next';
import Link from 'next/link';
import { getUtilities, getPage, getSiteSettings } from '@/lib/sanity/content';
import type { UtilityProvider } from '@/lib/sanity/utilities-data';

const HERO_FALLBACK = {
  title: 'Utility Links',
  metaDescription:
    'Phone numbers and website links for water, gas, and electric utilities across Washington, DC, Maryland, and Virginia — a convenience reference for Woodland Estate & Title clients preparing to close.',
  hero: {
    tag: 'For Your Convenience',
    heading: 'Utility Links',
    sub: "For your convenience, phone numbers and website links for all area utilities listed here. We handle the water service associated with your move, but you'll need to contact your utility companies prior to closing in order to schedule service.",
    compact: true,
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('utilities', HERO_FALLBACK);
  return {
    title: `${page.title} — Woodland Estate & Title`,
    description: page.metaDescription,
  };
}

function ProviderDetail({ p }: { p: UtilityProvider }) {
  if (p.url) return <span><a href={p.url} target="_blank" rel="noopener">{p.linkLabel || 'Service Information'}</a></span>;
  if (p.phone || p.email) {
    return (
      <span>
        {p.phone && <a href={`tel:${p.phoneTel || p.phone}`}>{p.phone}</a>}
        {p.phone && p.email && ' / '}
        {p.email && <a href={`mailto:${p.email}`}>{p.email}</a>}
      </span>
    );
  }
  if (p.linkLabel) return <span>{p.linkLabel}</span>;
  return null;
}

export default async function UtilitiesPage() {
  const [regions, page, settings] = await Promise.all([
    getUtilities(),
    getPage('utilities', HERO_FALLBACK),
    getSiteSettings(),
  ]);
  const hero = page.hero || HERO_FALLBACK.hero;

  return (
    <main>
      <section className="hero hero-compact">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          {hero.tag && <div className="hero-tag">{hero.tag}</div>}
          <h1>{hero.heading}</h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">{hero.sub}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          {regions.map((region) => (
            <div className="utility-region" key={region.region}>
              <h3>{region.label}</h3>
              <div className={region.counties.length > 1 ? 'utility-grid' : undefined}>
                {region.counties.map((c) => (
                  <div className="utility-county" key={c.county}>
                    <h4>{c.county}</h4>
                    <ul>
                      {c.providers.map((p, i) => (
                        <li key={p.provider + i}>
                          <strong>{p.provider}</strong> <ProviderDetail p={p} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>Have questions about utilities at your new address?</h2>
        <p>We handle the water service tied to your closing. For everything else, we&apos;re happy to point you in the right direction. Reach out any time.</p>
        <div className="cta-actions">
          <Link className="btn btn-primary" href="/contact">Contact Us</Link>
          <a className="btn btn-secondary" href={`mailto:${settings.orderEmail}`}>Email the Team</a>
        </div>
      </section>
    </main>
  );
}
