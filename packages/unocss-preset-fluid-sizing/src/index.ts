import type { Preset, Rule } from '@unocss/core'
import { defu } from 'defu'
import { theme } from './theme'
import { fluidSizeUtilities } from './utilities'

// The value of the `unit` CSS variable is a string. e.g. f-mt-rem
enum Unit {
  px = 'px',
  rem = 'rem',
  em = 'em',
  vw = 'vw',
  vh = 'vh',
  vmin = 'vmin',
  vmax = 'vmax',
  fr = 'fr',
  percent = '%',
}

const units = Object.entries(Unit).map(([key]) => key).join('|')
const unitToNumberMap = { [Unit.px]: `1px`, [Unit.rem]: `1rem`, [Unit.em]: `1em`, [Unit.vw]: `1vw`, [Unit.vh]: `1vh`, [Unit.vmin]: `1vmin`, [Unit.vmax]: `1vmax`, [Unit.fr]: `1fr`, percent: `1%` }
const unitToNumber = (unit: keyof typeof unitToNumberMap): string => unitToNumberMap[unit]

export interface PresetFluidSizingOptions {
  /**
   * Default minimum screen width
   *
   * @default 320
   */
  minContainerWidth?: number

  /**
   * Default maximum screen width
   *
   * @default 1920
   */
  maxContainerWidth?: number

  /**
   * Default base unit
   * @default px
   */
  defaultBaseUnit?: Unit

  /**
   * Prefix for custom properties and utilities
   * @default "f-"
   */
  prefix?: string

  /**
   * Expand CSS variables
   * @default false
   */
  expandCSSVariables?: boolean

  /**
   * Disables default theme
   * @default false
   */
  disableTheme?: boolean

  /**
   * User's Utilities. In case of missing utilities you can add a list of your own.
   * But also you can open a PR to add the missing utilities ;)
   * @default []
   */
  utilities?: [string, string[]][]

  /**
   * Enable attributify mode
   * @default false
   */
  attributify?: boolean

  /**
   * Enable theme shortcuts generation
   * @default true
   */
  themeShortcuts?: boolean
}

export const defaultFluidSizingOptions = {
  minContainerWidth: 320,
  maxContainerWidth: 1920,
  defaultBaseUnit: Unit.px,
  prefix: 'f-',
  expandCSSVariables: false,
  disableTheme: false,
  utilities: [],
  attributify: false,
  baseUnit: unitToNumberMap[Unit.px],
  themeShortcuts: true,
}

// Default value for CSS vars
const defaultValue = 16

function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// Cache for regex patterns to avoid recompilation
const regexCache = new Map<string, RegExp>()
function getRegExp(pattern: string): RegExp {
  if (!regexCache.has(pattern)) {
    regexCache.set(pattern, new RegExp(pattern))
  }
  return regexCache.get(pattern)!
}

// Memoized utilities for getting CSS variable names and expressions
const cssVarNamesCache = new Map<string, string>()
const cssVarExpressionsCache = new Map<string, string>()

/**
 * Configuration class to hold preset-specific state
 */
class PresetConfig {
  prefix: string
  minContainerWidth: number
  maxContainerWidth: number
  baseUnit: string
  expandCSSVariables: boolean
  cssVars: Record<string, any>

  constructor(options: Partial<PresetFluidSizingOptions>) {
    const opts = defu(options, defaultFluidSizingOptions)
    this.prefix = opts.prefix
    this.minContainerWidth = opts.minContainerWidth
    this.maxContainerWidth = opts.maxContainerWidth
    this.baseUnit = unitToNumberMap[opts.defaultBaseUnit as keyof typeof unitToNumberMap]
    this.expandCSSVariables = !!opts.expandCSSVariables

    // Initialize CSS vars with the current config
    this.cssVars = {
      max: defaultValue,
      min: defaultValue,
      maxContainer: this.maxContainerWidth,
      minContainer: this.minContainerWidth,
      unit: this.baseUnit,
      rangeWidth: undefined,
      factor: undefined,
      rangeSize: undefined,
      fluid: undefined,
      size: undefined,
      container: '100vw',
    }
  }

  // Get the CSS variable name for a utility and variable
  getCSSVarName(variable?: string, utility?: string): string {
    const cacheKey = `${utility || ''}-${variable || ''}`
    if (!cssVarNamesCache.has(cacheKey)) {
      const name = `--${this.prefix}${utility?.replace('$', '')}${variable ? `-${toKebabCase(variable)}` : ''}`
      cssVarNamesCache.set(cacheKey, name)
    }
    return cssVarNamesCache.get(cacheKey)!
  }

