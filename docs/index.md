# UnoCSS Preset Onmax

> An opinionated collection of UnoCSS presets designed to streamline your workflow and enhance your styling capabilities.

## What is UnoCSS Preset Onmax?

UnoCSS Preset Onmax is a comprehensive bundle of carefully selected UnoCSS presets, rules, and variants that work together to provide a seamless development experience. It combines the power of [UnoCSS](https://unocss.dev/) with additional functionality for building modern, responsive web interfaces with less effort.

## Features

- **All-in-one solution**: Integrates multiple UnoCSS presets into a single package
- **Pixel-perfect control**: Uses `0.0625rem` (1px) as the base unit for precise spacing
- **Enhanced styling options**: Includes custom utilities like `stack` for easy content overlays
- **Streamlined development**: Pre-configured with sensible defaults for all included presets
- **Fully customizable**: Each preset can be configured or disabled based on your needs

## Included Presets

UnoCSS Preset Onmax combines these powerful presets:

- **[Wind4](https://unocss.dev/presets/wind4)**: Modern utilities based on Tailwind CSS v4
- **[Attributify](https://unocss.dev/presets/attributify)**: Use attributes for applying utility classes
- **[Animations](https://unocss-preset-animations.aelita.me/)**: Add beautiful animations easily
- **[CSS Variables](/presets/unocss-preset-css-var/)**: Better management of CSS variables
- **[Fluid Sizing](/presets/unocss-preset-fluid-sizing/)**: Responsive sizing with fluid typography
- **[Easing Gradient](/presets/unocss-preset-easing-gradient/)**: Create smooth, natural gradients
- **[Scale PX](/presets/unocss-preset-scale-px/)**: Work with pixels that output as relative units
- **[Reka UI](/presets/unocss-preset-reka-ui/)**: Component-friendly utilities with color integration
- **[UnoVue](/presets/unocss-preset-unovue/)**: Helpers for Vue-based projects

## Quick Example

```html
<div class="stack p-4 bg-blue-500:20 rounded-2">
  <img src="/image.jpg" class="w-full h-full object-cover" />
  <div class="bg-black:50 p-4 text-white">
    <h3 class="text-xl font-bold">Overlay Title</h3>
    <p>Content that overlays the image using the stack utility</p>
  </div>
</div>
```

## Installation

```bash
npm install unocss-preset-onmax
```

Add to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax(),
    // Other presets (if any)
  ],
})
```

Ready to get started? Head over to the [Installation](/installation/) guide for more details.
