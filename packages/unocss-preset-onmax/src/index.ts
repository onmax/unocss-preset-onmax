import type { Preset } from '@unocss/core'
import type { PresetCSSVarOptions } from 'unocss-preset-css-var'
import type { PresetScalePxOptions } from 'unocss-preset-scale-px'
import { definePreset } from '@unocss/core'
import { presetAttributify, presetWind3, transformerDirectives } from 'unocss'
import { presetCSSVar } from 'unocss-preset-css-var'
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
  presetFluidSizing?: PresetCSSVarOptions | false
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

  return {
    name: 'unocss-preset-onmax',
    presets,
    variants,
    transformers: [
      transformerDirectives(),
    ],
  } satisfies Preset
})
