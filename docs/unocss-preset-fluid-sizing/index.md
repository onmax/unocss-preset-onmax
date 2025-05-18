---
outline: false
changelog: false

cards:
 - title: Quick Start
   href: ./unocss-preset-fluid-sizing/getting-started
   icon: i-tabler:seedling-filled
   span: 'half'
   iconClass: 'text-green text-64'
 - title: Try the Playground
   href: ./unocss-preset-fluid-sizing/getting-started
   icon: i-nimiq:basketball
   span: 'half'
   iconClass: 'text-orange text-64'

features:
  - title: 💧 Fluid Sizing
    description: Fluid sizing with `clamp()` under the hood
    span: 'half'
  - title: 💅 Built-in Theme
    description: Semantic shortcuts like `f-p-lg`, `f-text-xl`
    span: 'half'
  - title: 🏗️ Fine-tune at Utility Level
    description: Override min/max, switch to container width (`100cqw`), even change units (`rem`, `vw`, `%`)
  - title: 🤪 Attributify-friendly
    description: Write `<div f-p="8/16" f-text="sm/lg" />`
  - title: 🧩 CSS-variable mode
    description: Export any fluid value to <code>--f-myvar</code> and reuse it elsewhere
---

.nq-card {
border-radius: 8px;
padding: 24px;
background: rgba(var(--nq-neutral-100));
outline-color: rgb(var(--nq-neutral-300));
}
</style>

  <!--
  📂 unocss-preset-fluid-sizing
├── 📄 Home
│    ├─ Hero / pitch
│    ├─ Key features & badges
│    ├─ Live playground embed + “Try it” CTA
│    └─ Quick install + 2-line usage snippet
│
├── 📄 Getting Started
│    ├─ How fluid sizing works (clamp() overview + diagram)
│    ├─ Install & configure UnoCSS
│    └─ First example (theme shortcut + explicit utility)
│
├── 📄 Installation
│    ├─ Package manager commands (pnpm / npm / yarn / bun)
│    ├─ Add preset to `uno.config.ts`
│    └─ Optional: attributify & CSS-var toggles
│
├── 📄 Usage Guide
│    ├─ Theme Shortcuts
│    │    • Spacing → `f-p-2xs`, `f-m-md`, `f-gap-lg`
│    │    • Typography → `f-text-sm`, `f-text-4xl`
│    │    • Border-radius → `f-rounded-md`
│    ├─ Core Utilities
│    │    • Spacing: `f-p`, `f-mt`, `f-px`, etc.
│    │    • Sizing: `f-w`, `f-h`, `f-size`, etc.
│    │    • Layout: `f-gap`, `f-gap-x`, `f-gap-y`
│    │    • Typography: `f-text`, `f-leading`, `f-tracking`
│    │    • Others: `f-rounded`, `f-shadow`, `f-ring`, `f-translate`
│    └─ Modifiers & Shorthand
│         • `-min-`, `-max-`, `-container`, `-base-`
│         • Shorthand `f-p-8/16` = `f-p f-p-min-8 f-p-max-16`
│
├── 📄 CSS Variables
│    ├─ Simple mode: `f-$myvar`, `f-$myvar-min-8`, `f-$myvar-max-12`
│    ├─ Naming rules (letters only)
│    └─ Expanded mode (`expandCSSVariables: true` → intermediate vars)
│
├── 📄 Theme Reference
│    ├─ Spacing scale table (2xs → 5xl)
│    ├─ Font-size scale table (3xs → 4xl)
│    └─ Border-radius scale table (xs → 2xl)
│
├── 📄 API Configuration
│    ├─ `presetFluidSizing(options)` options table
│    ├─ Example configs (prefix, breakpoints, units, toggles)
│    └─ Custom utilities & disableTheme
│
├── 📄 Playground & Examples
│    ├─ Live code sandbox
│    ├─ Real-world layouts (cards, grids, headers)
│    └─ Attributify & CSS-var recipes
│
├── 📄 FAQ
│    ├─ How does clamp() work?
│    ├─ Browser support
│    ├─ Performance considerations
│    └─ Troubleshooting common issues
│
├── 📄 Migration / Changelog
│    ├─ v1.0.0-beta → v1.0.0 changes
│    ├─ Deprecated options
│    └─ Upgrade guide
│
└── 📄 Contributing
     ├─ How to add new utilities
     ├─ Testing & snapshots
     └─ Code of conduct -->

<script setup lang="ts">
import Badges from '../.vitepress/theme/components/Badges.vue'
</script>

# `unocss-preset-fluid-sizing`

Rethink responsive CSS—ditch breakpoints and let your sizing **flow** between min/max values with one utility.

<Badges pkg="unocss-preset-fluid-sizing" />

<NqGrid :cards="$frontmatter.cards" />

## Features

<NqGrid :cards="$frontmatter.features" />
