import type { PresetWind3Theme } from 'unocss'
import { definePreset } from '@unocss/core'

export interface PresetCSSVarOptions {
}

export const presetCSSVar = definePreset((_options: PresetCSSVarOptions = {}) => {
  return {
    name: 'unocss-preset-css-var',
    rules: [
      [/var:([\w-]+):(.+)$/, ([, name, value], { theme }) => {
        const cssVar = name.startsWith('--') ? name : `--${name}`

        if ((theme as PresetWind3Theme).colors?.[value]) {
          return { [cssVar]: `var(--color-${value})` }
        }
        return { [cssVar]: value }
      }],
    ],
  }
})
