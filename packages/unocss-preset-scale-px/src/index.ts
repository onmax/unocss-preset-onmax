import { definePreset } from '@unocss/core'

export interface PresetScalePxOptions {
}

const remRE = /(-?[.\d]+)rem/g

/**
 * Convert rem to px. If you are using `presetWind4`, you should not use this preset.
 */
export const presetScalePx = definePreset((_options: PresetScalePxOptions = {}) => {
  return {
    name: 'unocss-preset-scale-px',
    theme: {
      spacing: { DEFAULT: '0.0625rem' },
    },
    postprocess: (util) => {
      if (!util.entries || typeof util.entries.forEach !== 'function')
        return

      util.entries?.forEach((i) => {
        const value = i[1]
        if (typeof value === 'string' && remRE.test(value))
          i[1] = value.replace(remRE, (_, p1) => `${p1 / 4}rem`)
      })
    },
  }
})
