---
outline: false
changelog: false

features:
  - title: 💧 Fluid Sizing
    description: "<code>clamp()</code> under the hood, no breakpoints needed"
    span: 'half'
  - title: 💅 Built-in Theme
    description: "<code>f-p-lg</code>, <code>f-text-xl</code> and friends"
    span: 'half'
  - title: 🏗️ Fine-tune at Utility Level
    description: "Override min/max, switch to <code>100cqw</code>, change units"
  - title: 🤪 Attributify-friendly
    description: '<code style="line-height: 1">&lt;div f-p="4/8" text="center f-sm" /&gt;</code>'
  - title: 🧩 CSS-variable mode
    description: "Export into <code>--f-myvar</code> and reuse"
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
