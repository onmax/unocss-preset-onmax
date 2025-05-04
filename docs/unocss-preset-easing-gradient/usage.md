# Usage Guide

This guide covers the various features and usage patterns of the UnoCSS Easing Gradient preset.

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

## Basic Syntax

All easing gradient utilities follow this pattern:

```html
<div class="bg-gradient-fn-{easing-function} fn-from-{color} fn-to-{color} fn-to-{direction}"></div>
```

## Gradient Steps

Control the precision of the gradient by specifying the number of color stops:

```html
<!-- Default number of steps (4) -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-cyan-500"></div>

<!-- With 8 color stops for smoother transition -->
<div class="bg-gradient-fn-ease/8 fn-from-blue-500 fn-to-cyan-500"></div>
```

## Gradient Shapes

### Linear Gradients

The default gradient type is linear. You can specify direction with utilities like:

```html
<!-- To bottom (default) -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-cyan-500"></div>

<!-- To right -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-cyan-500 fn-to-r"></div>

<!-- To top-right corner -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-cyan-500 fn-to-tr"></div>
```

Available directions: `fn-to-t`, `fn-to-r`, `fn-to-b`, `fn-to-l`, `fn-to-tr`, `fn-to-tl`, `fn-to-br`, `fn-to-bl`.

### Radial Gradients

```html
<!-- Basic radial gradient -->
<div class="bg-gradient-fn-ease fn-from-purple-500 fn-to-pink-500 fn-radial"></div>

<!-- Circular radial gradient -->
<div class="bg-gradient-fn-ease fn-from-purple-500 fn-to-pink-500 fn-circle"></div>

<!-- Elliptical radial gradient -->
<div class="bg-gradient-fn-ease fn-from-purple-500 fn-to-pink-500 fn-ellipse"></div>
```

#### Positioned Radial Gradients

Position the center of the radial gradient:

```html
<!-- Circular gradient centered at top-left -->
<div class="bg-gradient-fn-ease fn-from-purple-500 fn-to-pink-500 fn-circle-at-top-left"></div>

<!-- Elliptical gradient centered at bottom -->
<div class="bg-gradient-fn-ease fn-from-purple-500 fn-to-pink-500 fn-ellipse-at-bottom"></div>
```

Available positions: `center`, `top`, `bottom`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, `bottom-right`.

### Conic Gradients

```html
<!-- Basic conic gradient -->
<div class="bg-gradient-fn-ease fn-from-red-500 fn-to-yellow-500 fn-conic"></div>

<!-- From a specific angle -->
<div class="bg-gradient-fn-ease fn-from-red-500 fn-to-yellow-500 fn-conic-from-45deg"></div>

<!-- From a specific position -->
<div class="bg-gradient-fn-ease fn-from-red-500 fn-to-yellow-500 fn-conic-from-center"></div>

<!-- Combined angle and position -->
<div class="bg-gradient-fn-ease fn-from-red-500 fn-to-yellow-500 fn-conic-from-45deg-at-center"></div>
```

## Custom Bezier Curves

Create custom easing functions using cubic bezier curves:

```html
<div class="bg-gradient-fn-bezier-[0.16,1,0.3,1] fn-from-blue-500 fn-to-cyan-500"></div>
```

You can also specify steps with bezier curves:

```html
<div class="bg-gradient-fn-bezier-[0.16,1,0.3,1]/10 fn-from-blue-500 fn-to-cyan-500"></div>
```

## Color Spaces

Configure the color interpolation space:

```html
<!-- Default (oklch) -->
<div class="bg-gradient-fn-ease fn-from-purple-500 fn-to-pink-500"></div>

<!-- Using sRGB color space -->
<div class="bg-gradient-fn-ease fn-from-purple-500 fn-to-pink-500 fn-color-space-srgb"></div>
```

Available color spaces: `srgb`, `srgb-linear`, `display-p3`, `oklch`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`.
