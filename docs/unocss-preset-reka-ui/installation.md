# Installation

## Prerequisites

Before installing the Reka UI preset, make sure you have UnoCSS set up in your project. If you haven't already, follow the [UnoCSS installation guide](https://github.com/unocss/unocss#installation).

## Install the Package

::: code-group

```bash [pnpm]
pnpm add -D unocss-preset-reka-ui
```

```bash [npm]
npm install -D unocss-preset-reka-ui
```

```bash [yarn]
yarn add -D unocss-preset-reka-ui
```

```bash [bun]
bun add -D unocss-preset-reka-ui
```

:::

## Basic Configuration

Add the preset to your UnoCSS configuration file:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetRekaUI } from 'unocss-preset-reka-ui'

export default defineConfig({
  presets: [
    // ...your other presets
    presetRekaUI(),
  ],
})
```

This will enable the preset with default settings.

## Configuration Options

### Complete Example

Here's a complete example with all available configuration options:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetRekaUI } from 'unocss-preset-reka-ui'

export default defineConfig({
  presets: [
    // ...your other presets
    presetRekaUI({
      // Radix Colors configuration
      radixColors: {
        darkSelector: '.dark, [data-theme="dark"]',
        lightSelector: ':root',
        prefix: '--colors-',
      },

      // Variants configuration
      variants: 'reka-', // Use 'false' to disable variants

      // Animations configuration
      animations: true, // Use 'false' to disable animations
    }),
  ],
})
```

### Radix Colors

The Radix Colors feature adds a comprehensive color system with light and dark mode support.

```ts
presetRekaUI({
  // Enable with default settings
  radixColors: true,

  // Or customize with options
  radixColors: {
    // CSS selector for dark mode
    darkSelector: '.dark, [data-theme="dark"]',

    // CSS selector for light mode
    lightSelector: ':root',

    // CSS variable prefix for Radix colors
    prefix: '--colors-',
  },

  // Or disable completely
  radixColors: false,
})
```

### Variants

The variants feature adds state-based styling capabilities to target data attributes.

```ts
presetRekaUI({
  // Enable with default prefix 'reka-'
  variants: 'reka-',

  // Use custom prefix
  variants: 'ui-',

  // Or disable variants
  variants: false,
})
```

### Animations

The animations feature adds pre-configured keyframes and utilities for UI animations.

```ts
presetRekaUI({
  // Enable animations
  animations: true,

  // Disable animations
  animations: false,
})
```

## Next Steps

Now that you've installed and configured the Reka UI preset, check out these resources:

- [Radix Colors Guide](/unocss-preset-reka-ui/features/radix-colors/) - Learn how to use the color system
- [Variants System](/unocss-preset-reka-ui/features/variants/) - Discover all available variants
- [Animations](/unocss-preset-reka-ui/features/animations/) - See how to use the animation utilities
