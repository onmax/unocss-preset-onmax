# UnoCSS Preset UnoVue

Use the power of UnoVue with the simplicity of UnoCSS.

## Features

- 🖊️ Support for common utilities and variants used in Reka UI and Shadcn.
- 🥳 Avoid using the ugly `data-[state='open']:`, instead simply use `reka-open:`.
- 📦 Easy Integration – Plug-and-play with any UnoCSS project.
- 🏗️ Attributify Mode support.

## Usage

::: code-group

```pnpm
pnpm i -D unocss-preset-unovue
```

```npm
npm i -D unocss-preset-unovue
```

```yarn
yarn i -D unocss-preset-unovue
```

:::

::: code-group

```ts [uno.config.ts]
import { defineConfig } from 'unocss'
import { presetUnoVue } from 'unocss-preset-unovue' // [!code hl]

export default defineConfig({
  presets: [
    // ...
    presetUnoVue(), // [!code hl]
  ],
})
```

:::

## Options

TODO

## Documentation

This library uses under-the-hood [`unocss-preset-reka-ui`](./unocss-preset-reka-ui.md) and [`unocss-preset-shadcn-vue`](https://github.com/unocss-community/unocss-preset-shadcn). You can refer to their documentation for more information.

## Playground

TODO

You can open the [Unocss Playground](https://unocss.dev/play/)

## Credits

- [UnoVue](https://github.com/unocss-community/unocss-preset-unovue)
- [unocss-preset-shadcn](https://github.com/unocss-community/unocss-preset-shadcn)
- [unocss](https://github.com/unocss/unocss)
- [preset-starter](https://github.com/unocss-community/unocss-preset-starter)
