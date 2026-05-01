import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Woodland Estate & Title',
  description: 'Full-service property settlements for buyers, sellers, lenders, and agents in Washington DC, Maryland, and Virginia — backed by Fidelity National and Stewart Title.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="hero hero-compact">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div className="hero-tag">Services</div>
          <h1>Our Services</h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">Full-service settlements for every party in the transaction: buyers, sellers, and lenders.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-tag">For Buyers &amp; Sellers</div>
          <h2>Clarity from contract to keys.</h2>
          <p>Buying or selling property is one of the most consequential transactions most people undertake. We handle the details with care so you can focus on what comes next: a clear title, protection against future claims, straightforward answers about costs, and secure access to every document along the way.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-tag">For Professionals</div>
          <h2>A reliable closing partner.</h2>
          <p>Lenders, agents, and their teams rely on us for proactive communication and a steady hand on the file, from the first call to the final disbursement. Full-service settlements, insurance quotes, seller&apos;s net calculations, and proactive, seamless closings — delivered with the same measured competence on every file.</p>
        </div>
      </section>

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
          <a className="btn btn-primary" href="https://woodlandtitledc.paymints.io/create-account" target="_blank" rel="noopener">Send Earnest Money</a>
          <Link className="btn btn-secondary" href="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
