# UnoCSS Preset Onmax

UnoCSS Preset Onmax is a comprehensive preset that bundles multiple useful presets into a single package with sensible defaults. It's designed to provide an opinionated setup that works well for most projects right out of the box.

## Key Features

- **All-in-one Solution**: Combines multiple UnoCSS presets into a single package
- **Custom Rules**: Adds helpful utilities like `stack` for creating overlapping content
- **Custom Variants**: Includes useful variants like `hocus:` and `nth-*:`
- **Pixel-Based Units**: Default base font size of `0.0625rem` (1px) for easier translation from designs
- **Fully Configurable**: All included presets can be individually configured or disabled

## Included Presets

The preset includes the following:

### Core Presets from UnoCSS

- **Wind4**: Tailwind-inspired utilities with `attributifyPseudo` enabled by default
- **Attributify**: Attribute-based styling syntax
- **Animations**: Rich set of predefined animations

### Custom Presets

- **CSS Variables**: Better management of CSS variables
- **Fluid Sizing**: Responsive sizing without media queries
- **Easing Gradient**: Natural-looking gradients
- **Scale PX**: Work with pixel units that convert to rem
- **Reka UI**: Component-friendly utilities and Radix Colors integration
- **UnoVue**: Vue-specific enhancements

## Quick Example

```html
<div class="stack w-full h-60 rounded-md">
  <img src="/image.jpg" class="w-full h-full object-cover" />
  <div class="bg-black:50 p-4 text-white">
    <h3 class="text-xl font-bold">Overlay Title</h3>
    <p>Content that overlays the image using the stack utility</p>
  </div>
</div>
```

## Configuration

```js
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax({
      // Optional configuration
      baseFontSize: '0.0625rem', // 1px base unit
      presets: {
        // Configure or disable presets
        wind4: { /* options */ },
        fluidSizing: { /* options */ },
        // animations: false, // Disable a preset
      }
    }),
  ],
})
```

For detailed configuration options, see the [Configuration Guide](./configuration).

## Custom Rules and Variants

The preset includes several custom rules and variants that enhance UnoCSS's capabilities:

- **Custom Rules**: like `stack` for layered content
- **Useful Variants**: like `hocus:` (hover + focus) and `nth-*:` for targeting specific children

Learn more about them in the [Rules and Variants Guide](./rules-and-variants).
