/* global React, Btn, ArrowRight, SectionTag */
const { useEffect, useRef, useState } = React;

function FeatureSplit() {
  return (
    <section className="section section-alt feature">
      <div className="section-inner">
        <div className="split">
          <div>
            <h2>Informed, comfortable, and confident.</h2>
            <p>We operate with the understanding that our best work is invisible. Transactions that close without drama, titles that clear without delay. We handle the details with care, treat people with respect, and let the quality of the work speak for itself.</p>
          </div>
          <aside>
            <div className="aim-card">
              <p className="pull-quote">Our aim is the highest quality results for property transactions, assuring that clients are informed, comfortable throughout the process, and confident when closing on their purchase.</p>
            </div>
          </aside>
        </div>
        <ProcessMini />
        <div style={{ marginTop: 48 }}>
          <Btn variant="outline" rounded dark>Discover our full process</Btn>
        </div>
      </div>
    </section>
  );
}

function ProcessMini() {
  const [activeArrows, setActiveArrows] = useState([false, false]);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const cards = ref.current?.querySelectorAll('.process-mini-card') || [];
      const vh = window.innerHeight;
      const trigger = vh * 0.72;
      const next = [false, false];
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (i > 0 && rect.top < trigger) next[i - 1] = true;
      });
      setActiveArrows(next);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const steps = [
    { label: 'First Step', title: 'Title Search', body: 'We review the title history and resolve any defects so ownership is clear before you sign.' },
    { label: 'Second Step', title: 'Title Insurance', body: 'Underwritten coverage protects you and your lender against claims after closing.' },
    { label: 'Third Step', title: 'Escrow', body: 'We hold funds in trust and disburse them precisely when every condition is met.' },
  ];

  return (
    <div className="process-mini" ref={ref}>
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <article className="process-mini-card">
            <span className="process-mini-label">{s.label}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
          {i < steps.length - 1 && (
            <div className={`process-mini-arrow${activeArrows[i] ? ' is-active' : ''}`}>
              <ArrowRight />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function ImageSection() {
  return (
    <section className="section-image">
      <div className="section-image-bg"></div>
      <div className="section-image-overlay"></div>
      <div className="section-inner narrow" style={{ position: 'relative', zIndex: 2 }}>
        <SectionTag>What We Do</SectionTag>
        <h2>At Woodland, our services are built around the transaction.</h2>
        <p>Full-service settlements for buyers, sellers, lenders, and the professionals who represent them: residential, commercial, and agricultural, across DC, Maryland, and Virginia.</p>
        <div style={{ marginTop: 36 }}>
          <Btn variant="outline">View All Services</Btn>
        </div>
      </div>
    </section>
  );
}

function UnderwritersBand() {
  return (
    <section className="section" style={{ background: '#FFFFFF' }}>
      <div className="section-inner">
        <div className="split">
          <div>
            <h2>Backed by industry leaders.</h2>
            <p>We underwrite for two of the leading title insurance guarantors: <strong>Fidelity National Title Insurance Company</strong> and <strong>Stewart Title Guaranty Company</strong>. Our clients are covered by underwriters with the depth and stability the work demands.</p>
          </div>
          <aside style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <img src="../../assets/Fidelity National Title Insurance Company.png" alt="Fidelity" style={{ maxWidth: 200, opacity: 0.55, mixBlendMode: 'multiply' }} />
            <span style={{ color: '#5F6C4E', display: 'inline-flex' }}>
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12.5 11 15.5 16.5 9.5"></polyline>
              </svg>
            </span>
            <img src="../../assets/stewart-seal.jpg" alt="Stewart" style={{ maxWidth: 200, opacity: 0.55, mixBlendMode: 'multiply' }} />
          </aside>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="cta-band">
      <h2>Ready to close with confidence?</h2>
      <p>Whether you're a buyer, seller, lender, or agent, expect a quick response and straightforward answers.</p>
      <div className="cta-actions">
        <Btn variant="primary">Send Earnest Money</Btn>
        <Btn variant="secondary">Contact Us</Btn>
      </div>
    </section>
  );
}

function ServicesCard({ eyebrow, title, body, items }) {
  return (
    <section className="section section-alt">
      <div className="section-inner">
        <SectionTag>{eyebrow}</SectionTag>
        <h2>{title}</h2>
        <p>{body}</p>
        <div style={{ marginTop: 32, borderTop: '1px solid #DED3C0', paddingTop: 32 }}>
          <h4 style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: 26, color: '#5F6C4E', fontWeight: 400, letterSpacing: '-0.7px', marginBottom: 12 }}>What We Provide</h4>
          <ul className="check-list">
            {items.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ClosingSteps() {
  const steps = [
    { n: '01', t: 'Title Search', s: 'Ensuring Your Property Rights', p: 'We order and rigorously review the title history, and resolve any defects prior to closing, so you can enjoy your property free of any encumbrances.' },
    { n: '02', t: 'Title Insurance', s: 'Guaranteeing Future Property Claims', p: 'Title insurance protects both you and your lender against any obstacles to clear and confident ownership.' },
    { n: '03', t: 'Escrow', s: 'Holding The Settlement Funds in Trust', p: 'Once you have entered a contract for the purchase of your new home, you will be required to produce earnest money.' },
  ];
  return (
    <section className="section">
      <div className="section-inner">
        <SectionTag>The Three Phases</SectionTag>
        <h2>From search to settlement.</h2>
        {steps.map((s) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <div className="step-body">
              <h3>{s.t}</h3>
              <div className="step-subhead">{s.s}</div>
              <p>{s.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <section className="section section-alt">
      <div className="section-inner">
        <SectionTag>How To Reach Us</SectionTag>
        <h2>Quick, straightforward, always personable.</h2>
        <p className="lede">However you prefer to connect, we'll meet you there, and we won't leave you waiting.</p>
        <p>Call, email, or stop by our Capitol Hill office. Our team answers questions directly, returns messages quickly, and keeps every party to the transaction in the loop.</p>
        <div className="contact-info">
          <div className="contact-block"><div className="label">Address</div><p className="value">659 C Street, SE<br/>Washington, DC 20003</p></div>
          <div className="contact-block"><div className="label">Phone</div><p className="value"><a>(202) 516-6855</a></p></div>
          <div className="contact-block"><div className="label">Fax</div><p className="value">(202) 888-1179</p></div>
          <div className="contact-block"><div className="label">Email</div><p className="value"><a>woodlandteam@woodlandtitleDC.com</a></p></div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionTag>Our Values</SectionTag>
        <h2>Two principles, practiced daily.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, marginTop: 16 }}>
          {[
            { l: 'Value 01', t: 'Transparency', p: 'We value transparency and actively seek out the seller\'s title insurance policy allowing us to offer significantly discounted insurance rates otherwise unavailable.' },
            { l: 'Value 02', t: 'Accessibility', p: 'We value your time and energy and respond quickly with complete, straight-forward answers so you can make informed decisions.' },
          ].map((v, i) => (
            <div key={i} style={{ paddingTop: 44, borderTop: '1px solid #DED3C0', borderBottom: '1px solid #DED3C0', paddingBottom: 44 }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: '#8A6508', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 18, height: 1, background: '#8A6508' }}></span>
                {v.l}
              </div>
              <h3 style={{ fontSize: 36, marginBottom: 20 }}>{v.t}</h3>
              <p>{v.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FeatureSplit, ImageSection, UnderwritersBand, CtaBand, ServicesCard, ClosingSteps, ContactDetails, ValuesSection });
