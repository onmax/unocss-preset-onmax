# Radix Colors

The Reka UI preset integrates [Radix Colors](https://www.radix-ui.com/colors) - a beautiful, accessible color system with semantic color scales that automatically work in both light and dark modes.

## Features

- **Complete Color Palette**: Access to all Radix UI color scales
- **Automatic Dark Mode**: Colors automatically switch between light and dark variants
- **Semantic Scaling**: 12 steps of color scales designed for accessibility
- **Alpha Support**: Access to alpha (transparent) variants of all colors

## Available Colors

The preset includes all Radix UI color scales:

- **Grays**: `gray`, `mauve`, `slate`, `sage`, `olive`, `sand`
- **Colors**: `tomato`, `red`, `ruby`, `crimson`, `pink`, `plum`, `purple`, `violet`, `iris`, `indigo`, `blue`, `cyan`, `teal`, `jade`, `green`, `grass`, `lime`, `yellow`, `amber`, `orange`, `brown`, `bronze`, `gold`
- **Special**: `black`, `white`

Each color provides 12 shades, where:

- Step 1-2: Background/subtle backgrounds
- Step 3-5: UI element backgrounds
- Step 6-8: Borders, separators
- Step 9-12: Solid backgrounds, text

## Usage

### Basic Color Usage

```html
<!-- Background colors -->
<div class="bg-blue-3">Light blue background (auto-switches in dark mode)</div>

<!-- Text colors -->
<div class="text-blue-11">Accessible text (auto-switches in dark mode)</div>

<!-- Border colors -->
<div class="border border-blue-6">Border with color</div>
```

### Dark Mode

Radix Colors automatically switch between light and dark variants based on the configured `darkSelector`:

```html
<!-- Light mode: blue-3 bg with blue-11 text -->
<!-- Dark mode: blue-11 bg with blue-1 text -->
<div class="bg-blue-3 text-blue-11 dark:bg-blue-11 dark:text-blue-1">Automatically adapts to dark mode</div>
```

### Alpha (Transparent) Colors

Access alpha variants by adding `A` to the color step:

```html
<!-- Solid blue background -->
<div class="bg-blue-9">Solid color</div>

<!-- Semi-transparent blue (alpha variant) -->
<div class="bg-blueA-9">Alpha variant</div>
```

## Configuration

You can customize the Radix Colors integration when initializing the preset:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetRekaUI } from 'unocss-preset-reka-ui'

export default defineConfig({
  presets: [
    // ...other presets
    presetRekaUI({
      radixColors: {
        // Customize dark mode selector (default: '.dark, [data-theme="dark"]')
        darkSelector: '.dark-theme',

        // Customize light mode selector (default: ':root')
        lightSelector: 'html:not(.dark-theme)',

        // Customize CSS variable prefix (default: '--colors-')
        prefix: '--radix-',
      },
    }),
  ],
})
```

## Best Practices

### Accessibility

Radix Colors are designed with accessibility in mind. For best results:

- Use steps 1-3 for backgrounds
- Use steps 11-12 for text on light backgrounds
- Use steps 1-2 for text on dark backgrounds
- Use steps 6-8 for borders and separators

### Color Combinations

For accessible UI, consider these typical combinations:

```html
<!-- Primary button -->
<button class="bg-blue-9 text-white hover:bg-blue-10">Primary Button</button>

<!-- Secondary button -->
<button class="bg-slate-3 text-slate-11 hover:bg-slate-4">Secondary Button</button>

<!-- Card with border -->
<div class="bg-slate-1 border border-slate-6 text-slate-12">Card content</div>

<!-- Status indicator -->
<span class="text-green-11">Success</span>
<span class="text-red-11">Error</span>
```

## Advanced Usage

### Using with CSS Variables

Radix colors are implemented as CSS variables, which you can use directly:

```css
.custom-element {
  background-color: var(--colors-blue9);
  color: var(--colors-blue1);
}
```

### Theme Integration

To create a consistent theme using Radix Colors, consider creating a UI color strategy:

```html
<!-- Define semantic color usage -->
<html class="bg-slate-1 text-slate-12 dark:bg-slate-12 dark:text-slate-1">
  <body>
    <header class="border-b border-slate-6 dark:border-slate-6">
      <nav class="bg-slate-2 dark:bg-slate-11">...</nav>
    </header>
    <main>
      <button class="bg-blue-9 text-white dark:bg-blue-10">Primary Action</button>
      <button class="bg-slate-4 text-slate-11 dark:bg-slate-11 dark:text-slate-3">Secondary Action</button>
    </main>
  </body>
</html>
```
