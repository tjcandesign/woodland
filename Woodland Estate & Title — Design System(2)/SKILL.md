---
name: woodland-design
description: Use this skill to generate well-branded interfaces and assets for Woodland Estate & Title, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Woodland Estate & Title is a Capitol Hill–based attorney-led title and settlement firm. The brand is editorial, warm, and measured: EB Garamond italic in sage-dark (#5F6C4E) for every display heading, Inter for body and UI, cream paper backgrounds, deep navy (#0F2240) for dark sections, and gold (#B8860B) for primary CTAs.

**Canonical tokens:** `colors_and_type.css` (imports EB Garamond + Inter from Google Fonts and defines every color/type/radius/shadow var).

**UI kit:** `ui_kits/website/` — React recreations of Header, Hero, process sections, cards, CTA band, and Footer. Reuse these patterns exactly rather than reinventing them.

**Assets:** `assets/` has logos (7), the circle monogram set (4), two signature photographs (Eastern Market B&W, Capitol Hill engraved map), and two underwriter seals.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Non-negotiables:**
- No emoji, ever.
- Italic serif h2s in sage-dark — the single biggest brand signature.
- Buttons end in `→` via `::after`; the arrow translates +3px on hover.
- No gradients beyond overlay washes. No glassmorphism. No purple/pink.
- Sentence case everywhere except tracked uppercase eyebrows (letter-spacing 3px+).
- Signature copy phrases: "Attorney-led property settlements.", "The way closings ought to feel.", "Process is the product.", "Informed, comfortable, and confident."
