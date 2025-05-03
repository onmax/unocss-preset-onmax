# Installation

Once you have UnoCSS set up, you can install the `unocss-preset-unovue` package to add comprehensive Vue UI component styling to your project.

::: code-group
```bash [pnpm]
pnpm add -D unocss-preset-unovue unocss
```
```bash [npm]
npm install -D unocss-preset-unovue unocss
```
```bash [yarn]
yarn add -D unocss-preset-unovue unocss
```
```bash [bun]
bun add -D unocss-preset-unovue unocss
```
:::

## Configuration

Add the preset to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUnoVue } from 'unocss-preset-unovue'

export default defineConfig({
  presets: [
    // other presets...
    presetUnoVue({
      // Configure Reka UI integration
      reka: true, // or pass options object

      // Configure Shadcn UI integration
      shadcn: {
        themeOptions: {
          // theme configuration
        },
        controlOptions: {
          // specify 'reka' as the component library
          componentLibrary: 'reka',
        },
      },
    }),
  ],
})
```

### Configuration Options

#### Reka UI Options

You can customize the Reka UI integration:

```ts
presetUnoVue({
  reka: {
    // Enable Radix Colors with custom settings
    radixColors: {
      darkSelector: '.dark-mode',
      lightSelector: ':root',
      prefix: '--colors-',
    },

    // Configure variants prefix
    variants: 'custom-',

    // Enable UI animations
    animations: true,
  },
})
```

#### Shadcn UI Options

You can customize the Shadcn UI integration:

```ts
presetUnoVue({
  shadcn: {
    themeOptions: {
      // Theme configuration
    },
    controlOptions: {
      // Component library to use
      componentLibrary: 'reka',
    },
  },
})
```

## Basic Usage

```html
<!-- Using integrated component classes -->
<button class="btn btn-primary">Primary Button</button>

<!-- Using Radix colors from Reka UI -->
<div class="bg-slate-3 text-slate-11">
  Content with Radix colors
</div>

<!-- Using animations from Reka UI -->
<div class="animate-accordion-down">
  Animated content
</div>
```
