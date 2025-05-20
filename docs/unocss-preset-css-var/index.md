---
outline: false
changelog: false

features:
  - title: 🎨 CSS Variables
    description: "Create and use CSS variables with UnoCSS classes"
  - title: 🌈 Color Integration
    description: "Use color values from your UnoCSS theme"
  - title: 🧩 Complete Integration
    description: "Fully integrated with UnoCSS's theme system"
---

<script setup lang="ts">
import Badges from '../.vitepress/theme/components/Badges.vue'
import { playgrounds } from '../.vitepress/theme.config.ts'
</script>

# UnoCSS CSS Variables Preset

Create and manage CSS custom properties (variables) with UnoCSS utility-first approach.

<Badges pkg="unocss-preset-css-var" />

<NqGrid :cards="[
  { title: 'Installation', href: '#installation', icon: 'i-tabler:download', span: 'half', iconClass: 'text-green text-64' },
  { title: 'Try the Playground', href: playgrounds.cssVar, icon: 'i-nimiq:basketball', span: 'half', iconClass: 'text-orange text-64' }
]" />

## Features

<NqGrid :cards="$frontmatter.features" />

## Installation

Once you have UnoCSS set up, you can install the `unocss-preset-css-var` package to start using CSS variables in your UnoCSS utilities.

::: code-group

```bash [pnpm]
pnpm add -D unocss-preset-css-var unocss
```

```bash [npm]
npm install -D unocss-preset-css-var unocss
```

```bash [yarn]
yarn add -D unocss-preset-css-var unocss
```

```bash [bun]
bun add -D unocss-preset-css-var unocss
```

:::

## Configuration

Add the preset to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetCssVar } from 'unocss-preset-css-var'

export default defineConfig({
  presets: [
    // other presets...
    presetCssVar(),
  ],
})
```

## Basic Usage

With this preset, you can create and use CSS variables directly in your UnoCSS classes:

```html
<!-- Define a CSS variable -->
<div class="var:my-color:blue">
  <!-- Use the CSS variable -->
  <p class="text-$my-color">This text will be blue</p>
</div>
```

The `var:` utility creates a CSS variable with the specified name and value. The format is:

```
var:variable-name:value
```

## Working with Colors

The preset supports color values from your UnoCSS theme:

```html
<div class="var:primary:blue-500 var:accent:green-300">
  <!-- Use the CSS variables -->
  <button class="bg-$primary text-white">Primary Button</button>
  <button class="bg-$accent text-black">Accent Button</button>
</div>
```
