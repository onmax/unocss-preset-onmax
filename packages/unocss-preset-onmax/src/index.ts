import type { Preset } from '@unocss/core'
import type { PresetCSSVarOptions } from 'unocss-preset-css-var'
import type { PresetEasingGradientOptions } from 'unocss-preset-easing-gradient'
import type { PresetFluidSizingOptions } from 'unocss-preset-fluid-sizing'
import type { PresetWind4Options, Theme } from 'unocss/preset-wind4'
import { definePreset, symbols } from '@unocss/core'
import { presetAttributify, presetWind4, transformerDirectives } from 'unocss'
import { presetCSSVar } from 'unocss-preset-css-var'
import { presetEasingGradient } from 'unocss-preset-easing-gradient'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'
import { variants } from './variants'

export interface PresetOnmaxOptions {
  // Core presets
  /**
   * @default true
   */
  presetWind4?: boolean | {
    options: PresetWind4Options
    /**
     * The default base font size
     * @default '0.0625rem' 1px. p-4 becomes padding: 4px
     */
    baseFontSize: '0.0625rem'
  }

  /**
   * @default true
   */
  presetAttributify?: boolean

  // Custom presets
  /**
   * @default {}
   */
  presetCssVar?: PresetCSSVarOptions | false

  /**
   * @default {
   *   attributify: true,
   * }
   */
  presetFluidSizing?: PresetFluidSizingOptions | false

  /**
   * @default {}
   */
  presetEasingGradient?: PresetEasingGradientOptions | false
}

export const presetOnmax = definePreset((_options: PresetOnmaxOptions = {}) => {
  const presets: Preset[] = []
  const theme: Theme = {}

  if (_options.presetWind4 !== false) {
    const wind4Options: PresetWind4Options = typeof _options.presetWind4 === 'object'
      ? _options.presetWind4.options
      : { attributifyPseudo: true }
    presets.push(presetWind4(wind4Options))
    const defaultBaseFontSize = _options.presetWind4 === true
      ? '0.0625rem'
      : _options.presetWind4?.baseFontSize || '0.0625rem'
    theme.spacing = { DEFAULT: defaultBaseFontSize }
  }

  if (_options.presetAttributify !== false) {
    const attributifyOptions = typeof _options.presetAttributify === 'object'
      ? _options.presetAttributify
      : {}
    presets.push(presetAttributify(attributifyOptions))
  }

  const {
    presetCssVar: presetCssVarOptions = {},
    presetFluidSizing: presetFluidSizingOptions = { attributify: true },
    presetEasingGradient: presetEasingGradientOptions = {},
  } = _options

  if (presetCssVarOptions !== false)
    presets.push(presetCSSVar(presetCssVarOptions))
  if (presetFluidSizingOptions !== false)
    presets.push(presetFluidSizing(presetFluidSizingOptions))
  if (presetEasingGradientOptions !== false)
    presets.push(presetEasingGradient(presetEasingGradientOptions))

  const rules: Preset['rules'] = [
    [
      /^stack$/,
      function* () {
        yield {
          'width': '100%',
          'display': 'grid',
          'grid-template-columns': '1fr',
          'grid-template-rows': '1fr',
        }
        yield {
          [symbols.selector]: selector => `${selector} > *`,
          'grid-row': 'span 1',
          'grid-column': 'span 1',
          'justify-self': 'center',
          'align-self': 'center',
        }
      },
    ],
  ]

  return {
    name: 'unocss-preset-onmax',
    presets,
    theme,
    variants,
    rules,
    transformers: [
      transformerDirectives(),
    ],
  } satisfies Preset
})
