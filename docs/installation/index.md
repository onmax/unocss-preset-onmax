# Installation

Get started with UnoCSS Preset Onmax in your project by following these simple steps.

## Prerequisites

- Node.js (v16 or newer)
- A project using UnoCSS

## Installation

### 1. Install the package

::: code-group

```bash [npm]
npm install unocss-preset-onmax
```

```bash [yarn]
yarn add unocss-preset-onmax
```

```bash [pnpm]
pnpm add unocss-preset-onmax
```

:::

### 2. Add to your UnoCSS configuration

In your `uno.config.ts` or equivalent configuration file:

```ts
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax(),
    // ...other presets you might be using
  ],
})
```

### 3. Configuration Options

You can customize the preset by passing options:

```ts
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax({
      // Change the base font size (default is '0.0625rem' which equals 1px)
      baseFontSize: '0.0625rem',

      // Configure or disable included presets
      presets: {
        // Core presets from UnoCSS
        wind4: { attributifyPseudo: true },
        attributify: {},
        animations: {},

        // Custom presets
        cssVar: { /* options */ },
        fluidSizing: { attributify: true },
        easingGradient: { /* options */ },
        unoVue: { shadcn: false },

        // Disable a preset by setting it to false
        // animations: false,
      }
    }),
  ],
})
```

## What's Next

- Learn about the [rules and variants](/unocss-preset-onmax/rules-and-variants) included in this preset
- Explore the [presets](/unocss-preset-onmax/presets) that come bundled with UnoCSS Preset Onmax
