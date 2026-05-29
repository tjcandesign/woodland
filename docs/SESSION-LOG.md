# Session Log

Reverse-chronological log of work. Newest entry on top. For current project state and key facts,
see `CLAUDE.md` in the repo root.

---

## 2026-05-29 — Finalization + launch prep (Next.js site)

### Context
The project had been migrated from plain static HTML to a **Next.js 16 App Router** app (static export)
with Sanity scaffolded in. This session finalized the brand system, prepped for launch, and stood up
the correct Vercel project + domain plan.

### Brand guidelines pages (`/brand` = `public/brand.html`, `/brand-guidelines` = `public/brand-guidelines.html`)
- Tightened copy; reframed hero as a **living guidelines page** (not a dated deliverable):
  - Eyebrow: "Phase 1 — Brand Foundation" → **"Visual & Verbal Identity"**
  - Headline: "Woodland Brand Language" → **"Woodland Brand Guidelines"** (also `<title>`)
  - Subtitle: "Prepared for… Curt Zeager — March 2026" → evergreen descriptor
- Removed the **Project Proposal** link from the brand header.
- **Logo downloads:** added **PNG + JPG** buttons alongside SVG for all 6 logo variants (stacked dark/white, short dark/white, circle dark/white).
- Removed the **"09 — Design Direction / Design Notes"** section (and its side-nav link) from both pages.
- **Hero photo:** surfaced the historic **Eastern Market** photo (the one from the proposal page — turned out byte-identical to `public/assets/eastern-market.jpeg`, already the bg but crushed under a flat 75% black overlay). Replaced overlay with a navy gradient (light top, dark bottom) so the photo reads while keeping white text legible.
- Both pages kept in sync throughout.

### Logo rasters
- `scripts/generate-logo-rasters.mjs` generates PNG (transparent) + JPG (flat bg: white for dark logos, navy `#0F2240` for white logos) from each SVG.
- Iterated clear-space padding on request: 160px → 640px (4×) → 480px (3×) → **100px (final)**. Constant is `PADDING = 100` in the script.

### Public copy polish
- Home hero subhead de-consultanted ("specializing in complex problem-solving" → "with particular care for complicated files").
- Code-of-conduct closing line softened.
- Confirmed **no tree/forest metaphors** anywhere; footer circle-mark scroll-spin behavior intact.

### Email
- Footer + contact email switched `woodlandteam@woodlandtitleDC.com` → **`woodlandteam@woodlandtitle.com`** (display text + `mailto:`), in `app/(site)/page.tsx`, `contact/page.tsx`, `utilities/page.tsx`, `components/Footer.tsx`. **Left `woodlandtitledc.paymints.io` payment links untouched.**

### SEO / internal pages
- `noindex` on all internal pages: `/brand`, `/brand-guidelines`, `/work`, `/comms-plan`, `/listing-refresh`, `/project-status` — via server-component redirect stubs (with `robots: 'noindex'` metadata) + `<meta name="robots">` on the static HTML files.
- Added `app/robots.ts` + `app/sitemap.ts` (both `force-static`; sitemap lists public pages only). Pointed both at **`woodlandtitle.com`**.

### Launch infrastructure (the big untangle)
- Discovered **two GitHub repos**: `tjcandesign/woodland` (Next.js — all our work) vs `tjcandesign/woodlandsite` (old static HTML, was the live site). They share no commits.
- Discovered **two stale Vercel projects** both pointed at the static repo: `woodlandsite` (live static) and `woodlandsite-kmrk` (Next.js framework but pointed at the static repo → every build errored).
- **Resolution:** user created a NEW Vercel project **`woodland`** (`prj_0wmbB6yhRSNii3PGfwibVhTp8j99`) pointed at `tjcandesign/woodland`. Deployed **READY**, framework Next.js, Sanity env vars set. Verified live render (authenticated fetch) — refined hero, hamburger, Qualia widget, full-width underwriter logos, Google Maps footer link, no COVID, correct metadata all present.
- Created **`staging`** branch (for staging/preview deploys).
- **Deployment Protection = Standard** confirmed correct (gates only `*.vercel.app`, not the custom domain).
- **Domain:** production is **`woodlandtitle.com`** on **GoDaddy**. DNS **not yet wired** — handoff written in README.md. (`A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`, leave MX alone.)

### Docs written
- **README.md** — launch checklist, GoDaddy DNS handoff, post-launch SEO, future public-profile refresh (Google Business / Yelp / LinkedIn / logo + copy alignment).
- This session log + `CLAUDE.md`.

### Gotcha discovered
- Commits were attributed to **`renoschubert`** (a stranger) because `git config user.email` is the placeholder `your-email@example.com` and that GitHub user claimed that email. Confirmed renoschubert has **no repo access** (only collaborator is `tjcandesign`). Fix pending: `git config user.email "tj@wrkhrs.co"`.

---

## Earlier — Sanity planning + static-first pivot

- Planned a Sanity CMS integration for both Woodland and Bainbridge (two separate Sanity projects, studio at `/studio`, webhook → Vercel rebuild). Captured in **SANITY-HANDOFF.md**.
- Decision: **launch first, CMS later** — get the site live so Curt can show it off, then wire Sanity as a separate effort. (The Next.js migration happened; Sanity is scaffolded but pages aren't reading from it yet.)
- Repo restructured so the site serves from the root.

---

## Earlier — Client review edits (from Curt meeting) + mobile polish

From a client review meeting, applied to the site:
- **Services:** removed "agent" from the buyer/seller/lender list; "buying a home" → "buying or selling property"; collapsed the duplicated "What We Provide" lists into prose.
- **Closing process:** reworked the Escrow paragraph (earnest money in trust; lender produces the Closing Disclosure 3 days prior).
- **Contact:** reworded to appointment-friendly ("reach out ahead to schedule a visit") since the office is effectively by-appointment.
- **Removed the COVID-19 page** and all footer links to it.
- **Qualia quote widget** embedded site-wide (`app/(site)/layout.tsx`).

Mobile polish round:
- "Menu" text button → animated **hamburger icon** (morphs to X).
- **Scroll-hide header** (hides on scroll-down, reappears on scroll-up) with debounce.
- Footer phone/fax spacing tightened; footer **address linked to Google Maps**.
- Underwriter logos: side-by-side on mobile; full-width row on desktop.
- Smaller header logo on mobile; extra spacing between hero statement and the aim card.
