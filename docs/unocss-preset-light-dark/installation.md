# Installation

## Package Installation

Install the preset using your preferred package manager:

::: code-group

```bash [npm]
npm install unocss-preset-light-dark
```

```bash [yarn]
yarn add unocss-preset-light-dark
```

```bash [pnpm]
pnpm add unocss-preset-light-dark
```

```bash [bun]
bun add unocss-preset-light-dark
```

:::

## Setup

Add the preset to your UnoCSS configuration:

```ts [uno.config.ts]
import { defineConfig } from 'unocss'
import { presetLightDark } from 'unocss-preset-light-dark'

export default defineConfig({
  presets: [
    presetLightDark(),
  ],
})
```

### Nuxt

For Nuxt projects, it is hightly recommended to use the [`@nuxtjs/color-mode`](https://nuxt.com/modules/color-mode) module for better integration with the `light-dark()` function.
