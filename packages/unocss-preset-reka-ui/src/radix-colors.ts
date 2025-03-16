// Original https://github.com/endigma/unocss-preset-radix

/**
 * Radix UI Color System for UnoCSS
 *
 * This module converts Radix UI colors into a format usable by UnoCSS.
 * It creates both solid and alpha color variants for light and dark themes.
 */
import * as radix from '@radix-ui/colors'

// Type definitions for Radix color scales (1-12)
type Scale = Record<number | string, string>

// Main color type containing all variants
export interface Color {
  light: Scale // Light mode solid colors
  lightAlpha: Scale // Light mode alpha colors
  dark: Scale // Dark mode solid colors
  darkAlpha: Scale // Dark mode alpha colors
}

export type Palette = Array<[string, Color]>

// Available Radix UI colors
export const radixColors = [
  'amber',
  'blue',
  'bronze',
  'brown',
  'crimson',
  'cyan',
  'gold',
  'grass',
  'gray',
  'green',
  'indigo',
  'lime',
  'mauve',
  'mint',
  'olive',
  'orange',
  'pink',
  'plum',
  'purple',
  'red',
  'sage',
  'sand',
  'sky',
  'slate',
  'teal',
  'tomato',
  'violet',
  'yellow',
  'jade',
  'iris',
  'ruby',
  'black',
  'white',
] as const

export type RadixColors = (typeof radixColors)[number]

// Pure black and white scales
const pureScales = {
  white: Object.fromEntries([...Array.from({ length: 12 })].map((_, i) => [i + 1, '#fff'])),
  black: Object.fromEntries([...Array.from({ length: 12 })].map((_, i) => [i + 1, '#000'])),
} as const

/**
 * Extracts numeric step from Radix color key (e.g., "blue1" -> 1)
 */
function extractStep(key: string): number {
  const match = key.match(/.*?(\d+)/)
  return Number.parseInt(match?.[1] || '0')
}

/**
 * Extracts a color scale from Radix UI color object
 * @param name Radix color name
 * @param isAlpha Whether to get alpha variant
 * @returns Normalized scale object
 */
function extractScale(name: keyof typeof radix, isAlpha: boolean = false): Scale {
  const rawScale = radix[name] as Record<string, string>

  return Object.fromEntries(
    Object.entries(rawScale).map(([key, value]) => {
      const step = extractStep(key)
      return [isAlpha ? `${step}A` : step, value]
    }),
  )
}

/**
 * Gets complete color set (light/dark & solid/alpha) for a Radix color
 */
export function getColor(name: RadixColors): Color {
  // Special case for black and white
  if (name === 'black' || name === 'white') {
    return {
      light: pureScales[name],
      lightAlpha: extractScale(`${name}A`, true),
      dark: pureScales[name],
      darkAlpha: extractScale(`${name}A`, true),
    }
  }

  // Regular colors with light/dark variants
  return {
    light: extractScale(name),
    lightAlpha: extractScale(`${name}A`, true),
    dark: extractScale(`${name}Dark`),
    darkAlpha: extractScale(`${name}DarkA`, true),
  }
}

/**
 * Determines optimal foreground color for a background color
 * @returns 'black' or 'white' for best contrast
 */
function fg(color: string): string {
  // Colors that need black foreground for readability
  return ['sky', 'mint', 'lime', 'yellow', 'amber', 'white'].includes(color)
    ? 'black'
    : 'white'
}

/**
 * Generates UnoCSS-compatible color object with CSS variables
 * @param prefix CSS variable prefix
 * @returns Object with all color shades as CSS variables
 */
export function generateColors(prefix: string): Record<string, Record<string | number, string>> {
  // Create array of [name, color] pairs for all radix colors
  const palette = radixColors.map(name => [name, getColor(name)])
  const colors: Record<string, Record<string | number, string>> = {}

  // Process all colors and their alpha variants
  palette.forEach(([name]) => {
    // Process regular color
    const regularKey = String(name)
    const regularShades: Record<string, string> = {}

    // Create CSS variables for all shades (1-12)
    for (let shade = 1; shade <= 12; shade++) {
      regularShades[shade] = `var(${prefix}${regularKey}${shade})`
      // Also add alpha variant references
      regularShades[`${shade}A`] = `var(${prefix}${regularKey}${shade}A)`
    }

    // Add foreground color reference
    regularShades.fg = `var(${prefix}${regularKey}-fg)`
    colors[regularKey] = regularShades

    // Process alpha color variant
    const alphaKey = `${regularKey}A`
    const alphaShades: Record<string, string> = {}

    for (let shade = 1; shade <= 12; shade++) {
      alphaShades[shade] = `var(${prefix}${alphaKey}${shade})`
    }

    colors[alphaKey] = alphaShades
  })

  return colors
}

/**
 * Generates CSS with theme variables for light and dark modes
 */
export function genCSS(
  palette: Palette,
  darkSelector: string,
  lightSelector: string,
  prefix: string,
): string {
  const css: string[] = []

  // Adds a CSS variable definition
  function addVariable(label: string, step: string, value: string, isAlpha = false): void {
    css.push(`${prefix}${label}${step}${isAlpha ? 'A' : ''}:${value};`)
  }

  // Light theme variables
  css.push(`${lightSelector} {`)
  for (const [name, color] of palette) {
    Object.entries(color.light).forEach(([step, value]) =>
      addVariable(name, step, value))
    Object.entries(color.lightAlpha).forEach(([step, value]) =>
      addVariable(name, step, value, true))
  }
  css.push('}\n')

  // Dark theme variables
  css.push(`${darkSelector} {`)
  for (const [name, color] of palette) {
    Object.entries(color.dark).forEach(([step, value]) =>
      addVariable(name, step, value))
    Object.entries(color.darkAlpha).forEach(([step, value]) =>
      addVariable(name, step, value, true))
  }
  css.push('}\n')

  // Root variables (theme-independent)
  css.push(':root {')

  // Add foreground colors
  for (const [name] of palette) {
    css.push(`${prefix}${name}-fg:${fg(name)};`)
  }

  // Add alpha variants for black and white
  const blackAlpha = extractScale('blackA', true)
  const whiteAlpha = extractScale('whiteA', true)

  Object.entries(blackAlpha).forEach(([step, value]) =>
    addVariable('black', step, value, true))
  Object.entries(whiteAlpha).forEach(([step, value]) =>
    addVariable('white', step, value, true))

  css.push('}')

  return css.join('')
}
