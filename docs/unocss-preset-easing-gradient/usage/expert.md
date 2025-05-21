# Expert Usage

This guide covers advanced techniques and detailed usage patterns for the UnoCSS Easing Gradient preset.

## Available Easing Functions

The preset includes a wide range of easing functions:

### Basic Functions

- `linear` - Constant speed
- `ease` - Default easing (cubic-bezier)
- `ease-in` - Accelerating from zero velocity
- `ease-out` - Decelerating to zero velocity
- `ease-in-out` - Acceleration until halfway, then deceleration

### Advanced Functions

Each of these functions has `-in`, `-out`, and `-in-out` variants:

- `sine` - Based on sine waves
- `quad` - Quadratic curves
- `cubic` - Cubic curves
- `quart` - Quartic curves
- `quint` - Quintic curves
- `expo` - Exponential curves
- `circ` - Circular curves
- `back` - Slight overshoot
- `elastic` - Elastic, spring-like effect
- `bounce` - Bouncing effect

## Detailed Usage

### Custom Steps

Control the precision of your gradients by specifying the number of color stops:

```html
<!-- Default number of steps (4) -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-cyan-500 fn-to-r"></div>

<!-- With 8 color stops for smoother transition -->
<div class="bg-gradient-fn-ease/8 fn-from-blue-500 fn-to-cyan-500 fn-to-r"></div>

<!-- With 16 color stops for very smooth transition -->
<div class="bg-gradient-fn-ease/16 fn-from-blue-500 fn-to-cyan-500 fn-to-r"></div>
```

Higher step counts create smoother gradients but increase CSS size.

### Custom Cubic Bezier Curves

Create custom easing functions using cubic-bezier notation:

```html
<!-- Custom bezier curve -->
<div class="bg-gradient-fn-bezier-[0.25,0.1,0.25,1] fn-from-green-500 fn-to-yellow-500 fn-to-r"></div>

<!-- Another custom curve -->
<div class="bg-gradient-fn-bezier-[0.83,0,0.17,1] fn-from-rose-400 fn-to-orange-600 fn-to-r"></div>
```

The values inside brackets represent the control points (x1, y1, x2, y2) of the cubic Bezier curve. Each value must be between 0 and 1.

### Color Spaces

Control how colors are interpolated by specifying the color space:

```html
<!-- Default (oklch) -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-violet-600 fn-to-r"></div>

<!-- Using sRGB color space -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-violet-600 fn-to-r fn-color-space-srgb"></div>

<!-- Using display-p3 color space -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-violet-600 fn-to-r fn-color-space-display-p3"></div>
```

Available color spaces:

- `srgb`
- `srgb-linear`
- `display-p3`
- `oklch` (default)
- `a98-rgb`
- `prophoto-rgb`
- `rec2020`
- `xyz`

### Animating Gradients

The preset supports animating gradient colors using CSS transitions:

```html
<div
  class="bg-gradient-fn-ease fn-from-blue-400 fn-to-purple-600 fn-to-r hover:(fn-from-purple-600 fn-to-blue-400) transition-colors duration-500"
></div>
```

The animation works by transitioning the custom properties that define the gradient colors.

### Custom Configuration

You can add your own easing functions when configuring the preset:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetEasingGradient } from 'unocss-preset-easing-gradient'

export default defineConfig({
  presets: [
    // ...other presets
    presetEasingGradient({
      // Add custom easing functions
      customFunctions: {
        // Simple smoothstep function
        smoothstep: t => t * t * (3 - 2 * t),

        // Custom bounce function
        gentleBounce: (t) => {
          if (t < 0.5)
            return 4 * t * t
          return 1 - (-2 * t + 2) ** 2 / 2
        }
      },

      // Change default number of steps
      defaultSteps: 6,
    }),
  ],
})
```

Custom functions take a parameter `t` (time) from 0 to 1, and should return a value also between 0 and 1.

## Performance Considerations

- More steps create smoother gradients but increase CSS size
- Complex easing functions like `elastic` or `bounce` may need more steps for accurate representation
- For large-scale applications, be mindful of CSS bundle size when using many complex gradients
- Animating gradients is relatively intensive; use sparingly for performance-critical applications
