# Theme Configuration

UnoCSS Fluid Sizing preset comes with a carefully crafted default theme that provides predefined fluid sizes for common CSS properties. This allows you to quickly use semantic size names instead of specifying exact min/max values for each utility.

## Default Theme

The default theme includes predefined values for spacing, border radius, and font sizes. Each theme value consists of a pair of numbers representing the minimum and maximum values that will be used for fluid sizing.

### Spacing Scale

These spacing values can be used with any spacing utilities like margins, padding, and gaps...

| Name  | Min Value (px) | Max Value (px) | Example    |
| ----- | -------------- | -------------- | ---------- |
| `2xs` | 8              | 12             | `f-p-2xs`  |
| `xs`  | 12             | 16             | `f-m-xs`   |
| `sm`  | 16             | 24             | `f-gap-sm` |
| `md`  | 24             | 32             | `f-mt-md`  |
| `lg`  | 32             | 48             | `f-pb-lg`  |
| `xl`  | 48             | 72             | `f-mx-xl`  |
| `2xl` | 72             | 96             | `f-py-2xl` |
| `3xl` | 96             | 128            | `f-p-3xl`  |
| `4xl` | 128            | 144            | `f-m-4xl`  |
| `5xl` | 144            | 200            | `f-mt-5xl` |

### Border Radius Scale

These values are specifically for the `f-rounded` utility.

| Name  | Min Value (px) | Max Value (px) | Example         |
| ----- | -------------- | -------------- | --------------- |
| `xs`  | 2              | 4              | `f-rounded-xs`  |
| `sm`  | 4              | 6              | `f-rounded-sm`  |
| `md`  | 6              | 8              | `f-rounded-md`  |
| `lg`  | 8              | 12             | `f-rounded-lg`  |
| `xl`  | 12             | 16             | `f-rounded-xl`  |
| `2xl` | 16             | 24             | `f-rounded-2xl` |

### Font Size Scale

These values are specifically for the `f-text` utility.

| Name  | Min Value (px) | Max Value (px) | Example      |
| ----- | -------------- | -------------- | ------------ |
| `3xs` | 9              | 11             | `f-text-3xs` |
| `2xs` | 10             | 12             | `f-text-2xs` |
| `xs`  | 12             | 14             | `f-text-xs`  |
| `sm`  | 14             | 16             | `f-text-sm`  |
| `md`  | 16             | 16             | `f-text-md`  |
| `lg`  | 16             | 18             | `f-text-lg`  |
| `xl`  | 18             | 22             | `f-text-xl`  |
| `2xl` | 22             | 26             | `f-text-2xl` |
| `3xl` | 26             | 32             | `f-text-3xl` |
| `4xl` | 32             | 44             | `f-text-4xl` |

## How Theme Works

When you use a themed utility like `f-p-lg`, the preset translates it to:

```html
<!-- This: -->
<div class="f-p-lg">
  <!-- Becomes equivalent to: -->
  <div class="f-p f-p-min-32 f-p-max-48"></div>
</div>
```

This means the padding will be:

- 32px at the minimum viewport width (320px by default)
- 48px at the maximum viewport width (1920px by default)
- Fluidly scaled values for viewport widths in between

## Custom Theme

You can define your own theme by disabling the default theme and providing your own shortcuts:

```typescript
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'

export default defineConfig({
  presets: [
    presetFluidSizing({
      disableTheme: true, // Disable the default theme
    }),
  ],
  shortcuts: [
    // Define your own theme shortcuts
    ['f-text-title', 'f-text-20/40'],
    ['f-text-body', 'f-text-16/18'],
    ['f-spacing-small', 'f-p-8/16'],
    ['f-spacing-large', 'f-p-16/32'],
  ],
})
```

## Theme Structure

If you want to create a completely custom theme similar to the default one, you can structure it like this:

```typescript
const myTheme = {
  spacing: {
    tiny: [4, 8],
    small: [8, 16],
    medium: [16, 32],
    large: [32, 64],
    huge: [64, 128],
  },

  borderRadius: {
    small: [2, 4],
    medium: [4, 8],
    large: [8, 16],
  },

  fontSize: {
    small: [12, 14],
    medium: [16, 18],
    large: [20, 24],
    title: [24, 36],
    headline: [32, 48],
  },
}

// Then create shortcuts based on this theme
```
