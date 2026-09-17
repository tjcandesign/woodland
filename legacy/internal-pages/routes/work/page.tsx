import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCalculator from '@/components/ProjectCalculator';

export const metadata: Metadata = {
  title: 'Project Progress — Woodland Estate & Title',
  description: 'A single-page overview of every deliverable produced for Woodland Estate & Title — what\'s done, what\'s in flight, and what comes next.',
  robots: 'noindex',
};

export default function WorkPage() {
  return (
    <main>
      <section className="section work-intro">
        <div className="section-inner narrow">
          <div className="section-tag">Project Progress</div>
          <h1 className="work-title">The places the brand meets the world.</h1>
          <p className="lede">Every deliverable produced across the three phases of the engagement, in one page. Each item is tagged by format so you know what to expect when you open it.</p>
          <ul className="phase-pillbar">
            <li><a href="#phase-1"><span className="phase-pill is-done"><span className="status-dot" aria-hidden="true"></span>Phase 1 · Complete</span></a></li>
            <li><a href="#phase-2"><span className="phase-pill is-progress"><span className="status-dot" aria-hidden="true"></span>Phase 2 · Substantially complete</span></a></li>
            <li><a href="#phase-3"><span className="phase-pill is-progress"><span className="status-dot" aria-hidden="true"></span>Phase 3 · In progress</span></a></li>
            <li><a href="#records"><span className="phase-pill is-pending"><span className="status-dot" aria-hidden="true"></span>Records &amp; invoices</span></a></li>
          </ul>
        </div>
      </section>

      {/* PHASE 1 */}
      <section className="section section-alt" id="phase-1">
        <div className="section-inner">
          <div className="work-phase-head">
            <div className="section-tag">Phase 1 · Complete</div>
            <h2>Brand Foundation &amp; Documentation</h2>
            <p className="work-phase-sub">Discovery and the language that anchors the brand. Weeks 1–3.</p>
          </div>

          <article className="work-card work-card-with-preview work-card-static brand-card-solo">
            <div className="site-preview" aria-hidden="true">
              <div className="site-preview-chrome">
                <span className="site-preview-dot"></span>
                <span className="site-preview-dot"></span>
                <span className="site-preview-dot"></span>
                <span className="site-preview-url">woodlandtitledc.com/brand</span>
              </div>
              <div className="site-preview-viewport">
                <iframe src="/brand.html" loading="lazy" tabIndex={-1} aria-hidden="true" title="Preview of the Brand Language Document page"></iframe>
              </div>
            </div>
            <div className="work-card-with-preview-body">
              <div className="work-card-eyebrow kind-website">Website page</div>
              <h3>Brand Language Document</h3>
              <p>Voice, tone, and messaging on a single page — the source of truth for how the brand reads, speaks, and shows up. The type system, logo and mark library, and style guidance all live here.</p>
              <div className="work-card-cta">
                <a className="btn btn-outline btn-dark btn-rounded" href="/brand.html">View page</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PHASE 2 */}
      <section className="section" id="phase-2">
        <div className="section-inner">
          <div className="work-phase-head">
            <div className="section-tag">Phase 2 · Substantially complete</div>
            <h2>Touchpoint System</h2>
          </div>

          <div className="work-grid">
            <article className="work-card work-card-static">
              <div className="work-card-eyebrow kind-print">Print</div>
              <h3>Business Cards &amp; Stationery</h3>
              <p>Refined cards, letterhead, and envelope set in the brand system.</p>
              <div className="work-card-cta">
                <span className="btn btn-outline btn-rounded btn-disabled" aria-disabled="true">Link coming soon</span>
              </div>
            </article>
            <article className="work-card work-card-static">
              <div className="work-card-eyebrow kind-internal">Digital asset</div>
              <h3>Email Signatures</h3>
              <p>Consistent email sign-offs across the team.</p>
              <div className="work-card-cta">
                <span className="btn btn-outline btn-rounded btn-disabled" aria-disabled="true">Link coming soon</span>
              </div>
            </article>
            <article className="work-card work-card-static">
              <div className="work-card-eyebrow kind-internal">Plan</div>
              <h3>Video Execution Plan</h3>
              <p>A repeatable shot list and treatment for short-form video.</p>
              <div className="work-card-cta">
                <span className="btn btn-outline btn-rounded btn-disabled" aria-disabled="true">Link coming soon</span>
              </div>
            </article>
          </div>

          <aside className="sidebar-note sidebar-note-wide">
            <div className="sidebar-note-grid">
              <div className="sidebar-note-text">
                <div className="sidebar-note-eyebrow">Note</div>
                <h3>Third Thursday Connections</h3>
                <p>Third Thursdays started in scope as a branded kit — printed materials, swag, the usual. In practice the people who showed up didn&apos;t want any of that, and the time spent producing it didn&apos;t return value. The investment moved instead to honest, personal contact: a quick personalized text to each attendee in the days before, follow-up the day after, hosting that feels like the host actually showed up.</p>
                <p>It stays in the program because the touchpoint matters; it isn&apos;t a deliverable because the content of the touchpoint is the relationship, not a product.</p>
              </div>
              <figure className="connections-figure" aria-label="Third Thursday brings agents, lenders, and past clients into the same room around the Woodland team.">
                <svg className="connections-venn" viewBox="0 0 460 360" role="img" aria-hidden="true">
                  <circle className="venn-c" cx="230" cy="135" r="100" fill="none" stroke="#3C342B" strokeWidth="1.5"/>
                  <circle className="venn-c" cx="170" cy="225" r="100" fill="none" stroke="#3C342B" strokeWidth="1.5"/>
                  <circle className="venn-c" cx="290" cy="225" r="100" fill="none" stroke="#3C342B" strokeWidth="1.5"/>
                  <text className="venn-label" x="230" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#3C342B">Agents</text>
                  <text className="venn-label" x="130" y="275" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#3C342B">Brokers</text>
                  <text className="venn-label" x="330" y="275" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#3C342B">Lenders</text>
                </svg>
              </figure>
            </div>
          </aside>

          {/* Office install plan */}
          <div className="work-subsection" id="office">
            <div className="work-subsection-head">
              <div className="section-tag">Outstanding · Office install</div>
              <h2 className="work-subsection-title">Office Experience Design.</h2>
              <p className="work-subsection-sub">Four pieces, all wall-mounted at the Capitol Hill office. The logo wall feature anchors the entry sightline; the hallway acrylic pair sits opposite, and the Top 40 recognition piece installs alongside as the install for the Top 40 program.</p>
            </div>

            <div className="install-list">
              <article className="install-row">
                <div className="install-row-media">
                  <img src="/assets/install-samples/logo-wall.jpg" alt="Reference: white-printed logo on a clear acrylic panel mounted to a textured wall." loading="lazy" />
                </div>
                <div className="install-row-body">
                  <div className="install-eyebrow">Item 1</div>
                  <h3>Logo wall feature</h3>
                  <p>Dimensional cutout of the Woodland Estate &amp; Title mark, mounted on the northeast wall by the window. Cut from finished material with concealed standoffs so the mark reads as a sculpted form rather than a sign.</p>
                  <ul className="install-meta">
                    <li><strong>Location.</strong> NE wall, beside the window.</li>
                    <li><strong>Material.</strong> TBD (brass, blackened steel, or stained wood — quote pending vendor).</li>
                    <li><strong>Mount.</strong> Concealed standoffs, ~3/4&quot; off wall.</li>
                  </ul>
                </div>
              </article>

              <article className="install-row">
                <div className="install-row-media">
                  <img src="/assets/install-samples/hallway-pair.webp" alt="Reference: collection of edge-polished acrylic standoff prints arranged across a hallway wall." loading="lazy" />
                </div>
                <div className="install-row-body">
                  <div className="install-eyebrow">Items 2 &amp; 3</div>
                  <h3>Hallway acrylic prints (×2)</h3>
                  <p>Edge-polished 1/4&quot; acrylic panels with a printed graphic on the second surface, hung with stainless standoffs so the panel floats off the wall.</p>
                  <ul className="install-meta">
                    <li><strong>Size.</strong> 24 × 36 in (default — adjust in calculator).</li>
                    <li><strong>Material.</strong> 1/4&quot; cast acrylic, second-surface print, edge polished.</li>
                    <li><strong>Hardware.</strong> 1&quot; stainless standoffs, ~3/4&quot; offset from wall.</li>
                    <li><strong>Quantity.</strong> Two panels, matching size.</li>
                  </ul>
                </div>
              </article>

              <article className="install-row">
                <div className="install-row-media">
                  <img src="/assets/install-samples/acrylic-standoff-sample.jpg" alt="Acrylic standoff reference: clear acrylic panel with chrome standoffs at four corners." loading="lazy" />
                </div>
                <div className="install-row-body">
                  <div className="install-eyebrow">Item 4</div>
                  <h3>Top 40 recognition piece</h3>
                  <p>Acrylic standoff print of the Top 40 page recognition alongside the Washingtonian cover, side by side.</p>
                  <ul className="install-meta">
                    <li><strong>Size.</strong> 15 × 20 in.</li>
                    <li><strong>Content.</strong> Top 40 page + Washingtonian cover, side by side, single panel.</li>
                    <li><strong>Material.</strong> 1/4&quot; cast acrylic, second-surface print, edge polished.</li>
                    <li><strong>Hardware.</strong> Chrome standoffs at the four corners.</li>
                  </ul>
                </div>
              </article>
            </div>

            <div className="install-tools">
              <ProjectCalculator />

              <figure className="install-diagram">
                <figcaption className="install-diagram-cap">Side elevation — acrylic panel with standoffs</figcaption>
                <svg viewBox="0 0 480 260" role="img" aria-label="Side elevation diagram of acrylic panel mounted with standoffs">
                  <defs>
                    <pattern id="wallhatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="8" stroke="#C2B8A1" strokeWidth="1"></line>
                    </pattern>
                  </defs>
                  <rect x="40" y="20" width="40" height="220" fill="url(#wallhatch)" stroke="#3C342B" strokeWidth="1.5"/>
                  <text x="60" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#5A5146">Wall</text>
                  <rect x="80" y="80" width="48" height="14" fill="#9E9788" stroke="#3C342B" strokeWidth="1"/>
                  <rect x="80" y="166" width="48" height="14" fill="#9E9788" stroke="#3C342B" strokeWidth="1"/>
                  <text x="104" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#5A5146">Standoff</text>
                  <rect x="128" y="40" width="16" height="180" fill="#E9F2F4" stroke="#3C342B" strokeWidth="1.5"/>
                  <text x="136" y="32" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#3C342B">1/4&quot; Acrylic</text>
                  <line x1="143" y1="42" x2="143" y2="218" stroke="#5F6C4E" strokeWidth="2"/>
                  <line x1="80" y1="240" x2="128" y2="240" stroke="#3C342B" strokeWidth="0.75"/>
                  <line x1="80" y1="236" x2="80" y2="244" stroke="#3C342B" strokeWidth="0.75"/>
                  <line x1="128" y1="236" x2="128" y2="244" stroke="#3C342B" strokeWidth="0.75"/>
                  <text x="104" y="255" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#3C342B">~3/4&quot; offset</text>
                  <line x1="148" y1="130" x2="320" y2="130" stroke="#3C342B" strokeWidth="0.75"/>
                  <circle cx="148" cy="130" r="2.5" fill="#3C342B"/>
                  <text x="328" y="118" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#3C342B">Panel size</text>
                  <text x="328" y="136" fontFamily="Inter, sans-serif" fontSize="13" fill="#3C342B"><tspan id="calc-diagram-w">24</tspan> × <tspan id="calc-diagram-h">36</tspan> in</text>
                  <text x="328" y="154" fontFamily="Inter, sans-serif" fontSize="11" fill="#5A5146"><tspan id="calc-diagram-sqin">864</tspan> sq in · <tspan id="calc-diagram-each">$388.80</tspan> ea</text>
                </svg>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 3 */}
      <section className="section section-alt" id="phase-3">
        <div className="section-inner">
          <div className="work-phase-head">
            <div className="section-tag">Phase 3 · In progress</div>
            <h2>Digital Presence &amp; Strategy</h2>
            <p className="work-phase-sub">Where the brand lives online.</p>
          </div>

          <div className="work-grid work-grid-pair work-grid-pair-23">
            <a className="work-card work-card-large work-card-with-preview" href="/">
              <div className="site-preview" aria-hidden="true">
                <div className="site-preview-chrome">
                  <span className="site-preview-dot"></span>
                  <span className="site-preview-dot"></span>
                  <span className="site-preview-dot"></span>
                  <span className="site-preview-url">woodlandtitledc.com</span>
                </div>
                <div className="site-preview-viewport">
                  <iframe src="/" loading="lazy" tabIndex={-1} aria-hidden="true" title="Preview of woodlandtitledc.com"></iframe>
                </div>
              </div>
              <div className="work-card-with-preview-body">
                <div className="work-card-eyebrow kind-website">Website</div>
                <h3>Website Refresh</h3>
                <p>The new Woodland site — refreshed structure, new visual system, and a clearer story for buyers, sellers, lenders, and their agents. Open for review.</p>
                <span className="work-card-link">Open the site <span aria-hidden="true">&rarr;</span></span>
              </div>
            </a>
            <a className="work-card work-card-large" href="https://bainbridge-law.vercel.app/" target="_blank" rel="noopener">
              <div className="work-card-eyebrow kind-website">Website preview</div>
              <h3>Bainbridge Law Page</h3>
              <p>A smaller sister site introducing the Bainbridge Law side of the practice. Complete and on the brand.</p>
              <span className="work-card-link">Open preview <span aria-hidden="true">&rarr;</span></span>
            </a>
          </div>

          <div className="work-subsection">
            <div className="work-subsection-head">
              <div className="section-tag">Online Optimization</div>
              <h3 className="work-subsection-title">Where the brand earns trust on every other surface.</h3>
              <p className="work-subsection-sub">Applying the brand beyond the site itself: search, listings, reviews, and a repeating comms cadence that compounds over time.</p>
            </div>

            <div className="work-grid">
              <article className="work-card">
                <div className="work-card-eyebrow kind-website">Strategy guide</div>
                <h3>Google Business Profile Strategy</h3>
                <p>Where Woodland already wins (rating, review count) and where small moves unlock outsized value — profile depth, photos, posts, Q&amp;A, and review velocity.</p>
                <div className="work-card-cta">
                  <a className="btn btn-outline btn-dark btn-rounded" href="/listing-refresh.html" target="_blank" rel="noopener">Open guide</a>
                </div>
              </article>
              <article className="work-card">
                <div className="work-card-eyebrow kind-website">Strategy guide</div>
                <h3>Yelp &amp; Directory Listings</h3>
                <p>Yelp profile cleanup and the bonus directories worth claiming for local SEO and trust signals.</p>
                <div className="work-card-cta">
                  <a className="btn btn-outline btn-dark btn-rounded" href="/listing-refresh.html#yelp" target="_blank" rel="noopener">Open section</a>
                </div>
              </article>
              <article className="work-card">
                <div className="work-card-eyebrow kind-website">Rollout</div>
                <h3>Listing Refresh Rollout</h3>
                <p>Phased timeline for executing the listing refresh — what ships first, what compounds over time.</p>
                <div className="work-card-cta">
                  <a className="btn btn-outline btn-dark btn-rounded" href="/listing-refresh.html#timeline" target="_blank" rel="noopener">Open timeline</a>
                </div>
              </article>
              <article className="work-card comms-feature">
                <div className="comms-feature-head">
                  <div>
                    <div className="work-card-eyebrow kind-website">Strategy guide</div>
                    <h3>Quarterly Communications Plan</h3>
                    <p>A 3-month content cycle that repeats four times a year — three beats per quarter.</p>
                  </div>
                  <div className="work-card-cta comms-feature-cta">
                    <Link className="btn btn-outline btn-dark btn-rounded" href="/comms-plan">Open the plan</Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* RECORDS */}
      <section className="section" id="records">
        <div className="section-inner">
          <div className="work-phase-head">
            <div className="section-tag">Records</div>
            <h2>Invoicing &amp; documents.</h2>
            <p className="work-phase-sub">Where things stand and what has been billed.</p>
          </div>

          <div className="work-grid">
            <article className="work-card">
              <div className="work-card-eyebrow kind-website">Website page</div>
              <h3>Project Proposal</h3>
              <p>The original proposal that established the three phases of the engagement — scope, deliverables, and pricing.</p>
              <div className="work-card-cta">
                <a className="btn btn-outline btn-dark btn-rounded" href="https://woodlandtitleproposal.netlify.app/" target="_blank" rel="noopener">Open proposal</a>
              </div>
            </article>
            <article className="work-card">
              <div className="work-card-eyebrow kind-pdf">PDF · Origin doc</div>
              <h3>Original Strategy Draft</h3>
              <p>The original brand strategy draft, prepared before the work was developed into the Brand Language Document on the site. Kept for reference.</p>
              <div className="work-card-cta">
                <a className="btn btn-outline btn-dark btn-rounded" href="/assets/deliverables/woodland-brand-language.pdf" target="_blank" rel="noopener">Download PDF</a>
              </div>
            </article>
            <article className="work-card invoice-row-start">
              <div className="work-card-eyebrow kind-pdf">PDF · Invoice</div>
              <h3>Phase 1 — Brand Foundation</h3>
              <p>February 2026.</p>
              <div className="work-card-cta">
                <a className="btn btn-outline btn-dark btn-rounded" href="/assets/deliverables/woodland-invoice-phase1.pdf" target="_blank" rel="noopener">Download PDF</a>
              </div>
            </article>
            <article className="work-card">
              <div className="work-card-eyebrow kind-pdf">PDF · Invoice</div>
              <h3>Phase 2 — Touchpoint System</h3>
              <p>March 2026.</p>
              <div className="work-card-cta">
                <a className="btn btn-outline btn-dark btn-rounded" href="/assets/deliverables/woodland-invoice-phase2.pdf" target="_blank" rel="noopener">Download PDF</a>
              </div>
            </article>
            <article className="work-card">
              <div className="work-card-eyebrow kind-pdf">PDF · Invoice</div>
              <h3>Phase 3 — Digital Presence</h3>
              <p>April 2026.</p>
              <div className="work-card-cta">
                <a className="btn btn-outline btn-dark btn-rounded" href="/assets/deliverables/woodland-invoice-phase3.pdf" target="_blank" rel="noopener">Download PDF</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
