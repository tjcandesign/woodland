# Woodland Website — UI Kit

A pixel-accurate React recreation of the Woodland Estate & Title marketing site. Every style token is pulled from the canonical `styles.css` in `tjcandesign/woodlandsite`.

## Components
- `Primitives.jsx` — `Btn`, `SectionTag`, `ArrowRight` SVG
- `Header.jsx` — sticky navy header with active-state underline and gold CTA
- `Hero.jsx` — full-bleed parallax hero + `compact` inner-page variant
- `Sections.jsx` — `FeatureSplit`, `ProcessMini` (w/ scroll-activated arrows), `ImageSection`, `UnderwritersBand`, `CtaBand`, `ServicesCard`, `ClosingSteps`, `ContactDetails`, `ValuesSection`
- `Footer.jsx` — scroll-linked rotating ring monogram

## Screens (click-through)
- Home → hero, feature split with process-mini, image section, underwriters, CTA
- Services → compact hero, buyer/seller services card, CTA
- Closing Process → compact hero, 3-step list, CTA
- Code of Conduct → compact hero, values grid, CTA
- Contact → compact hero, contact blocks, CTA

Persists the selected page in `localStorage` so refresh keeps position.
