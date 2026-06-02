import type { Metadata } from 'next';
import Link from 'next/link';
import { getClosingSteps, getPage, getSiteSettings } from '@/lib/sanity/content';
import PortableBody from '@/components/PortableBody';

const HERO_FALLBACK = {
  title: 'The Closing Process',
  metaDescription:
    'Three deliberate phases — title search, title insurance, and escrow — that protect your property rights, your investment, and your peace of mind.',
  hero: {
    tag: 'The Closing Process',
    heading: 'The Closing Process',
    sub: 'Three deliberate phases that protect your property rights, your investment, and your peace of mind.',
    compact: true,
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('closing-process', HERO_FALLBACK);
  return {
    title: `${page.title} — Woodland Estate & Title`,
    description: page.metaDescription,
  };
}

export default async function ClosingProcessPage() {
  const [steps, page, settings] = await Promise.all([
    getClosingSteps(),
    getPage('closing-process', HERO_FALLBACK),
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
          <div className="section-tag">How Closings Work</div>
          <h2>A measured path to clear ownership.</h2>
          <p className="lede">Every settlement we handle moves through three deliberate phases, each designed to protect a different part of your purchase.</p>
          <hr className="divider" />
          <p>We begin by establishing that the title is clear. We protect that clear title against future claims. And we hold the funds in trust until every condition is met. Each phase exists for a reason, and each is carried out with the same measured competence.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-tag">The Three Phases</div>
          <h2>From search to settlement.</h2>

          {steps.map((step, i) => (
            <div className="step" key={step._id}>
              <div className="step-num">{String(step.order ?? i + 1).padStart(2, '0')}</div>
              <div className="step-body">
                <h3>{step.title}</h3>
                {step.subhead && <div className="step-subhead">{step.subhead}</div>}
                <PortableBody value={step.body} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-inner narrow">
          <div className="section-tag">Why It Matters</div>
          <h2>Process is the product.</h2>
          <p className="pull-quote">Process matters. Transparency throughout the settlement process leads to significant savings for the buyer on title insurance premiums.</p>
          <p>Every phase exists for a reason. Done well, the process itself is what delivers a clear title, a protected investment, and a closing without surprises.</p>
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
