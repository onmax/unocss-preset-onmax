# UnoCSS Easing Gradient Preset

The Easing Gradient preset adds utilities for creating smooth, perceptually uniform color gradients using easing functions. Traditional linear gradients often appear to have a visual "band" in the middle, but easing gradients create a more natural transition between colors.

## Features

- Apply easing functions to gradients for more natural transitions
- Multiple predefined easing functions (ease, ease-in, ease-out, etc.)
- Support for custom cubic bezier functions
- Color space configuration options

## Basic Usage

```html
<!-- Basic easing gradient from black to white -->
<div class="bg-gradient-fn-ease fn-from-black fn-to-white fn-to-b"></div>

<!-- Using a different easing function -->
<div class="bg-gradient-fn-ease-in-out fn-from-blue-500 fn-to-red-500 fn-to-r"></div>

<!-- Custom bezier curve -->
<div class="bg-gradient-fn-bezier-[0.25,0.1,0.25,1] fn-from-green-500 fn-to-yellow-500 fn-to-r"></div>

<!-- Configuring color space -->
<div class="bg-gradient-fn-ease fn-from-purple-500 fn-to-pink-500 fn-to-r fn-color-space-oklch"></div>
```

## Easing Functions

The preset includes standard CSS easing functions:

- `ease`
- `linear`
- `ease-in`
- `ease-out`
- `ease-in-out`

And more advanced easing functions like:

- `sine`
- `quad`
- `cubic`
- `quart`
- `quint`
- `expo`
- `circ`
- `back`
- `elastic`
- `bounce`

Each advanced function also has `-in`, `-out` and `-in-out` variants.
