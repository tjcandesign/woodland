# Woodland Estate & Title — Design System

A design system for **Woodland Estate & Title**, a Capitol Hill–based attorney-led title and settlement firm serving Washington DC, Maryland, and Virginia. Woodland handles residential, commercial, and agricultural real estate closings — title search, title insurance, and escrow — and is underwritten by Fidelity National Title Insurance Company and Stewart Title Guaranty Company.

The visual language is **editorial, warm, and measured**: serif displays in a quiet sage-green italic, confident navy and gold accents, a cream paper background, and a handful of evocative photographs (an old Eastern Market photograph, a period map of Capitol Hill). It reads more like a thoughtful print quarterly than a real-estate website — intentional, because the firm's positioning is "process is the product."

---

## Sources

- **Site codebase:** `github.com/tjcandesign/woodlandsite` (static HTML + CSS)
  - Pages read: `index.html`, `services.html`, `closing-process.html`, `contact.html`, `code-of-conduct.html`
  - Canonical stylesheet: `styles.css`
  - Behaviors: `footer-spin.js` (scroll-linked ring rotation), `parallax.js` (hero parallax), `process-arrows.js` (staggered arrow activation)
- **Uploaded assets** (`uploads/`): full, stacked, and short logos in light/dark; circle monogram variants; the Capitol Hill map crop; the Eastern Market black-and-white photograph.
- **No Figma** or slide template was attached.

All imported assets live in `assets/`. Full-fidelity SVGs and rasters were copied directly — no SVGs were hand-rolled for this system.

---

## Index

Root files (read these in order):

| File | Purpose |
|---|---|
| `README.md` | This document — brand overview + visual/content foundations |
| `SKILL.md` | Agent Skills entry point — how to use this as a Claude Code skill |
| `colors_and_type.css` | Canonical design tokens: colors, type, spacing, shadows, motion |
| `assets/` | Logos, photography, underwriter seals |
| `preview/` | Design System tab cards (colors, type, components, brand) |
| `ui_kits/website/` | Pixel-accurate UI kit of the Woodland marketing site |

---

## Products

Woodland has one product surface: the **marketing website**. There is no app, no portal beyond a third-party earnest-money link (`paymints.io`). This design system covers that website exhaustively, with the understanding that any new surface (one-pagers, pitch decks, printed materials, new pages) should inherit the same editorial restraint.

---

## Content Fundamentals

Copy is the product as much as the visuals are. Woodland writes like a thoughtful older attorney who does not need to shout.

- **Voice:** quiet confidence, plainspoken, never salesy. The firm is proud without being flashy.
- **Cadence:** short declarative sentences interlaced with one or two longer, comma-rich ones. Think NYT style section.
- **Person:** mostly **we** (the firm) and **you** (the reader). Occasional third person for industry facts. No "I."
- **Tense:** present, active. "We order and rigorously review the title history" — not "title histories are reviewed."
- **Casing:** Sentence case everywhere except eyebrows, which are `UPPERCASE TRACKED`. Titles are sentence case.
- **Punctuation:** full periods on most headings and pull quotes — "A measured path to clear ownership." — giving them a declarative finality. Em dashes used sparingly.
- **Numbers:** step numbers are zero-padded (`01`, `02`, `03`). Phone and fax as `(202) 516-6855`.
- **Emoji:** never. No emoji appears anywhere in the product.
- **No exclamation points.** No "🎉", no "amazing", no "supercharge", no "unlock."
- **Signature phrases** (use verbatim when possible):
  - "Attorney-led property settlements."
  - "Personable, transparent, attorney-led property settlements."
  - "A clearing house for buyers, sellers, lenders, and their agents."
  - "Process matters. Transparency throughout the settlement process leads to significant savings for the buyer on title insurance premiums."
  - "We operate with the understanding that our best work is invisible."
  - "Informed, comfortable, and confident."
  - "The way closings ought to feel."
- **Eyebrow patterns:** short, definitional. "What We Do", "How Closings Work", "The Three Phases", "Our Values", "Underwriters", "Find Us", "Next Steps".
- **CTA copy:** verbs-first, plain. "Send Earnest Money", "Order Services", "Contact Us", "Discover our full process", "View All Services".
- **Pull quotes** are italic serif and always end with a period. Put the emotional line in the pull quote, the explanation in the body.

