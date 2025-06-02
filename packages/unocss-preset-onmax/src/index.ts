import type { Preset } from '@unocss/core'
import type { PresetAnimationsOptions } from 'unocss-preset-animations'
import type { PresetCSSVarOptions } from 'unocss-preset-css-var'
import type { PresetEasingGradientOptions } from 'unocss-preset-easing-gradient'
import type { PresetFluidSizingOptions } from 'unocss-preset-fluid-sizing'
import type { PresetScalePxOptions } from 'unocss-preset-scale-px'
import type { PresetUnoVueOptions } from 'unocss-preset-unovue'
import type { AttributifyOptions as PresetAttributifyOptions } from 'unocss/preset-attributify'
import type { PresetWind4Options, Theme } from 'unocss/preset-wind4'
import { definePreset, symbols } from '@unocss/core'
import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'
import { defu } from 'defu'
import { presetAttributify, presetWind4, transformerDirectives } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'
import { defaultCSSVarOptions, presetCSSVar } from 'unocss-preset-css-var'
import { defaultEasingGradientsOptions, presetEasingGradient } from 'unocss-preset-easing-gradient'
import { defaultFluidSizingOptions, presetFluidSizing } from 'unocss-preset-fluid-sizing'
import { defaultScalePxOptions, presetScalePx } from 'unocss-preset-scale-px'
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

    /**
     * @default {}
     */
    scalePx?: PresetScalePxOptions | false

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
  scalePx: PresetScalePxOptions
}

interface DefaultOptions {
  presets: DefaultPresetsOptions
}

const defaultOptions: DefaultOptions = {
  presets: {
    wind4: {
      preflights: {
        theme: {
          process: createRemToPxProcessor(4),
        },
        reset: true,
      },
      postprocess: [createRemToPxProcessor(4)],
      attributifyPseudo: true,
    },
    attributify: {},
    animations: {},
    cssVar: defu({}, defaultCSSVarOptions),
    fluidSizing: defu({ attributify: true }, defaultFluidSizingOptions),
    easingGradient: defu({}, defaultEasingGradientsOptions),
    unoVue: defu({ shadcn: false }, defaultUnoVueOptions),
    scalePx: defu({}, defaultScalePxOptions),
  },
}

export const presetOnmax = definePreset((options: PresetOnmaxOptions = {}) => {
  const {
    presets: {
      wind4: wind4Options,
      attributify: attributifyOptions,
      animations: animationsOptions,
      cssVar: cssVarOptions,
      fluidSizing: fluidSizingOptions,
      easingGradient: easingGradientOptions,
      unoVue: unoVueOptions,
      scalePx: scalePxOptions,
    },
  } = defu(options, defaultOptions)
  const presets: Preset[] = []
  const theme: Theme = {}
  const preflights: Preset['preflights'] = []

  if (wind4Options !== false)
    presets.push(presetWind4(wind4Options))

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

  if (scalePxOptions !== false)
    presets.push(presetScalePx(scalePxOptions))

  const rules: Preset['rules'] = [
    [
      /^stack$/,
      function* () {
        yield {
          'width': '100%',
          'display': 'grid',
          'place-content': 'center',
          'grid-template-columns': '1fr',
          'grid-template-rows': '1fr',
        }
        yield {
          [symbols.selector]: selector => `${selector} > *`,
          'grid-area': '1 / 1',
          'align-self': 'center',
          'justify-self': 'center',
        }
      },
      {
        layer: 'onmax',
      },
    ],
  ]

  return {
    name: 'unocss-preset-onmax',
    presets,
    theme,
    variants,
    preflights,
    rules,
    transformers: [
      transformerDirectives(),
    ],
    outputToCssLayers: true,
  } satisfies Preset
})
