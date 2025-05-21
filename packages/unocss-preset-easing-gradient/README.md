# UnoCSS Preset Easing Gradient

A UnoCSS preset for creating beautiful, perceptually balanced gradients with easing functions.

## Features

- 🎭 Easing Functions – Create natural transitions using `ease`, `ease-in-out`, and more
- 🖌️ Multiple Shapes – Linear, radial, conic, and elliptical gradients
- 🎨 Color Spaces – Control interpolation with `oklch`, `srgb`, and other color spaces
- ⚡ Animatable Gradients – Smooth animations with `@property` CSS features
- 🎛️ Fine-Tune Controls – Custom steps, bezier curves, and detailed positioning

## Installation

```shell
pnpm add -D unocss-preset-easing-gradient unocss
```

## Configuration

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

```html
<!-- Basic easing gradient -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-purple-500 fn-to-r"></div>

<!-- Using a different easing function -->
<div class="bg-gradient-fn-ease-in-out fn-from-green-400 fn-to-teal-500 fn-to-b"></div>

<!-- Custom steps -->
<div class="bg-gradient-fn-ease/8 fn-from-rose-400 fn-to-pink-600 fn-to-r"></div>

<!-- Different shapes -->
<div class="bg-gradient-fn-ease fn-from-fuchsia-400 fn-to-purple-600 fn-radial"></div>
```

## Documentation

For full documentation, examples, and interactive tools, visit the [official documentation](https://onmax.github.io/unocss-preset-onmax/unocss-preset-easing-gradient/).

## Playground

Try out the preset in the [UnoCSS Playground](https://unocss.dev/play/#html=DwCwjAfAUCcgdgQxASwEYCcD2AXAtgIwBMARgKYBOAlgHxRgAuAnqWutQCbkB28L5YtQDWM7AHN4AXngQQDBkzLwBEOWmEiAQQA0QDIn3rCunft16AA2mM7IAD0zA84MCGsJgAXntBwAOlAHFkQAdwBfAEpwXEDnEC9ff0I3WHRWOMT4BHZKZA8AVxt4OiUVNXRgmgBGODwRcEDdIJCwyJiKQODuEKiYmiZGNMyc-KKS8orqiNi6FKSo1LRFgGYAFiQwFvae3v7BodGJ1cW1zd3D4-PL69vbnJO7h+2HzYHm0fbo4doRhNbZ97l9fv8QWDYYYACJQAB6AEEkTAAe8Hj1HvEAF5gYHw95wQgAJQAKigRmAhGA5gAVgAHCgwXDATBgJABgAMAgtgAASCwuNQAMiMBBQQPRjEoWGh8Lg-B8QA)

## Browser Support

This preset uses modern CSS features that may not be supported in all browsers:

- `color-mix()` function
- CSS `@property` rule

Make sure to check browser compatibility or provide fallbacks when using in production.
