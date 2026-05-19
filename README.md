# Handoff: VILT Group — Design System

## Overview

This is a handoff package for the **VILT Group** design system — the visual language of a global IT services & digital‑transformation company (Lisbon, PT; part of Tessi Group). It covers marketing surfaces (corporate site, proposals, decks, partner microsites) and is suitable for internal tools too.

The system was extracted from the public marketing site at `vilt-group.com/br/` and codified into design tokens, asset references, and a reference UI kit. Use it as the source of truth for any new VILT‑branded surface.

---

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes, swatches and component specimens that document the intended look and behaviour. **They are not production code to ship as‑is.**

Your job is to **recreate this design system inside the target codebase's existing environment** using its established patterns:

- React / Next.js → port `colors_and_type.css` into the global stylesheet (or convert to a Tailwind theme / CSS‑in‑JS theme) and rebuild components as `.tsx`.
- Vue / Nuxt → SFC components with the same tokens.
- Native (Swift / Kotlin) → translate tokens into the platform's theme system (`Color`, `Typography`, etc.).
- No environment yet → pick the framework that best fits the project's needs (React + Vite + Tailwind is a solid default for marketing surfaces) and implement there.

The HTML in `reference_ui_kit/` and `reference_previews/` is the **visual spec** to match. Treat it as Figma‑in‑HTML: read it, screenshot it, mirror it pixel‑for‑pixel — don't `<iframe>` it into production.

---

## Fidelity

