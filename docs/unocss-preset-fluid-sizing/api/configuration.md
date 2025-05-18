# Configuration

Flexibility in foundation, precision in adaptation.

The UnoCSS Fluid Sizing preset offers deep customization options, allowing you to tailor every aspect of fluid scaling to your project's specific needs.

## Configuration Methods

You can customize this preset in two ways:

1. **Global Configuration**: Set defaults for your entire project in the UnoCSS config
2. **Per-Element Overrides**: Apply specific settings directly in your HTML for individual elements

## Global Preset Options

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'

export default defineConfig({
  presets: [
    presetFluidSizing({
      // Viewport breakpoints for fluid scaling
      minContainerWidth: 375, // Default: 320px
      maxContainerWidth: 1600, // Default: 1920px

      // Default unit system
      defaultBaseUnit: 'rem', // Default: 'px'

      // Prefix customization
      prefix: 'fluid-', // Default: 'f-'

      // Advanced options
      expandCSSVariables: true, // Default: false
      disableTheme: false, // Default: false

      // Add custom properties or override existing ones
      utilities: [
        ['custom-property', ['--my-custom-property']],
        ['grid-cols', ['grid-template-columns']],
      ],

      // Enable attributify mode
      attributify: true // Default: false
    }),
  ],
})
```

## Per-Element Overrides

Need to customize a specific element? You can override the global settings directly in your HTML:

### Utility-specific Configuration Classes

| Class                                 | Purpose                                            | Example                    |
| ------------------------------------- | -------------------------------------------------- | -------------------------- |
| `f-${utility}-min-${value}`           | Set min value                                      | `f-p-min-16`               |
| `f-${utility}-max-${value}`           | Set max value                                      | `f-m-max-48`               |
| `f-${utility}-min-container-${value}` | Override min container width                       | `f-text-min-container-480` |
| `f-${utility}-max-container-${value}` | Override max container width                       | `f-gap-max-container-1440` |
| `f-${utility}-base-${unit}`           | Change unit (px, rem, em, vw, vh, vmin, vmax...)   | `f-w-base-rem`             |
| `f-${utility}-container`              | Use container queries (100cqw) instead of viewport | `f-p-container`            |
| `f-${utility}-${min}/${max}`          | Shorthand for min/max values                       | `f-p-16/32`                |

### Real-World Examples

```html
<!-- Custom padding that scales from 20px to 60px -->
<div class="f-p-min-20 f-p-max-60">Precisely controlled padding</div>

<!-- Margin that scales between specific viewport widths -->
<div class="f-m-min-container-480 f-m-max-container-1200">Custom breakpoint scaling</div>

<!-- Font size in rem units -->
<div class="f-text-base-rem">Accessibility-friendly text</div>

<!-- Container-relative scaling -->
<section class="f-gap-container">
  <div>I scale based on my container, not the viewport</div>
</section>

<!-- Shorthand notation -->
<div class="f-p-20/40">Concise fluid padding (20px to 40px)</div>
```

These per-element overrides give you pixel-perfect control when you need to diverge from your global settings for specific design elements.
