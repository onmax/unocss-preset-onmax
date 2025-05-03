# CSS Variables

UnoCSS Fluid Sizing provides a powerful way to use CSS variables with your fluid sizing utilities. This allows you to define reusable fluid values and apply them to multiple properties or use them in complex calculations.

## Basic Usage

You can use the `$` prefix to store the calculation of a fluid size in a CSS variable:

```html
<div class="f-$myvar f-$myvar-min-8 f-$myvar-max-12">
  <!-- Creates a CSS variable --f-myvar that contains a fluid value -->
</div>
```

This will create a CSS variable `--f-myvar` that contains a fluid value that scales from 8px at the minimum viewport width to 12px at the maximum viewport width.

You can then use this CSS variable in your CSS or inline styles:

```html
<div class="f-$myvar f-$myvar-min-8 f-$myvar-max-12"
     style="padding-block: var(--f-myvar); margin-inline: calc(var(--f-myvar) * 2);">
  <!-- Uses the --f-myvar variable for both padding and margin (doubled) -->
</div>
```

## Naming Restrictions

> [!WARNING]
> Due to limitations, the name of the variable can only contain letters, but not numbers nor dashes.
> ✅ `f-$myvar` is correct.
> ❌ `f-$my-var` is not correct.
> ❌ `f-$myvar2` is not correct.

## Using with UnoCSS Theme

You can combine CSS variables with your UnoCSS theme for even more flexibility:

```html
<!-- Create fluid CSS variables based on theme values -->
<div class="f-$spacing f-$spacing-min-16 f-$spacing-max-32">
  <!-- Apply the fluid variable to multiple properties -->
  <div class="m-[var(--f-spacing)] p-[calc(var(--f-spacing)*1.5)]">
    Styled with fluid spacing
  </div>
</div>
```

## Advanced Usage: Expanded CSS Variables

If you set the `expandCSSVariables` option to `true` in the preset configuration, the fluid value will be broken down into multiple component variables:

```js
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'

export default defineConfig({
  presets: [
    presetFluidSizing({
      expandCSSVariables: true,
    }),
  ],
})
```

This will generate the following CSS variables for each fluid utility:

```css
.f-$myvar {
  --f-myvar-range-width: calc(1920 - 320); /* maxContainer - minContainer */
  --f-myvar-factor: calc((100vw - (1px * 320)) / var(--f-myvar-range-width));
  --f-myvar-range-size: calc(12 - 8); /* max - min */
  --f-myvar-fluid: calc(1px * 8 + var(--f-myvar-range-size) * var(--f-myvar-factor));
  --f-myvar: clamp(calc(1px * 8), var(--f-myvar-fluid), calc(1px * 12));
}
```

This gives you access to all the intermediate values in your calculations:

- `--f-{name}-range-width`: Difference between max and min container widths
- `--f-{name}-factor`: Current position factor within the viewport range (0-1)
- `--f-{name}-range-size`: Difference between max and min size values
- `--f-{name}-fluid`: The calculated fluid value (without clamping)
- `--f-{name}`: The final clamped fluid value

## Example: Complex Fluid Layout

```html
<!-- Create a fluid spacing variable -->
<div class="f-$space f-$space-min-16 f-$space-max-32">
  <!-- Create fluid typography -->
  <div class="f-$type f-$type-min-16 f-$type-max-20">
    <!-- Use both variables in a complex layout -->
    <div style="
      padding: var(--f-space);
      font-size: var(--f-type);
      grid-gap: calc(var(--f-space) / 2);
      border-radius: calc(var(--f-space) / 4);
      box-shadow: 0 calc(var(--f-space) / 8) calc(var(--f-space) / 2) rgba(0,0,0,0.1);">
      Custom fluid component
    </div>
  </div>
</div>
```
