# Installing CSS Variables Preset

The CSS Variables preset is already included in UnoCSS Preset Onmax, but you can also use it standalone if needed.

## Using with UnoCSS Preset Onmax

If you're using the UnoCSS Preset Onmax, the CSS Variables preset is included and enabled by default. You can customize its settings:

```js
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax({
      presets: {
        cssVar: {
          // Custom CSS Variables preset options
          prefix: 'app-',
          varStyle: 'kebab-case',
          // Other options...
        }
      }
    }),
  ],
})
```

## Standalone Installation

If you want to use just the CSS Variables preset on its own:

::: code-group

```bash [npm]
npm install unocss-preset-css-var
```

```bash [yarn]
yarn add unocss-preset-css-var
```

```bash [pnpm]
pnpm add unocss-preset-css-var
```

:::

Then add it to your UnoCSS configuration:

```js
import { defineConfig } from 'unocss'
import { presetCSSVar } from 'unocss-preset-css-var'

export default defineConfig({
  presets: [
    // Other presets...
    presetCSSVar({
      // Configuration options
      prefix: 'app-',
      varStyle: 'kebab-case',
    }),
  ],
})
```

## Configuration Options

| Option     | Type                            | Default        | Description                       |
| ---------- | ------------------------------- | -------------- | --------------------------------- |
| `prefix`   | `string`                        | `''`           | Prefix for all CSS variable names |
| `varStyle` | `'kebab-case'` \| `'camelCase'` | `'kebab-case'` | Naming style for CSS variables    |
| `defaults` | `Record<string, string>`        | `{}`           | Default CSS variable values       |

## What's Next

Learn how to use CSS Variables effectively in your UnoCSS project by checking out the [usage examples](/unocss-preset-css-var/).
