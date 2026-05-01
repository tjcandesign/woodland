# Handoff: Add Sanity CMS to Woodland

> Start a new Claude Code session in `/Users/tjcichecki/woodland` and paste:
> *"Read SANITY-HANDOFF.md and let's start the Sanity migration. Ask me anything you need before scaffolding."*

---

## What you're building

Migrate the Woodland Estate & Title marketing site from plain static HTML to **Next.js 16 (App Router) + Sanity CMS**, deployed on Vercel as a static export, so the owner (Curt Zeager) can self-edit copy at `/studio` without touching code.

This is a sandbox/learning exercise on a real site — quality matters but speed-to-Sanity matters more. The static site already shipped (see "Current state" below), so there's no production pressure.

---

## Current state of the repo (as of 2026-05-01)

- **Stack:** plain static HTML/CSS/JS at the repo root. No build step, no framework, no package.json.
- **Deployment:** Vercel auto-deploy connected to GitHub `tjcandesign/woodland.git` `main` branch. Live at a `*.vercel.app` URL; custom domain `woodlandtitledc.com` not yet wired.
- **Pages at the root:** `index.html` (home), `services.html`, `closing-process.html`, `code-of-conduct.html`, `contact.html`, `security.html`, `utilities.html` (public nav). Plus internal/dev pages currently shipping but unlinked: `brand.html`, `brand-guidelines.html`, `work.html`, `comms-plan.html`, `project-status.html`, `listing-refresh.html`.
- **Assets:** `/assets/` at repo root contains all images and PDFs. All HTML/CSS references use clean `assets/...` paths.
- **JS behavior to preserve:** scroll-hide header (`header-scroll.js`), animated mobile hamburger menu, footer logo spin (`footer-spin.js`), parallax (`parallax.js`), process arrows (`process-arrows.js`).
- **Content reference doc:** `site-content.md` at the repo root has scraped copy from the legacy site plus a draft Sanity schema proposal — use it as a content checklist.
- **Recent edits committed:** mobile polish round (hamburger, scroll-hide, address Google Maps link, footer phone/fax, underwriter logos full-width, smaller mobile header logo). All in main.

---

## Decisions already locked in (don't re-litigate)

1. **Migrate to Next.js 16 App Router** with `output: "export"` (matches the sister site Bainbridge Law).
2. **Two separate Sanity projects** — one for Woodland, one for Bainbridge. Don't share datasets.
3. **Studio embedded at `/studio`** on each Next.js app.
4. **Webhook → Vercel rebuild** on publish. Static export stays. ~30–60s publish-to-live latency.
5. **Schemas duplicated, not shared** between Woodland and Bainbridge.

The full design rationale lives at `~/.claude/plans/i-need-to-add-delightful-pearl.md` if you want background.

---

## Pre-flight: what the user (TJ) needs to provide before you can wire it up live

You can scaffold all the code with placeholder env vars and have it ready to drop credentials into. But these are blockers for the *live* connection:

1. **Sanity project ID** — TJ creates a new project at sanity.io named `woodland` under Curt's email (Admin) and TJ's email (Admin). Provides the project ID.
2. **API read token** — generate in Sanity → API → Tokens. Read-only is fine for the public site.
3. **Vercel deploy hook URL** — Vercel project → Settings → Git → Deploy Hooks → Create. Use this in the Sanity webhook.
4. **Decision on dev-only pages** — confirm which of `brand.html`, `work.html`, `comms-plan.html`, etc. should ship in the new Next.js app vs. be archived.
5. **Image rights confirmation** — Fidelity National + Stewart Title logos to be hosted on Sanity CDN.

If TJ hasn't done #1–3 yet, scaffold with `process.env.NEXT_PUBLIC_SANITY_PROJECT_ID` etc. and stop short of `sanity deploy`.

---

## Implementation phases (recommended order)

### Phase 1: Scaffold Next.js (no Sanity yet)
1. Create a `web/` subdir with `npx create-next-app@latest web --ts --app --no-src-dir --import-alias "@/*"` — or restructure the existing repo. **Decide with TJ: subdir vs. promote.**
2. Match Bainbridge config: `next.config.ts` with `output: "export"`, `trailingSlash: true`, `images: { unoptimized: true }`.
3. Port `styles.css` → `app/globals.css` largely as-is (CSS is framework-agnostic).
4. Port shared scripts to React: `header-scroll.js` → `useEffect` in a `<HeaderScroll />` client component, etc.
5. Build `<Header />` and `<Footer />` components consuming static (for now) data, matching current markup exactly.
6. Rebuild each public page as a route component:
   - `index.html` → `app/page.tsx`
   - `services.html` → `app/services/page.tsx`
   - `closing-process.html` → `app/closing-process/page.tsx`
   - `code-of-conduct.html` → `app/code-of-conduct/page.tsx`
   - `contact.html` → `app/contact/page.tsx`
   - `security.html` → `app/security/page.tsx`
   - `utilities.html` → `app/utilities/page.tsx`
7. Verify visual + behavioral parity with the static site (hamburger, scroll-hide, mobile breakpoints, etc.).
8. **Commit before touching Sanity.** This is a stable checkpoint.

