<div align="center">

<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjYiIGZpbGw9IiMwYjU3ZDAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcgN0g3Yy0yLjc2IDAtNSA0LjI0LTUgNXM1IDUgNSA1aDEwYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01em0wIDhjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzeiIvPjwvc3ZnPg==" width="96" alt="Toggle Design System logo" />

# Toggle — Design System

**A Google Material 3 inspired toggle & switch UI library.**
25 handcrafted switches · live component documentation · an interactive switch generator · a full Material You token system.
Zero dependencies — pure CSS + vanilla JavaScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-0b57d0.svg?style=flat-square)](#-license)
[![Version](https://img.shields.io/badge/version-1.0.0-0d8043.svg?style=flat-square)](package.json)
[![Dependencies](https://img.shields.io/badge/dependencies-0-f9ab00.svg?style=flat-square)](package.json)
[![Pure CSS](https://img.shields.io/badge/pure-CSS-7c3aed.svg?style=flat-square)](#-the-toggle-collection)
[![Material 3](https://img.shields.io/badge/Material%20You-M3-d93025.svg?style=flat-square)](#-design-tokens)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-00838f.svg?style=flat-square)](#-contributing)

<img src="https://img.shields.io/badge/%F0%9F%94%B5-blue%20%C2%B7%20%F0%9F%94%B4-red%20%C2%B7%20%F0%9F%9F%A1-yellow%20%C2%B7%20%F0%9F%9F%A2-green-blue.svg?style=flat-square" alt="Google 4-color accents" />

</div>

---

## Table of Contents

- [Why Toggle?](#why-toggle)
- [Feature Highlights](#-feature-highlights)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [The Toggle Collection](#-the-toggle-collection)
- [Documentation Pages](#-documentation-pages)
- [Design Tokens](#-design-tokens)
- [Custom Switch Studio](#-custom-switch-studio)
- [Usage](#-usage)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Theming, Accent Palette & Sound](#-theming-accent-palette--sound)
- [Accessibility](#-accessibility)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## Why Toggle?

Most switch libraries give you *one* switch. **Toggle** gives you a design system: a Google-style documentation shell (sidebar → canvas → "On this page"), a catalog of 25 production-ready switches from Material 3 to Cyberpunk Plasma, a code inspector with HTML/CSS/React output for every single one, and a live studio that generates brand-new switch CSS from sliders and color pickers.

Everything is framework-free. Drop two stylesheets into any page and the switches work — or open `index.html` and explore the whole system as a living style guide.

---

## ✨ Feature Highlights

| | Feature | What it does |
|---|---|---|
| 🎚️ | **25 handcrafted toggles** | 9 categories: Material, iOS Fluid, Physics & Elastic, Cyber & Glow, Celestial, Retro, Micro-interactions, Minimal, Segmented |
| 📚 | **Google-style docs shell** | Left sidebar navigation, center documentation canvas, right "On this page" table of contents, breadcrumbs and page headers |
| ⌨️ | **Command palette (Ctrl + K)** | Fuzzy search across all 25 documentation pages, plus a `/` shortcut and `Esc` to dismiss |
| 🔍 | **Search & category filters** | Live filter chips + text search inside the toggle showcase, with a live component counter |
| 🧾 | **Code inspector modal** | Every toggle ships with HTML, CSS and React snippets — tabbed, copyable, in monospace |
| 🛠️ | **Custom Switch Studio** | Real-time generator: track width/height, track & thumb radius, transition speed, aura glow, three color pickers → instant CSS / HTML / React export |
| 🎨 | **Material You theming** | Six accent palettes (Google Blue, Green, Red, Yellow, Purple, Cyan Teal) driven by HSL custom properties |
| 🌗 | **Dark & light themes** | Google/Gemini dark palette, follow-system default, persisted in `localStorage` |
| 🔊 | **Tactile Web Audio feedback** | Synthesized "click on / thud off" sounds generated with the Web Audio API — no audio files, toggleable and persisted |
| ⭐ | **Favorites** | Star components and keep them across sessions in `localStorage` |
| 🌊 | **Toggle Wave** | Staggered "toggle all" animation that ripples through the grid |
| 🎲 | **I'm Feeling Lucky** | Randomly highlights and flips a switch on the page |
| 📱 | **Responsive & mobile-ready** | Collapsible sidebar drawer, responsive grids, snackbar toasts |
| ♿ | **Semantic markup** | Native `input[type="checkbox"]`/`radio` underneath every switch, `aria-label`s, keyboard-operable |
| 📦 | **Zero dependencies** | No build step, no npm packages, no framework — the dev server uses only the Node.js standard library |

---

## 🚀 Quick Start

### Prerequisites

- A modern browser (Chrome, Edge, Firefox or Safari)
- [Node.js](https://nodejs.org/) 18+ — **only** needed to run the optional static dev server

### 1. Clone the repository

```bash
git clone https://github.com/Dattebayoolo/Toggle-Ui-Library.git
cd Toggle-Ui-Library
```

### 2. Run it

```bash
npm start        # or: npm run dev  — identical, both run node server.js
```

Then open **http://localhost:3000**.

There is nothing to install: the project has **no dependencies**, so `npm install` is not required. The tiny static server in `server.js` serves the repository over HTTP with correct MIME types, `no-cache` headers and CORS enabled. If port `3000` is busy it automatically tries `3001`, `3002`, … until it finds a free port.

```bash
PORT=8080 npm start                 # macOS / Linux — force a specific port
$env:PORT=8080; npm start           # Windows PowerShell
```

### 3. Or just open the HTML file

Prefer no server? Double-click `index.html` (or open it directly in your browser) — everything is plain, relative-path HTML/CSS/JS. Internet access is recommended so the Outfit, JetBrains Mono and Material Symbols Rounded fonts load from Google Fonts.

---

## 📁 Project Structure

```
Toggle Ui Library/
├── index.html              # App shell: header, docs layout, palette, modals, scripts
├── server.js               # Dependency-free static file server (port 3000, auto-increment)
├── package.json            # Metadata + dev/start scripts
├── css/
│   ├── variables.css       # Material You design tokens (colors, elevation, radii, type, motion)
│   ├── toggles.css         # All 25 switch implementations
│   ├── components.css      # Buttons, FABs, chips, cards, tables, nav, dialogs, skeletons…
│   ├── main.css            # Layout, header, hero, grids, cards, snackbars, studio, responsive rules
│   └── docs.css            # Documentation shell: sidebar, TOC, code boxes, prop tables
└── js/
    ├── audio.js            # SoundEngine — Web Audio synthesized tactile clicks
    ├── toggle-data.js      # TOGGLE_CATALOG — 25 switches × { html, css, react, tags, description }
    ├── components-data.js  # DOCS_DATA — content for all 25 documentation pages
    ├── playground.js       # ToggleStudio — live switch generator + code output
    ├── app.js              # Theme, accent palette, grid rendering, search, inspector, shortcuts
    └── docs.js             # DocsEngine — hash routing, page rendering, command palette, drawer
```

**Architecture in one line:** `index.html` provides the shell, `css/*` provides the visual system, `js/*-data.js` provides the content, and `js/app.js` + `js/docs.js` render and wire everything through `window.TOGGLE_CATALOG`, `window.DOCS_DATA` and `window.ToggleStudio`.

---

## 🎚️ The Toggle Collection

25 handcrafted switches — each pure CSS (a visually hidden native input plus sibling track/thumb elements), each with matching HTML, CSS and React source in the code inspector. Filter them live on the **Toggles & Switches** page.

| Category | Count | Components |
|---|---|---|
| **Material** | 4 | Material 3 Switch · M3 Iconic Switch · Material Touch Halo · Workspace Theme Switch |
| **iOS Fluid** | 1 | iOS 18 Liquid Glass |
| **Physics & Elastic** | 3 | Squishy Jelly Spring · Refraction Glass Marble · Viscous Lava Lamp |
| **Cyber & Glow** | 3 | Cyberpunk Plasma Tube · Holographic Spectrum Shift · Gemini AI Sparkle |
| **Celestial** | 2 | Celestial Day & Night · Warm Morning Coffee |
| **Retro & Tactile** | 3 | Neumorphic Tactile · 8-Bit Retro Pixel · Tactile Grip Ridge |
| **Micro-interactions** | 7 | Equalizer Waves · Password Peek Eye · Nature Sprout & Bloom · Heart Like Micro-burst · Rocket Ignition Thruster · Security Padlock · Wifi Signal Radiator |
| **Minimal** | 1 | Minimalist Swiss Pill |
| **Segmented** | 1 | Segmented Tri-State |

<details>
<summary><strong>Full catalog with IDs and root classes</strong></summary>

| ID | Name | Category | Root class |
|---|---|---|---|
| `m3-standard` | Material 3 Switch | material | `.toggle-m3` |
| `m3-icon` | M3 Iconic Switch | material | `.toggle-m3-icon` |
| `m3-halo` | Material Touch Halo | material | `.toggle-m3-halo` |
| `ios-fluid` | iOS 18 Liquid Glass | ios | `.toggle-ios` |
| `day-night` | Celestial Day & Night | celestial | `.toggle-daynight` |
| `squish-jelly` | Squishy Jelly Spring | physics | `.toggle-squish` |
| `cyberpunk-neon` | Cyberpunk Plasma Tube | glow | `.toggle-cyberpunk` |
| `neumorphic-soft` | Neumorphic Tactile | retro | `.toggle-neumorphic` |
| `sound-equalizer` | Equalizer Waves | micro | `.toggle-equalizer` |
| `password-eye` | Password Peek Eye | micro | `.toggle-eye` |
| `minimalist-swiss` | Minimalist Swiss Pill | minimal | `.toggle-minimal` |
| `nature-sprout` | Nature Sprout & Bloom | micro | `.toggle-nature` |
| `heart-like` | Heart Like Micro-burst | micro | `.toggle-heart` |
| `segmented-tri` | Segmented Tri-State | segmented | `.toggle-segmented` |
| `pixel-arcade` | 8-Bit Retro Pixel | retro | `.toggle-pixel` |
| `space-rocket` | Rocket Ignition Thruster | micro | `.toggle-rocket` |
| `security-lock` | Security Padlock | micro | `.toggle-lock` |
| `wifi-broadcast` | Wifi Signal Radiator | micro | `.toggle-wifi` |
| `glass-marble` | Refraction Glass Marble | physics | `.toggle-marble` |
| `holographic-gradient` | Holographic Spectrum Shift | glow | `.toggle-gradient` |
| `workspace-theme` | Workspace Theme Switch | material | `.toggle-workspace` |
| `tactile-ridge` | Tactile Grip Ridge | retro | `.toggle-tactile` |
| `fluid-lava` | Viscous Lava Lamp | physics | `.toggle-lava` |
| `steaming-coffee` | Warm Morning Coffee | celestial | `.toggle-coffee` |
| `gemini-sparkle` | Gemini AI Sparkle | glow | `.toggle-gemini` |

Every switch inherits the shared `.toggle-base` reset, so focus behaviour, disabled states and cursor affordances stay consistent while each look stays completely its own.

</details>

---

## 📖 Documentation Pages

Routing is hash-based (`index.html#toggles`, `#tokens`, `#dialogs`, …) and every page is generated from `DOCS_DATA` in `js/components-data.js` — add a data object and the page, sidebar link, TOC and command-palette entry all appear.

| Group | Pages |
|---|---|
| **Getting Started** | `overview` — Design System Overview · `tokens` — Design Tokens & Colors |
| **Actions & Controls** | `buttons` — Buttons & FABs · `toggles` — Toggles & Switches · `checkboxes` — Checkboxes & Radios · `sliders` — Sliders & Range · `rating` — Star Rating · `swatches` — Color Swatches |
| **Forms** | `inputs` — Inputs & Text Fields · `pininput` — PIN & OTP Inputs |
| **Data Display** | `chips` — Chips & Badges · `cards` — Cards & Bento Surfaces · `avatars` — Avatars & Presence · `tables` — Data Tables · `accordion` / `accordions` — Accordion & Expansion Panels |
| **Navigation** | `navigation` — Navigation & Rails · `breadcrumbs` — Breadcrumbs |
| **Feedback & Overlays** | `progress` — Progress Indicators · `dialogs` — Dialogs & Modals · `tooltips` — Tooltips & Cues · `feedback` — Dialogs & Snackbars · `skeleton` / `skeletons` — Skeleton Loaders |
| **Tools & Studio** | `studio` — Custom Switch Studio |

Each documentation page renders a breadcrumb trail, page title with feature badges, a live interactive demo stage, tabbed code snippets with copy buttons, and a CSS-properties API table.

---

## 🎨 Design Tokens

The whole system is driven by CSS custom properties in `css/variables.css`, following the Material 3 naming convention. Change one value and everything re-themes — switches, buttons, chips, cards, the entire docs shell.

```css
:root {
  /* Material You dynamic color */
  --md-primary-h: 217;
  --md-primary-s: 89%;
  --md-primary-l: 45%;

  --md-sys-color-primary: hsl(var(--md-primary-h), var(--md-primary-s), var(--md-primary-l));
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: hsl(var(--md-primary-h), 85%, 92%);

  /* Surfaces */
  --md-sys-color-surface: #ffffff;
  --md-sys-color-surface-container: #edf2f7;
  --md-sys-color-on-surface: #1f1f1f;
  --md-sys-color-outline: #74777f;

  /* Elevation, radii, type, motion */
  --elevation-1: 0 1px 2px rgba(0, 0, 0, 0.08), 0 1px 3px 1px rgba(0, 0, 0, 0.04);
  --radius-full: 9999px;
  --font-family: 'Outfit', 'Google Sans', -apple-system, 'Segoe UI', Roboto, sans-serif;
  --transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

| Token family | Examples |
|---|---|
| **Color** | `--md-sys-color-primary`, `--md-sys-color-on-primary`, `--md-sys-color-primary-container`, `--md-sys-color-surface-container-high`, `--md-sys-color-on-surface-variant`, `--md-sys-color-outline-variant` |
| **Brand accents** | `--google-blue`, `--google-red`, `--google-yellow`, `--google-green` |
| **Elevation** | `--elevation-1` … `--elevation-5` (separate dark-mode values) |
| **Radii** | `--radius-xs` (4px) → `--radius-2xl` (32px), `--radius-full` (pill) |
| **Motion** | `--transition-fast`, `--transition-base`, `--transition-spring`, `--transition-slow` |
| **Typography** | `--font-family` (Outfit / Google Sans), `--font-mono` (JetBrains Mono) |

Dark mode is a token swap, not a fork of the styles: `[data-theme="dark"]` re-declares the same properties with the Google/Gemini dark palette (`#131314` surfaces).

---

## 🛠 Custom Switch Studio

The **Custom Studio** page (`index.html#studio`) generates a brand-new switch from scratch:

| Control | Range | Output |
|---|---|---|
| Track width / height | 40–100px / 20–52px | `width`, `height` |
| Track / thumb border radius | 0–50px each | `border-radius` (pill at 50px) |
| Transition duration | 100–700ms | `transition` timing with a spring easing curve |
| Aura glow blur | 0–24px | `box-shadow` glow tinted with the active color |
| Active / inactive / thumb color | Color pickers | `background-color` for each state |

The preview canvas re-renders on every input event, and the code panel exports **CSS**, **HTML** and **React** — copy-ready, with the correct thumb travel distance computed from width, height and padding.

---

## 💻 Usage

### Option A — drop the stylesheets in

```html
<link rel="stylesheet" href="css/variables.css" />
<link rel="stylesheet" href="css/toggles.css" />

<!-- Material 3 switch -->
<label class="toggle-base toggle-m3" aria-label="Material 3 Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>
```

Swap `toggle-m3` for any other root class (`.toggle-ios`, `.toggle-cyberpunk`, `.toggle-pixel`, `.toggle-lava`, …) to change the look — the markup contract stays identical: hidden `input[type="checkbox"]`, then `.track` and `.thumb`.

### Option B — React

Every catalog entry includes a ready-made React component:

```jsx
export function M3Switch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-m3">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb" />
      </span>
    </label>
  );
}
```

### Option C — studio-generated custom switch

Use the CSS emitted by the Studio, or follow its template:

```css
.custom-switch { position: relative; display: inline-flex; width: 60px; height: 32px; cursor: pointer; }
.custom-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.custom-switch .custom-track {
  position: absolute; inset: 0; border-radius: 9999px; background-color: #e1e3e1;
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.custom-switch input:checked + .custom-track { background-color: #0b57d0; }
```

### Option D — add your own component to the catalog

Append an object to `TOGGLE_CATALOG` in `js/toggle-data.js` and it is instantly rendered as a card, filterable by `category`/`tags`, and inspectable in the code modal:

```js
{
  id: "my-switch",
  name: "My Custom Switch",
  category: "material",
  tags: ["Custom", "Pure CSS"],
  description: "Short description shown in the inspector.",
  html: `<label class="toggle-base toggle-mine" aria-label="My Custom Switch">…</label>`,
  css: `.toggle-mine { … }`,
  react: `export function MySwitch() { … }`
}
```

Don't forget to add the matching `.toggle-mine` rules to `css/toggles.css`.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>K</kbd> / <kbd>⌘</kbd> + <kbd>K</kbd> | Open the command palette and search all documentation pages |
| <kbd>/</kbd> | Open the command palette (when not typing in a field) |
| <kbd>Esc</kbd> | Close the palette or the code inspector modal |
| <kbd>Tab</kbd> / <kbd>Space</kbd> | Focus and flip any switch (native checkbox behaviour) |

---

## 🎨 Theming, Accent Palette & Sound

- **Theme** — the header's 🌗 button toggles light/dark; the choice is stored in `localStorage` (`toggle_theme`) and the first visit follows `prefers-color-scheme`.
- **Accent palette** — the 🎨 button opens six Material You swatches that set `--md-primary-h/s/l` on `:root`: **Google Blue**, **Google Green**, **Google Red**, **Google Yellow**, **Google Purple** and **Cyan Teal**.
- **Tactile sound** — the 🔊 button enables Web Audio feedback. `SoundEngine` synthesizes the sound with an oscillator: a crisp ~740→520 Hz sine "pop" when switching on, a softer ~420→280 Hz "thud" when switching off — no audio files shipped, state persisted in `localStorage` (`toggle_sound_enabled`).
- **Favorites** — star cards with the ⭐ button; stored as `toggle_favorites`.
- **Toast feedback** — every action reports back through a Material snackbar.

---

## ♿ Accessibility

- Every switch is built on a **native `input[type="checkbox"]`** (or radio group for the segmented control) that is visually hidden but fully focusable and keyboard-operable — no ARIA reimplementation, no JavaScript-only state.
- Interactive controls carry explicit **`aria-label`s** / visible labels and `title`s.
- Dialogs use `role="dialog"` and `aria-modal="true"`; the command palette and inspector close on <kbd>Esc</kbd> and on backdrop click.
- Icon-only buttons in the header all have accessible names (`aria-label`), and color is never the only signal — toggles change position, shape and iconography.
- The layout collapses gracefully at `1200px`, `992px`, `860px` and `768px`, with a mobile sidebar drawer below that.

> **Known gap:** `prefers-reduced-motion` is not yet honoured — the spring and glow animations always play. A reduced-motion variant is on the roadmap and is a great first contribution.

---

## 🗺️ Roadmap

- [ ] `prefers-reduced-motion` support and an animation-intensity setting
- [x] `:focus-visible` ring polished across the component set ← *help wanted*
- [ ] Ship a single-file `toggle.min.css` bundle (the header download button is currently UI-only)
- [ ] Publish to npm as an installable CSS package
- [ ] TypeScript definitions / `.d.ts` for the React templates
- [ ] Storybook-style isolated preview page
- [ ] More components: steppers, bottom sheets, segmented tabs, date pickers

---

## 🤝 Contributing

Contributions are welcome — new switches, new documentation pages, a11y fixes and token cleanup included.

1. **Fork** the repository and create a branch:
   ```bash
   git checkout -b feature/my-awesome-switch
   ```
2. **Explore** the system locally with `npm start` and the docs at `http://localhost:3000`.
3. **Follow the existing patterns:**
   - Add switches to `TOGGLE_CATALOG` in `js/toggle-data.js` and their CSS to `css/toggles.css` using the `.toggle-base` + `.toggle-<name>` convention.
   - Add documentation pages as objects in `DOCS_DATA` in `js/components-data.js`.
   - Never hardcode colors or radii — use the `--md-sys-color-*`, `--radius-*` and `--transition-*` tokens.
   - Keep it dependency-free: plain browser JavaScript, 2-space indentation, data-driven rendering.
4. **Test manually** in light *and* dark mode, at desktop and mobile widths, with keyboard only.
5. **Open a pull request** describing what changed and include a screenshot or short clip for visual changes.

Found a bug or have an idea? Please [open an issue](https://github.com/Dattebayoolo/Toggle-Ui-Library/issues).

---

## 📄 License

Released under the **MIT License**, as declared in [`package.json`](package.json).

```
MIT License — Copyright (c) Toggle UI Lab
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the Software
without restriction, including the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, subject to the
inclusion of this notice in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

<div align="center">

---

**Built with 🩵🩶🩹 by [Toggle UI Lab](https://github.com/Dattebayoolo)**

Material 3 &amp; Material You are design systems by Google. This project is an independent, community-made implementation inspired by them.

If Toggle helped you ship a nicer switch, consider giving the repo a ⭐

</div>