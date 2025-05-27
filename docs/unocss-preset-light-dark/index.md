---
outline: false
changelog: false

features:
  - title: 🌗 Modern CSS
    description: "Uses the native CSS light-dark() function for automatic color switching"
  - title: 🎨 Zero Runtime
    description: "Pure CSS solution with no JavaScript overhead"
  - title: 🔧 Flexible Config
    description: "Support for media queries, classes, or custom selectors"
---

<script setup lang="ts">
import Badges from '../.vitepress/theme/components/Badges.vue'
import { playgrounds } from '../.vitepress/theme.config.ts'
</script>

# UnoCSS Light Dark Preset

Leverage the modern CSS `light-dark()` function to automatically handle light and dark mode colors with UnoCSS.

<Badges pkg="unocss-preset-light-dark" />

<NqGrid :cards="[
  { title: 'Installation', href: './installation', icon: 'i-tabler:download', span: 'half', iconClass: 'text-green text-64' },
  { title: 'Try the Playground', href: playgrounds.lightDark, icon: 'i-nimiq:basketball', span: 'half', iconClass: 'text-orange text-64' }
]" />

## Features

### 🌗 Modern CSS Support

Uses the native CSS `light-dark()` function introduced in CSS Color Module Level 5. This means colors automatically adapt to the user's color scheme preference without any JavaScript.

### 🎨 Automatic Color Switching

Define colors once and they automatically switch between light and dark variants based on the user's system preference or explicit color scheme setting.

### 🔧 Flexible Configuration

Support for different dark mode strategies:

- **Media Queries**: `@media (prefers-color-scheme: dark)`
- **Class-based**: `.dark` or custom class selectors
- **Custom Selectors**: `[data-theme="dark"]` or any CSS selector

## Quick Start

```bash
npm install unocss-preset-light-dark
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetLightDark } from 'unocss-preset-light-dark'

export default defineConfig({
  presets: [
    presetLightDark({
      colors: {
        primary: ['#3b82f6', '#1d4ed8'], // [light, dark]
        secondary: { light: '#10b981', dark: '#059669' },
      }
    })
  ]
})
```

```html
<!-- Colors automatically switch based on user preference -->
<div class="bg-primary text-secondary">Auto-adapting colors!</div>
```

## How It Works

The preset generates CSS using the `light-dark()` function:

```css
.bg-primary {
  background-color: light-dark(#3b82f6, #1d4ed8);
}
```

This modern CSS function automatically selects the appropriate color based on the computed `color-scheme` value, eliminating the need for complex CSS selectors or JavaScript.

## Browser Support

| Browser | Support |
| ------- | ------- |
| Chrome  | 123+    |
| Firefox | 120+    |
| Safari  | 17.5+   |

## Next Steps

<NqGrid :cards="[
  { title: 'Installation Guide', href: './installation', icon: 'i-tabler:download' },
  { title: 'Configuration Options', href: './configuration', icon: 'i-tabler:settings' },
  { title: 'Basic Usage', href: './usage/basic', icon: 'i-tabler:bulb' },
  { title: 'Examples', href: './usage/examples', icon: 'i-tabler:components' }
]" />
