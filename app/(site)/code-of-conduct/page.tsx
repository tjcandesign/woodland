import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Code of Conduct — Woodland Estate & Title',
  description: 'Transparency and accessibility are the values that guide every file we touch — because process matters and trust is earned through consistency.',
};

export default function CodeOfConductPage() {
  return (
    <main>
      <section className="hero hero-compact">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div className="hero-tag">Code of Conduct</div>
          <h1>Code of Conduct</h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">Process matters. Transparency throughout the settlement process leads to significant savings for the buyer on title insurance premiums.</p>
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
            <div className="value-block">
              <div className="value-label">Value 01</div>
              <h3>Transparency</h3>
              <p>We value transparency and actively seek out the seller&apos;s title insurance policy allowing us to offer significantly discounted insurance rates otherwise unavailable. We believe our knowledge of the title insurance industry is a benefit to you and put that into action by offering the best rate possible.</p>
            </div>

            <div className="value-block">
              <div className="value-label">Value 02</div>
              <h3>Accessibility</h3>
              <p>We value your time and energy and respond quickly with complete, straight-forward answers so you can make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready to close with confidence?</h2>
        <p>Whether you&apos;re a buyer, seller, lender, or agent, expect a quick response and straightforward answers.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href="https://woodlandtitledc.paymints.io/create-account" target="_blank" rel="noopener">Send Earnest Money</a>
          <Link className="btn btn-secondary" href="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