### Phase 2: Wire Sanity
1. `npm i sanity @sanity/client @sanity/image-url next-sanity`.
2. Create `sanity.config.ts` at repo root.
3. Create schemas in `sanity/schemas/`:
   - **Singletons:** `siteSettings` (site title, copyright, primary CTA URLs, project proposal URL), `contactInfo` (address, phone, fax, email, hours, map URL), `navigation` (header + footer links).
   - **Documents:** `page` (generic with hero + section blocks), `service`, `closingStep`, `value`, `utilityListing`. Use the schema proposal in `site-content.md` lines 290–315 as a starting point.
4. Use **Portable Text** for long-form body copy, plain strings for headings/labels.
5. Mount Sanity Studio at `app/studio/[[...index]]/page.tsx` per `next-sanity/studio` docs.
6. Create `lib/sanity/client.ts` and `lib/sanity/queries.ts`.
7. Add `.env.local` with `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET=production`, `SANITY_API_READ_TOKEN`.

### Phase 3: Author content + replace literals with queries
1. In Sanity Studio, author every piece of content matching the current site exactly. Reference the live site or `site-content.md` for source copy.
2. Migrate images: upload to Sanity from `/assets/`, capture the asset references.
3. Replace static data in each `page.tsx` with GROQ queries via the Sanity client. Keep React Server Components — fetch in the page itself.
4. Update `<Header />` and `<Footer />` to query `siteSettings`, `contactInfo`, `navigation` once at the layout level.

### Phase 4: Deploy + redirects + webhook
1. Add Vercel env vars matching `.env.local`.
2. Add `redirects()` in `next.config.ts` mapping legacy `.html` URLs → new clean routes (e.g., `/closing-process.html` → `/closing-process/`). **This is mandatory** for SEO continuity.
3. Configure Sanity webhook → Vercel deploy hook on document publish.
4. Test publish-to-live cycle end-to-end.

### Phase 5: Hand-off to Curt
1. Walk Curt through `/studio`, content authoring, publish flow.
2. Set expectations: ~60s publish-to-live, not real-time.
3. Optionally: 5-min Loom demo.

---

## Files you'll create / modify

**New:**
- `next.config.ts`, `package.json`, `tsconfig.json` (Next.js scaffold)
- `app/layout.tsx`, `app/page.tsx`, `app/{services,closing-process,code-of-conduct,contact,security,utilities}/page.tsx`
- `app/studio/[[...index]]/page.tsx`
- `app/globals.css` (ported from `styles.css`)
- `components/Header.tsx`, `components/Footer.tsx`, `components/HeaderScroll.tsx`, `components/MobileMenu.tsx`, etc.
- `sanity.config.ts`
- `sanity/schemas/*.ts` (one per schema)
- `lib/sanity/client.ts`, `lib/sanity/queries.ts`
- `.env.local`, `.env.example`

**Reference (don't modify, but cite):**
- `site-content.md` — full content checklist + draft schemas
- `index.html`, `services.html`, etc. — source of truth for current copy and markup
- `styles.css` — full CSS, port to globals as-is

**Eventually delete after migration is verified live:**
- All root-level `*.html` files
- All root-level `*.js` files (`header-scroll.js`, `footer-spin.js`, `parallax.js`, `process-arrows.js`, `project-status.js`)

---

## Critical risks to keep an eye on

1. **JS behavior parity.** Scroll-hide header, animated hamburger, footer logo spin, parallax, process-arrows — each needs faithful React port. Verify on mobile.
2. **CSS regressions.** Pasting `styles.css` into `globals.css` should "just work," but watch for `@font-face`, animations, and any media queries that depend on `body` defaults Next.js sets differently.
3. **Static export + Studio.** Studio is a client-side bundle and works fine under `output: "export"`. Live drafts and preview routes do *not* — drafts will only be visible inside Studio's preview pane.
4. **SEO continuity.** Old `.html` URLs must 301-redirect to new clean routes. Without it, backlinks and Google rankings break.
5. **Image migration tedium.** ~50 images. Either re-upload manually in Studio or use `@sanity/import` with an NDJSON of asset refs.
6. **Vercel rebuild latency.** Set Curt's expectations: not instant.

---

## Verification checklist

Done = all of:

- [ ] `npm run dev` shows every page rendering content from Sanity, matching the legacy site visually.
- [ ] `npm run build` succeeds with `output: "export"`.
- [ ] `/studio` loads, schemas render, content edits save.
- [ ] Edit a field in Studio → publish → Vercel rebuild fires → live page reflects change within ~60s.
- [ ] All legacy `.html` URLs 301 to new routes (test 5–10 manually).
- [ ] Mobile parity: hamburger + scroll-hide + Maps link + underwriter logos all behave as before.
- [ ] Lighthouse scores within 5pts of pre-migration baseline.
- [ ] Curt can log in, edit, publish, see the change live without dev help.

---

## Open questions to ask TJ at session start

1. Subdir (`web/`) or promote Next.js to repo root? (Promoting requires moving the static HTML out of the way — to `legacy/` or just delete after the new app is verified.)
2. Has the Sanity project been created? If yes, hand over project ID + token. If no, scaffold with placeholders.
3. Which dev-only pages (`brand.html`, `work.html`, etc.) should the new app ship?
4. Has the custom domain (`woodlandtitledc.com`) been wired in Vercel yet, or is it still on the `*.vercel.app` URL?
5. Want to use Sanity Codegen for typed queries? (Recommended; small extra setup.)

---

*This is a fresh-session prompt. Don't assume any earlier conversation context. Ask TJ before making structural decisions.*
