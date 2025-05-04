# `unocss-preset-fluid-sizing` configuration

The UnoCSS fluid sizing preset is designed to be highly customizable, allowing you to tailor it to your specific needs.

You can configure the preset by:

1. Passing options to the `presetFluidSizing` function.
2. Or modifying the default values in the dom element.

## Configuration Options

The `presetFluidSizing` function accepts the following configuration options:

| Option               | Type    | Default | Description                                          |
| -------------------- | ------- | ------- | ---------------------------------------------------- |
| `minContainerWidth`  | number  | `320`   | Default minimum screen width in pixels               |
| `maxContainerWidth`  | number  | `1920`  | Default maximum screen width in pixels               |
| `defaultBaseUnit`    | Unit    | `px`    | Default base unit for all utilities                  |
| `prefix`             | string  | `f-`    | Prefix for custom properties and utilities           |
| `expandCSSVariables` | boolean | `false` | Whether to expand CSS variables into component parts |
| `disableTheme`       | boolean | `false` | Whether to disable the default theme                 |
| `utilities`          | array   | `[]`    | Additional custom utilities to add                   |
| `attributify`        | boolean | `false` | Whether to enable attributify mode support           |

### Example Configuration

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'

export default defineConfig({
  presets: [
    presetFluidSizing({
      minContainerWidth: 375,
      maxContainerWidth: 1600,
      defaultBaseUnit: 'rem',
      prefix: 'fluid-',
      expandCSSVariables: true,
      attributify: true
    }),
  ],
})
```

## One-time Configuration in the DOM

You can override the default configuration values for specific utilities directly in your HTML classes:

### Utility-specific Configurations

| Utility Class                         | Description                                                                  |
| ------------------------------------- | ---------------------------------------------------------------------------- |
| `f-${utility}-min-${value}`           | Sets the minimum value for the utility                                       |
| `f-${utility}-max-${value}`           | Sets the maximum value for the utility                                       |
| `f-${utility}-min-container-${value}` | Sets the minimum container width for this specific utility                   |
| `f-${utility}-max-container-${value}` | Sets the maximum container width for this specific utility                   |
| `f-${utility}-base-${unit}`           | Sets the base unit for this utility (px, rem, em, vw, vh, vmin, vmax, fr, %) |
| `f-${utility}-container`              | Uses container width (100cqw) instead of viewport width (100vw)              |

### Example Usage in HTML

```html
<!-- Override min/max values for padding -->
<div class="f-p-min-20 f-p-max-60">Custom padding scaling from 20px to 60px</div>

<!-- Override container width points for margin -->
<div class="f-m-min-container-480 f-m-max-container-1200">Custom margin scaling between 480px and 1200px viewports</div>

<!-- Change the unit for a specific utility -->
<div class="f-text-base-rem">Font size will be calculated in rem units</div>

<!-- Use container queries instead of viewport width -->
<div class="f-gap-container">Gap will scale based on container width rather than viewport width</div>

<!-- Shorthand for min/max values -->
<div class="f-p-20/40">Padding scaling from 20px to 40px</div>
```

## Customizing Utilities

You can add your own custom utilities by using the `utilities` configuration option:

```ts
presetFluidSizing({
  utilities: [
    ['custom-property', ['--my-custom-property']],
    ['grid-cols', ['grid-template-columns']],
  ]
})
```

This would allow you to use utilities like `f-custom-property` and `f-grid-cols` with all the fluid sizing features.