Examples (lifted from the live site):

> "We operate with the understanding that our best work is invisible. Transactions that close without drama, titles that clear without delay."

> "Our aim is the highest quality results for property transactions, assuring that clients are informed, comfortable throughout the process, and confident when closing on their purchase."

> "A measured path to clear ownership."

---

## Visual Foundations

### Color vibe
The palette is **warm neutral with two accent anchors**. Cream paper backgrounds (`#F7F2E8`, `#FDFAF4`, `#ECE3D3`) do almost all the lifting. Dark sections slam to a deep navy (`#0F2240` → `#07162E` in the footer) for contrast. Two brand accents punctuate: **gold** (`#B8860B`) for CTAs and highlights, and **sage-dark** (`#5F6C4E`) for every italic serif heading. Brown (`#5C4033`) is reserved for smaller display type and outline-button text. There is no purple, no bright blue, no pastel. No gradients except subtle overlay washes on hero images.

### Type
- **Serif — EB Garamond.** Every display, h2, h3, lede, and pull quote is EB Garamond, almost always `font-style: italic` in sage-dark. The italic sage h2 is the visual hallmark of the brand. Weights 400–500.
- **Sans — Inter.** All body text, eyebrows, CTAs, nav, and UI chrome. Weights 300 (hero sub), 400 (body), 500 (h4 / utility county), 600 (eyebrows, buttons, nav).
- Display h1 is roman (not italic), 400 weight. Everything else at h2/h3 is italic.
- Letter-spacing is negative on display (`-1.5px` down to `-0.4px`) and positive on eyebrows (`2–4px`).

### Backgrounds
- Cream paper (`#F7F2E8`) is the default page base. The rhythm is cream → off-white (`#FDFAF4`) → cream, with occasional dark navy breaks.
- **Two photographic backgrounds** recur: the B&W Eastern Market exterior for the home hero, and the engraved Capitol Hill map for the mid-page "What We Do" band and CTA band. Both use `filter: saturate(0.85–0.9)` and a navy gradient overlay at 50–92% opacity.
- No repeating patterns, no grain textures, no noise overlays.
- Parallax: hero backgrounds translate vertically on scroll (see `parallax.js`).

### Imagery vibe
Archival, photographic, **monochrome-leaning**. Black-and-white exteriors from the 1960s–70s. The map is an old engraved plan rendered in cream + sage-green. Both evoke institution, longevity, and neighborhood. Never use flat illustrations or 3D renders; never use modern stock photography.

### Corner radii
- `2px` for buttons and small tags — nearly sharp.
- `4px` for contact blocks — gently softened.
- `16px` for cards (`.aim-card`, `.process-mini-card`) and rounded CTAs (`.btn-rounded`).
- Large radii (>16px) are **not** used. The brand is intentionally not "rounded-everything."

### Cards
Two patterns:
1. **Floating soft-shadow card** — `#FFFFFF` bg, `16px` radius, shadow `0 1px 2px rgba(15,34,64,0.04), 0 24px 48px rgba(15,34,64,0.06)`. No border. Used for process cards and aim card.
2. **Hairline card** — no bg, `border-top: 1px solid var(--border)`, generous top padding. Used for feature grids on light sections. Feels editorial, not boxed.

### Borders
- `#DED3C0` (warm tan) for default hairlines.
- `#C2B8A1` for stronger hairlines on warm surfaces.
- `rgba(255,255,255,0.08–0.18)` on dark surfaces.
- Border-width is almost always `1px`. Utility list items use `1px dotted`.

### Shadows
Only one elevation: the card shadow above. Buttons have a small glow (`0 2px 8px rgba(184,134,11,0.25)` → `0 4px 14px rgba(184,134,11,0.35)` on hover) for the primary gold CTA only. No inner shadows. No blurred panels. No glassmorphism.

### Hover states
- Links: underline-ish (border-bottom stays, color shifts to `--gold-dark`).
- Primary btn: darker gold + shadow grows slightly.
- Secondary btn: border brightens, background lifts to `rgba(255,255,255,0.08)`.
- Outline btn: border goes brown, bg becomes off-white.
- Nav links: color lifts from `rgba(255,255,255,0.7)` to pure white.
- Btn arrow `→` translates `+3px` on hover (see `.btn::after` rule). This is the signature interaction.
- No shrink-on-press. No scale transforms.

