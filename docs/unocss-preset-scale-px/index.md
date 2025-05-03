# UnoCSS Scale PX Preset

The Scale PX preset provides functionality to scale `rem` units in your UnoCSS utilities. This preset is particularly useful for creating more precise sizing in your designs by scaling down rem values by a factor of 4.

## Features

- Automatically converts rem values to more precise units
- Maintains the flexibility of the rem-based system
- Perfect for fine-tuning your spacing and sizing

## How it Works

The Scale PX preset changes how rem values are processed in your UnoCSS utilities. When enabled, all rem values in your utilities are scaled by dividing them by 4. This means:

- `1rem` becomes `0.25rem`
- `2rem` becomes `0.5rem`
- `4rem` becomes `1rem`

This scaling provides more granular control over your spacing and sizing, especially useful for pixel-perfect designs.

## Basic Usage

With this preset, you can continue using UnoCSS utilities as normal, but with the knowledge that rem values will be scaled:

```html
<!-- This will result in 0.25rem (4px at default browser settings) of padding -->
<div class="p-1"></div>

<!-- This will create a width of 0.5rem (8px at default browser settings) -->
<div class="w-2"></div>
```

> Note: If you're using `presetWind4`, you should not use this preset as it would conflict with the built-in spacing system.
