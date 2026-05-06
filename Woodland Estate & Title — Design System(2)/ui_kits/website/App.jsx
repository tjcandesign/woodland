/* global React, ReactDOM, Header, Hero, Footer, FeatureSplit, ImageSection, UnderwritersBand, CtaBand, ServicesCard, ClosingSteps, ContactDetails, ValuesSection, Btn */
const { useState, useEffect } = React;

function App() {
  const [page, setPage] = useState(() => localStorage.getItem('wl-page') || 'home');

  useEffect(() => {
    localStorage.setItem('wl-page', page);
    window.scrollTo(0, 0);
  }, [page]);

  const nav = (p) => setPage(p);

  return (
    <>
      <Header active={page} onNav={nav} />
      {page === 'home' && (
        <>
          <Hero
            title="Personable, transparent,<br/>attorney-led property settlements."
            sub="Serving Washington, DC, Virginia, and Maryland, Woodland is a clearing house for buyers, sellers, lenders, and their agents, specializing in complex problem-solving."
            actions={<>
              <Btn variant="primary">Send Earnest Money</Btn>
              <Btn variant="secondary">Order Services</Btn>
            </>}
          />
          <FeatureSplit />
          <ImageSection />
          <UnderwritersBand />
          <CtaBand />
        </>
      )}
      {page === 'services' && (
        <>
          <Hero compact tag="Services" title="Our Services" sub="Full-service settlements for every party in the transaction: buyer, seller, lender, or agent." />
          <ServicesCard eyebrow="For Buyers & Sellers" title="Clarity from contract to keys." body="Buying or selling a home is one of the most consequential transactions most people undertake. We handle the details with care so you can focus on what comes next." items={['Assurance of a clear title','Title protection','Secure access to documents','Clarity about the process','Quotes on costs']} />
          <CtaBand />
        </>
      )}
      {page === 'process' && (
        <>
          <Hero compact tag="The Closing Process" title="The Closing Process" sub="Three deliberate phases that protect your property rights, your investment, and your peace of mind." />
          <ClosingSteps />
          <CtaBand />
        </>
      )}
      {page === 'conduct' && (
        <>
          <Hero compact tag="Code of Conduct" title="Code of Conduct" sub="Process matters. Transparency throughout the settlement process leads to significant savings for the buyer on title insurance premiums." />
          <ValuesSection />
          <CtaBand />
        </>
      )}
      {page === 'contact' && (
        <>
          <Hero compact tag="Get In Touch" title="Contact Us" sub="We pride ourselves on excellent, timely and friendly service. Whether you are the buyer, seller, lender or agent, expect a quick response." />
          <ContactDetails />
          <CtaBand />
        </>
      )}
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
