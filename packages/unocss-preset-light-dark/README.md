# UnoCSS Preset Light Dark

A UnoCSS preset that leverages the modern CSS `light-dark()` function to automatically handle light and dark mode colors with ease.

## Features

- 🌗 **Modern CSS Support**: Uses the native CSS `light-dark()` function
- 🎨 **Automatic Color Switching**: Colors automatically adapt to user's color scheme preference
- 🔧 **Flexible Configuration**: Support for media queries, class-based, or custom selectors
- 📱 **Zero JavaScript**: Pure CSS solution, no runtime overhead
- 🎯 **Type Safe**: Full TypeScript support with proper type definitions

## Installation

```bash
npm install unocss-preset-light-dark
```

## Basic Usage

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetLightDark } from 'unocss-preset-light-dark'

export default defineConfig({
  presets: [
    // ...other presets
    presetLightDark({
      colors: {
        primary: ['#3b82f6', '#1d4ed8'], // [light, dark]
        secondary: { light: '#10b981', dark: '#059669' },
        accent: '#f59e0b', // same color for both modes
      }
    })
  ]
})
```

```html
<!-- Colors automatically switch based on user preference -->
<div class="bg-primary text-secondary">This adapts to light/dark mode automatically!</div>

<!-- Force specific color schemes -->
<div class="light:bg-accent">Only visible in light mode</div>
<div class="dark:bg-primary">Only visible in dark mode</div>

