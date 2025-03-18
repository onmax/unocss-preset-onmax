import type { Preset } from '@unocss/core'
import type { PresetRekaUIOptions } from 'unocss-preset-reka-ui'
import { definePreset } from '@unocss/core'
import { defu } from 'defu'
import { defaultRekaUIOptions, presetRekaUI } from 'unocss-preset-reka-ui'
import { presetShadcn } from 'unocss-preset-shadcn'

export interface PresetUnoVueOptions {
  /**
   * Config for Radix Colors
   *
   * @default false
   */
  reka?: PresetRekaUIOptions | boolean

  /**
   * Config for Shadcn. @see https://github.com/unocss-community/unocss-preset-shadcn
   *
   * @default {}
   */
  shadcn?: {
    themeOptions?: Parameters<typeof presetShadcn>[0]
    controlOptions?: Parameters<typeof presetShadcn>[1]
  } | boolean
}

export const defaultUnoVueOptions: PresetUnoVueOptions = {
  reka: defaultRekaUIOptions,
  shadcn: {
    themeOptions: {},
    controlOptions: { componentLibrary: 'reka' },
  },
}

export const presetUnoVue = definePreset((_options: PresetUnoVueOptions = {}) => {
  const presets: Preset[] = []

  const { reka, shadcn } = defu(_options, defaultUnoVueOptions)

  if (reka !== false) {
    const options = typeof reka === 'boolean'
      ? defaultRekaUIOptions
      : defu(reka, defaultRekaUIOptions)
    presets.push(presetRekaUI(options))
  }

  if (shadcn !== false && shadcn !== undefined) {
    const theme = typeof shadcn === 'boolean' ? {} : shadcn.themeOptions
    const control = typeof shadcn === 'boolean' ? {} : shadcn.controlOptions
    presets.push(presetShadcn(theme, control))
  }

  return {
    name: 'unocss-preset-unovue',
    presets,
  }
})
