# Utilities Reference

This page provides a comprehensive reference of all utilities available in the UnoCSS Easing Gradient preset.

## Core Utilities

### Easing Functions

Apply easing functions to your gradients:

```
bg-gradient-fn-{function}
```

| Utility                      | Description                                   |
| ---------------------------- | --------------------------------------------- |
| `bg-gradient-fn-linear`      | Linear gradient (no easing)                   |
| `bg-gradient-fn-ease`        | Default easing (cubic-bezier)                 |
| `bg-gradient-fn-ease-in`     | Acceleration from zero velocity               |
| `bg-gradient-fn-ease-out`    | Deceleration to zero velocity                 |
| `bg-gradient-fn-ease-in-out` | Acceleration until halfway, then deceleration |

### Advanced Easing Functions

All these functions have `-in`, `-out`, and `-in-out` variants:

| Base Function            | Description                 |
| ------------------------ | --------------------------- |
| `bg-gradient-fn-sine`    | Based on sine waves         |
| `bg-gradient-fn-quad`    | Quadratic curves            |
| `bg-gradient-fn-cubic`   | Cubic curves                |
| `bg-gradient-fn-quart`   | Quartic curves              |
| `bg-gradient-fn-quint`   | Quintic curves              |
| `bg-gradient-fn-expo`    | Exponential curves          |
| `bg-gradient-fn-circ`    | Circular curves             |
| `bg-gradient-fn-back`    | Slight overshoot            |
| `bg-gradient-fn-elastic` | Elastic, spring-like effect |
| `bg-gradient-fn-bounce`  | Bouncing effect             |

**Example variants:**

```html
<div class="bg-gradient-fn-sine-in"></div>
<div class="bg-gradient-fn-cubic-out"></div>
<div class="bg-gradient-fn-bounce-in-out"></div>
```

### Custom Steps

Control the precision of your gradients by specifying the number of color stops:

```
bg-gradient-fn-{function}/{steps}
```

| Utility                  | Description                          |
| ------------------------ | ------------------------------------ |
| `bg-gradient-fn-ease/4`  | Ease gradient with 4 steps (default) |
| `bg-gradient-fn-ease/8`  | Ease gradient with 8 steps           |
| `bg-gradient-fn-ease/16` | Ease gradient with 16 steps          |

### Custom Bezier Curves

Define your own cubic bezier curve:

```
bg-gradient-fn-bezier-[x1,y1,x2,y2]
```

Example:

```html
<div class="bg-gradient-fn-bezier-[0.25,0.1,0.25,1]"></div>
```

## Gradient Colors

### From and To Colors

Set the start and end colors of your gradient:

```
fn-from-{color}
fn-to-{color}
```

Examples:

```html
<div class="fn-from-blue-500 fn-to-purple-600"></div>
<div class="fn-from-[#ff5500] fn-to-[#ffaa00]"></div>
<div class="fn-from-transparent fn-to-black/50"></div>
```

## Gradient Shapes and Directions

### Linear Gradient Directions

```
fn-to-{direction}
```

| Utility    | Description         |
| ---------- | ------------------- |
| `fn-to-t`  | To top              |
| `fn-to-tr` | To top right        |
| `fn-to-r`  | To right            |
| `fn-to-br` | To bottom right     |
| `fn-to-b`  | To bottom (default) |
| `fn-to-bl` | To bottom left      |
| `fn-to-l`  | To left             |
| `fn-to-tl` | To top left         |

### Gradient Shapes

```
fn-{shape}
```

| Utility      | Description               |
| ------------ | ------------------------- |
| `fn-linear`  | Linear gradient (default) |
| `fn-radial`  | Radial gradient           |
| `fn-circle`  | Circular gradient         |
| `fn-ellipse` | Elliptical gradient       |
| `fn-conic`   | Conic gradient            |

### Positioned Gradients

#### Positioned Circle/Ellipse

```
fn-circle-at-{position}
fn-ellipse-at-{position}
```

| Position       | Description         |
| -------------- | ------------------- |
| `center`       | Center (default)    |
| `top`          | Top center          |
| `right`        | Right center        |
| `bottom`       | Bottom center       |
| `left`         | Left center         |
| `top-left`     | Top left corner     |
| `top-right`    | Top right corner    |
| `bottom-left`  | Bottom left corner  |
| `bottom-right` | Bottom right corner |

Examples:

```html
<div class="bg-gradient-fn-ease fn-circle-at-top-left"></div>
<div class="bg-gradient-fn-ease fn-ellipse-at-bottom"></div>
```

#### Positioned Conic Gradients

```
fn-conic-from-{angle}
fn-conic-from-{position}
fn-conic-from-{angle}-at-{position}
```

Examples:

```html
<div class="bg-gradient-fn-ease fn-conic"></div>
<div class="bg-gradient-fn-ease fn-conic-from-45deg"></div>
<div class="bg-gradient-fn-ease fn-conic-from-top-left"></div>
<div class="bg-gradient-fn-ease fn-conic-from-90deg-at-bottom-right"></div>
```

## Color Space Configuration

Control how colors are interpolated:

```
fn-color-space-{space}
```

| Utility                       | Description                  |
| ----------------------------- | ---------------------------- |
| `fn-color-space-oklch`        | OKLCH color space (default)  |
| `fn-color-space-srgb`         | Standard RGB color space     |
| `fn-color-space-srgb-linear`  | Linear RGB color space       |
| `fn-color-space-display-p3`   | Display P3 color space       |
| `fn-color-space-a98-rgb`      | Adobe RGB (1998) color space |
| `fn-color-space-prophoto-rgb` | ProPhoto RGB color space     |
| `fn-color-space-rec2020`      | Rec. 2020 color space        |
| `fn-color-space-xyz`          | CIE XYZ color space          |

## Usage Examples

### Basic Linear Gradient with Easing

```html
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-purple-600 fn-to-r"></div>
```

### Radial Gradient with Custom Steps

```html
<div class="bg-gradient-fn-ease-out/8 fn-from-amber-400 fn-to-orange-600 fn-radial"></div>
```

### Positioned Circle Gradient

```html
<div class="bg-gradient-fn-cubic-in fn-from-emerald-400 fn-to-teal-600 fn-circle-at-bottom-right"></div>
```

### Conic Gradient with Custom Position

```html
<div class="bg-gradient-fn-sine-in-out fn-from-rose-400 fn-to-pink-600 fn-conic-from-45deg-at-center"></div>
```

### Custom Color Space

```html
<div class="bg-gradient-fn-expo fn-from-violet-500 fn-to-indigo-600 fn-to-r fn-color-space-display-p3"></div>
```

### Custom Bezier with Specific Steps

```html
<div class="bg-gradient-fn-bezier-[0.34,1.56,0.64,1]/12 fn-from-cyan-400 fn-to-blue-600 fn-to-br"></div>
```
