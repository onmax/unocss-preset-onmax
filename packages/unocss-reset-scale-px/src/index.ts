import { definePreset } from '@unocss/core'

export interface PresetScalePxOptions {
}

const remRE = /(-?[.\d]+)rem/g

export const presetScalePx = definePreset((_options: PresetScalePxOptions = {}) => {
  return {
    name: 'unocss-preset-scale-px',
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
