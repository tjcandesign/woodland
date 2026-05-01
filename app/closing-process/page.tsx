import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Closing Process — Woodland Estate & Title',
  description: 'Three deliberate phases — title search, title insurance, and escrow — that protect your property rights, your investment, and your peace of mind.',
};

export default function ClosingProcessPage() {
  return (
    <main>
      <section className="hero hero-compact">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div className="hero-tag">The Closing Process</div>
          <h1>The Closing Process</h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">Three deliberate phases that protect your property rights, your investment, and your peace of mind.</p>
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

          <div className="step">
            <div className="step-num">01</div>
            <div className="step-body">
              <h3>Title Search</h3>
              <div className="step-subhead">Ensuring Your Property Rights</div>
              <p>We order and rigorously review the title history, and resolve any defects prior to closing, so you can enjoy your property free of any encumbrances.</p>
              <p>We arrange property surveys to clarify exact boundaries and confirm no other party holds claims to the property.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">02</div>
            <div className="step-body">
              <h3>Title Insurance</h3>
              <div className="step-subhead">Guaranteeing Future Property Claims</div>
              <p>Title insurance protects both you and your lender against any obstacles to clear and confident ownership.</p>
              <p>Lenders require a one-time policy; homeowners may purchase additional coverage against future claims.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">03</div>
            <div className="step-body">
              <h3>Escrow</h3>
              <div className="step-subhead">Holding The Settlement Funds in Trust &amp; Disbursement</div>
              <p>Once a contract is signed, the buyer produces earnest money, which we hold in trust through closing.</p>
              <p>At settlement, we disburse those funds according to the contract: paying off existing liens, settling taxes and utilities, covering recording fees, and delivering the proceeds to the seller. Your lender produces a Closing Disclosure with the final figures at least three days before settlement, and we walk you through every line so nothing arrives as a surprise at the table.</p>
            </div>
          </div>
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
          <a className="btn btn-primary" href="https://woodlandtitledc.paymints.io/create-account" target="_blank" rel="noopener">Send Earnest Money</a>
          <Link className="btn btn-secondary" href="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