  // Get the CSS variable expression
  getCSSVar(variable: string, utility?: string): string {
    const cacheKey = `var-${utility || ''}-${variable}`
    if (!cssVarExpressionsCache.has(cacheKey)) {
      const varName = this.getCSSVarName(variable, utility)
      const defaultVal = this.cssVars[variable] ? `, ${this.cssVars[variable]}` : ''
      cssVarExpressionsCache.set(cacheKey, `var(${varName}${defaultVal})`)
    }
    return cssVarExpressionsCache.get(cacheKey)!
  }

  // Get both CSS var name and expression
  getCSSVars(variable: string, utility?: string): [string, string] {
    return [this.getCSSVarName(variable, utility), this.getCSSVar(variable, utility)]
  }

  // Generate fluid CSS for a utility
  getFluidCSS(options: {
    utility: string
    properties: string[]
    expandCSSVariables?: boolean
    minSize?: string
    minSizeC?: string
    maxSize?: string
    maxSizeC?: string
  }): Record<string, string> {
    const utility = options.utility.replaceAll('$', '')
    const {
      properties,
      minSize = this.getCSSVar('min', utility),
      maxSize = this.getCSSVar('max', utility),
      maxSizeC = this.getCSSVar('maxContainer', utility),
      minSizeC = this.getCSSVar('minContainer', utility),
      expandCSSVariables = this.expandCSSVariables,
    } = options

    const containerVar = this.getCSSVar('container', utility)
    const unitVar = this.getCSSVar('unit', utility)

    const css: Record<string, string> = {}
    let value: string = ''

    if (expandCSSVariables) {
      const [rangeWidthVar, rangeWidthVarName] = this.getCSSVars('rangeWidth', utility)
      const [factorVar, factorVarName] = this.getCSSVars('factor', utility)
      const [rangeSizeVar, rangeSizeVarName] = this.getCSSVars('rangeSize', utility)
      const [fluidVar, fluidVarName] = this.getCSSVars('fluid', utility)
      const [sizeVar, sizeVarName] = this.getCSSVars('size', utility)

      css[rangeWidthVarName] = `calc(${maxSizeC} - ${minSizeC})`
      css[factorVarName] = `calc((${containerVar} - (${unitVar} * ${minSizeC})) / ${rangeWidthVar})`
      css[rangeSizeVarName] = `calc(${maxSize} - ${minSize})`
      css[fluidVarName] = `calc(${unitVar} * ${minSize} + ${rangeSizeVar} * ${factorVar})`
      const clamp = `clamp(calc(${unitVar} * ${minSize}), ${fluidVar}, calc(${unitVar} * ${maxSize}))`
      css[sizeVarName] = clamp
      value = `${sizeVar} `
    }
    else {
      const calcKey = `fluid-calc-${utility}`
      if (!cssVarExpressionsCache.has(calcKey)) {
        const fluid = `calc(${unitVar} * ${minSize} + (${maxSize} - ${minSize}) * (${containerVar} - (${unitVar} * ${minSizeC})) / (${maxSizeC} - ${minSizeC}))`
        const minValue = `calc(${unitVar} * ${minSize})`
        const maxValue = `calc(${unitVar} * ${maxSize})`
        cssVarExpressionsCache.set(calcKey, `clamp(${minValue}, ${fluid}, ${maxValue})`)
      }
      value = cssVarExpressionsCache.get(calcKey)!
    }

    properties.forEach(p => css[p] = value)
    return css
  }

