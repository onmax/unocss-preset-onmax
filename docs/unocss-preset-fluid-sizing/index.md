---
outline: false
changelog: false

features:
  - title: 💧 Fluid Sizing
    description: "`clamp()` under the hood, no breakpoints needed"
    span: 'half'
  - title: 💅 Built-in Theme
    description: "`f-p-lg`, `f-text-xl` and friends"
    span: 'half'
  - title: 🏗️ Fine-tune at Utility Level
    description: "Override min/max, switch to `100cqw`, change units"
  - title: 🤪 Attributify-friendly
    description: '<div f-p="8/16" f-text="sm/lg" />'
  - title: 🧩 CSS-variable mode
    description: "Export into `--f-myvar` and reuse"
---

<script setup lang="ts">
import Badges from '../.vitepress/theme/components/Badges.vue'
import { playgrounds } from '../.vitepress/theme.config.ts'
</script>

# `unocss-preset-fluid-sizing`

Beyond breakpoints, into flow.

Rethink responsive CSS—ditch breakpoints and let your sizing **flow** between min/max values with one utility.

<Badges pkg="unocss-preset-fluid-sizing" />

<NqGrid :cards="[
  { title: 'Quick Start', href: '/unocss-preset-onmax/unocss-preset-fluid-sizing/quick-start', icon: 'i-tabler:rocket', span: 'half', iconClass: 'text-green text-64' },
  { title: 'Try the Playground', href: playgrounds.fluidSizing, icon: 'i-nimiq:basketball', span: 'half', iconClass: 'text-orange text-64' }
]" />

## Features

<NqGrid :cards="$frontmatter.features" />
