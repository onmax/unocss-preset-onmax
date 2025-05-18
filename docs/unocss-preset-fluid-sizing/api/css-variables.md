# CSS Variables

Fluidity expressed through variables, power through abstraction.

UnoCSS Fluid Sizing lets you harness the power of CSS variables with your fluid utilities. Define reusable fluid values once and apply them across multiple properties or use them in complex calculations for truly dynamic designs.

## Basic Usage

Create fluid CSS variables using the `$` prefix:

```html
<div class="f-$myvar f-$myvar-min-8 f-$myvar-max-12">
  <!-- Creates a CSS variable --f-myvar that scales fluidly from 8px to 12px -->
</div>
```

This generates a CSS variable `--f-myvar` containing a fluid value that smoothly scales from 8px at the smallest viewport to 12px at the largest viewport.

You can then reference this variable anywhere in your CSS or inline styles:

```html
<div
  class="f-$myvar f-$myvar-min-8 f-$myvar-max-12"
  style="padding-block: var(--f-myvar); margin-inline: calc(var(--f-myvar) * 2)"
>
  <!-- Uses the same fluid value for padding and doubled for margin -->
</div>
```

## Naming Rules

> [!IMPORTANT]
> Variable naming has some restrictions. The variable name:
>
> - ✅ Can include letters (`f-$myvar`)
> - ❌ Cannot include numbers (`f-$myvar2`)
> - ❌ Cannot include dashes (`f-$my-var`)

## Using with UnoCSS Theme

Combine CSS variables with your theme values for maximum flexibility:

```html
<!-- Define fluid spacing variable based on theme -->
<div class="f-$spacing f-$spacing-min-16 f-$spacing-max-32">
  <!-- Apply the fluid variable in multiple ways -->
  <div class="m-[var(--f-spacing)] p-[calc(var(--f-spacing)*1.5)]">Everything scales proportionally</div>
</div>
```

## Advanced: Expanded CSS Variables

Enable the `expandCSSVariables` option to access all the internal calculation values:

```js
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'

export default defineConfig({
  presets: [
    presetFluidSizing({
      expandCSSVariables: true, // Expose all calculation components
    }),
  ],
})
```

This breaks down each fluid utility into its component variables:

```css
.f-$myvar {
  /* Range between min and max container widths */
  --f-myvar-range-width: calc(1920 - 320);

  /* Current viewport position factor (0-1) */
  --f-myvar-factor: calc((100vw - (1px * 320)) / var(--f-myvar-range-width));

  /* Size difference between min and max values */
  --f-myvar-range-size: calc(12 - 8);

  /* Raw fluid value calculation */
  --f-myvar-fluid: calc(1px * 8 + var(--f-myvar-range-size) * var(--f-myvar-factor));

  /* Final clamped value */
  --f-myvar: clamp(calc(1px * 8), var(--f-myvar-fluid), calc(1px * 12));
}
```

This gives you access to all intermediate values for complex calculations:

- `--f-{name}-range-width`: Difference between max and min container widths
- `--f-{name}-factor`: Current position factor within the viewport range (0-1)
- `--f-{name}-range-size`: Difference between max and min size values
- `--f-{name}-fluid`: The calculated fluid value (without clamping)
- `--f-{name}`: The final clamped fluid value

## Example: Building a Fluid Component

Create a complex component with multiple fluid aspects from a few variables:

```html
<!-- Set up fluid spacing and typography variables -->
<div class="f-$space f-$space-min-16 f-$space-max-32 f-$type f-$type-min-16 f-$type-max-20">
  <!-- Use variables in creative ways -->
  <div
    class="rounded-lg shadow-lg"
    style="
      /* Base spacing */
      padding: var(--f-space);

      /* Typography */
      font-size: var(--f-type);
      line-height: calc(var(--f-type) * 1.5);

      /* Derived spacing */
      gap: calc(var(--f-space) / 2);
      border-radius: calc(var(--f-space) / 4);

      /* Complex values */
      box-shadow: 0 calc(var(--f-space) / 8) calc(var(--f-space) / 2) rgba(0, 0, 0, 0.15);
    "
  >
    Everything scales perfectly together
  </div>
</div>
```

This approach keeps your design system consistent while allowing for complex relationships between different visual properties.