**High‑fidelity (hifi).** Final colors, typography, spacing, radii, shadows, motion durations and easing are locked. Reproduce them pixel‑perfectly. The only soft area is photography — see [Imagery & Assets](#imagery--assets) below.

---

## Brand Foundations

### Voice & Tone
- **Confident, optimistic, people‑first, slightly aspirational.** Partner explaining the future, not a vendor pitching.
- **Person:** "we" (company) → "you" (reader). Occasional "our team", "our clients".
- **Casing:** Sentence case headings. Title Case avoided. Eyebrows and small section labels are sometimes intentionally lowercase ("verticais de industria", "carreiras", "joinus+") — that's a deliberate quirky‑friendly tic, preserve it.
- **Punctuation:** Em‑dashes for asides (`—`, never `--`). Headlines rarely end with a period.
- **Numerals:** spelled out below 10 in body copy; figures for stats.
- **Emoji:** never. Not a single emoji on any VILT‑branded surface.
- **Mixed‑weight inside headlines** is the brand's signature emphasis device — e.g. light "O futuro é ilimitado" + bold "**repense seus negócios**". Implement headlines as `font-weight: 300` with bold spans for the hook.

### Recurring Vocabulary
*Total Experience (TX)*, *Customer Experience (CX)*, *Employee Experience (EX)*, *AI / Inteligência Artificial*, *digital transformation*, *people‑driven*, *transparency*, *5 Mandamentos*, *joinus+*, *let's chat*, *Vamos iniciar uma conversa*.

### Copy Length Targets
- Headlines: 6–14 words.
- Section intros: 2–3 short sentences.
- Body paragraphs: 50–90 words, broken with `<br>` for breathing room.

---

## Design Tokens

The full token set is in `tokens/colors_and_type.css`. **Port these into the target codebase's theme system.** Do not hard‑code values — always reference the token.

### Color Palette

| Token | Hex | Use |
|---|---|---|
| `--vilt-magenta` | `#E81464` | Primary accent — the "X" in the logo, CTAs, hover underlines, eyebrows |
| `--vilt-magenta-600` | `#C8104F` | Hover / pressed state for magenta |
| `--vilt-magenta-300` | `#F26A99` | Tint / inverse‑surface links |
| `--vilt-magenta-100` | `#FCE0EB` | Surface tint / soft accent backgrounds |
| `--vilt-navy` | `#2C3848` | Primary text + wordmark |
| `--vilt-navy-700` | `#1E2733` | Deeper navy / inverse surface (footer, dark sections) |
| `--vilt-navy-400` | `#5A6878` | Secondary text |
| `--vilt-navy-100` | `#E5E8ED` | Surface tint |
| `--vilt-rose` | `#FF4D87` | Gradient stop only |
| `--vilt-ink` | `#1A1A1A` | Near‑black body alternative |
| `--vilt-graphite` | `#2E2E33` | Heading text |
| `--vilt-slate` | `#5A5A63` | Secondary text |
| `--vilt-silver` | `#9A9AA3` | Muted / placeholders |
| `--vilt-mist` | `#D6D6DC` | Dividers, form field borders |
| `--vilt-fog` | `#EFEFF2` | Surface tint / cards |
| `--vilt-cloud` | `#F7F7F9` | Page tint background |
| `--vilt-paper` | `#FFFFFF` | Default page background |

**Color philosophy:** Deep cool navy + a single hot magenta pop, on white. Navy owns wordmark, body type, inverse surfaces. Magenta is signature accent — **used sparingly and confidently**, ideally one accent moment per screen (primary CTA, eyebrow, hover underline). White dominates; navy `#1E2733` is the inverse surface.

### Signature Gradients

Reserved for **hero blocks and accent strips only**. Never as a default body background.

```css
--grad-magenta: linear-gradient(135deg, #E81464 0%, #FF4D87 100%);
--grad-navy:    linear-gradient(135deg, #1E2733 0%, #2C3848 60%, #5A6878 100%);
--grad-mix:     linear-gradient(135deg, #2C3848 0%, #E81464 100%);
```

### Typography

**Family:** `Plus Jakarta Sans` (substituted from Google Fonts — the closest free match to the site's humanist‑geometric sans). If VILT later licenses their real family (Sofia Pro / Avenir Next / Gilroy class), drop the `.woff2` files in `/fonts/` and update the `--font-sans` token.

```css
--font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
```

Weights to load: **300, 400, 500, 600, 700, 800**. The brand uses all of them — light (300) for the soft half of mixed‑weight headlines, black (800) for the hook.

**Scale (fluid `clamp()` for headings):**

| Token | Size | Use |
|---|---|---|
| `--fs-hero` | `clamp(48px, 6vw, 84px)` | Top‑of‑page hero |
| `--fs-h1` | `clamp(36px, 4.4vw, 56px)` | Page H1 |
| `--fs-h2` | `clamp(28px, 3.2vw, 40px)` | Section heading |
| `--fs-h3` | `24px` | Sub‑section |
| `--fs-h4` | `20px` | Card title |
| `--fs-lg` | `18px` | Lead paragraph |
| `--fs-body` | `16px` | Body |
| `--fs-sm` | `14px` | Small body / form labels |
| `--fs-xs` | `12px` | Captions |
| `--fs-eyebrow` | `13px` | Section eyebrows (uppercased, `letter-spacing: 0.18em`) |

**Line heights:** `--lh-tight: 1.05`, `--lh-snug: 1.2`, `--lh-normal: 1.5`, `--lh-loose: 1.7` (use loose for body — VILT runs generous leading).

**Tracking:** Headlines tight (`-0.02em` to `-0.035em`). Eyebrows wide (`0.18em`, uppercase). Body normal.

**Headlines must use `text-wrap: balance`.**

### Spacing — 8pt scale

```
--sp-1: 4px    --sp-6: 32px
--sp-2: 8px    --sp-7: 48px
--sp-3: 12px   --sp-8: 64px
--sp-4: 16px   --sp-9: 96px  (default vertical section padding)
--sp-5: 24px   --sp-10: 128px
```

**Containers:** `--container: 1200px` (default), `--container-wide: 1320px`.

**Default section vertical padding: `--sp-9` (96px).** Sections must breathe.

### Radii

```
--r-sm: 4px       --r-xl: 24px
--r-md: 8px       --r-2xl: 32px   (hero / large cards / CTA bands)
--r-lg: 14px      --r-pill: 999px (buttons, chips, tags)
```

Cards default to `--r-lg` (14px). Buttons are always full pills.

### Shadows

Very soft, low‑contrast — corporate, mostly flat.

```css
--shadow-1: 0 1px 2px rgba(26,26,26,.04), 0 1px 3px rgba(26,26,26,.06);
--shadow-2: 0 4px 12px rgba(26,26,26,.06), 0 2px 4px rgba(26,26,26,.04);
--shadow-3: 0 12px 32px rgba(26,26,26,.10), 0 4px 8px rgba(26,26,26,.05);
--shadow-navy:    0 18px 40px -12px rgba(44, 56, 72, 0.35);
--shadow-magenta: 0 18px 40px -12px rgba(232, 20, 100, 0.45);
```

Cards: borderless, `--shadow-1` default, lift to `--shadow-2` on hover.

### Motion

```
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--t-fast: 150ms    --t-base: 250ms    --t-slow: 420ms
```

All transitions use `var(--ease-out)` unless specifically reversed. Standard duration is `--t-base` (250ms).

---

## Background, Borders, Elevation Rules

- **Default surfaces:** white (`--vilt-paper`) or cloud (`--vilt-cloud`).
- **Hero & callouts:** **photographic backgrounds** of teams + workplaces, often with a soft warm overlay. Never abstract gradient‑only backgrounds.
- **Dark sections:** solid `--vilt-navy-700`.
- **Gradients:** accent strips and pull‑quotes only.
- **No textures, no hand‑drawn illustration, no repeating patterns, no grain.**
- **Cards:** white, `--r-lg` corners, `--shadow-1`. Borderless by default. Thin `--vilt-mist` 1px border **only** on form fields and dropdowns.
- **Pills:** `--r-pill` for tags, chips, all buttons.
- **No left‑border accent stripes. No glassmorphism / backdrop‑blur on standard surfaces** (only on the sticky nav at scroll).

---

## Interaction States

- **Links:** colour shift navy → magenta, no underline by default; underline appears on hover (magenta).
- **Primary buttons:** magenta background → darken to `--vilt-magenta-600` on hover; press = darken further, **no scale**.
- **Outline buttons:** fill with their accent on hover.
- **Cards:** subtle `translateY(-2px)` + shadow lift on hover. **No glow, no border‑colour change.**
- **All transitions:** `250ms cubic-bezier(0.22, 1, 0.36, 1)`.
- **Soft fade‑up on scroll** for sections (~30px translate + opacity). No bounces. No parallax beyond the hero image.
- **Decorative micro‑interactions only on the "joinus+" CTA** — the `+` rotates 90deg on hover.

---

## Components

The reference UI kit at `reference_ui_kit/website/` is a clickable React/JSX implementation of the marketing homepage. Recreate each component in the target codebase using its idioms (e.g. `<TopNav>` becomes a `.tsx` component with the same DOM structure and tokens).

### Component Inventory

| Component | Spec file | Notes |
|---|---|---|
| `TopNav` | `reference_ui_kit/website/index.html` | Sticky; translucent on scroll (`backdrop-filter: saturate(140%) blur(8px)` on `rgba(255,255,255,0.92)`). 18px × 40px padding. 32px gap. |
| `LangSwitcher` | inside `TopNav` | 6 langs: EN / ES / PT‑PT / PT‑BR / DE / FR. Dropdown popover with `--shadow-3`. |
| `HeroBlock` | `reference_ui_kit/website/Hero.jsx` | Split grid `1.1fr 1fr`, 56px gap, max 1320px. Headline mixes weight 300 + 800. |
| `IntroBanner` | `reference_ui_kit/website/Hero.jsx` | Floating pill "Apresentando a VILT >" top‑right, 96px top / 40px right. |
| `SectionEyebrow` | `reference_ui_kit/website/kit.css` `.section__eyebrow` | 13px, weight 700, `letter-spacing: 0.18em`, uppercase, magenta. |
| `TXBlock` | `reference_ui_kit/website/TX.jsx` | Tabs grid `1fr 1.4fr`; active tab gets white bg + magenta left border. |
| `DiffCard` | `reference_ui_kit/website/Differentiators.jsx` | Auto‑fit grid, min 240px. 28/24/26 padding. 5 colour variants (a–e) for `.diff__art`. |
| `CommandmentList` | `reference_ui_kit/website/Differentiators.jsx` | Numbered "5 Mandamentos". `--font-mono` numerals in magenta, 18px body. |
| `JoinUsCTA` | `reference_ui_kit/website/JoinChatFooter.jsx` | `--grad-mix` background, `--r-2xl` radius, 56/48 padding. "+" superscript rotates 90deg on hover. |
| `LetsChatForm` | `reference_ui_kit/website/JoinChatFooter.jsx` | Dark navy card. Inputs: `rgba(255,255,255,0.06)` bg, `0.18` border, magenta focus ring. |
| `Footer` | `reference_ui_kit/website/JoinChatFooter.jsx` | `--vilt-navy-700` bg. 6px top accent strip with `--grad-mix`. 3‑col grid `2fr 1fr 1fr`. |

### Component‑level specs

Open `reference_ui_kit/website/kit.css` for exact paddings, gaps, hover states, and the small set of CSS custom properties each component depends on. Every measurement, transition timing, and pseudo‑element is documented there.

### Token‑based examples to mirror

```css
/* Primary CTA */
.btn-primary {
  background: var(--vilt-magenta);
  color: #fff;
  border-radius: var(--r-pill);
  padding: 14px 26px;
  font-weight: var(--fw-semibold);
  font-size: 14px;
  transition: background var(--t-fast) var(--ease-out);
}
.btn-primary:hover { background: var(--vilt-magenta-600); }

/* Card */
.card {
  background: var(--vilt-paper);
  border-radius: var(--r-lg);
  padding: var(--sp-6);
  box-shadow: var(--shadow-1);
  transition: transform var(--t-base) var(--ease-out),
              box-shadow var(--t-base) var(--ease-out);
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}

/* Section eyebrow */
.eyebrow {
  font-size: var(--fs-eyebrow);
  font-weight: var(--fw-bold);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
```

---

## Iconography

VILT's marketing site has **no proprietary icon set**. The system standardises on **Lucide** (https://lucide.dev — already a React/Vue library, or `lucide-static` CDN).

- **Library:** Lucide outline.
- **Stroke:** 1.5px (Lucide default).
- **Sizes:** 20px inline, 24px block, 32px feature.
- **Colour:** `currentColor`; use `--accent` for emphasis.
- **Never** use emoji.
- **Never** use multicoloured / glyph‑heavy icon styles (FontAwesome Solid, Streamline Coloured, etc.). Lucide outline only.

If VILT adopts a proprietary icon set later, swap by changing the import — keep all sizing/stroke conventions.

---

## Imagery & Assets

### Logo files (provided in `assets/`)

| File | Use |
|---|---|
| `vilt-logo.svg` | Hi‑res primary. **Aspect is 1477 × 408** — wordmark with a large left padding. Crop or use a wrapper that ignores the empty area. |
| `vilt-logo-alt.svg` | Wordmark‑only crop (no padding). Prefer this for tight UI lockups. |
| `vilt-logo-light.svg` | Inverse / on‑dark version. |
| `vilt-logo-163x50.png` | Compact raster lockup for fixed‑size UI (top nav, email signatures). |
| `vilt-mark.svg` | "X" glyph only (magenta mark). For favicons, app icons, small badges. |

### Photography (NOT included — placeholder paths only)

The brand relies on **warm, lightly desaturated candid photography of multicultural teams** — meeting rooms, laptops, smiles, real workplaces. Editorial, not corporate stock‑clean. Skin tones preserved; no heavy filtering.

The reference HTML uses placeholder gradient blocks. In production, replace with real photo paths:

| Placeholder slot | Suggested path |
|---|---|
| Hero image | `/img/hero/team-collaboration.jpg` |
| CX block | `/img/cx.jpg` |
| EX block | `/img/ex.jpg` |
| CSR block | `/img/csr.jpg` |
| About page hero | `/img/about-*.jpg` |
| Differentiator cards | `/img/diff/*.jpg` |

Photographs were referenced by URL from the live site but not downloaded (CORS). Work with VILT's marketing team to source the actual library.

### Certifications

Footer shows APCER ISO 9001, APCER, ENS Certificación badges as flat PNGs. Treat as supplied assets; place at `/img/certs/*.png` and tint to monochrome white at 12% alpha on the dark footer (see `.footer__cert` rule in `kit.css`).

---

## Layout System

- **Photograph‑led:** a square‑ish image takes one column, a generous text block takes the other; alternate left/right between sections.
- **Sticky top nav** with translucent backdrop‑blur at scroll.
- **Full‑width footer** in `--vilt-navy-700`.
- **Default page rhythm:** 96px (`--sp-9`) vertical padding between blocks.
- **Max content width:** 1200px / 1320px (wide).
- **Responsive:** column splits collapse to single‑column under ~880px. Hero headline scales fluidly via `clamp()` — no extra breakpoints needed for headings.

---

## Accessibility Requirements

- **Color contrast:** magenta `#E81464` on white = 4.55:1 (passes AA for large text and UI components, **does not pass AA for body text smaller than 18px**). Use magenta only for: CTAs (always 14px+ bold), eyebrows (uppercase 13px is allowed as a graphic element but consider it decorative), hover states. **Body links should stay navy by default** and only shift to magenta on hover.
- **Focus rings:** All interactive elements need a visible focus ring. Form inputs use `box-shadow: 0 0 0 3px rgba(232,20,100,0.25)` + magenta border (see `.form input:focus`). Apply the same treatment to buttons and links.
- **`text-wrap: balance`** for headings is a progressive enhancement; no fallback required.
- **`prefers-reduced-motion`:** the scroll‑fade‑up and the `+` rotate should be disabled. Wrap motion in a `@media (prefers-reduced-motion: no-preference)` block.

---

## State Management & Behaviour

The reference UI is mostly static / presentational. Behaviour to wire:

- **`LangSwitcher`** — open/close popover state. Persist selected language in localStorage / cookie.
- **`TXBlock`** — single‑select tab state (CX / EX). No URL persistence needed.
- **`LetsChatForm`** — controlled inputs (`name`, `email`, `subject`, `message`, `consentChecked`). Submit handler POSTs to the contact endpoint. On success, replace form body with `.form__success` confirmation message.
- **`JoinUsCTA`** — hover state drives the `+` rotation (pure CSS, no JS).
- **Sticky nav** — `position: sticky` from `top: 0`. Optionally toggle a `.is-scrolled` class past 20px scroll to deepen the shadow.

---

## Files in this Handoff

```
design_handoff_vilt_design_system/
├── README.md                           ← this file
├── tokens/
│   └── colors_and_type.css             ← all design tokens, import everywhere
├── assets/
│   ├── vilt-logo.svg                   ← primary (wide aspect)
│   ├── vilt-logo-alt.svg               ← wordmark crop
│   ├── vilt-logo-light.svg             ← inverse
│   ├── vilt-logo-163x50.png            ← raster lockup
│   └── vilt-mark.svg                   ← "X" glyph
├── reference_ui_kit/
│   └── website/
│       ├── index.html                  ← full homepage prototype
│       ├── kit.css                     ← component CSS (the spec)
│       ├── Hero.jsx
│       ├── TX.jsx
│       ├── Differentiators.jsx
│       └── JoinChatFooter.jsx
└── reference_previews/                 ← single‑specimen HTML cards
    ├── brand-logo.html
    ├── colors-brand.html
    ├── colors-neutrals.html
    ├── colors-gradients.html
    ├── type-display.html
    ├── type-body.html
    ├── type-weights.html
    ├── spacing-scale.html
    ├── radii.html
    ├── shadows.html
    ├── iconography.html
    ├── components-buttons.html
    ├── components-cards.html
    ├── components-chips.html
    ├── components-forms.html
    ├── components-nav.html
    └── components-footer.html
```

---

## Implementation Checklist

For the engineer adopting this in a real codebase:

- [ ] Decide framework (or use existing — React/Vue/Next/Nuxt/Astro/etc.)
- [ ] Port `tokens/colors_and_type.css` into the codebase's theme system
  - CSS custom properties: import the file as‑is into the global stylesheet
  - Tailwind: extend `theme.colors`, `theme.fontSize`, `theme.spacing`, `theme.borderRadius`, `theme.boxShadow` with the values
  - CSS‑in‑JS / styled‑system: build a theme object from the same values
  - Native: translate to platform tokens (e.g. SwiftUI `Color`, Android `colors.xml`)
- [ ] Load `Plus Jakarta Sans` weights 300/400/500/600/700/800 (Google Fonts or self‑host `.woff2`)
- [ ] Copy logo assets into the public/static asset folder
- [ ] Install Lucide (`lucide-react` / `lucide-vue-next` / `lucide-static`) and standardise on outline, 1.5px stroke
- [ ] Recreate each component listed in the **Component Inventory** table, matching the spec in `reference_ui_kit/website/kit.css`
- [ ] Hook up `LetsChatForm` to the real contact endpoint
- [ ] Wire `prefers-reduced-motion` for scroll fade and `+` rotation
- [ ] Source real photography to replace placeholder gradient blocks
- [ ] Confirm with VILT marketing whether to swap `Plus Jakarta Sans` for a licensed family (Sofia Pro / Avenir Next / Gilroy)

---

## Known Caveats / Open Questions for VILT

1. **Font substitution.** `Plus Jakarta Sans` is a close visual match, not the real brand family. Confirm before production.
2. **Photography library.** Not bundled — needs to be sourced from the marketing team or shot fresh.
3. **Certification badges.** Footer placeholders need real APCER / ENS PNGs.
4. **Iconography.** Lucide is a design‑system choice, not a brand‑mandated set. Flag if VILT adopts a proprietary set later.
5. **Logo SVG aspect.** The primary `vilt-logo.svg` is 1477 × 408 with a large left padding region. Use `vilt-logo-alt.svg` for tight lockups, or wrap with overflow‑hidden + negative margin.
