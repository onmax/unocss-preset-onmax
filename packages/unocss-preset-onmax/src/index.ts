import type { Preset } from '@unocss/core'
import type { PresetCSSVarOptions } from 'unocss-preset-css-var'
import type { PresetScalePxOptions } from 'unocss-preset-scale-px'
import { definePreset } from '@unocss/core'
import { presetAttributify, presetWind3 } from 'unocss'
import { presetCSSVar } from 'unocss-preset-css-var'
import { presetScalePx } from 'unocss-preset-scale-px'
import { resetPreflight } from './preflights/reset'

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

  /**
   * @default true
   */
  reset?: boolean

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

  // Create preflights array conditionally
  const preflights = []

  // Add Tailwind reset CSS if enabled (default is true)
  if (_options.reset !== false) {
    preflights.push(resetPreflight)
  }

  return {
    name: 'unocss-preset-onmax',
    preflights,
    presets,
  } satisfies Preset
})
