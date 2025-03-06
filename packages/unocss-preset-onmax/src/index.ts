import type { Preset } from '@unocss/core'
import type { PresetCSSVarOptions } from 'unocss-preset-css-var'
import type { PresetScalePxOptions } from 'unocss-preset-scale-px'
import { definePreset } from '@unocss/core'
import { presetAttributify, presetWind3, transformerDirectives } from 'unocss'
import { presetCSSVar } from 'unocss-preset-css-var'
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
  scalePx?: PresetScalePxOptions | false

  /**
   * @default {}
   */
  cssVar?: PresetCSSVarOptions | false
}

export const presetOnmax = definePreset((_options: PresetOnmaxOptions = {}) => {
  const presets: Preset[] = []

  if (_options.presetWind3 !== false)
    presets.push(presetWind3())

  if (_options.presetAttributify !== false)
    presets.push(presetAttributify())

  if (_options.scalePx !== false)
    presets.push(presetScalePx(_options.scalePx))
  if (_options.cssVar !== false)
    presets.push(presetCSSVar(_options.cssVar))

  return {
    name: 'unocss-preset-onmax',
    presets,
    variants,
    transformers: [
      transformerDirectives(),
    ],
  } satisfies Preset
})
