# UnoCSS Preset Onmax

A UnoCSS preset highly opinionated for my projects.

> [!WARNING]
> Under heavy development, breaking changes may occur.

## Installation

```bash
npm i -D unocss-preset-onmax
```

## Usage

```ts
import { defineConfig } from 'unocss'
import presetOnmax from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax({ /* options */ }),
  ],
})
```

Check the [`options`](./src/index.ts) parameter in the source code for more details.
