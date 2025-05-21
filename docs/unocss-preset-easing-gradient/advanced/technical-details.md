# Technical Details

A deep dive into how the easing gradient preset is implemented and the underlying browser technologies that power it.

## Implementation Overview

This preset extends UnoCSS with capabilities for creating perceptually balanced gradients using:

1. **CSS Custom Properties**: For managing gradient variables
2. **@property Rules**: For enabling color animations
3. **color-mix() Function**: For precise color interpolation between steps
4. **Easing Functions**: Mathematical curves for non-linear color distribution

## CSS Technologies Used

### @property Rules

The preset uses the `@property` CSS at-rule to register custom properties that can be animated:

```css
@property --un-gradient-fn-from {
  syntax: '<color>';
  inherits: false;
  initial-value: #000;
}

@property --un-gradient-fn-to {
  syntax: '<color>';
  inherits: false;
  initial-value: #000;
}
```

This tells browsers to treat these variables as actual color values, enabling:

- Smooth transitions between colors
- Animation of gradient colors using standard transitions
- Proper color interpolation during animations

> **Browser Support:** `@property` is supported in Chrome, Edge, Opera, and Safari, but not in Firefox. Check [MDN's compatibility chart](https://developer.mozilla.org/en-US/docs/Web/CSS/@property#browser_compatibility) for the latest support information.

### color-mix() Function

The `color-mix()` CSS function is essential to how this preset creates easing gradients:

```
color-mix(in oklch, var(--from-color), var(--to-color) 50%);
```

This creates a color that's 50% of the first color and 50% of the second color, but the exact mixing depends on:

1. **Color space**: `oklch`, `srgb`, etc. affects how colors blend
2. **Percentage**: Determined by the easing function at each step

> **Browser Support:** `color-mix()` is supported in modern browsers but may require fallbacks in older browsers. Check [MDN's compatibility chart](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix#browser_compatibility) for details.

## Implementation Details

### Gradient Generation Process

When you use a utility like `bg-gradient-fn-ease`:

1. The preset calculates multiple color stops based on the easing function
2. For each stop, it determines the exact percentage blend using `color-mix()`
3. Color stops are combined into a gradient string
4. The gradient is applied using CSS custom properties

### Performance Optimization

For gradients with many steps, the preset:

1. Calculates all steps based on the easing function
2. If steps > 8, it selects a subset of steps to prevent CSS bloat
3. Always includes start and end points for accurate color representation

### Animation Support

The ability to animate gradients comes from:

```css
transition-property: colors, --un-gradient-fn-from, --un-gradient-fn-to;
```

By including custom properties in the transition list and using `@property` to define them as colors, the browser can:

1. Recognize these values as interpolatable colors
2. Apply transitions when their values change
3. Recalculate the gradient during animation

## Extending the Preset

### Custom Easing Functions

You can add your own easing functions:

```ts
presetEasingGradient({
  customFunctions: {
    myCustomEasing: t => t * t * (3 - 2 * t), // Custom smoothstep function
  }
})
```

These functions take a value `t` from 0 to 1, and return a transformed value also from 0 to 1.

### Performance Considerations

- More steps create smoother gradients but increase CSS size
- Some easing functions (like `elastic` or `bounce`) may need more steps for accurate representation
- Complex animations might impact performance on lower-end devices
