# Handoff: Portfolio Redesign (Franky Kyaw)

## Overview
A bold, playful redesign of the existing single-page portfolio. It keeps all current
content (hero, about, experience, projects, contact) but replaces the generic
slate/teal template look with an editorial, high-contrast aesthetic: alternating
ink/cream bands, an animated terminal hero, a filterable project gallery with a
detail modal, a vertical experience timeline, and scroll-reveal motion throughout.

**Target codebase:** the existing Next.js (App Router) + Tailwind app in this repo.
**Chosen palette:** **Riso** (electric blue + magenta on cool near-black) — this is the
default to ship. Three alternate palettes exist in the prototype but are optional.

---

## About the Design Files
The files in `reference/` are a **design reference built in plain HTML + React (via
Babel) + hand-written CSS**. They are a prototype that demonstrates the intended look,
layout, and behavior. **They are not meant to be dropped into the Next.js app as-is.**

Your job is to **recreate these designs inside this repo's existing environment** —
Next.js App Router, React components in `components/`, Tailwind CSS, `react-icons`,
`react-scroll`. Reuse the established file/component structure (one component per
section). Translate the prototype's raw CSS into Tailwind classes (or a small amount of
CSS in `globals.css` where Tailwind is awkward, e.g. keyframes and the terminal).

Reference files:
- `reference/Portfolio.html` — entry shell (font links, script order).
- `reference/portfolio/styles.css` — **the source of truth for all visual tokens & layout.**
- `reference/portfolio/data.jsx` — all content (profile, stats, terminal lines, skills, experience, projects).
- `reference/portfolio/hero.jsx` — hero + animated terminal.
- `reference/portfolio/projects.jsx` — filterable gallery + modal.
- `reference/portfolio/sections.jsx` — nav, about, experience, contact, footer.
- `reference/portfolio/app.jsx` — palette system, scroll-reveal, magnetic hover, Tweaks (Tweaks panel is prototype-only — do NOT port it).

## Fidelity
**High-fidelity.** Colors, typography, spacing, and interactions are final. Recreate
pixel-faithfully using Tailwind + the components below. Exact tokens are in
§Design Tokens and in `reference/portfolio/styles.css`.

---

## Mapping to your existing components

| Your file | Prototype source | Notes |
|---|---|---|
| `components/Navbar.tsx` | `sections.jsx` → `Nav` | Sticky; transparent → blurred ink on scroll. Keep `react-scroll` links. **Remove the `next-themes` light/dark toggle** (see §Theme note). |
| `components/HomeSection.tsx` | `hero.jsx` → `Hero` + `Terminal` | Two-column: text left, animated terminal + stat grid right. |
| `components/AboutSection.tsx` | `sections.jsx` → `About` | Two-column: bio left, photo + skill chips right. |
| `components/ExperienceSection.tsx` | `sections.jsx` → `Experience` | Vertical timeline on an ink band. |
| `components/ProjectsSection.tsx` | `projects.jsx` → `Projects` | Filter bar + responsive card grid + detail modal. Featured card spans full width. |
| `components/ContactSection.tsx` | `sections.jsx` → `Contact` | Centered big CTA on an ink band. |
| `components/Footer.tsx` | `sections.jsx` → footer (inside `Contact`) | Single row; you can keep it as its own component. |
| `app/page.tsx` | `app.jsx` render tree | Order: Home → About → Experience → Projects → Contact. |

