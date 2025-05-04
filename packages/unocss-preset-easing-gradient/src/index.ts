import type { Preset } from 'unocss'
import { theme } from '@unocss/preset-mini/theme'
import { h, parseColor, positionMap } from '@unocss/preset-mini/utils'
import { cubicBezier, easingFunctions as defaultEasingFunctions } from './easing'

export interface PresetEasingGradientOptions {
  customFunctions?: Record<string, (t: number) => number>
  defaultSteps?: number
}

export const defaultEasingGradientsOptions = {
  customFunctions: {},
  defaultSteps: 4,
}

const varPrefix = '--un-gradient-fn'
const colorSpace = `var(${varPrefix}-color-space, in oklch)`
const validColorSpaces = ['srgb', 'srgb-linear', 'display-p3', 'oklch', 'a98-rgb', 'prophoto-rgb', 'rec2020', 'xyz'].join('|')

// eslint-disable-next-line regexp/no-super-linear-backtracking
export const variantsRE = /^(?!.*\[[^:]+:.+\]$)((?:.+:)?!?)(.*)$/

const toKebabCase = (str: string): string => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()
const toCamelCase = (str: string): string => str.replace(/[-_](.)/g, (_, char) => char.toUpperCase())

// Supported gradient shapes
const gradientShapes = {
  linear: 'linear-gradient',
  radial: 'radial-gradient',
  circle: 'radial-gradient(circle',
  ellipse: 'radial-gradient(ellipse',
  conic: 'conic-gradient',
}

// Valid positions for gradients
const validPositions = [
  'center',
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
]

// Create a pattern for valid positions
const positionPattern = validPositions.join('|')

