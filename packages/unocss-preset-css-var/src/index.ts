import type { PresetWind3Theme } from 'unocss'
import { definePreset } from '@unocss/core'

export interface PresetCSSVarOptions {
}

export const presetCSSVar = definePreset((_options: PresetCSSVarOptions = {}) => {
  return {
    name: 'unocss-preset-css-var',
    rules: [
      [/var:([\w-]+):(.+)$/, ([, name, value], { theme: _theme }) => {
        const cssVar = name.startsWith('--') ? name : `--${name}`

        const theme = _theme as PresetWind3Theme
        if (theme.colors?.[value]) {
          const variantRe = /-(\d+)$/
          const variant = variantRe.test(value) ? value.match(variantRe)![1] : 'DEFAULT'
          // @ts-expect-error Types could be improved
          return { [cssVar]: theme.colors[value][variant] }
        }
        return { [cssVar]: value }
      }],
    ],
  }
})
