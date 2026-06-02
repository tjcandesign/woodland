import type { Metadata } from 'next';
import Link from 'next/link';
import { getValues, getPage, getSiteSettings } from '@/lib/sanity/content';
import PortableBody from '@/components/PortableBody';

const HERO_FALLBACK = {
  title: 'Code of Conduct',
  metaDescription:
    'Transparency and accessibility are the values that guide every file we touch — because process matters and trust is earned through consistency.',
  hero: {
    tag: 'Code of Conduct',
    heading: 'Code of Conduct',
    sub: 'Process matters. Transparency throughout the settlement process leads to significant savings for the buyer on title insurance premiums.',
    compact: true,
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('code-of-conduct', HERO_FALLBACK);
  return {
    title: `${page.title} — Woodland Estate & Title`,
    description: page.metaDescription,
  };
}

export default async function CodeOfConductPage() {
  const [values, page, settings] = await Promise.all([
    getValues(),
    getPage('code-of-conduct', HERO_FALLBACK),
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
        <div className="section-inner narrow">
          <div className="section-tag">Our Tagline</div>
          <h2>How we choose to work.</h2>
          <p className="pull-quote">Process matters. Transparency throughout the settlement process leads to significant savings for the buyer on title insurance premiums.</p>
          <p>This is not a slogan. It is the standard we hold ourselves to on every file, and the reason clients return to us, and refer their colleagues and families.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-tag">Our Values</div>
          <h2>Two principles, practiced daily.</h2>

          <div className="values-grid">
            {values.map((v) => (
              <div className="value-block" key={v._id}>
                {v.label && <div className="value-label">{v.label}</div>}
                <h3>{v.title}</h3>
                <PortableBody value={v.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready to close with confidence?</h2>
        <p>Whether you&apos;re a buyer, seller, lender, or agent, expect a quick response and straightforward answers.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href={settings.earnestMoneyUrl} target="_blank" rel="noopener">Send Earnest Money</a>
          <Link className="btn btn-secondary" href="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
