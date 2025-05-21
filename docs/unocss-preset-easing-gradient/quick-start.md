# Quick Start

## Installation

Once you have UnoCSS set up, you can install the `unocss## Explore Features

This preset offers extensive customization options:

- **[Utilities](/unocss-preset-easing-gradient/utilities)** - Complete reference of all available utilities
- **[Examples](/unocss-preset-easing-gradient/examples)** - See real-world usage examples
- **[Generator](/unocss-preset-easing-gradient/interactive/generator)** - Visually create and experiment with easing gradients
- **[How It Works](/unocss-preset-easing-gradient/advanced/how-it-works)** - Learn the principles behind easing gradients
- **[Expert Usage](/unocss-preset-easing-gradient/advanced/expert-usage)** - Advanced techniques and customizationasing-gradient` package:

::: code-group

```bash [pnpm]
pnpm add -D unocss-preset-easing-gradient unocss
```

```bash [npm]
npm install -D unocss-preset-easing-gradient unocss
```

```bash [yarn]
yarn add -D unocss-preset-easing-gradient unocss
```

```bash [bun]
bun add -D unocss-preset-easing-gradient unocss
```

:::

## Configuration

Add the preset to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetEasingGradient } from 'unocss-preset-easing-gradient'

export default defineConfig({
  presets: [
    // other presets...
    presetEasingGradient({
      // optional: add custom easing functions
      customFunctions: {
        myCustomEasing: t => t * t * (3 - 2 * t),
      },
      // optional: change default number of steps (default is 4)
      defaultSteps: 6,
    }),
  ],
})
```

## Basic Usage

:::code-group

```html [Standard Easing]
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-purple-500 fn-to-r"></div>
<div class="bg-gradient-fn-ease-in-out fn-from-green-400 fn-to-teal-500 fn-to-b"></div>
```

```html [Advanced Easing Functions]
<div class="bg-gradient-fn-sine fn-from-amber-500 fn-to-red-500 fn-to-r"></div>
<div class="bg-gradient-fn-expo-in-out fn-from-indigo-400 fn-to-violet-600 fn-to-br"></div>
<div class="bg-gradient-fn-bounce-out fn-from-emerald-400 fn-to-cyan-500 fn-to-r"></div>
```

```html [Custom Steps]
<div class="bg-gradient-fn-ease/8 fn-from-rose-400 fn-to-pink-600 fn-to-r"></div>
<div class="bg-gradient-fn-cubic-in/16 fn-from-sky-400 fn-to-blue-600 fn-to-b"></div>
```

```html [Bezier Curves]
<div class="bg-gradient-fn-bezier-[0.25,0.1,0.25,1] fn-from-lime-400 fn-to-green-600 fn-to-r"></div>
<div class="bg-gradient-fn-bezier-[0.83,0,0.17,1] fn-from-amber-400 fn-to-orange-600 fn-to-l"></div>
```

```html [Different Shapes]
<div class="bg-gradient-fn-ease fn-from-fuchsia-400 fn-to-purple-600 fn-radial"></div>
<div class="bg-gradient-fn-ease-in fn-from-blue-400 fn-to-cyan-600 fn-circle-at-top-right"></div>
<div class="bg-gradient-fn-ease-out fn-from-amber-400 fn-to-red-600 fn-conic"></div>
```

```html [Color Spaces]
<div class="bg-gradient-fn-ease fn-from-indigo-400 fn-to-violet-600 fn-to-r fn-color-space-oklch"></div>
<div class="bg-gradient-fn-ease fn-from-indigo-400 fn-to-violet-600 fn-to-r fn-color-space-srgb"></div>
```

:::

## Explore Features

This preset offers extensive customization options:

- **[How It Works](/unocss-preset-easing-gradient/how-it-works)** - Learn the principles behind easing gradients
- **[Example Components](/unocss-preset-easing-gradient/examples)** - See real-world usage examples
- **[Advanced Usage](/unocss-preset-easing-gradient/advanced-usage)** - Detailed documentation of all features
- **[Technical Details](/unocss-preset-easing-gradient/technical-details)** - Dive into the underlying CSS technologies
- **[Generator](/unocss-preset-easing-gradient/generator)** - Visually create and experiment with easing gradients
