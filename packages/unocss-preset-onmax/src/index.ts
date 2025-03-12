import type { Preset } from '@unocss/core'
import type { PresetCSSVarOptions } from 'unocss-preset-css-var'
import type { PresetEasingGradientOptions } from 'unocss-preset-easing-gradient'
import type { PresetFluidSizingOptions } from 'unocss-preset-fluid-sizing'
import type { PresetScalePxOptions } from 'unocss-preset-scale-px'
import { definePreset, symbols } from '@unocss/core'
import { presetAttributify, presetWind3, transformerDirectives } from 'unocss'
import { presetCSSVar } from 'unocss-preset-css-var'
import { presetEasingGradient } from 'unocss-preset-easing-gradient'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'
import { presetScalePx } from 'unocss-preset-scale-px'
import { variants } from './variants'

export interface PresetOnmaxOptions {
  // Core presets
  /**
   * @default true
   */
  presetWind3?: boolean

  /**
   * @default true
   */
  presetAttributify?: boolean

  // Custom presets
  /**
   * @default {}
   */
  presetScalePx?: PresetScalePxOptions | false

  /**
   * @default {}
   */
  presetCssVar?: PresetCSSVarOptions | false

  /**
   * @default {}
   */
  presetFluidSizing?: PresetFluidSizingOptions | false

  /**
   * @default {}
   */
  presetEasingGradient?: PresetEasingGradientOptions | false
}

export const presetOnmax = definePreset((_options: PresetOnmaxOptions = {}) => {
  const presets: Preset[] = []

  if (_options.presetWind3 !== false)
    presets.push(presetWind3())

  if (_options.presetAttributify !== false)
    presets.push(presetAttributify())

  if (_options.presetScalePx !== false)
    presets.push(presetScalePx(_options.presetScalePx))
  if (_options.presetCssVar !== false)
    presets.push(presetCSSVar(_options.presetCssVar))
  if (_options.presetFluidSizing !== false)
    presets.push(presetFluidSizing(_options.presetFluidSizing))
  if (_options.presetEasingGradient !== false)
    presets.push(presetEasingGradient(_options.presetEasingGradient))

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
    variants,
    rules,
    transformers: [
      transformerDirectives(),
    ],
  } satisfies Preset
})
