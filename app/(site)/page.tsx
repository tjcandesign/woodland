import type { Metadata } from 'next';
import Link from 'next/link';
import Parallax from '@/components/Parallax';
import ProcessArrows from '@/components/ProcessArrows';

export const metadata: Metadata = {
  title: 'Woodland Estate & Title — Attorney-Led Property Settlements in DC, Maryland & Virginia',
  description: 'Personable, transparent, attorney-led property settlements in Washington DC, Virginia and Maryland. A clearing house for buyers, sellers, lenders, and their agents, with particular care for complicated files.',
};

export default function HomePage() {
  return (
    <>
      <Parallax />
      <ProcessArrows />

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <h1>Personable, transparent,<br />attorney-led property settlements.</h1>
          <p className="hero-sub">Serving Washington, DC, Virginia, and Maryland. A clearing house for buyers, sellers, lenders, and their agents, with particular care for complicated files.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://woodlandtitledc.paymints.io/create-account" target="_blank" rel="noopener">Send Earnest Money</a>
            <a className="btn btn-secondary" href="mailto:woodlandteam@woodlandtitle.com">Order Services</a>
          </div>
        </div>
      </section>

      <section className="section section-alt section-feature">
        <div className="section-inner">
          <div className="split">
            <div className="split-main">
              <h2>Informed, comfortable, and confident.</h2>
              <p>We operate with the understanding that our best work is invisible. Transactions that close without drama, titles that clear without delay. We handle the details with care, treat people with respect, and let the quality of the work speak for itself.</p>
            </div>
            <aside className="split-aside">
              <div className="aim-card">
                <p className="pull-quote">Our aim is the highest quality results for property transactions, assuring that clients are informed, comfortable throughout the process, and confident when closing on their purchase.</p>
              </div>
            </aside>
          </div>

          <div className="process-mini">
            <article className="process-mini-card" data-step="1">
              <div className="process-mini-meta">
                <span className="process-mini-label">First Step</span>
              </div>
              <h3>Title Search</h3>
              <p>We review the title history and resolve any defects so ownership is clear before you sign.</p>
            </article>
            <div className="process-mini-arrow" data-arrow="1" aria-hidden="true">
              <svg viewBox="0 0 56 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 10 H50" />
                <path d="M42 3 L50 10 L42 17" />
              </svg>
            </div>
            <article className="process-mini-card" data-step="2">
              <div className="process-mini-meta">
                <span className="process-mini-label">Second Step</span>
              </div>
              <h3>Title Insurance</h3>
              <p>Underwritten coverage protects you and your lender against claims after closing.</p>
            </article>
            <div className="process-mini-arrow" data-arrow="2" aria-hidden="true">
              <svg viewBox="0 0 56 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 10 H50" />
                <path d="M42 3 L50 10 L42 17" />
              </svg>
            </div>
            <article className="process-mini-card" data-step="3">
              <div className="process-mini-meta">
                <span className="process-mini-label">Third Step</span>
              </div>
              <h3>Escrow</h3>
              <p>We hold funds in trust and disburse them precisely when every condition is met.</p>
            </article>
          </div>
          <div className="process-mini-cta">
            <Link className="btn btn-outline btn-dark btn-rounded" href="/closing-process">Discover our full process</Link>
          </div>
        </div>
      </section>

      <section className="section section-image">
        <div className="section-image-bg"></div>
        <div className="section-image-overlay"></div>
        <div className="section-inner narrow">
          <div className="section-tag">What We Do</div>
          <h2>At Woodland, our services are built around the transaction.</h2>
          <p>Full-service settlements for buyers, sellers, lenders, and the professionals who represent them: residential, commercial, and agricultural, across DC, Maryland, and Virginia.</p>
          <div style={{ marginTop: '36px' }}>
            <Link className="btn btn-outline" href="/services">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-inner narrow">
          <h2>Backed by industry leaders.</h2>
          <p>We underwrite for two of the leading title insurance guarantors: <strong>Fidelity National Title Insurance Company</strong> and <strong>Stewart Title Guaranty Company</strong>. Our clients are covered by underwriters with the depth and stability the work demands.</p>
          <div className="underwriter-seals underwriter-seals-row">
            <img src="/assets/Fidelity National Title Insurance Company.png" alt="Fidelity National Title Insurance Company" />
            <span className="seal-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12.5 11 15.5 16.5 9.5"></polyline></svg>
            </span>
            <img src="/assets/stewart-seal.jpg" alt="Stewart Title Guaranty Company" />
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
    </>
  );
}
