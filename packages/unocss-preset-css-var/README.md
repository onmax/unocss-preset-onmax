# UnoCSS Preset CSS Var

A UnoCSS preset that allows you to write CSS variables using classes.

## Features

- 🖊️ Write CSS variables without the need of complex selector or `style` attributes.
- 📦 Easy Integration – Plug-and-play with any UnoCSS project.
- 🏗️ Attributify Mode support

## Usage
```shell
pnpm i -D unocss-preset-css-var
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetCssVar } from 'unocss-preset-css-var'

export default defineConfig({
  presets: [
    // ...
    presetCssVar(),
  ],
})
```

## Playground

You can open the [Unocss Playground](https://unocss.dev/play/#html=DwEwlgbgBAxgNgQwM5ILwCIIIE4C4YD2cBeADmAHYDWUARgOYC0AJIcdnU1to2yegD4AUFCgAJAKYArAIRDgAenAQBQA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEZF1tAgjDFMAEYCuMYOgCecAL5x0UCCDgByPowDGVKnIBQoSLETlKNGLlUA1AIZRxk6bIXLVAWhYH7KqvYBu5jetQAPbfBo6KZ8ADaBGNh4BMQAFAjqcHqsMFQAXHAA2k60DBCxAJTM%2BrRGVGZQhcUpHFy8AkLChQC66mIFQA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA)

## Adding it into your project

If you are like me, you may have already created several `style="--my-var:value`" in your project.

You can start using this preset to replace all those variables with the following workflow:

1. Open VSCode with your project and open the search sidebar (`Ctrl/Command + Shift + F`).
2. Activate the regex. Use the `.*` symbol.
3. Search for `style="--(.+)"`.
4. Replace with `var:$1`.
5. Click 'Replace all'.

## Credits

- [unocss](https://github.com/unocss/unocss)
- [preset-starter](https://github.com/unocss-community/unocss-preset-starter)
