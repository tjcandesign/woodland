# Woodland Estate & Title — Website

Marketing site for Woodland Estate & Title, an attorney-led property settlement
practice serving Washington, DC, Maryland, and Virginia.

- **Framework:** Next.js (App Router), static export (`output: 'export'`)
- **Hosting:** Vercel (auto-deploys from `main` on GitHub `tjcandesign/woodland`)
- **Production domain:** `woodlandtitledc.com` (see DNS handoff below)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Project layout

- `app/(site)/` — public pages (home, services, closing-process, code-of-conduct, contact, security, utilities)
- `app/(site)/{brand,brand-guidelines,work,comms-plan,listing-refresh,project-status}` — **internal** pages, all `noindex` (see below)
- `public/assets/` — logos (SVG/PNG/JPG), photography, deliverable PDFs
- `public/brand-guidelines.html` — brand language / brand voice / logo download backend page
- `scripts/generate-logo-rasters.mjs` — regenerates PNG/JPG logo derivatives from the SVGs
- `app/robots.ts`, `app/sitemap.ts` — search directives (public pages only)
- `SANITY-HANDOFF.md` — plan for the (separate, later) Sanity CMS integration

## Regenerating logo rasters

After editing any logo SVG in `public/assets/`, re-run:

```bash
node scripts/generate-logo-rasters.mjs
```

This produces transparent PNGs and flat-background JPGs (white for dark-on-light
variants, navy `#0F2240` for white-on-dark) at 1600px on the long edge.

---

# Launch checklist

Work top to bottom. Items marked **(manual)** need a human with the right access.

## 1. Pre-flight (code)
- [x] Static build passes clean (`npm run build`)
- [x] Internal pages carry `noindex` (`/brand`, `/brand-guidelines`, `/work`, `/comms-plan`, `/listing-refresh`, `/project-status`)
- [x] `robots.txt` + `sitemap.xml` generated; sitemap lists public pages only
- [x] Logo downloads (SVG/PNG/JPG) live on the brand guidelines page
- [x] Qualia quote widget embedded site-wide (`app/(site)/layout.tsx`, via `next/script`)
- [ ] **(manual, optional)** Brand-tint the Qualia widget colors in the Qualia dashboard to match the palette
- [ ] **(manual)** Decide final fate of internal pages — keep `noindex`, password-gate, or remove

## 2. Deploy (Vercel)
- [x] Repo connected to Vercel, auto-deploys from `main`
- [ ] Confirm latest `main` deployed successfully (Vercel dashboard → Deployments)
- [ ] Smoke-test the `*.vercel.app` URL: every public page loads, mobile menu + scroll behaviors work, logo downloads work

## 3. Domain — `woodlandtitledc.com` (manual)
See **DNS handoff** below. In short:
- [ ] Add the domain in Vercel → Project → Settings → Domains
- [ ] Add Vercel's A record (apex) + CNAME (`www`) in GoDaddy
- [ ] Wait for DNS propagation + automatic SSL issuance
- [ ] Verify `https://woodlandtitledc.com` and `https://www.woodlandtitledc.com` both resolve to the site
- [ ] Confirm the chosen canonical (recommend `www`) — the other redirects to it

## 4. Post-launch
- [ ] Submit `https://www.woodlandtitledc.com/sitemap.xml` to Google Search Console
- [ ] Spot-check that internal pages return `noindex` (View Source → `<meta name="robots">`)
- [ ] Confirm analytics/tracking (if any) is firing

---

# DNS handoff note

**The production domain almost certainly lives in GoDaddy or Squarespace.**
`woodlandtitledc.com` was registered for the prior site; confirm the registrar
before touching records. (TJ has GoDaddy developer access.)

> ⚠️ **Do not change production DNS from code or CI.** DNS is edited only in the
> registrar's control panel by a human with account access. The steps below are
> the handoff instructions — not something the build performs.

### If the domain is in GoDaddy

1. In **Vercel** → Project → **Settings → Domains**, add both `woodlandtitledc.com`
   and `www.woodlandtitledc.com`. Vercel will display the exact records to create.
   Vercel's current published values are:
   - **A record** (apex `@`): `76.76.21.21`
   - **CNAME** (`www`): `cname.vercel-dns.com`
   - *(Always use the values Vercel shows you — they can change.)*
2. In **GoDaddy** → **Domain → DNS → Manage Zones → woodlandtitledc.com**:
   - **A** record — Name `@`, Value `76.76.21.21`, TTL 600 (1 hr is fine)
   - **CNAME** record — Name `www`, Value `cname.vercel-dns.com`, TTL 600
   - Remove any stale `A`/`CNAME`/parking records pointing at the old host
     (GoDaddy "Parked" forwarding, Squarespace, prior Wix/host, etc.).
3. Back in **Vercel**, the domain status flips to **Valid Configuration** once
   propagation reaches Vercel (minutes to a couple hours). SSL is issued
   automatically — no cert work needed.
4. Set the **canonical** in Vercel (recommend `www.woodlandtitledc.com` as primary;
   the apex 308-redirects to it, or vice-versa — pick one and be consistent).

### If the domain is in Squarespace (Domains)

Squarespace's DNS panel is under **Settings → Domains → woodlandtitledc.com → DNS Settings**.
Same record values as above. Squarespace sometimes pins default records — delete the
defaults that conflict with the A/CNAME above. Alternatively, transfer the domain to
Vercel/another registrar if Squarespace DNS proves fussy (not required for launch).

### Gotchas
- **Propagation:** new records can take 5 min–48 hrs; usually <1 hr. Use
  `dig woodlandtitledc.com +short` / `dig www.woodlandtitledc.com +short` to verify.
- **Old email / MX:** if the domain also routes email, **do not delete MX records.**
  Only touch the A/CNAME used for the website.
- **AAAA records:** if old IPv6 (`AAAA`) records exist pointing at a prior host,
  remove them or they'll compete with the Vercel A record.

---

# Future "public presence refresh" (post-launch, manual)

Not part of this site, but the natural next pass once the domain is live. Tracked
here so it isn't lost:

- [ ] **Google Business Profile** — claim/verify, complete profile depth, add brand
      photos, enable posts + Q&A, start a review-velocity habit. (Strategy already
      drafted on the internal `/listing-refresh` page.)
- [ ] **Yelp** — claim and clean up the business listing; align NAP (name/address/phone).
- [ ] **LinkedIn** — stand up / refresh the business profile; align tagline + description.
- [ ] **Logo consistency** — replace the avatar/logo across all profiles with the
      finalized mark (download from `/brand-guidelines`). Use the **circle mark** for
      square avatar slots, the **stacked or short wordmark** for banners.
- [ ] **Copy alignment** — same one-line description across every profile, matching the
      site's voice (restrained, credible, attorney-led — no nature/forest metaphors).

---

# Notes for future maintainers

- **Brand voice:** established, restrained, legal-firm adjacent. Emphasize credibility,
  history, legal competence, relational trust. **Avoid tree/forest/woodland-as-nature
  metaphors** — Woodland is a family name, not a nature brand.
- **Motion:** keep it subtle. The circular secondary mark in the footer rotates with
  scroll progress (`components/Footer.tsx` → `--spin`); preserve this behavior.
- **CMS:** content is currently hard-coded in the page components. A Sanity integration
  is planned as a separate effort — see `SANITY-HANDOFF.md`.
