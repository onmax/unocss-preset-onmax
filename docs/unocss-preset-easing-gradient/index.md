<script setup lang="ts">
import Badges from '../.vitepress/theme/components/Badges.vue'
</script>

# UnoCSS Easing Gradient Preset

The Easing Gradient preset adds utilities for creating smooth, perceptually uniform color gradients using easing functions. Traditional linear gradients often appear to have a visual "band" in the middle, but easing gradients create a more natural transition between colors.

<Badges pkg="unocss-preset-easing-gradient" />

## Features

- Apply easing functions to gradients for more natural transitions
- Multiple predefined easing functions (ease, ease-in, ease-out, etc.)
- Support for custom cubic bezier functions
- Multiple gradient shapes (linear, radial, circle, ellipse, conic)
- Configurable gradient steps for precision control
- Color space configuration options
- Animated gradient transitions

## Basic Usage

```html
<!-- Basic easing gradient from black to white -->
<div class="bg-gradient-fn-ease fn-from-black fn-to-white fn-to-b"></div>

<!-- Using a different easing function -->
<div class="bg-gradient-fn-ease-in-out fn-from-blue-500 fn-to-red-500 fn-to-r"></div>

<!-- Custom bezier curve -->
<div class="bg-gradient-fn-bezier-[0.25,0.1,0.25,1] fn-from-green-500 fn-to-yellow-500 fn-to-r"></div>

<!-- With a specific number of steps -->
<div class="bg-gradient-fn-ease/8 fn-from-indigo-500 fn-to-cyan-500 fn-to-r"></div>

<!-- Using a different gradient shape -->
<div class="bg-gradient-fn-ease fn-from-rose-500 fn-to-orange-500 fn-radial"></div>
```

## Why Easing Gradients?

Traditional linear gradients in CSS create uniform color transitions that can sometimes appear unnatural to the human eye. Easing gradients use mathematical functions to create non-linear color interpolation that better matches human perception, resulting in smoother, more pleasing gradients.

Check out our [usage guides](/unocss-preset-easing-gradient/usage) for more examples, or try the [interactive generator](/unocss-preset-easing-gradient/generator) to experiment with different configurations.
