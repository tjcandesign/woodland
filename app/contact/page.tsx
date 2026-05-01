import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Woodland Estate & Title',
  description: 'Reach the Woodland Estate & Title team in Capitol Hill, Washington, DC. Quick, friendly responses for buyers, sellers, lenders, and agents across DC, Maryland, and Virginia.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero hero-compact">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div className="hero-tag">Get In Touch</div>
          <h1>Contact Us</h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">We pride ourselves on excellent, timely and friendly service. Whether you are the buyer, seller, lender or agent, expect a quick response.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-tag">How To Reach Us</div>
          <h2>Quick, straightforward, always personable.</h2>
          <p className="lede">However you prefer to connect, we&apos;ll meet you there, and we won&apos;t leave you waiting.</p>
          <p>Call or email anytime, and reach out ahead to schedule a visit to our Capitol Hill office. Our team answers questions directly, returns messages quickly, and keeps every party to the transaction in the loop.</p>

          <div className="contact-info">
            <div className="contact-block">
              <div className="label">Address</div>
              <p className="value">659 C Street, SE<br />Washington, DC 20003</p>
            </div>
            <div className="contact-block">
              <div className="label">Phone</div>
              <p className="value"><a href="tel:2025166855">(202) 516-6855</a></p>
            </div>
            <div className="contact-block">
              <div className="label">Fax</div>
              <p className="value">(202) 888-1179</p>
            </div>
            <div className="contact-block">
              <div className="label">Email</div>
              <p className="value"><a href="mailto:woodlandteam@woodlandtitleDC.com">woodlandteam@woodlandtitleDC.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-tag">Find Us</div>
          <h2>Capitol Hill Office</h2>
          <p>Tucked into the heart of Capitol Hill, a short walk from Eastern Market. Reach out ahead of time to schedule a closing, meeting, or appointment to stop by — we&apos;ll have everything ready when you arrive.</p>
          <hr className="divider" />
          <iframe
            src="https://www.google.com/maps?q=659+C+Street+SE+Washington+DC+20003&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, borderRadius: '8px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Woodland Estate &amp; Title — 659 C Street SE, Washington, DC"
          ></iframe>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-inner narrow">
          <div className="section-tag">Next Steps</div>
          <h2>Ready when you are.</h2>
          <p>Send earnest money through our secure portal, or email the team to order services. We&apos;ll take it from there.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://woodlandtitledc.paymints.io/create-account" target="_blank" rel="noopener">Send Earnest Money</a>
            <a className="btn btn-secondary" href="mailto:woodlandteam@woodlandtitleDC.com">Order Services</a>
          </div>
        </div>
      </section>
    </main>
  );
}