### Press / focus
Default browser focus rings are acceptable; no custom active state. This is a content site.

### Transparency & blur
Used almost exclusively in overlays: navy gradient washes on hero images (`rgba(15, 20, 40, 0.35)` → `0.88`) and white-on-navy text (`rgba(255,255,255,0.62–0.86)`). **No `backdrop-filter: blur`.** The brand does not do glass.

### Layout rules
- Max content width: `1300px`. Narrow content: `780px`. Reading content (long-form prose): `660px`.
- Gutter is responsive: `max(clamp(24px, 4vw, 56px), (100vw - 1300px)/2)`. It smoothly locks the content to center on wide screens.
- Sticky top header with `z-index: 50`.
- Sections are vertically generous: `110px` standard, `180px` for feature/image sections. Breathes.

### Animation
- Everything uses `cubic-bezier(0.2, 0.7, 0.2, 1)` at `0.18s–0.38s`.
- No bounces. No springs. No scroll-triggered "fade up" cascades.
- Two signature motion moments:
  1. **Footer ring rotation** — the circular logo ring rotates up to 450° across the scroll depth (`footer-spin.js`).
  2. **Process arrows activation** — as each of the three process cards rises past 72% viewport height, its preceding arrow goes from `border-strong` tan to `gold` (`process-arrows.js`).
- Hero parallax on background photos.
- `prefers-reduced-motion` is respected in `process-arrows.js`.

### Fixed elements
The site is largely static; only the top header is sticky. No floating buttons, no intercom bubble, no cookie bar.

### Lists
Custom checklist via inline SVG check mark in gold, indented 32px. This replaces bullets on all editorial lists.

### Dividers
`.hero-divider` is hidden in current CSS; most editorial separation is handled by ample whitespace or `border-top: 1px solid var(--border)` on cards.

---

## Iconography

Woodland uses **almost no iconography** — and that's intentional. The brand conveys meaning through typography, photography, and whitespace. When icons do appear, they are:

1. **Inline SVGs, thin-stroke (1.75 stroke-width), rounded caps, rounded joins.** Present only in two places:
   - The **process-mini arrow** (a long right-pointing arrow) — `index.html` hero of the homepage process strip.
   - The **seal check-mark** (circle with tick) — shown between the two underwriter seals.
2. A **gold checkmark** for list items, rendered as a 14×10 SVG embedded via `background-image: url("data:image/svg+xml…")`.
3. Logos & circle-monogram (treated as brand marks, not icons).

### Guidance for new icons
- If an icon is needed and doesn't exist in the assets folder, use **Lucide Icons** as a substitute (`https://unpkg.com/lucide-static`). Lucide's thin-stroke, rounded-cap aesthetic matches Woodland's existing arrow and check glyphs. Always use `stroke-width: 1.75`, `stroke-linecap: round`, `stroke-linejoin: round`.
- **No icon font**, no Font Awesome, no Material Icons.
- **No emoji**, ever.
- **No Unicode geometric glyphs** as icons (no `►`, `★`, etc.).
- The single acceptable Unicode character used decoratively is the right arrow `→` appended to every `.btn` via `::after`.
- **Keep it rare.** If you find yourself adding more than one icon to a screen, ask whether type and layout could carry the meaning instead.

### Files
`assets/` contains:
- **Logos (7):** `woodland-logo-full.svg`, `woodland-logo-white.svg`, `woodland-stacked-dark.svg`, `woodland-stacked-white.svg`, `woodland-short-dark.svg`, `woodland-short-white.svg`
- **Circle monogram (4):** `circle-dark.svg`, `circle-white.svg`, `circle-ring-white.svg`, `circle-w-white.svg`
- **Photography (2):** `eastern-market.jpeg` (B&W market exterior, used for home hero), `map from current website.jpg` (Capitol Hill engraved plan, used for mid-page + CTA band)
- **Underwriter seals (2):** `Fidelity National Title Insurance Company.png`, `stewart-seal.jpg`

---

## Font note

**EB Garamond is self-hosted** from brand-supplied TTFs in `fonts/` (variable + static weights 400/500/600/700/800 in roman and italic). **Inter** still loads from Google Fonts at runtime — no brand file was supplied. If building offline, self-host Inter from Google Fonts downloads.
