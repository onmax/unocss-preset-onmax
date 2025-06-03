import type { CSSEntry, UtilObject } from '@unocss/core'
import { definePreset } from '@unocss/core'

export interface PresetScalePxOptions {
}

export const defaultScalePxOptions: PresetScalePxOptions = {
}

const remRE = /(-?[.\d]+)rem/g

function resolver(utility: CSSEntry): void {
  if (typeof utility[1] === 'string' && remRE.test(utility[1]))
    utility[1] = utility[1].replace(remRE, (_, p1) => `${p1 / 4}rem`)
}
/**
 * Convert rem to px
 */
export const presetScalePx = definePreset((_options: PresetScalePxOptions = {}) => {
  return {
    name: 'unocss-preset-scale-px',
    postprocess: (util) => {
      if (!util.entries || typeof util.entries.forEach !== 'function')
        return
      util.entries?.forEach(i => resolver(i))
    },
  }
})

export function createScalePxProcessor(): (utilObjectOrEntry: UtilObject | CSSEntry) => void {
  return (utilObjectOrEntry) => {
    if (Array.isArray(utilObjectOrEntry))
      resolver(utilObjectOrEntry as CSSEntry)
    else
      (utilObjectOrEntry as UtilObject).entries.forEach(resolver)
  }
}
