# UnoCSS Preset Scale PX

A UnoCSS preset that maps utility numbers directly to pixel values (e.g., `p-4` → `0.25rem(4px)`).

## Features

- 📏 1:1 Scaling – Utility numbers map directly to pixel values (e.g., `p-4` → `0.25rem(4px)`).
- ⚡ Consistent Sizing – Simplifies spacing and sizing with predictable values.
- 🔧 Easy Integration – Plug-and-play with any UnoCSS project.

> [! WARNING]
> If you are using `presetWind4` do not use this preset. See [Usage with `presetWind4`](./#usage-with-presetwind4).

## Usage

```shell
pnpm i -D unocss-preset-scale-px
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetScalePx } from 'unocss-preset-scale-px'

export default defineConfig({
  presets: [
    // ...
    presetScalePx(),
  ],
})
```

## Playground

You can open the [Unocss Playground](https://unocss.dev/play/#html=DwEwlgbgBAxgNgQwM5ILwCIAOBaALFAcwRwGYA6AVnQD4AoYAenAmqA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAqrhJapjvgAq0MyUAvnCxQIIOAHIArqwDGdOpKRI5xOvFogASgFE4AXjgB6ABQBaAPwBtAHQAdNAF0A1AEotx0irW4N1PkYAZTkAQwAbDG4AD0N0bDwowJhTUwB9CDAYYHU4hEE3QwA%2BRCpaGGkoXFLUVFxQkAwALilZCAU6cxp6RnM6MMiu6Ml2WsgNGnb6OhbTaWzwwoMS5Fra4Cw4UwBCeeBw2wxcGChgejgAHwu4GABPMAwITb2Do5OzulssaF1QuQALODbAxGSRYWRybLESRuKhrVDlSq4FTwuAvQ7HU70SxfH5-f6pYBLFZw%2BG%2BfwANwi0gwcWA1gAjE5SWsNls7g8nnAqeEaYYQVINKdcKRJHAAGTiuBaPS2GD0FI8mluWGo1mMpxxJUYWy0MDhP4YUwy3TkLZpM1gBnEuAAAwAJAgrSY4AAWQRaW2q%2BEFUmCUaCJC%2BpAYaKQWDxLChaTheCcRJEEjAUimVYBHowGZwazdfgsCCmNyW5IhCJRaKF5kFIA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA&version=65.4.0)

## Usage with `presetWind4`

If you are using `presetWind4` and want to modify the spacing scale, you just need to modify the base spacing scale your theme.

```ts
// uno.config.ts
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      theme: {
        spacing: {
          // If you want to a 1:1 scaling with pixel, you can use the following values
          DEFAULT: '0.0625rem', // same as 1px. This will transform `p-4` into `padding: 0.0625rem`

          // Another example, but 4:1 scaling with pixel
          // DEFAULT: '1rem', // same as 16px. This will transform `p-4` into `padding: 4rem /* 64px */`

          // By default, presetWind4 uses the following values
          // DEFAULT: '0.25rem', // same as 4px. This will transform `p-4` into `padding: 0.25rem`
        }
      },
    }),
  ],
})
```

## Migration

If you have already a project, I recommend you to use [codemod.sh](./scripts/codemod.sh) to migrate your utilities.

## Credits

- [unocss](https://github.com/unocss/unocss)
- [preset-starter](https://github.com/unocss-community/unocss-preset-starter)
