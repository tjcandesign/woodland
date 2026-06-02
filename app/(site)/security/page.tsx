import type { Metadata } from 'next';
import Link from 'next/link';
import { getPage, getSiteSettings } from '@/lib/sanity/content';

const HERO_FALLBACK = {
  title: 'Security & Privacy',
  metaDescription:
    'How Woodland Estate & Title protects client data and funds — encrypted cloud-based settlement software, ALTA best practices, and CertifID wire fraud prevention.',
  hero: {
    tag: 'Security & Privacy',
    heading: 'Security & Privacy',
    sub: 'we take your data and privacy seriously',
    compact: true,
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('security', HERO_FALLBACK);
  return {
    title: `${page.title} — Woodland Estate & Title`,
    description: page.metaDescription,
  };
}

export default async function SecurityPage() {
  const [page, settings] = await Promise.all([
    getPage('security', HERO_FALLBACK),
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
          <div className="section-tag">Data Protection</div>
          <h2>Certified partners. Encrypted systems.</h2>
          <p className="lede">Our software partners operate with the highest data security certifications in the information technology field.</p>
          <p>We use the only cloud-based settlement software in the industry, allowing us to securely send and store your information through an encrypted portal for ease of use and peace of mind. In addition, we subscribe and strictly follow ALTA&apos;s best practices for information security in our daily operations.</p>
          <p className="pull-quote">Your information stays encrypted, accessible only to you and your settlement team.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner narrow">
          <div className="section-tag">Funds Protection</div>
          <h3>Wire Fraud Prevention</h3>
          <p>In order to protect your monies, we use the latest wire fraud prevention software, CertifID, which verifies your identity and wiring instructions. CertifID is a financial services wire fraud prevention industry leader and adds an additional layer of security and assurance to your wired transactions.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-tag">Safeguards</div>
          <h2>Three layers of protection.</h2>
          <p>Standards, technology, and verification, working together so every transaction stays safe from start to finish.</p>

          <div className="three-col-grid">
            <div className="card card-dark">
              <h4>ALTA Best Practices</h4>
              <p>Industry-standard information security in daily operations.</p>
            </div>
            <div className="card card-dark">
              <h4>Encrypted Portal</h4>
              <p>Securely send and store documents through an encrypted cloud-based settlement portal.</p>
            </div>
            <div className="card card-dark">
              <h4>CertifID Verified</h4>
              <p>Wire instructions verified with industry-leading fraud prevention technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Questions about security?</h2>
        <p>Before you wire funds or share sensitive documents, call us to verify instructions. We&apos;d rather you double-check than take a chance.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href="https://woodlandtitledc.paymints.io/create-account" target="_blank" rel="noopener">Send Earnest Money</a>
          <Link className="btn btn-secondary" href="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
