# Woodland Estate & Title — Project Memory

> Auto-loaded each session. This is the orientation doc — read it first, then dive into the
> linked docs as needed. Last updated: **2026-05-29**.

## What this is

Marketing website for **Woodland Estate & Title**, an attorney-led property settlement practice
(DC / Maryland / Virginia). Owner: **Curt Zeager**. Agency/dev: **TJ Cichecki (tj@wrkhrs.co)**.

Sister site: **Bainbridge Law** at `/Users/tjcichecki/projects/bainbridge-law` (same owner, separate brand).

## Stack & infra (the important facts)

- **Framework:** Next.js 16 App Router, **static export** (`output: 'export'` in `next.config.ts`), `trailingSlash: true`.
- **Repo:** GitHub `tjcandesign/woodland`. Branches: **`main` = production**, **`staging` = staging/preview**.
- **Vercel project:** `woodland` (`prj_0wmbB6yhRSNii3PGfwibVhTp8j99`), team `tjcandesigns-projects` (`team_9wPGN9JgDOuqOqtp7eqDlZ46`). Auto-deploys on push. Framework correctly detected as Next.js.
  - **Deployment Protection = Standard.** This is correct — it only gates `*.vercel.app` URLs; the custom domain serves publicly. Don't disable it.
  - **Ignore two stale Vercel projects:** `woodlandsite` (old static site, was previously live) and `woodlandsite-kmrk` (broken — pointed at the wrong repo). Neither is our launch vehicle.
- **Production domain:** **`woodlandtitle.com`** (registrar: **GoDaddy**). ⚠️ **DNS not yet wired** — see README.md "DNS handoff". Records: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`. Leave MX records alone.
- **Sanity:** project id **`plu047nm`**, dataset `production`. Studio at `/studio`. Env vars (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`) live in **`.env.local`** (gitignored) and in Vercel env. **Schemas exist, Studio works, but pages do NOT query Sanity yet** — all page content is still hardcoded JSX. Wiring that up is "Phase 3" (see SANITY-HANDOFF.md).

## ⚠️ Known gotchas

- **git commit identity is broken.** `git config user.email` is the placeholder `your-email@example.com`, so GitHub mis-attributes commits to a stranger (`renoschubert` — who has NO repo access). **Fix before more commits:** `git config user.email "tj@wrkhrs.co"`. Past commits keep the wrong name (not worth rewriting history).
- An **auto-commit hook** commits + pushes changes automatically (commit messages often read "Auto-commit changes"). After editing, a manual `git commit` may say "nothing to commit" because the hook already grabbed it — verify with `git log origin/main`.
- **Two near-identical brand pages exist** and are kept in sync by hand: `/brand` → `public/brand.html`, `/brand-guidelines` → `public/brand-guidelines.html`. Edits to one should be mirrored to the other. (Candidate for consolidation later.)
- The repo root has the Next.js app; `legacy/` holds the original static HTML site (pre-migration), and `public/*.html` holds standalone internal pages (brand, work, etc.) served as static files.

## Brand voice (enforce in all copy)

Established, restrained, **legal-firm adjacent**. Emphasize credibility, history, legal competence,
relational trust. **NEVER use tree / forest / woodland-as-nature metaphors** — Woodland is a family
name, not a nature brand. Keep motion subtle. Don't make it salesy / influencer-y.

## Pages

- **Public (indexed):** `/` (home), `/services`, `/closing-process`, `/code-of-conduct`, `/contact`, `/security`, `/utilities`. Source: `app/(site)/**/page.tsx`.
- **Internal (all `noindex`):** `/brand`, `/brand-guidelines`, `/work`, `/comms-plan`, `/listing-refresh`, `/project-status`. Excluded from `sitemap.ts`.
- **Studio:** `/studio` (Sanity).

## Key files

- `app/(site)/` — public page components (content hardcoded for now)
- `components/` — Header, Footer (footer circle mark spins on scroll via `--spin`), Parallax, ProcessArrows, ProjectCalculator
- `app/globals.css` — all site styles (ported from the original static `styles.css`)
- `public/brand.html` + `public/brand-guidelines.html` — brand guidelines backend pages (logo downloads, voice, type, color)
- `public/assets/` — logos (SVG + padded PNG/JPG), photography, deliverable PDFs
- `scripts/generate-logo-rasters.mjs` — regenerates logo PNG/JPG from SVGs (`PADDING = 100` px clear space). Run: `node scripts/generate-logo-rasters.mjs`
- `app/robots.ts` + `app/sitemap.ts` — `force-static`, point at `woodlandtitle.com`, public pages only

## Companion docs

- **README.md** — launch checklist + full GoDaddy DNS handoff + post-launch SEO + future public-profile refresh
- **SANITY-HANDOFF.md** — the Sanity CMS migration plan (Phase 3: wire Studio content into pages via GROQ)
- **PRODUCTION-PLAN.md** — non-website brand work (print, signage, email signatures, in-office collateral)
- **site-content.md** — scraped reference of the original site's content
- **docs/SESSION-LOG.md** — detailed chronological log of work done (see latest entry)

## Outstanding work (next session, start here)

1. **Wire DNS** for `woodlandtitle.com` in GoDaddy → site goes live (README.md has exact steps).
2. **Fix git email:** `git config user.email "tj@wrkhrs.co"`.
3. **Confirm the `woodlandteam@woodlandtitle.com` mailbox exists** (footer/contact email was switched from the `-dc` domain; mail will bounce if the box isn't provisioned). Note: `Send Earnest Money` still points at `woodlandtitledc.paymints.io` — left as-is intentionally; confirm that's still correct.
4. **Phase 3 — Sanity:** replace hardcoded page content with GROQ queries; wire publish → Vercel deploy hook. Plan in SANITY-HANDOFF.md.
5. Decide final fate of internal pages (keep `noindex`, password-gate, or remove).
6. Brand-tint the **Qualia widget** in the Qualia dashboard to match the palette (token already embedded site-wide via `app/(site)/layout.tsx`).
7. Post-launch: submit `https://woodlandtitle.com/sitemap.xml` to Google Search Console.
8. (Optional) Consolidate the two brand pages into one.
