# Installation

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

> **Important:** If you are using `presetWind4`, you should not use this preset as it would conflict with the built-in spacing system.

## Basic Usage

After adding the preset to your configuration, all rem values in your utilities will automatically be scaled by dividing by 4:

```html
<!-- This padding will be 0.25rem (4px with browser default) instead of 1rem -->
<div class="p-4">Scaled padding</div>

<!-- This margin will be 0.5rem (8px with browser default) instead of 2rem -->
<div class="m-8">Scaled margin</div>
```

This scaling creates a more precise sizing system while still maintaining the flexibility of rem units.