<!-- Color scheme utilities -->
<div class="light">Force light mode for this element</div>
<div class="dark">Force dark mode for this element</div>
```

## Color Configuration

### Array Format

```ts
colors: {
  primary: ['#blue-light', '#blue-dark']
}
```

### Object Format

```json
{
  "colors": {
    "primary": { "light": "#blue-light", "dark": "#blue-dark" }
  }
}
```

### Single Color (same for both modes)

```ts
colors: {
  neutral: '#gray-500'
}
```

### Nested Colors

```json
{
  "colors": {
    "blue": {
      "50": ["#eff6ff", "#1e3a8a"],
      "500": ["#3b82f6", "#1d4ed8"],
      "900": ["#1e3a8a", "#eff6ff"]
    }
  }
}
```

## Configuration Options

```ts
interface PresetLightDarkOptions {
  colors: Colors
  dark?: 'class' | 'media' | string // Default: 'media'
  light?: 'class' | 'media' | string // Default: 'media'
  colorScheme?: 'light' | 'dark' | 'only light' | 'only dark' | 'light dark' | 'dark light' // Default: 'light dark'
}
```

## Advanced Usage

### Class-based Dark Mode

```ts
presetLightDark({
  colors: { /* ... */ },
  dark: 'class', // Uses .dark class
  light: 'class' // Uses .light class
})
```

### Custom Selectors

```ts
presetLightDark({
  colors: { /* ... */ },
  dark: '[data-theme="dark"]',
  light: '[data-theme="light"]'
})
```

## How It Works

This preset generates CSS using the modern `light-dark()` function:

```css
.bg-primary {
  background-color: light-dark(#3b82f6, #1d4ed8);
}
```

The browser automatically selects the appropriate color based on the user's `prefers-color-scheme` setting or the nearest ancestor with a `color-scheme` declaration.

## Browser Support

The `light-dark()` function is supported in:

- Chrome 123+
- Firefox 120+
- Safari 17.5+

For older browsers, consider using a polyfill or fallback strategy.

## License

MIT

A UnoCSS preset that leverages the CSS `light-dark()` function to create seamless light and dark mode color schemes.

## Features

- 🌗 **CSS `light-dark()` Function**: Modern approach to light/dark mode using native CSS
- 🎨 **Flexible Color Definition**: Support for multiple color format inputs
- 🔧 **Configurable Mode Detection**: Choose between media queries, class-based, or custom selectors
- 🚀 **Zero JavaScript**: Pure CSS solution with no runtime overhead
- 🎯 **Color Scheme Integration**: Automatic `color-scheme` property management

## Installation

```bash
pnpm add unocss-preset-light-dark
```

## Basic Usage

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetLightDark } from 'unocss-preset-light-dark'

export default defineConfig({
  presets: [
    // ...other presets
    presetLightDark({
      colors: {
        primary: ['#3b82f6', '#1d4ed8'], // [light, dark]
        secondary: { light: '#10b981', dark: '#059669' },
        accent: '#f59e0b', // Same color for both modes
        surface: 'light-dark(#ffffff, #1f2937)', // Direct light-dark() function
      }
    }),
  ],
})
```

```html
<!-- Colors automatically adapt to light/dark mode -->
<div class="bg-primary text-secondary">This background and text will automatically switch colors</div>

<!-- Use variants for mode-specific styling -->
<div class="border-accent dark:border-primary">Different border colors in different modes</div>

<!-- Color scheme utilities -->
<div class="light">Force light color scheme</div>
<div class="dark">Force dark color scheme</div>
```

## Color Definition Formats

The preset supports multiple ways to define colors:

```json
{
  "colors": {
    // Array format: [light, dark]
    "primary": ["#3b82f6", "#1d4ed8"],

    // Object format: { light, dark }
    "secondary": { "light": "#10b981", "dark": "#059669" },

    // Single value (same for both modes)
    "accent": "#f59e0b",

    // Direct light-dark() function
    "surface": "light-dark(#ffffff, #1f2937)",

    // Nested objects
    "gray": {
      "50": ["#f9fafb", "#111827"],
      "100": ["#f3f4f6", "#1f2937"]
      // ...
    }
  }
}
```

## Configuration

```ts
interface PresetLightDarkOptions {
  colors: Colors // Required: Color definitions
  dark?: 'class' | 'media' | string // Dark mode detection
  light?: 'class' | 'media' | string // Light mode detection
  colorScheme?: 'light' | 'dark' | 'light dark' | 'only light' | 'only dark' | 'dark light'
}
```

### Mode Detection Options

```ts
presetLightDark({
  colors: { /* ... */ },

  // Media query based (default)
  dark: 'media', // Uses @media (prefers-color-scheme: dark)
  light: 'media', // Uses @media (prefers-color-scheme: light)

  // Class based
  dark: 'class', // Uses .dark selector
  light: 'class', // Uses .light selector

  // Custom selectors
  dark: '[data-theme="dark"]',
  light: '[data-theme="light"]',
})
```

## Generated CSS

The preset generates CSS using the modern `light-dark()` function:

```css
:root {
  color-scheme: light dark;
}

.bg-primary {
  background-color: light-dark(#3b82f6, #1d4ed8);
}

.text-secondary {
  color: light-dark(#10b981, #059669);
}

/* Variants generate appropriate media queries or selectors */
@media (prefers-color-scheme: dark) {
  .dark\:border-primary {
    border-color: light-dark(#3b82f6, #1d4ed8);
  }
}
```

## Utilities

### Color Scheme Rules

- `light` - Sets `color-scheme: light`
- `dark` - Sets `color-scheme: dark`
- `only-light` - Sets `color-scheme: only light`
- `only-dark` - Sets `color-scheme: only dark`

### Variants

- `dark:` - Apply styles in dark mode
- `light:` - Apply styles in light mode

## Browser Support

The `light-dark()` CSS function is supported in:

- Chrome 123+
- Firefox 120+
- Safari 17.5+

For older browsers, consider using a more traditional approach with CSS custom properties and media queries.

## Examples

### Basic Theme

```ts
presetLightDark({
  colors: {
    background: ['#ffffff', '#0f172a'],
    foreground: ['#0f172a', '#f8fafc'],
    primary: ['#2563eb', '#3b82f6'],
    secondary: ['#64748b', '#94a3b8'],
    accent: ['#f59e0b', '#fbbf24'],
    muted: ['#f1f5f9', '#1e293b'],
  }
})
```

### Complex Color System

```ts
presetLightDark({
  colors: {
    gray: {
      50: ['#f9fafb', '#111827'],
      100: ['#f3f4f6', '#1f2937'],
      200: ['#e5e7eb', '#374151'],
      // ... more shades
    },
    blue: {
      500: ['#3b82f6', '#60a5fa'],
      600: ['#2563eb', '#3b82f6'],
      // ...
    }
  }
})
```
