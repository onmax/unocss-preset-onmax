# UnoCSS Preset Reka UI

Use the power of Reka UI with the simplicity of UnoCSS.

## Features

- 🥳 Avoid using the ugly `data-[state='open']:`, instead simply use `reka-open:`.
- ⛹️‍♂️ Easy and adaptable animation support.
- 📦 Easy Integration – Plug-and-play with any UnoCSS project.
- 🏗️ Attributify Mode support.
- 🎨 Radix Colors support.

## Usage

> [!TIP]
> If you are also using `Shadcn-vue`, consider also using [`unocss-preset-unovue`](./unocss-preset-reka-ui.md) to have even more features.

::: code-group

```pnpm
pnpm i -D unocss-preset-reka-ui
```

```npm
npm i -D unocss-preset-reka-ui
```

```yarn
yarn i -D unocss-preset-reka-ui
```

:::

::: code-group

```ts [uno.config.ts]
import { defineConfig } from 'unocss'
import { presetRekaUI } from 'unocss-preset-reka-ui' // [!code hl]

export default defineConfig({
  presets: [
    // ...
    presetRekaUI(), // [!code hl]
  ],
})
```

:::

## Options

TODO

## Playground

TODO

You can open the [Unocss Playground](https://unocss.dev/play/)

## Credits

- [UnoCSS Preset Radix UI](https://github.com/endigma/unocss-preset-radix)
- [RekaUI](https://reka-ui.com/)
- [unocss](https://github.com/unocss/unocss)
- [preset-starter](https://github.com/unocss-community/unocss-preset-starter)
