---
outline: false
changelog: false

features:
  - title: 🔍 Precise Sizing
    description: "Scale <code>rem</code> values by dividing by 4"
  - title: 🧩 Compatible
    description: "Works with all UnoCSS spacing utilities"
  - title: 🚀 Simple Setup
    description: "Add the preset and start using immediately"
---

<script setup lang="ts">
import Badges from '../.vitepress/theme/components/Badges.vue'
import { playgrounds } from '../.vitepress/theme.config.ts'
</script>

# UnoCSS Scale PX Preset

Use `rem` thinking on a pixel scale.

Scale your rem units by dividing by 4 to achieve more granular control and pixel-perfect designs.

<Badges pkg="unocss-preset-scale-px" />

<NqGrid :cards="[
  { title: 'Installation', href: '#installation', icon: 'i-tabler:download', span: 'half', iconClass: 'text-green text-64' },
  { title: 'Try the Playground', href: playgrounds.scalePx, icon: 'i-nimiq:basketball', span: 'half', iconClass: 'text-orange text-64' }
]" />

## Features

<NqGrid :cards="$frontmatter.features" />

This scaling provides more granular control over your spacing and sizing, especially useful for pixel-perfect designs.

> [!WARNING]
> If you are using `presetWind4`, please do not use this preset and instead refer to [`presetWind4.process` option](https://unocss.dev/presets/wind4#process)

## Installation

Once you have UnoCSS set up, you can install the `unocss-preset-scale-px` package to start scaling rem units in your utilities.

::: code-group

```bash [pnpm]
pnpm add -D unocss-preset-scale-px unocss
```

```bash [npm]
npm install -D unocss-preset-scale-px unocss
```

```bash [yarn]
yarn add -D unocss-preset-scale-px unocss
```

```bash [bun]
bun add -D unocss-preset-scale-px unocss
```

:::

## Configuration

Add the preset to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetScalePx } from 'unocss-preset-scale-px'

export default defineConfig({
  presets: [
    // other presets...
    presetScalePx(),
  ],
})
```

## Basic Usage

With this preset, you can continue using UnoCSS utilities as normal, but with the knowledge that rem values will be scaled:

```html
<!-- This will result in 0.25rem (4px at default browser settings) of padding -->
<div class="p-1"></div>

<!-- This will create a width of 0.5rem (8px at default browser settings) -->
<div class="w-2"></div>
```

## How it Works

The Scale PX preset changes how rem values are processed in your UnoCSS utilities. When enabled, all rem values in your utilities are scaled by dividing them by 4. This means:

- `1rem` becomes `0.25rem`
- `2rem` becomes `0.5rem`
- `4rem` becomes `1rem`
