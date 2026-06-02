import type { Metadata } from 'next';
import Link from 'next/link';
import { getServices, getPage, getSiteSettings } from '@/lib/sanity/content';
import PortableBody from '@/components/PortableBody';

const HERO_FALLBACK = {
  title: 'Our Services',
  metaDescription:
    'Full-service property settlements for buyers, sellers, lenders, and agents in Washington DC, Maryland, and Virginia — backed by Fidelity National and Stewart Title.',
  hero: {
    tag: 'Services',
    heading: 'Our Services',
    sub: 'Full-service settlements for every party in the transaction: buyers, sellers, and lenders.',
    compact: true,
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('services', HERO_FALLBACK);
  return {
    title: `${page.title} — Woodland Estate & Title`,
    description: page.metaDescription,
  };
}

export default async function ServicesPage() {
  const [services, page, settings] = await Promise.all([
    getServices(),
    getPage('services', HERO_FALLBACK),
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

      {services.map((svc, i) => (
        <section key={svc._id} className={i % 2 === 0 ? 'section section-alt' : 'section'}>
          <div className="section-inner">
            {svc.tag && <div className="section-tag">{svc.tag}</div>}
            <h2>{svc.title}</h2>
            <PortableBody value={svc.description} />
          </div>
        </section>
      ))}

      <section className="section section-dark">
        <div className="section-inner narrow">
          <div className="section-tag">Underwriters</div>
          <h2>Backed by industry leaders.</h2>
          <p className="pull-quote">We underwrite for two of the leading title insurance guarantors: Fidelity National Title Insurance Company and Stewart Title Guaranty Company.</p>
          <p>Our clients are covered by underwriters with the depth and stability the work demands: <strong>Fidelity National Title Insurance Company</strong> and <strong>Stewart Title Guaranty Company</strong>, two names long trusted across residential, commercial, and agricultural transactions.</p>
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
