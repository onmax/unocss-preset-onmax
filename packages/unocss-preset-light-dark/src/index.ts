import type { Preset } from '@unocss/core'

interface Colors {
  [key: string]: [string, string] | { light: string, dark: string } | Colors | `light-dark(${string}, ${string})`
}

export interface PresetLightDarkOptions {
  colors: Colors

  /**
   * The dark mode selector. It can be either 'class', 'media', or a custom selector.
   *
   * @default 'media'
   */
  dark?: 'class' | 'media' | string

  /**
   * The light mode selector. It can be either 'class', 'media', or a custom selector.
   *
   * @default 'media'
   */
  light?: 'class' | 'media' | string

  /**
   * The color scheme applied to the root element.
   *
   * @default 'light dark'
   */
  colorScheme?: 'light' | 'dark' | 'only light' | 'only dark' | 'light dark' | 'dark light'

  /**
   * Layer of colors to be used in the preset.
   */
  layer?: string
}

export const defaultLightDarkOptions: Partial<PresetLightDarkOptions> = {
  dark: 'media',
  light: 'media',
  colorScheme: 'light dark',
}

export function presetLightDark(options: PresetLightDarkOptions): Preset {
  const { colors: colorsInput, dark = 'media', light = 'media', colorScheme = 'light dark', layer } = options
  const parsedColors = parseColors(colorsInput)

  return {
    name: 'unocss-preset-light-dark',
    preflights: [
      {
        getCSS: () => `:root { color-scheme: ${colorScheme}; }`,
        layer,
      },
    ],
    theme: {
      colors: parsedColors,
    },
    rules: [
      ['light', { 'color-scheme': 'light' }, { layer }],
      ['dark', { 'color-scheme': 'dark' }, { layer }],
      ['only-light', { 'color-scheme': 'only light' }, { layer }],
      ['only-dark', { 'color-scheme': 'only dark' }, { layer }],
      ['light-dark', { 'color-scheme': 'light dark' }, { layer }],
      ['dark-light', { 'color-scheme': 'dark light' }, { layer }],
    ],
    variants: [
      (matcher) => {
        if (!matcher.startsWith('dark:'))
          return matcher
        const selector = matcher.slice(5)
        return {
          matcher: selector,
          layer,
          selector: (s) => {
            if (dark === 'class')
              return `.dark${s}`
            else if (dark === 'media')
              return `@media (prefers-color-scheme: dark) { ${s} }`
            else return `${dark} ${s}`
          },
        }
      },
      (matcher) => {
        if (!matcher.startsWith('light:'))
          return matcher
        const selector = matcher.slice(6)
        return {
          matcher: selector,
          layer,
          selector: (s) => {
            if (light === 'class')
              return `.light${s}`
            else if (light === 'media')
              return `@media (prefers-color-scheme: light) { ${s} }`
            else return `${light} ${s}`
          },
        }
      },
    ],
  }
}

interface ParsedColors {
  [key: string]: ParsedColors | `light-dark(${string}, ${string})`
}

function parseColors(colors: Colors): ParsedColors {
  const parsed: ParsedColors = {}
  for (const key in colors) {
    const value = colors[key]
    if (typeof value === 'string') {
      // Already a light-dark() function, keep as is
      if (value.startsWith('light-dark(')) {
        parsed[key] = value as `light-dark(${string}, ${string})`
      }
      else {
        // Single color value, use for both light and dark
        parsed[key] = `light-dark(${value}, ${value})`
      }
    }
    else if (Array.isArray(value)) {
      // [light, dark] array format
      parsed[key] = `light-dark(${value[0]}, ${value[1]})`
    }
    else if (typeof value === 'object' && 'light' in value && 'dark' in value) {
      // { light: string, dark: string } object format
      parsed[key] = `light-dark(${value.light}, ${value.dark})`
    }
    else if (typeof value === 'object') {
      // Nested colors object, recurse
      parsed[key] = parseColors(value)
    }
  }
  return parsed
}
