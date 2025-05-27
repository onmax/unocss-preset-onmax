# Configuration

The `presetLightDark` accepts several options to customize its behavior.

## Basic Configuration

```ts
import { defineConfig } from 'unocss'
import { presetLightDark } from 'unocss-preset-light-dark'

export default defineConfig({
  presets: [
    presetLightDark({
      colors: {
        primary: { light: '#3b82f6', dark: '#60a5fa' },
        secondary: { light: '#6b7280', dark: '#9ca3af' },
      },
      classPrefix: 'ld-',
      darkModeSelector: 'dark',
      lightModeSelector: 'light',
    }),
  ],
})
```

## Configuration Options

### `colors`

- **Type**: `Record<string, { light: string, dark: string }>`
- **Default**: `{}`

Define color pairs for light and dark modes. Each color should have both `light` and `dark` variants.

```ts
presetLightDark({
  colors: {
    primary: { light: '#3b82f6', dark: '#60a5fa' },
    secondary: { light: '#6b7280', dark: '#9ca3af' },
    accent: { light: '#f59e0b', dark: '#fbbf24' },
    background: { light: '#ffffff', dark: '#1f2937' },
    text: { light: '#111827', dark: '#f9fafb' },
  },
})
```

### `classPrefix`

- **Type**: `string`
- **Default**: `'ld-'`

Prefix for generated utility classes.

```ts
presetLightDark({
  classPrefix: 'theme-', // Generates: theme-text-primary, theme-bg-secondary
})
```

### `darkModeSelector`

- **Type**: `string`
- **Default**: `'dark'`

CSS class name for dark mode detection.

```ts
presetLightDark({
  darkModeSelector: 'dark-theme', // Uses .dark-theme for dark mode
})
```

### `lightModeSelector`

- **Type**: `string`
- **Default**: `'light'`

CSS class name for light mode detection.

```ts
presetLightDark({
  lightModeSelector: 'light-theme', // Uses .light-theme for light mode
})
```

## Advanced Examples

### Custom Color Scheme

```ts
presetLightDark({
  colors: {
    // Brand colors
    brand: { light: '#6366f1', dark: '#818cf8' },
    brandHover: { light: '#4f46e5', dark: '#6366f1' },

    // Semantic colors
    success: { light: '#10b981', dark: '#34d399' },
    warning: { light: '#f59e0b', dark: '#fbbf24' },
    error: { light: '#ef4444', dark: '#f87171' },

    // Surface colors
    surface: { light: '#f8fafc', dark: '#0f172a' },
    surfaceHover: { light: '#f1f5f9', dark: '#1e293b' },

    // Text colors
    textPrimary: { light: '#0f172a', dark: '#f8fafc' },
    textSecondary: { light: '#475569', dark: '#cbd5e1' },
    textMuted: { light: '#94a3b8', dark: '#64748b' },
  },
})
```

## Color Format Support

The preset supports various color formats:

```ts
presetLightDark({
  colors: {
    // Hex colors
    hex: { light: '#3b82f6', dark: '#60a5fa' },

    // RGB colors
    rgb: { light: 'rgb(59, 130, 246)', dark: 'rgb(96, 165, 250)' },

    // HSL colors
    hsl: { light: 'hsl(217, 91%, 60%)', dark: 'hsl(213, 93%, 68%)' },

    // CSS color names
    named: { light: 'blue', dark: 'lightblue' },
  },
})
```

## Media Query Strategy

The preset automatically handles both class-based and media query-based dark mode detection:

```css
/* Class-based (default) */
.dark .ld-text-primary {
  color: light-dark(#111827, #f9fafb);
}

/* Media query fallback */
@media (prefers-color-scheme: dark) {
  .ld-text-primary {
    color: light-dark(#111827, #f9fafb);
  }
}
```

## What's Next?

- [Basic Usage →](/unocss-preset-light-dark/usage/basic) - Learn how to use the generated utilities
- [Examples →](/unocss-preset-light-dark/usage/examples) - See practical examples
- [Playground →](https://unocss.dev/play/) - Try it out online