  // Factory for creating both static utility rules and dynamic CSS variable rules
  // utilitiesMap needed for CSS vars to auto-apply to matching utility properties
  makeRulesFactory(isCSSVar: boolean = false, utilitiesMap?: Map<string, string[]>) {
    return (utility: string, cssProperties: string[] = []): Rule<object>[] => {
      const rules: Rule<object>[] = []

      // For CSS vars we need a special regex pattern
      const reUtilityBase = isCSSVar
        ? `${this.prefix}\\$(\\w+)`
        : `${this.prefix}${utility}`

      // Helper for adding dynamic rules
      const addRule = (pattern: string, handler: (match: string[]) => Record<string, string> | undefined, autocomplete?: string): void => {
        const regex = getRegExp(`^${pattern}$`)
        rules.push([
          regex,
          handler,
          autocomplete ? { autocomplete } : undefined,
        ])
      }

      if (isCSSVar) {
        // CSS var rules with dynamic utility capture
        addRule(`${reUtilityBase}-min-(\\d+)`, ([_, utility, minSize]) => ({
          [this.getCSSVarName('min', utility)]: minSize,
        }), `${this.prefix}$<name>-min-<num>`)

        addRule(`${reUtilityBase}-min-container-(\\d+)`, ([_, utility, minContainerWidth]) => ({
          [this.getCSSVarName('minContainer', utility)]: minContainerWidth,
        }), `${this.prefix}$<name>-min-container-<num>`)

        addRule(`${reUtilityBase}-max-(\\d+)`, ([_, utility, maxSize]) => ({
          [this.getCSSVarName('max', utility)]: maxSize,
        }), `${this.prefix}$<name>-max-<num>`)

        addRule(`${reUtilityBase}-max-container-(\\d+)`, ([_, utility, maxContainerWidth]) => ({
          [this.getCSSVarName('maxContainer', utility)]: maxContainerWidth,
        }), `${this.prefix}$<name>-max-container-<num>`)

        addRule(`${reUtilityBase}`, (matches) => {
          if (matches.length !== 2 || matches.includes(undefined as any))
            return
          const utilityName = matches[1]
          const css: Record<string, string> = {}

          const varProperty = this.getCSSVarName('', utilityName)
          const fluidCSS = this.getFluidCSS({ utility: utilityName, properties: [varProperty] })
          Object.assign(css, fluidCSS)

          // Apply the variable to matching utility properties to enable direct usage like f="$px-24/32"
          // This allows the CSS variable to automatically control the corresponding CSS properties
          if (utilitiesMap && utilitiesMap.has(utilityName)) {
            const properties = utilitiesMap.get(utilityName)!
            const varRef = `var(${varProperty})`
            properties.forEach(prop => css[prop] = varRef)
          }

          return css
        }, reUtilityBase)

        addRule(`${reUtilityBase}-base-(${units})`, ([_, utility, newUnit]) => ({
          [this.getCSSVarName('unit', utility)]: unitToNumber(newUnit as keyof typeof unitToNumberMap),
        }))

        addRule(`${reUtilityBase}-container`, ([_, utility]) => ({
          [this.getCSSVarName('container', utility)]: '100cqw',
        }))
      }
      else {
        // Standard rules with fixed utility name
        addRule(`${reUtilityBase}-min-(\\d+)`, ([_, minSize]) => ({
          [this.getCSSVarName('min', utility)]: minSize,
        }), `${reUtilityBase}-min-<num>`)

        addRule(`${reUtilityBase}-min-container-(\\d+)`, ([_, minContainerWidth]) => ({
          [this.getCSSVarName('minContainer', utility)]: minContainerWidth,
        }), `${reUtilityBase}-min-container-<num>`)

        addRule(`${reUtilityBase}-max-(\\d+)`, ([_, maxSize]) => ({
          [this.getCSSVarName('max', utility)]: maxSize,
        }), `${reUtilityBase}-max-<num>`)

        addRule(`${reUtilityBase}-max-container-(\\d+)`, ([_, maxContainerWidth]) => ({
          [this.getCSSVarName('maxContainer', utility)]: maxContainerWidth,
        }), `${reUtilityBase}-max-container-<num>`)

        addRule(`${reUtilityBase}`, (matches) => {
          if (matches.length !== 1 || matches.includes(undefined as any))
            return
          return this.getFluidCSS({ utility, properties: cssProperties })
        }, reUtilityBase)

        addRule(`${reUtilityBase}-base-(${units})`, ([_, newUnit]) => ({
          [this.getCSSVarName('unit', utility)]: unitToNumber(newUnit as keyof typeof unitToNumberMap),
        }), `${reUtilityBase}-base-<unit>`)

        addRule(`${reUtilityBase}-container`, () => ({
          [this.getCSSVarName('container', 'undefined')]: '100cqw',
        }))
      }

      return rules
    }
  }

