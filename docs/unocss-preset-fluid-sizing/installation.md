# Installation

Once you have UnoCSS set up, you can install the `unocss-preset-fluid-sizing` package to start using fluid sizing utilities.

::: code-group

```bash [pnpm]
pnpm add -D unocss-preset-fluid-sizing unocss
```

```bash [npm]
npm install -D unocss-preset-fluid-sizing unocss
```

```bash [yarn]
yarn add -D unocss-preset-fluid-sizing unocss
```

```bash [bun]
bun add -D unocss-preset-fluid-sizing unocss
```

:::

## Configuration

Add the preset to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'

export default defineConfig({
  presets: [
    // other presets...
    presetFluidSizing({
      // optional configuration
      prefix: 'f-', // default prefix
      minContainerWidth: 320, // default min viewport
      maxContainerWidth: 1920, // default max viewport
      // More options
    }),
  ],
})
```

### Basic Usage

```html
<!-- Using the built-in theme shortcuts -->
<div class="f-p-2xs f-text-xl" />

<!-- Using explicit utilities -->
<div class="f-p f-p-min-32 f-p-max-48" />
<div class="f-text f-text-min-8 f-text-max-12" />

<!-- Shorthand syntax -->
<div class="f-p-32/48 f-text-8/12" />
```

:::code-group

```html [Default Theme]
<div class="f-p-2xs f-text-xl" />
```

```html [Explicit Utilities]
<div class="f-p f-p-min-32 f-p-max-48" />
<div class="f-text f-text-min-8 f-text-max-12" />
```

```html [Shorthand Syntax]
<div class="f-p-32/48 f-text-8/12" />
```

```html [Container Queries]
<div class="f-p-2xs f-text-xl f-p-container f-text-container" />
```

```html [Attributify Mode]
<div f-p-2xs f-m="12/32" f-text="8/12" />
```

```html [CSS Variables]
<div class="f-myvar f-myvar-min-32 f-myvar-max-64 h-[var(--f-myvar)]" />
```

:::

These are just a few examples of how to use the preset. For more details, check out the [Utilities](/unocss-preset-fluid-sizing/features/utilities) and [Theme](/unocss-preset-fluid-sizing/features/theme) sections.
