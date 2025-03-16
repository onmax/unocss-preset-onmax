import type { Preset } from 'unocss'
import { theme } from '@unocss/preset-mini/theme'
import { h, parseColor, positionMap } from '@unocss/preset-mini/utils'
import { cubicBezier, easingFunctions as defaultEasingFunctions } from './easing'

export interface PresetEasingGradientOptions {
  customFunctions?: Record<string, (t: number) => number>
}

export const defaultEasingGradientsOptions = {
  customFunctions: {},
}

const varPrefix = '--un-gradient-fn'
const colorSpace = `var(${varPrefix}-color-space, in oklch)`
const validColorSpaces = ['srgb', 'srgb-linear', 'display-p3', 'oklch', 'a98-rgb', 'prophoto-rgb', 'rec2020', 'xyz'].join('|')

// eslint-disable-next-line regexp/no-super-linear-backtracking
export const variantsRE = /^(?!.*\[[^:]+:.+\]$)((?:.+:)?!?)(.*)$/

const toKebabCase = (str: string): string => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()
const toCamelCase = (str: string): string => str.replace(/[-_](.)/g, (_, char) => char.toUpperCase())

export function presetEasingGradient(_options: PresetEasingGradientOptions = {}): Preset {
  const options = { ...defaultEasingGradientsOptions, ..._options }
  const easingFunctions = {
    ...defaultEasingFunctions,
    ...(options.customFunctions || {}),
  }
  const functionNames = Object.keys(easingFunctions).map(toKebabCase)
  const functionNamesPattern = functionNames.join('|')

  return {
    name: 'unocss-preset-gradient-fn',
    theme: {
      transitionProperty: {
        colors: [theme.transitionProperty.colors, `${varPrefix}-from`, `${varPrefix}-to`].join(','),
      },
    },
    preflights: [
      {
        getCSS() {
          return `@property ${varPrefix}-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #000
}
@property ${varPrefix}-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #000
}`
        },
      },
    ],
    rules: [
      [/^bg-gradient-fn-(.+)$/, () => ({}), {
        autocomplete: ['bg-gradient-fn', `bg-gradient-fn-(${functionNamesPattern})`, 'bg-gradient-fn-(from|to)-$colors', 'bg-gradient-fn-steps-$number'],
      }],
      [/^(?:bg-gradient-)?fn-(to|from)-(.+)$/, function ([, spot, color], { theme }) {
        const parsedColor = parseColor(color!, theme)
        return { [`${varPrefix}-${spot}`]: parsedColor?.color || 'black' }
      }, { autocomplete: ['bg-gradient-from-$colors', 'bg-gradient-to-$colors'] }],
      [/^(?:bg-gradient-)?fn-color-space-(srgb|srgb-linear|display-p3|oklch|a98-rgb|prophoto-rgb|rec2020|xyz)$/, ([, colorSpace]) => {
        return { [`${varPrefix}-color-space`]: `in ${colorSpace}` }
      }, { autocomplete: `bg-gradient-fn-color-space-(${validColorSpaces})` }],
      [/^(?:bg-gradient-)?fn-to-([rltb]{1,2})$/, ([, d]) => {
        if (!(d! in positionMap))
          return
        return {
          [`${varPrefix}-shape`]: `to ${positionMap[d!]} ${colorSpace}`,
          [`${varPrefix}-gradient`]: `var(${varPrefix}-shape), var(${varPrefix}-stops)`,
          'background-image': `linear-gradient(var(${varPrefix}-gradient))`,
        }
      }, { autocomplete: `bg-gradient-fn-to-(${Object.keys(positionMap).filter(k => k.length <= 2 && Array.from(k).every(c => 'rltb'.includes(c))).join('|')})` }],
      [/^(?:bg-gradient-)?fn-shape-(.+)$/, ([, d]) => {
        const v = d! in positionMap ? `to ${positionMap[d!]}` : h.bracket(d!)
        if (v != null) {
          return {
            [`${varPrefix}-shape`]: `${v} ${colorSpace}`,
            [`${varPrefix}-gradient`]: `var(${varPrefix}-shape), var(${varPrefix}-stops)`,
          }
        }
      }, { autocomplete: ['bg-gradient-fn-shape', `bg-gradient-fn-shape-(${Object.keys(positionMap).join('|')})`, `shape-(${Object.keys(positionMap).join('|')})`] }],
      [
        new RegExp(`^(?:bg-gradient-)?fn-(${functionNamesPattern})$`),
        ([, functionName]) => {
          const fnName = toCamelCase(functionName!)
          const easingFn = easingFunctions[fnName as keyof typeof easingFunctions]
          return generateGradient({ easingFn })
        },
      ],
      [
        /^(?:bg-gradient-)?fn-bezier-\[([01](?:\.\d+)?),([01](?:\.\d+)?),([01](?:\.\d+)?),([01](?:\.\d+)?)\]$/,
        ([, x1, y1, x2, y2]) => {
          const easingFn = cubicBezier(Number(x1!), Number(y1!), Number(x2!), Number(y2!))
          return generateGradient({ easingFn })
        },
      ],
    ],
  }
}

interface GenerateGradientStopsOptions {
  easingFn: (t: number) => number
}

function generateGradient(options: GenerateGradientStopsOptions): Record<string, string> {
  const { easingFn } = options
  const steps = 4

  const baseColors: string[] = []
  for (let i = 0; i <= steps; i++) {
    const t = easingFn(i / steps)
    baseColors.push(
      `color-mix(${colorSpace}, var(${varPrefix}-from), var(${varPrefix}-to) ${Math.round(t * 100)}%)`,
    )
  }

  const stops: string[] = []
  for (let i = 0; i < steps; i++) {
    const colorA = baseColors[i]
    const colorB = baseColors[i + 1]

    const stepStart = i / steps
    const stepEnd = (i + 1) / steps
    const stepMid = (stepStart + stepEnd) / 2

    const stepStartPct = `${(stepStart * 100).toFixed(2)}%`
    const stepMidPct = `${(stepMid * 100).toFixed(2)}%`
    const stepEndPct = `${(stepEnd * 100).toFixed(2)}%`

    const midColor = `color-mix(${colorSpace}, ${colorA}, ${colorB} 50%)`

    stops.push(`${colorA} ${stepStartPct}`)
    stops.push(`${midColor} ${stepMidPct}`)
    stops.push(`${colorB} ${stepEndPct}`)
  }

  const gradientStops = stops.join(', ')

  return {
    [`${varPrefix}-stops`]: gradientStops,
    [`${varPrefix}-gradient`]: `var(${varPrefix}-shape), ${gradientStops}`,
  }
}
