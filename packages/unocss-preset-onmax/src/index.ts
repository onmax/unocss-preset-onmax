import type { Preset } from '@unocss/core'
import type { PresetCSSVarOptions } from 'unocss-preset-css-var'
import type { PresetScalePxOptions } from 'unocss-preset-scale-px'
import { definePreset } from '@unocss/core'
import { presetCSSVar } from 'unocss-preset-css-var'
import { presetScalePx } from 'unocss-preset-scale-px'

export interface PresetOnmaxOptions {
  scalePx?: PresetScalePxOptions | false
  cssVar?: PresetCSSVarOptions | false
}

export const presetOnmax = definePreset((_options: PresetOnmaxOptions = {}) => {
  const presets: Preset[] = []
  if (_options.scalePx !== false)
    presets.push(presetScalePx(_options.scalePx))
  if (_options.cssVar !== false)
    presets.push(presetCSSVar(_options.cssVar))

  return {
    name: 'unocss-preset-onmax',
    presets,
  }
})
