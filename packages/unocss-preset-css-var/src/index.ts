import type { PresetWind3Theme } from 'unocss'
import { definePreset } from '@unocss/core'
import { parseCssColor } from '@unocss/rule-utils'
import { parseColor } from 'unocss/preset-mini'

export interface PresetCSSVarOptions {
}

export const presetCSSVar = definePreset((_options: PresetCSSVarOptions = {}) => {
  return {
    name: 'unocss-preset-css-var',
    rules: [
      [/var:([\w-]+):(.+)$/, ([, name, value], { theme: _theme }) => {
        const cssVar = name.startsWith('--') ? name : `--${name}`

        const theme = _theme as PresetWind3Theme
        const maybeColor = parseColor(value, theme)
        if (maybeColor && maybeColor.color)
          return { [cssVar]: maybeColor.color }

        const maybeCssColor = parseCssColor(value)
        if (maybeCssColor)
          return { [cssVar]: maybeCssColor }
        return { [cssVar]: value.toString() }
      }],
    ],
  }
})
