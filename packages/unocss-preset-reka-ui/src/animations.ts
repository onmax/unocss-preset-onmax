import type { Rule, Shortcut } from 'unocss'

// Extracted from https://github.com/unocss-community/unocss-preset-shadcn/blob/main/src/index.ts
export function getRekaAnimations(): { keyframes: string, rules: Rule[], shortcuts: Shortcut[] } {
  const keyframes = `
@keyframes reka-down { from{ height: 0 } to { height: var(--reka-accordion-content-height)} }
@keyframes reka-up { from{ height: var(--reka-accordion-content-height)} to { height: 0 } }
@keyframes reka-collapsible-down { from{ height: 0 } to { height: var(--reka-collapsible-content-height)} }
@keyframes reka-collapsible-up { from{ height: var(--reka-collapsible-content-height)} to { height: 0 } }
`.trim()
  const rules: Rule[] = [
    ['animate-accordion-down', { animation: 'reka-down 0.2s ease-out' }],
    ['animate-accordion-up', { animation: 'reka-up 0.2s ease-out' }],
    ['animate-collapsible-down', { animation: 'reka-collapsible-down 0.2s ease-out' }],
    ['animate-collapsible-up', { animation: 'reka-collapsible-up 0.2s ease-out' }],
  ]

  const shortcuts: Shortcut[] = [
    ['animate-collapsible', 'reka-open:animate-collapsible-down reka-closed:animate-collapsible-up'],
    ['animate-accordion', 'reka-open:animate-accordion-down reka-closed:animate-accordion-up'],
  ]

  return {
    keyframes,
    rules,
    shortcuts,
  }
}
