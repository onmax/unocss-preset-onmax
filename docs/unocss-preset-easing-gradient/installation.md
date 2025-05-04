# Installation

Once you have UnoCSS set up, you can install the `unocss-preset-easing-gradient` package to start using easing gradient utilities.

::: code-group

```bash [pnpm]
pnpm add -D unocss-preset-easing-gradient unocss
```

```bash [npm]
npm install -D unocss-preset-easing-gradient unocss
```

```bash [yarn]
yarn add -D unocss-preset-easing-gradient unocss
```

```bash [bun]
bun add -D unocss-preset-easing-gradient unocss
```

:::

## Configuration

Add the preset to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetEasingGradient } from 'unocss-preset-easing-gradient'

export default defineConfig({
  presets: [
    // other presets...
    presetEasingGradient({
      // optional: add custom easing functions
      customFunctions: {
        myCustomEasing: t => t * t * (3 - 2 * t),
      },
      // optional: change default number of steps (default is 4)
      defaultSteps: 6,
    }),
  ],
})
```

### Configuration Options

| Option            | Type                                    | Default | Description                                                       |
| ----------------- | --------------------------------------- | ------- | ----------------------------------------------------------------- |
| `customFunctions` | `Record<string, (t: number) => number>` | `{}`    | Custom easing functions to add to the preset                      |
| `defaultSteps`    | `number`                                | `4`     | Default number of color stops to generate along the gradient path |

## Basic Usage

```html
<!-- Basic easing gradient -->
<div class="bg-gradient-fn-ease fn-from-blue-500 fn-to-purple-500 fn-to-r"></div>

<!-- Using a different direction -->
<div class="bg-gradient-fn-ease-in-out fn-from-green-400 fn-to-blue-500 fn-to-br"></div>

<!-- With different color space -->
<div class="bg-gradient-fn-cubic fn-from-red-500 fn-to-yellow-500 fn-to-r fn-color-space-oklch"></div>
```

## Browser Compatibility

This preset uses modern CSS features that may not be supported in all browsers:

- `color-mix()` function
- CSS `@property` rule

Make sure to check browser compatibility or provide fallbacks when using in production.
