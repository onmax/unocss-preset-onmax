# Custom Theme Configuration

Personal expression through systematic proportions.

Create your own fluid theme to match your unique design language. Define semantic size names that align with your project's visual hierarchy and brand personality.

## How Theming Works

When you use a themed utility like `f-p-lg`, the preset translates your semantic name into concrete min/max values:

```html
<!-- This semantic utility: -->
<div class="f-p-lg">Content</div>

<!-- Is automatically expanded to: -->
<div class="f-p f-p-min-32 f-p-max-48">Content</div>
```

This means that:

- At your minimum viewport width (default 320px), padding will be 32px
- At your maximum viewport width (default 1920px), padding will be 48px
- Between these boundaries, padding will scale fluidly
- Your code remains semantic and human-readable

## Creating a Custom Theme

You can create your own theme by disabling the default theme and defining custom shortcuts:

```typescript
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'

export default defineConfig({
  presets: [
    presetFluidSizing({
      disableTheme: true, // Turn off the default theme
    }),
  ],
  shortcuts: [
    // Create your own semantic sizing system

    // Typography
    ['f-text-caption', 'f-text-12/14'], // Small text
    ['f-text-body', 'f-text-16/18'], // Body text
    ['f-text-title', 'f-text-20/32'], // Section titles
    ['f-text-heading', 'f-text-32/48'], // Main headings

    // Spacing
    ['f-space-xs', 'f-p-8/12'], // Tight spacing
    ['f-space-sm', 'f-p-12/20'], // Small spacing
    ['f-space-md', 'f-p-20/32'], // Medium spacing
    ['f-space-lg', 'f-p-32/48'], // Large spacing
  ],
})
```

This approach allows you to create a design language that reflects your project's specific needs while maintaining all the benefits of fluid responsive sizing.

## Comprehensive Theme Structure

For larger projects, you might want to create a more structured theme object first, then generate shortcuts from it:

```typescript
// Create a comprehensive theme object
const myDesignSystem = {
  spacing: {
    '3xs': [4, 6], // Micro spacing
    '2xs': [6, 8], // Tiny spacing
    'xs': [8, 12], // Extra small spacing
    'sm': [12, 18], // Small spacing
    'md': [18, 28], // Medium spacing
    'lg': [28, 40], // Large spacing
    'xl': [40, 60], // Extra large spacing
    '2xl': [60, 80], // Huge spacing
    '3xl': [80, 120], // Massive spacing
  },

  borderRadius: {
    none: [0, 0], // No rounding
    sm: [2, 4], // Subtle rounding
    md: [4, 8], // Medium rounding
    lg: [8, 16], // Large rounding
    xl: [16, 24], // Very rounded
    full: [9999, 9999], // Fully rounded (circles)
  },

  fontSize: {
    'xs': [12, 14], // Small text, footnotes
    'sm': [14, 16], // Secondary text
    'md': [16, 18], // Body text
    'lg': [18, 20], // Emphasized body text
    'xl': [20, 24], // Subheadings
    '2xl': [24, 30], // Section headings
    '3xl': [30, 36], // Major headings
    '4xl': [36, 48], // Page titles
    '5xl': [48, 64], // Hero headlines
  },
}

// Then in your UnoCSS config:
export default defineConfig({
  // ...other config
  shortcuts: [
    // Generate shortcuts from your theme
    // Typography
    ...Object.entries(myDesignSystem.fontSize).map(
      ([name, [min, max]]) => [`f-text-${name}`, `f-text-${min}/${max}`]
    ),

    // Spacing
    ...Object.entries(myDesignSystem.spacing).map(
      ([name, [min, max]]) => [`f-space-${name}`, `f-p-${min}/${max}`]
    ),

    // Border radius
    ...Object.entries(myDesignSystem.borderRadius).map(
      ([name, [min, max]]) => [`f-rounded-${name}`, `f-rounded-${min}/${max}`]
    ),
  ]
})
```

This approach creates a complete, systematic design language that scales fluidly across all viewport sizes while maintaining perfect proportions throughout your application.
