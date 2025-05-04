# Configuring UnoCSS Preset Onmax

UnoCSS Preset Onmax is designed to be highly customizable while providing sensible defaults. This guide explains all available configuration options.

## Basic Configuration

The most basic configuration simply adds the preset to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax(),
    // Other presets (if any)
  ],
})
```

## Configuration Options

UnoCSS Preset Onmax accepts a configuration object with the following options:

```ts
presetOnmax({
  // Base font size for relative units
  baseFontSize: '0.0625rem', // Default: 1px (0.0625rem)

  // Configure or disable included presets
  presets: {
    // Core presets from UnoCSS
    wind4: { /* Wind4 options */ } | false,
    attributify: { /* Attributify options */ } | false,
    animations: { /* Animations options */ } | false,

    // Custom presets
    cssVar: { /* CSS Variables options */ } | false,
    fluidSizing: { /* Fluid Sizing options */ } | false,
    easingGradient: { /* Easing Gradient options */ } | false,
    unoVue: { /* UnoVue options */ } | false,
  }
})
```

### Base Font Size

The `baseFontSize` option determines the base unit for spacing and sizing utilities. By default, it's set to `0.0625rem`, which is equivalent to 1px, making it easy to translate designs that use pixel values.

```ts
presetOnmax({
  // Changes the base unit
  baseFontSize: '0.125rem', // Now 1 spacing unit = 2px
})
```

### Preset Configuration

Each included preset can be individually configured or disabled:

#### Configuring a Preset

```ts
presetOnmax({
  presets: {
    // Configure Wind4 preset options
    wind4: {
      attributifyPseudo: true,
      // Other Wind4 options...
    },

    // Configure Fluid Sizing preset options
    fluidSizing: {
      attributify: true,
      viewports: {
        sm: 480,
        lg: 1024
      },
      // Other Fluid Sizing options...
    }
  }
})
```

#### Disabling a Preset

```ts
presetOnmax({
  presets: {
    // Disable the Animations preset
    animations: false,

    // Disable the UnoVue preset
    unoVue: false
  }
})
```

## Preset-Specific Configuration

For detailed information about configuring each individual preset, refer to their specific documentation pages:

- [Wind4 Configuration](https://unocss.dev/presets/wind4)
- [Attributify Configuration](https://unocss.dev/presets/attributify)
- [Animations Configuration](https://unocss-preset-animations.aelita.me/)
- [CSS Variables Configuration](/unocss-preset-css-var/)
- [Fluid Sizing Configuration](/unocss-preset-fluid-sizing/)
- [Easing Gradient Configuration](/unocss-preset-easing-gradient/)
- [Scale PX Configuration](/unocss-preset-scale-px/)
- [Reka UI Configuration](/unocss-preset-reka-ui/)
- [UnoVue Configuration](/unocss-preset-unovue/)

## Full Example

Here's a complete example that customizes multiple presets:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax({
      baseFontSize: '0.0625rem',
      presets: {
        // Configure Wind4
        wind4: {
          attributifyPseudo: true,
          dark: 'class',
        },

        // Disable Animations
        animations: false,

        // Configure Fluid Sizing
        fluidSizing: {
          attributify: true,
          viewports: {
            sm: 375,
            lg: 1440
          }
        },

        // Configure UnoVue
        unoVue: {
          shadcn: true
        }
      }
    }),
  ],
  // Other UnoCSS configuration options
})
```