  // Get shortcuts for the given utilities
  getShortcuts(
    utilities: string[],
    options: { attributify: boolean, disableTheme: boolean, themeShortcuts?: boolean },
  ): Preset['shortcuts'] {
    const { attributify, disableTheme, themeShortcuts = true } = options
    const shortcuts: Preset['shortcuts'] = []

    // Add basic utility shortcuts
    for (const utility of utilities) {
      shortcuts.push([
        getRegExp(`^${this.prefix}${utility}-(\\d+)/(\\d+)$`),
        ([, min, max]) => `${this.prefix}${utility} ${this.prefix}${utility}-min-${min} ${this.prefix}${utility}-max-${max}`,
        { autocomplete: `${this.prefix}${utility}-<num>/<num>` },
      ] as const)
    }

    // Add custom CSS variable slash syntax: f-$myvar-10/20
    shortcuts.push([
      getRegExp(`^${this.prefix}\\$(\\w+)-(\\d+)/(\\d+)$`),
      ([, varName, min, max]) => `${this.prefix}$${varName} ${this.prefix}$${varName}-min-${min} ${this.prefix}$${varName}-max-${max}`,
      { autocomplete: `${this.prefix}$<name>-<num>/<num>` },
    ] as const)

    // Skip theme shortcuts if disabled or not requested
    if (disableTheme || !themeShortcuts) {
      return shortcuts
    }

    const getPrefixAttribute = (utility: string): string =>
      `${utility}-${this.prefix.endsWith('-') ? this.prefix.slice(0, -1) : this.prefix}`

    // Add font size theme shortcuts
    for (const [name, [min, max]] of Object.entries(theme.fontSize)) {
      shortcuts.push([`${this.prefix}text-${name}`, `${this.prefix}text-${min}/${max}`])
      if (attributify) {
        shortcuts.push([
          `${getPrefixAttribute('text')}-${name}`,
          `${this.prefix}text-${min}/${max}`,
          { autocomplete: [`${getPrefixAttribute('text')}-${name}`, 'f-lg'] },
        ])
      }
    }

    // Add border radius theme shortcuts
    for (const [name, [min, max]] of Object.entries(theme.borderRadius)) {
      shortcuts.push([`${this.prefix}rounded-${name}`, `${this.prefix}rounded-${min}/${max}`])
      if (attributify) {
        shortcuts.push([
          `${getPrefixAttribute('rounded')}-${name}`,
          `${this.prefix}rounded-${min}/${max}`,
        ])
      }
    }

    // Add spacing shortcuts for other utilities
    const ignoredProperties = ['text', 'rounded']
    for (const [name, [min, max]] of Object.entries(theme.spacing)) {
      for (const utility of utilities.filter(u => !ignoredProperties.includes(u))) {
        shortcuts.push([`${this.prefix}${utility}-${name}`, `${this.prefix}${utility}-${min}/${max}`])
        if (attributify) {
          shortcuts.push([
            `${getPrefixAttribute(utility)}-${name}`,
            `${this.prefix}${utility}-${min}/${max}`,
          ])
        }
      }

      // Space utilities not included as built-ins to keep the preset simple and avoid complex selector generation
    }

    return shortcuts
  }
}

export function presetFluidSizing(options: PresetFluidSizingOptions = {}): Preset {
  // Create a local configuration instance for this preset
  const config = new PresetConfig(options)

  // Get options with defaults applied
  const {
    disableTheme = false,
    utilities: userUtilities = [],
    attributify = false,
    themeShortcuts = true,
  } = defu(options, defaultFluidSizingOptions)

  const userUtilityNames = new Set(userUtilities.map(u => u[0]))
  const mergedUtilities = [
    ...userUtilities,
    ...fluidSizeUtilities.filter(([name]) => !userUtilityNames.has(name)),
  ]

  // Map enables CSS var rules to identify and auto-apply to matching utility properties
  const utilitiesMap = new Map(mergedUtilities)

  // Create rule factories
  const getRules = config.makeRulesFactory(false)
  const getCSSVarRules = config.makeRulesFactory(true, utilitiesMap)

  // Generate all rules
  const rules: Rule<object>[] = []

  // Add utility-specific rules
  for (const [utility, properties] of mergedUtilities) {
    rules.push(...getRules(utility, properties))
  }

  // Add CSS var rules
  rules.push(...getCSSVarRules('', []))

  // Generate shortcuts
  const utilityNames = mergedUtilities.map(u => u[0])
  const shortcuts = config.getShortcuts(utilityNames, {
    attributify,
    disableTheme,
    themeShortcuts,
  })

  return {
    name: 'unocss-preset-fluid-sizing',
    rules,
    shortcuts,
  }
}
