import type { Preset } from '@unocss/core'
import type { PresetAnimationsOptions } from 'unocss-preset-animations'
import type { PresetCSSVarOptions } from 'unocss-preset-css-var'
import type { PresetEasingGradientOptions } from 'unocss-preset-easing-gradient'
import type { PresetFluidSizingOptions } from 'unocss-preset-fluid-sizing'
import type { PresetUnoVueOptions } from 'unocss-preset-unovue'
import type { AttributifyOptions as PresetAttributifyOptions } from 'unocss/preset-attributify'
import type { PresetWind4Options, Theme } from 'unocss/preset-wind4'
import { definePreset, symbols } from '@unocss/core'
import { defu } from 'defu'
import { presetAttributify, presetWind4, transformerDirectives } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'
import { defaultCSSVarOptions, presetCSSVar } from 'unocss-preset-css-var'
import { defaultEasingGradientsOptions, presetEasingGradient } from 'unocss-preset-easing-gradient'
import { defaultFluidSizingOptions, presetFluidSizing } from 'unocss-preset-fluid-sizing'
import { defaultUnoVueOptions, presetUnoVue } from 'unocss-preset-unovue'
import { variants } from './variants'

export interface PresetOnmaxOptions {
  /**
   * The default base font size
   * @default '0.0625rem' 1px. p-4 becomes padding: 4px
   */
  baseFontSize?: string

  /**
   * TODO
   * Prefix to use for all the generated classes and presets. Feel free to open PR! Include tests please.
   */
  // prefix?: string

  presets?: {
    // ---------- 3rd parties presets ----------

    /**
     * https://unocss.dev/presets/wind4
     * @default { attributifyPseudo: true }
     */
    wind4?: PresetWind4Options | false

    /**
     * https://unocss.dev/presets/attributify
     * @default {}
     */
    attributify?: PresetAttributifyOptions | false

    /**
     * https://unocss-preset-animations.aelita.me/
     * @default {}
     */
    animations?: PresetAnimationsOptions | false

    // -------- Custom presets --------
    /**
     * @default {}
     */
    cssVar?: PresetCSSVarOptions | false

    /**
     * @default { attributify: true }
     */
    fluidSizing?: PresetFluidSizingOptions | false

    /**
     * @default {}
     */
    easingGradient?: PresetEasingGradientOptions | false

    /**
     * @default {}
     */
    unoVue?: PresetUnoVueOptions | false

  }
}

interface DefaultPresetsOptions {
  // Core presets
  wind4: PresetWind4Options
  attributify: PresetAttributifyOptions
  animations: PresetAnimationsOptions

  // Custom presets
  cssVar: PresetCSSVarOptions
  fluidSizing: PresetFluidSizingOptions
  easingGradient: PresetEasingGradientOptions
  unoVue: PresetUnoVueOptions
}

interface DefaultOptions {
  baseFontSize: string
  presets: DefaultPresetsOptions
}

const defaultOptions: DefaultOptions = {
  baseFontSize: '0.0625rem',
  presets: {
    wind4: { attributifyPseudo: true },
    attributify: {},
    animations: {},
    cssVar: defu({}, defaultCSSVarOptions),
    fluidSizing: defu({ attributify: true }, defaultFluidSizingOptions),
    easingGradient: defu({}, defaultEasingGradientsOptions),
    unoVue: defu({ shadcn: false }, defaultUnoVueOptions),
  },
}

export const presetOnmax = definePreset((options: PresetOnmaxOptions = {}) => {
  const {
    baseFontSize,
    presets: {
      wind4: wind4Options,
      attributify: attributifyOptions,
      animations: animationsOptions,
      cssVar: cssVarOptions,
      fluidSizing: fluidSizingOptions,
      easingGradient: easingGradientOptions,
      unoVue: unoVueOptions,
    },
  } = defu(options, defaultOptions)
  const presets: Preset[] = []
  const theme: Theme = {}

  if (wind4Options !== false) {
    presets.push(presetWind4(wind4Options))
    theme.spacing = { DEFAULT: baseFontSize }
  }

  if (attributifyOptions !== false)
    presets.push(presetAttributify(attributifyOptions))

  if (animationsOptions !== false)
    presets.push(presetAnimations(animationsOptions))

  if (cssVarOptions !== false)
    presets.push(presetCSSVar(cssVarOptions))

  if (fluidSizingOptions !== false)
    presets.push(presetFluidSizing(fluidSizingOptions))

  if (easingGradientOptions !== false)
    presets.push(presetEasingGradient(easingGradientOptions))

  if (unoVueOptions !== false)
    presets.push(presetUnoVue(unoVueOptions))

  const rules: Preset['rules'] = [
    [
      /^stack$/,
      function* () {
        yield {
          'width': '100%',
          'display': 'grid',
          'grid-template-columns': '1fr',
          'grid-template-rows': '1fr',
        }
        yield {
          [symbols.selector]: selector => `${selector} > *`,
          'grid-row': 'span 1',
          'grid-column': 'span 1',
          'justify-self': 'center',
          'align-self': 'center',
        }
      },
    ],
  ]

  return {
    name: 'unocss-preset-onmax',
    presets,
    theme,
    variants,
    rules,
    transformers: [
      transformerDirectives(),
    ],
  } satisfies Preset
})