export function presetEasingGradient(_options: PresetEasingGradientOptions = {}): Preset {
  const options = { ...defaultEasingGradientsOptions, ..._options }
  const easingFunctions = {
    ...defaultEasingFunctions,
    ...(options.customFunctions || {}),
  }
  const functionNames = Object.keys(easingFunctions).map(toKebabCase)
  const functionNamesPattern = functionNames.join('|')
  const shapeNames = Object.keys(gradientShapes)
  const shapePattern = shapeNames.join('|')

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
}
@property ${varPrefix}-color-space {
  syntax: "<custom-ident>";
  inherits: false;
  initial-value: in oklch;
}`
        },
      },
    ],
    rules: [
      [/^bg-gradient-fn-(.+)$/, () => ({}), {
        autocomplete: [
          'bg-gradient-fn',
          `bg-gradient-fn-(${functionNamesPattern})`,
          `bg-gradient-fn-(${functionNamesPattern})/$number`,
          'bg-gradient-fn-(from|to)-$colors',
          `bg-gradient-fn-(${shapePattern})`,
          `bg-gradient-fn-(circle|ellipse)-at-(${positionPattern})`,
          `bg-gradient-fn-conic-from-(${positionPattern}|\\d+deg)`,
        ],
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
      // Basic shapes (linear, radial, conic)
      [new RegExp(`^(?:bg-gradient-)?fn-(${shapePattern})$`), ([, shape]) => {
        const gradientType = gradientShapes[shape as keyof typeof gradientShapes]
        if (!gradientType)
          return {}

        let backgroundImage
        // For shapes that need to close parentheses
        if (shape === 'circle' || shape === 'ellipse') {
          backgroundImage = `${gradientType}, var(${varPrefix}-stops))`
        }
        else {
          backgroundImage = `${gradientType}(var(${varPrefix}-stops))`
        }

        return {
          'background-image': backgroundImage,
        }
      }, { autocomplete: [`bg-gradient-fn-(${shapePattern})`] }],
      // Circle/ellipse gradient with specific position
      [new RegExp(`^(?:bg-gradient-)?fn-(circle|ellipse)-at-(${positionPattern})$`), ([, shape, position]) => {
        return {
          'background-image': `radial-gradient(${shape} at ${position.replace(/-/g, ' ')}, var(${varPrefix}-stops))`,
        }
      }, { autocomplete: [`bg-gradient-fn-(circle|ellipse)-at-(${positionPattern})`] }],
      // Conic gradients with specific angle
      [/^(?:bg-gradient-)?fn-conic-from-(\d+deg)$/, ([, angle]) => {
        return {
          'background-image': `conic-gradient(from ${angle}, var(${varPrefix}-stops))`,
        }
      }, { autocomplete: 'bg-gradient-fn-conic-from-$angle' }],
      // Conic gradients with specific position
      [new RegExp(`^(?:bg-gradient-)?fn-conic-from-(${positionPattern})$`), ([, position]) => {
        return {
          'background-image': `conic-gradient(at ${position.replace(/-/g, ' ')}, var(${varPrefix}-stops))`,
        }
      }, { autocomplete: `bg-gradient-fn-conic-from-(${positionPattern})` }],
      // Combination of conic angle and position
      [new RegExp(`^(?:bg-gradient-)?fn-conic-from-(\\d+deg)-at-(${positionPattern})$`), ([, angle, position]) => {
        return {
          'background-image': `conic-gradient(from ${angle} at ${position.replace(/-/g, ' ')}, var(${varPrefix}-stops))`,
        }
      }, { autocomplete: `bg-gradient-fn-conic-from-$angle-at-(${positionPattern})` }],
      [
        // Updated to support both regular and /steps format
        new RegExp(`^(?:bg-gradient-)?fn-(${functionNamesPattern})(?:/([1-9]\\d*))?$`),
        ([, functionName, steps]) => {
          const fnName = toCamelCase(functionName!)
          const easingFn = easingFunctions[fnName as keyof typeof easingFunctions]
          const stepsCount = steps ? Number.parseInt(steps) : options.defaultSteps
          return generateGradient({ easingFn, stepsCount })
        },
      ],
      [
        /^(?:bg-gradient-)?fn-bezier-\[([01](?:\.\d+)?),([01](?:\.\d+)?),([01](?:\.\d+)?),([01](?:\.\d+)?)\](?:\/([1-9]\d*))?$/,
        ([, x1, y1, x2, y2, steps]) => {
          const easingFn = cubicBezier(Number(x1!), Number(y1!), Number(x2!), Number(y2!))
          const stepsCount = steps ? Number.parseInt(steps) : options.defaultSteps
          return generateGradient({ easingFn, stepsCount })
        },
      ],
    ],
  }
}

interface GenerateGradientStopsOptions {
  easingFn: (t: number) => number
  stepsCount?: number
}

function generateGradient(options: GenerateGradientStopsOptions): Record<string, string> {
  const { easingFn, stepsCount = 4 } = options
  const steps = stepsCount
  const fromColor = `var(${varPrefix}-from)`
  const toColor = `var(${varPrefix}-to)`

  // Create the gradient stops array
  const stops: string[] = []

  // Generate stops based on the provided stepsCount
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const easedT = easingFn(t)
    const position = `${(t * 100).toFixed(2)}%`

    // Simple blend from from->to colors
    stops.push(`color-mix(${colorSpace}, ${fromColor}, ${toColor} ${Math.round(easedT * 100)}%) ${position}`)
  }

  // For small number of steps, use all stops directly
  if (steps <= 8) {
    const gradientStops = stops.join(', ')
    return {
      [`${varPrefix}-stops`]: gradientStops,
      [`${varPrefix}-gradient`]: `var(${varPrefix}-shape), ${gradientStops}`,
    }
  }

  // For larger numbers of steps, select a subset to prevent CSS bloat
  const finalStops: string[] = []
  const keepEveryNth = Math.max(1, Math.floor(stops.length / 12))

  for (let i = 0; i < stops.length; i++) {
    if (i === 0 || i === stops.length - 1 || i % keepEveryNth === 0) {
      finalStops.push(stops[i])
    }
  }

  // Make sure last stop is included
  if (finalStops[finalStops.length - 1] !== stops[stops.length - 1]) {
    finalStops.push(stops[stops.length - 1])
  }

  const gradientStops = finalStops.join(', ')

  return {
    [`${varPrefix}-stops`]: gradientStops,
    [`${varPrefix}-gradient`]: `var(${varPrefix}-shape), ${gradientStops}`,
  }
}