The content/copy in the prototype is slightly tightened from your originals — use the
prototype copy (it's in `data.jsx`). All of it is true to your real experience.

---

## Theme note (important)
The current app uses `next-themes` with a light/dark **toggle**. This redesign is **not
a light/dark theme** — it's an intentional sequence of dark (ink) and light (cream)
**bands** that's the same in all conditions. Recommended:
- Remove the `next-themes` provider, the toggle button in `Navbar.tsx`, and `dark:`
  variants. The page is always its designed self.
- Set `<html>` background to the ink color so there's no white flash.

If you want to *keep* a palette switcher as a feature, expose the 4 palettes (below) via
a `data-palette` attribute on `<html>` and CSS variables — but that's optional and not
required to ship.

---

## Design Tokens

### Color — ship the **Riso** palette
Define these as CSS variables on `:root` in `globals.css`, then reference them from
Tailwind via `theme.extend.colors` (see §Tailwind setup). Hex values:

| Token | Hex | Use |
|---|---|---|
| `--accent` | `#4361FF` | Primary accent (links, highlights, primary button, logo mark, terminal prompt) |
| `--accent-ink` | `#FFFFFF` | Text/icon color **on** the accent (e.g. primary button label) |
| `--accent2` | `#FF4D8D` | Secondary accent (section kickers on cream, small highlights) |
| `--ink` | `#0E0E16` | Dark band background |
| `--ink-soft` | `#181826` | Cards/terminal on ink |
| `--ink-line` | `#292940` | Borders/dividers on ink |
| `--on-ink` | `#ECECF6` | Primary text on ink |
| `--on-ink-dim` | `#9A9AB8` | Secondary text on ink |
| `--cream` | `#F0EFF7` | Light band background |
| `--cream-soft` | `#FBFAFF` | Cards on cream |
| `--cream-line` | `#DCDAEE` | Borders on cream |
| `--on-cream` | `#14131F` | Primary text on cream |
| `--on-cream-dim` | `#62607A` | Secondary text on cream |

Alternate palettes (optional — same variable names, swap values):
- **Voltage** (original): accent `#CDF34A`, accent-ink `#181707`, accent2 `#FF6A3D`, ink `#15140F`, ink-soft `#1F1D16`, ink-line `#322F25`, on-ink `#F2EFE6`, on-ink-dim `#A7A294`, cream `#F3EFE4`, cream-soft `#FBF8F0`, cream-line `#E2DCCA`, on-cream `#1A1812`, on-cream-dim `#6C6557`.
- **Solar**: accent `#FFB22C`, accent-ink `#211609`, accent2 `#E5484D`, ink `#17120E`, ink-soft `#221B14`, ink-line `#382C20`, on-ink `#F5ECE0`, on-ink-dim `#B0A08A`, cream `#F6F0E6`, cream-soft `#FDF9F1`, cream-line `#E7DCC7`, on-cream `#1D1610`, on-cream-dim `#756650`.
- **Mint**: accent `#2FE6AD`, accent-ink `#052018`, accent2 `#FF5CA8`, ink `#0B1413`, ink-soft `#14201E`, ink-line `#243532`, on-ink `#E6F4F0`, on-ink-dim `#8FB0A8`, cream `#EAF3F0`, cream-soft `#F7FBF9`, cream-line `#D2E3DD`, on-cream `#0C1716`, on-cream-dim `#5B6F6A`.

### Typography
| Role | Family | Weights | Used for |
|---|---|---|---|
| Display | **Bricolage Grotesque** | 600/700/800 | All headings, name, big numbers |
| Body | **Hanken Grotesk** | 400/500/600/700 | Paragraphs, buttons, chips, nav |
| Mono | **JetBrains Mono** | 400/500/600 | Terminal, kickers (`/ about`), eyebrows, stat labels, period pills, footer |

Type scale (clamp = responsive): hero name `clamp(48px,6.2vw,82px)`/800/lh .96/ls -.04em ·
section titles `clamp(36px,5vw,60px)`/800/lh 1/ls -.03em · contact headline
`clamp(40px,6.2vw,74px)`/800/lh 1.02 · body 17–19px/lh 1.6–1.72 · mono kickers 13px ·
chips 14px · stat numbers 26px/800.

### Radii / shadow / spacing
- Radii: buttons & pills `999px`; cards/terminal `16–18px`; chips `999px`; modal `22px`; logo mark `11px`.
- Card shadow on hover (cream): `0 30px 60px -28px rgba(0,0,0,.32)`.
- Terminal shadow: `0 40px 80px -30px rgba(0,0,0,.6)`.
- Section vertical padding: `130px` desktop, `96px` ≤940px.
- Content max-width: `1180px`, side padding `28px` (`20px` on mobile).

### Keyframes / motion
- `revIn`: opacity 0→1, translateY 26px→0, `.72s cubic-bezier(.2,.7,.2,1)`. Stagger via `animation-delay` (children index × 90ms).
- `cardin` (project cards): opacity 0→1, translateY 22px + scale .98→1, `.5s`, stagger index × 70ms.
- Caret blink, `pulse` (live dot / current-role node), `floaty` (hero glow), `scrolldn` (scroll hint line). All in `styles.css`.
- Button/card hover: transform + color transitions `.2–.3s`.

---

## Screens / Views & Components

### 1. Navbar (`components/Navbar.tsx`)
- Fixed top, full width, z-50. Transparent initially; after `scrollY > 40` → background
  `color-mix(in oklab, var(--ink) 78%, transparent)` + `backdrop-blur(14px)` + 1px
  `--ink-line` bottom border.
- Left: `FK` logo mark — 38×38, `--accent` bg, `--accent-ink` text, Bricolage 800,
  `border-radius:11px`, rotated `-4deg` (→ `+4deg` scale 1.05 on hover) + "Franky Kyaw" (Bricolage 700, 18px).
- Right: nav links (About/Experience/Projects/Contact via `react-scroll`, color
  `--on-ink-dim` → `--on-ink`, animated 2px `--accent` underline on hover) + a pill
  "Résumé ↗" link (1px `--ink-line` border → fills `--accent` on hover).
- Mobile ≤680px: hamburger toggles a full-width ink dropdown.

### 2. Hero / Home (`components/HomeSection.tsx`)
Ink band, `min-height:100vh`, two columns (`1.05fr .95fr`, gap 64px; stacks ≤940px).
- Background: faint dot-grid (radial-gradient dots, 34px, masked toward top-right) + a
  blurred `--accent` glow blob (`floaty` animation).
- **Left:** mono eyebrow with pulsing dot (`boston, ma · available for work`) → H1 name
  (Bricolage 800, the big clamp) → H2 role: "IT & Cloud Engineer" in `--accent` + "who
  ships software." in `--on-ink-dim` → blurb (≤480px, `--on-ink-dim`) → two buttons
  (primary "See my work ↓" = `--accent`/`--accent-ink`; ghost "Get in touch" = 1px
  border) → mono social row (GitHub / LinkedIn / Résumé ↗).
- **Right:** the **terminal** (see §Interactions) + a 4-up stat grid (`--ink-soft`
  cards, value in `--accent` Bricolage 800, mono label; lift + accent border on hover).
- Bottom-center mono "scroll" hint with an animated line.

### 3. About (`components/AboutSection.tsx`)
Cream band, two columns (1fr/1fr, stacks ≤940px).
- Left: kicker `/ about` (mono, `--accent2`) → title "Two disciplines, one engineer."
  → three bio paragraphs (`--on-cream-dim`, `strong` → `--on-cream`); last paragraph is
  italic with a 2px `--accent` left border.
- Right: a 4:3 **photo placeholder** (rounded 20px, 1px `--cream-line`; in the prototype
  this is a drag-drop slot — in the app use a `next/image` with Franky's photo, or a
  styled empty box until one's supplied; keep the small `// you, here` mono tag) → two
  skill groups ("IT & Cloud", "Development") as wrapping chips. IT chips use an
  accent-tinted fill (`color-mix(--accent 22%, --cream-soft)`, accent-ish border); dev
  chips are neutral (`--cream-soft` + `--cream-line`). Chips lift on hover.

### 4. Experience (`components/ExperienceSection.tsx`)
Ink band. Kicker `/ the path so far` + title "Experience". Vertical timeline (2px
`--ink-line` rail). Each item: a node dot on the rail (current role's dot uses `--accent`
+ `pulse`) and an `--ink-soft` card (slides right + accent-tinted border on hover) with
title (Bricolage 700), company in `--accent` + location in `--on-ink-dim`, a period pill
(mono; current role's pill is filled `--accent`), and `▸` bullets (markers `--accent`).
Data: 3 roles in `data.jsx`.

### 5. Projects (`components/ProjectsSection.tsx`)
Cream band. Kicker `/ selected work` + title "Things I've built" + lead.
- **Filter bar:** pill buttons `All / Web / Mobile / AI/ML / Backend / Cloud`, each with
  a live count. Active = filled `--on-cream`/`--cream`. Filtering re-renders the grid
  (cards replay `cardin`).
- **Grid:** 2 columns (1 col ≤940px), gap 26px. Cards = `--cream-soft`, 1px
  `--cream-line`, radius 18px; lift + shadow + accent border on hover; image zooms 1.05
  and a gradient "View details →" overlay fades in. Card body: name (Bricolage 700),
  blurb, tag chips.
- **Featured card** (Smart Credit AI, `featured:true`): spans full width as a horizontal
  split — image left (~1.3fr), text right (1fr); shows a "Featured · Live on App Store"
  flag. Stacks on mobile.
- **Detail modal:** clicking a card opens a centered modal (scrim = `--ink` 72% +
  blur). Modal: large image, tag chips, title, blurb, mono "stack pills", and link
  buttons (Visit site / App Store / GitHub depending on the project). Close via ✕
  (rotates on hover) or scrim click. Animate in with a pop/fade.
- Project data, tags, stacks, and links are all in `data.jsx`. Screenshots already live
  in `public/` (see §Assets).

### 6. Contact (`components/ContactSection.tsx`) + Footer
Ink band, centered, with a soft `--accent` glow at the bottom. Kicker `/ say hello` →
big headline "Let's build something **solid.**" (`solid.` in `--accent`) → lead →
primary "Email me →" button (`mailto:`) → mono row (GitHub / LinkedIn / Résumé).
Footer: top border, single mono row — `© 2026 Franky Kyaw` · build credit · "Back to top ↑".

---

## Interactions & Behavior

### Animated terminal (hero) — implement imperatively, not with React state
The prototype types lines from `TERMINAL` in `data.jsx` (command lines type
char-by-char; output lines appear after a beat; a block caret blinks; finishes on a
resting prompt). **Implement this with a `useEffect` + refs that writes into a DOM node
directly** (or a small `requestAnimationFrame`/`setTimeout` loop) — do **not** drive it
with `useState` per character (that causes hundreds of re-renders). See
`reference/portfolio/hero.jsx` `Terminal` for the exact imperative approach to port.
Respect `prefers-reduced-motion`: render all lines instantly.

### Scroll reveal — use IntersectionObserver in production
Elements fade/slide in (`revIn`) as they enter the viewport, staggered by a `data-d`
index. In your Next.js app, implement a tiny client hook:
```ts
// useReveal: add a class when the element intersects, once.
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
```
> NOTE: the prototype uses a scroll-listener + setTimeout "safety net" instead of a
> clean IntersectionObserver. That was **only** to survive the design tool's throttled
> iframe preview — in a real browser, use the simple IntersectionObserver above. Don't
> port the safety-net/`shown` hack.

### Magnetic hover
Primary/ghost buttons translate slightly toward the cursor on `mousemove` (factor
~0.18/0.22), reset on `mouseleave`. Optional nicety; disable under reduced motion.

### Other states
- Nav: transparent → blurred on scroll (listener on `scrollY`).
- Project filter: maintain `filter` state; `useMemo` the filtered list; re-key the grid so cards re-animate.
- Modal: `open` state holds the active project; Esc/scrim/✕ closes; lock body scroll while open.
- All hovers per §Screens.

### Responsive
- ≤940px: hero, about, and project grid collapse to one column; featured card stacks; section padding → 96px.
- ≤680px: nav becomes a hamburger dropdown; stat grid → 2 cols; hero name shrinks; footer stacks.

---

## State Management
Local React state only — no global store, no data fetching (content is static in
`data.jsx`, which you can move to a `lib/data.ts` or keep inline per component):
- Navbar: `scrolled: boolean`, `mobileOpen: boolean`.
- Projects: `filter: string`, `openProject: Project | null`.
- Terminal: imperative (refs), no state.

---

## Tailwind setup (concrete)

**1. Fonts** — use `next/font/google` in `app/layout.tsx`:
```ts
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
const display = Bricolage_Grotesque({ subsets:["latin"], weight:["600","700","800"], variable:"--font-display" });
const body    = Hanken_Grotesk({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-body" });
const mono    = JetBrains_Mono({ subsets:["latin"], weight:["400","500","600"], variable:"--font-mono" });
// add `${display.variable} ${body.variable} ${mono.variable}` to <html> className,
// and set <body className="font-body bg-ink text-on-ink">
```

**2. `globals.css`** — declare the Riso variables on `:root` and the keyframes
(copy `revIn`, `cardin`, `pulse`, `floaty`, `blink`, `scrolldn` from `styles.css`). Keep
the terminal styles here too (easier than Tailwind).

**3. `tailwind.config.js`** — extend:
```js
theme: { extend: {
  colors: {
    accent: "var(--accent)", "accent-ink": "var(--accent-ink)", accent2: "var(--accent2)",
    ink: "var(--ink)", "ink-soft": "var(--ink-soft)", "ink-line": "var(--ink-line)",
    "on-ink": "var(--on-ink)", "on-ink-dim": "var(--on-ink-dim)",
    cream: "var(--cream)", "cream-soft": "var(--cream-soft)", "cream-line": "var(--cream-line)",
    "on-cream": "var(--on-cream)", "on-cream-dim": "var(--on-cream-dim)",
  },
  fontFamily: {
    display: ["var(--font-display)","sans-serif"],
    body: ["var(--font-body)","sans-serif"],
    mono: ["var(--font-mono)","monospace"],
  },
}}
```
Then bands are just `bg-ink text-on-ink` / `bg-cream text-on-cream`, etc. Remove the old
`darkMode:"class"` + `dark:` usage once the theme toggle is gone.

---

## Assets
Project screenshots are already in `public/` and are referenced by `data.jsx`:
`SmartCredit.png`, `mockAiInterview.png`, `PersonalFinanceTracker.png`,
`DeepMelodyLSTM.png`, `TextGPT.png`, `Rust_Rest_API.png`. Résumé PDF:
`public/Franky_Kyaw_resume.pdf`. Icons: keep using `react-icons` (GitHub/LinkedIn/
external-link/App-Store glyphs) — the prototype uses plain text labels but icons are fine.

**TODO before launch:** the contact email in `data.jsx` is a placeholder
(`frankykyaw@example.com`) — replace with the real address. Add a real photo for the
About slot.

---

## Suggested Claude Code prompt
> "Read `design_handoff_portfolio_redesign/README.md` and the files in
> `reference/`. Reimplement my portfolio in the existing Next.js + Tailwind app per that
> spec, using the **Riso** palette. Set up the three Google fonts via `next/font`, add
> the color/font tokens to `globals.css` + `tailwind.config.js`, remove the `next-themes`
> light/dark toggle, and rewrite each `components/*Section.tsx` to match. Keep my
> `react-scroll` nav. Implement the terminal imperatively and scroll-reveal with
> IntersectionObserver (ignore the prototype's safety-net hack). Then run `npm run build`
> to confirm it compiles before I push."

After it compiles locally, commit and push — Vercel builds and deploys on push as it does today.

## Files
- `reference/Portfolio.html`
- `reference/portfolio/styles.css` ← visual source of truth
- `reference/portfolio/data.jsx` ← all content
- `reference/portfolio/hero.jsx`, `projects.jsx`, `sections.jsx`, `app.jsx`
