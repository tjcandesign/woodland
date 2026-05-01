import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quarterly Communications Plan — Woodland Estate & Title',
  description: 'A 3-month communications cycle that repeats four times a year — predictable beats for outreach, social, search, and personal touches.',
  robots: 'noindex',
};

export default function CommsPlanPage() {
  return (
    <main>
      <section className="section work-intro">
        <div className="section-inner narrow">
          <div className="section-tag">Quarterly Communications Plan</div>
          <h1 className="work-title">One quarter, three beats.</h1>
          <p className="lede">A 3-month cycle that repeats four times a year. Three beats — partner check-ins, an educational piece, a video close. Predictable enough to run without a meeting; specific enough to feel personal every time. Third Thursday is its own thing on its own monthly cadence; it isn&apos;t part of this cycle.</p>
          <p className="work-meta"><Link href="/work">&larr; Back to project progress</Link></p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="work-phase-head">
            <div className="section-tag">The Three Beats</div>
            <h2>What lands in each quarter.</h2>
            <p className="work-phase-sub">Every quarter, the same three beats hit in the same order — one per month. Numbering is the order they ship, not their importance.</p>
          </div>

          <ol className="beats-list" aria-label="Three quarterly beats">
            <li className="beat">
              <div className="beat-num">01</div>
              <div className="beat-body">
                <div className="beat-when">Month 1</div>
                <h3>Partner check-ins.</h3>
                <p>Personalized texts to the top 10–15 referral relationships. Not a blast — one human reading a name, sending a sentence. Asks for nothing. Mentions one specific thing about that person&apos;s recent work. This is the relational engine; it earns the rest of the year.</p>
                <ul className="beat-channels">
                  <li>Text / SMS</li>
                  <li>Hand-written when warranted</li>
                </ul>
              </div>
            </li>
            <li className="beat">
              <div className="beat-num">02</div>
              <div className="beat-body">
                <div className="beat-when">Month 2</div>
                <h3>Educational post.</h3>
                <p>One useful piece of writing, distributed three ways: a Google Business Profile post, a short LinkedIn note, and a page on the site for search to index. Topic is something an agent or buyer just asked the team. Plain answer, on the record, ranked. One per quarter; four per year.</p>
                <ul className="beat-channels">
                  <li>Google Business Profile</li>
                  <li>LinkedIn</li>
                  <li>Website / search</li>
                </ul>
              </div>
            </li>
            <li className="beat">
              <div className="beat-num">03</div>
              <div className="beat-body">
                <div className="beat-when">Month 3</div>
                <h3>Quarter-close video update.</h3>
                <p>A short, on-camera update to the full list — clients past and present, referral partners, agents. Two minutes, no script, signed off by name. Recap the quarter, name what the team is paying attention to next, thank the people who closed with you. Doubles as the lead-in to the next quarter so a separate opener isn&apos;t needed.</p>
                <ul className="beat-channels">
                  <li>Email + embedded video</li>
                  <li>LinkedIn / GBP cross-post</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
