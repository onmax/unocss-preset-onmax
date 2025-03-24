import type { Preset, Variant } from '@unocss/core'
import type { PresetWind4Theme } from 'unocss'
import type { Palette } from './radix-colors'
import { definePreset } from '@unocss/core'
import { defu } from 'defu'
import { getRekaAnimations } from './animations'
import { genCSS, generateColors, getColor, radixColors } from './radix-colors'
import { getVariants } from './variants'

export interface RadixColorsOptions {
  /**
   * The CSS selector for dark mode
   * @default '.dark, [data-theme="dark"]'
   */
  darkSelector?: string

  /**
   * The CSS selector for light mode
   * @default ':root'
   */
  lightSelector?: string

  /**
   * The CSS variable prefix for Radix colors
   * @default '--colors-'
   */
  prefix?: string
}

export interface PresetRekaUIOptions {
  /**
   * Config for Radix Colors
   *
   * @default false
   */
  radixColors?: RadixColorsOptions | boolean

  /**
   * The config for the Reka UI variants
   *
   * @default 'reka-'
   */
  variants?: string | boolean

  /**
   * Wether to include the animations for collapsible and accordion elements
   *
   * @default true
   */
  animations?: boolean
}

export const defaultRadixColorsOptions: RadixColorsOptions = {
  darkSelector: '.dark, [data-theme="dark"]',
  lightSelector: ':root',
  prefix: '--colors-',
}

export const defaultRekaUIOptions = {
  radixColors: false,
  variants: 'reka-',
  animations: true,
} as const

export const presetRekaUI = definePreset((_options: PresetRekaUIOptions = {}) => {
  const presets: Preset[] = []
  const preflights: Preset['preflights'] = []
  const theme: PresetWind4Theme = {}
  const variants: Variant[] = []
  const rules: Preset['rules'] = []
  const shortcuts: Preset['shortcuts'] = []

  const { radixColors: radixColorsOption, variants: variantOptions, animations } = defu(_options, defaultRekaUIOptions)

  if (animations) {
    const { keyframes, rules: animationRules, shortcuts: animationShortcuts } = getRekaAnimations()
    preflights.push({ getCSS: () => keyframes })
    rules.push(...animationRules)
    shortcuts.push(...animationShortcuts)
  }

  if (radixColorsOption) {
    const radixConfig = typeof radixColorsOption === 'boolean'
      ? defaultRadixColorsOptions
      : defu(radixColorsOption, defaultRadixColorsOptions)

    // Use non-null assertion operator to tell TypeScript these values are definitely strings
    // This is safe because we merged with defaultRadixColorsOptions which provides default values
    const prefix = radixConfig.prefix!
    const darkSelector = radixConfig.darkSelector!
    const lightSelector = radixConfig.lightSelector!

    // Add colors to theme
    const colors = generateColors(prefix)
    theme.colors = colors

    // Generate CSS for the colors
    const palette: Palette = radixColors.map(name => [name, getColor(name)])
    preflights.push({
      getCSS: () => genCSS(palette, darkSelector, lightSelector, prefix),
    })
  }

  if (variantOptions) {
    const prefix = typeof variantOptions === 'string' ? variantOptions : defaultRekaUIOptions.variants
    variants.push(...getVariants(prefix))
  }

  return {
    name: 'unocss-preset-reka-ui',
    presets,
    variants,
    rules,
    theme,
    shortcuts,
    preflights,
  }
})
