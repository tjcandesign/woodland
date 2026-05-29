import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Utility Links — Woodland Estate & Title',
  description: 'Phone numbers and website links for water, gas, and electric utilities across Washington, DC, Maryland, and Virginia — a convenience reference for Woodland Estate & Title clients preparing to close.',
};

export default function UtilitiesPage() {
  return (
    <main>
      <section className="hero hero-compact">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div className="hero-tag">For Your Convenience</div>
          <h1>Utility Links</h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">For your convenience, phone numbers and website links for all area utilities listed here. We handle the water service associated with your move, but you&apos;ll need to contact your utility companies prior to closing in order to schedule service.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">

          {/* District of Columbia */}
          <div className="utility-region">
            <h3>District of Columbia</h3>
            <div className="utility-county">
              <h4>District of Columbia Utilities</h4>
              <ul>
                <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                <li><strong>PEPCO</strong> <span><a href="#">Start, Stop, Move</a></span></li>
                <li><strong>DC Water</strong> <span><a href="#">Contact Information</a></span></li>
              </ul>
            </div>
          </div>

          {/* Maryland */}
          <div className="utility-region">
            <h3>Maryland</h3>
            <div className="utility-grid">
              <div className="utility-county">
                <h4>Anne Arundel County</h4>
                <ul>
                  <li><strong>BGE</strong> <span><a href="#">Start, Stop, Move</a></span></li>
                  <li><strong>A.A. County Water &amp; Sewer</strong> <span><a href="tel:4102221144">(410) 222-1144</a> / <a href="mailto:custserv@aacounty.org">custserv@aacounty.org</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Baltimore County &amp; City</h4>
                <ul>
                  <li><strong>BGE</strong> <span><a href="#">Start, Stop, Move</a></span></li>
                  <li><strong>Bureau of Water</strong> <span><a href="#">webpage link</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Calvert County</h4>
                <ul>
                  <li><strong>BGE</strong> <span><a href="#">Start, Stop, Move</a></span></li>
                  <li><strong>SMECO</strong> <span><a href="#">Sign Up For Residential Service</a></span></li>
                  <li><strong>Water &amp; Sewer</strong> <span><a href="tel:4105351600">(410) 535-1600</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Carroll County</h4>
                <ul>
                  <li><strong>Water</strong> <span><a href="#">Service-Request</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Charles County</h4>
                <ul>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                  <li><strong>SMECO</strong> <span><a href="#">Sign Up For Residential Service</a></span></li>
                  <li><strong>Water &amp; Sewer</strong> <span><a href="#">Water and Sewer Billing</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Frederick County</h4>
                <ul>
                  <li><strong>Frederick Gas</strong> <span>Washington Gas, Frederick Division</span></li>
                  <li><strong>Water Dept.</strong> <span><a href="#">Water and Sewer Utilities</a></span></li>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Frederick City</h4>
                <ul>
                  <li><strong>Water Dept.</strong> <span><a href="#">Water &amp; Sewer</a></span></li>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Howard County</h4>
                <ul>
                  <li><strong>BGE</strong> <span><a href="#">Start, Stop, Move</a></span></li>
                  <li><strong>Utilities</strong> <span><a href="tel:4103134900">(410) 313-4900</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Montgomery County</h4>
                <ul>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                  <li><strong>PEPCO</strong> <span><a href="#">Start, Stop, Move</a></span></li>
                  <li><strong>WSSC</strong> <span><a href="#">Start Service / Stop Service</a></span></li>
                  <li><strong>Rockville Water</strong> <span><a href="tel:2403148420">(240) 314-8420</a> / <a href="mailto:utilitybilling@rockvillemd.gov">utilitybilling@rockvillemd.gov</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Prince Georges County</h4>
                <ul>
                  <li><strong>BGE</strong> <span><a href="#">Start, Stop, Move</a></span></li>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                  <li><strong>PEPCO</strong> <span><a href="#">Start, Stop, Move</a></span></li>
                  <li><strong>WSSC</strong> <span><a href="#">Start Service / Stop Service</a></span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Virginia */}
          <div className="utility-region">
            <h3>Virginia</h3>
            <div className="utility-grid">
              <div className="utility-county">
                <h4>Alexandria City</h4>
                <ul>
                  <li><strong>American Water</strong> <span><a href="#">Turn Service On/Off</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Arlington County</h4>
                <ul>
                  <li><strong>Arlington Water &amp; Utilities</strong> <span><a href="#">Start or Stop Service</a></span></li>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Chesapeake</h4>
                <ul>
                  <li><strong>City of Chesapeake Water</strong> <span><a href="#">Connect to Water and Sewer Service</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Culpeper County</h4>
                <ul>
                  <li><strong>Culpeper Water Dept</strong> <span><a href="tel:5408258591">(540) 825-8591</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Fairfax County</h4>
                <ul>
                  <li><strong>Fairfax Water</strong> <span><a href="#">Customer Service</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Fairfax City</h4>
                <ul>
                  <li><strong>Fairfax City</strong> <span><a href="#">Utility Payments &amp; Information</a></span></li>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Falls Church City</h4>
                <ul>
                  <li><strong>Fairfax Water</strong> <span><a href="#">Start Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Fauquier County</h4>
                <ul>
                  <li><strong>Fauquier Water and Sanitation Authority</strong> <span><a href="#">Customer Service</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>City of Fredericksburg</h4>
                <ul>
                  <li><strong>FXBG Utilities</strong> <span><a href="#">Utility Billing Office</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>City of Hampton</h4>
                <ul>
                  <li><strong>Water Customer Service</strong> <span><a href="tel:8707982753">(870) 798-2753</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Loudoun County</h4>
                <ul>
                  <li><strong>Loudoun Water</strong> <span><a href="#">Start Service</a></span></li>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Manassas City</h4>
                <ul>
                  <li><strong>Manassas Utilities</strong> <span><a href="#">Welcome page</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Newport News</h4>
                <ul>
                  <li><strong>Newport News Waterworks</strong> <span><a href="#">Customer Service</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>Prince William County</h4>
                <ul>
                  <li><strong>PWC Service Authority</strong> <span><a href="#">Billpay login</a></span></li>
                  <li><strong>Washington Gas</strong> <span><a href="#">Start and Stop Service</a></span></li>
                </ul>
              </div>
              <div className="utility-county">
                <h4>City of Richmond</h4>
                <ul>
                  <li><strong>RVA Public Utilities</strong> <span><a href="#">Water Utility</a></span></li>
                  <li><strong>Dominion Energy</strong> <span><a href="#">Start/Stop Service</a></span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="cta-band">
        <h2>Have questions about utilities at your new address?</h2>
        <p>We handle the water service tied to your closing. For everything else, we&apos;re happy to point you in the right direction. Reach out any time.</p>
        <div className="cta-actions">
          <Link className="btn btn-primary" href="/contact">Contact Us</Link>
          <a className="btn btn-secondary" href="mailto:woodlandteam@woodlandtitle.com">Email the Team</a>
        </div>
      </section>
    </main>
  );
}
