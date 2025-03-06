# UnoCSS Preset Scale PX

A UnoCSS preset that maps utility numbers directly to pixel values (e.g., `p-4` → `0.25rem(4px)`).

## Features

- 📏 1:1 Scaling – Utility numbers map directly to pixel values (e.g., `p-4` → `0.25rem(4px)`).
- ⚡ Consistent Sizing – Simplifies spacing and sizing with predictable values.
- 🔧 Easy Integration – Plug-and-play with any UnoCSS project.

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

## Migration

If you have already a project, I recommend you to use [codemod.sh](./scripts/codemod.sh) to migrate your utilities.

## Credits

- [unocss](https://github.com/unocss/unocss)
- [preset-starter](https://github.com/unocss-community/unocss-preset-starter)
