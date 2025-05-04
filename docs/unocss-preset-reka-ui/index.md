# UnoCSS Reka UI Preset

The Reka UI preset brings powerful UI styling capabilities to UnoCSS, optimized specifically for Vue.js applications. It makes it easier to build modern, accessible, and beautiful Vue interfaces by combining three essential features: Radix Colors integration, specialized UI variants, and pre-configured animations.

## Key Features

### 🎨 Radix Colors Integration

Access the [Radix Colors](https://www.radix-ui.com/colors) system directly in UnoCSS - a beautiful, accessible color system with built-in light and dark mode support.

```vue
<template>
  <div class="bg-slate-2 text-slate-11 dark:bg-slate-12 dark:text-slate-1">
    Automatically switches between light and dark mode
  </div>
</template>
```

### 🔄 Custom UI Variants

Use the powerful `reka-` variants that target common Vue component states like `open`, `closed`, `disabled`, and many more - perfect for interactive Vue components.

```vue
<template>
  <button class="bg-blue-3 reka-hover:bg-blue-4 reka-disabled:opacity-50">
    Interactive button
  </button>
</template>
```

### ✨ UI Animations

Add smooth accordion and collapsible animations with zero effort using the built-in animation utilities, perfect for Vue transitions.

```vue
<template>
  <div class="animate-accordion-down overflow-hidden">
    This content animates smoothly
  </div>
</template>
```

## Why Use Reka UI?

- **Vue Optimized**: Designed specifically for Vue.js applications and component libraries
- **Accessibility-Focused**: Built with accessibility in mind, with support for state attributes
- **Lightweight**: Adds minimal overhead to your UnoCSS and Vue setup
- **Customizable**: Fine-tune every aspect including prefix names and animation behavior

## Quick Start

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetRekaUI } from 'unocss-preset-reka-ui'

export default defineConfig({
  presets: [
    // ...other presets
    presetRekaUI({
      radixColors: true, // Enable Radix Colors
      variants: 'reka-', // Set variant prefix
      animations: true, // Enable animations
    }),
  ],
})
```

Check out the [installation guide](/unocss-preset-reka-ui/installation/) for detailed setup instructions, or explore the features sections to learn more about each capability.
