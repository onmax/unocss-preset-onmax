# Getting Started with UnoCSS Fluid Sizing

UnoCSS Fluid Sizing is a powerful preset that allows you to create responsive designs with fluid sizing values that seamlessly scale between viewport breakpoints. No more complex media queries or manually calculating responsive values!

## Overview

![UnoCSS Fluid Sizing Overview](/assets/images/fluid-sizing-overview.svg)

The diagram above shows how fluid sizing works:

1. **Define minimum and maximum sizes**: Set the smallest and largest values for your CSS properties.
2. **Define viewport breakpoints**: Set the minimum and maximum viewport widths (defaults to 320px and 1920px).
3. **Fluid scaling**: The preset automatically calculates fluid values that smoothly transition between your min/max sizes as the viewport width changes.

### How It Works

Fluid sizing uses the CSS `clamp()` function to create values that automatically adjust based on the viewport width:

```css
/* Example of what the preset generates */
padding: clamp(
  32px,
  /* Minimum value at smallest viewport */ calc(32px + (48 - 32) * ((100vw - 320px) / (1920 - 320))),
  /* Fluid calculation */ 48px /* Maximum value at largest viewport */
);
```

This ensures your elements scale proportionally across all screen sizes without the need for breakpoints.

### Resources

Learn more about Fluid Sizing in CSS:

- [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)
- [Modern Fluid Typography Using CSS Clamp](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)

## Quick Start

### Installation

```bash
npm install -D unocss-preset-fluid-sizing unocss
```

Or with pnpm:

```bash
pnpm add -D unocss-preset-fluid-sizing unocss
```

### Configuration

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

## Real-World Example

Here's a practical example of fluid sizing in action:

```html
<div class="container mx-auto">
  <!-- Header with fluid typography and spacing -->
  <header class="f-py-md f-px-lg">
    <h1 class="f-text-3xl font-bold">Fluid Sizing Demo</h1>
    <p class="f-text-lg f-mt-xs">Text and spacing that scales with the viewport</p>
  </header>

  <!-- Card grid with fluid gaps and padding -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 f-gap-md">
    <div class="bg-gray-100 rounded f-p-sm">
      <h2 class="f-text-xl">Card 1</h2>
      <p class="f-mt-xs">Content with fluid spacing</p>
    </div>
    <!-- More cards... -->
  </div>
</div>
```

Ready to explore more? Check out the [API Configuration](/unocss-preset-fluid-sizing/api/configuration/) or learn about the [available utilities](/unocss-preset-fluid-sizing/features/utilities/).
