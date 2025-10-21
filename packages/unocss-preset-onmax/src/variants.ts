import type { Variant } from 'unocss'
import { variantMatcher } from '@unocss/rule-utils'

export const variants: Variant[] = [
  // Inverted variant
  variantMatcher('data-inverted', ({ selector }) => ({
    selector: `.inverted${selector}, [data-inverted]${selector}, .inverted ${selector}, [data-inverted] ${selector}`,
  })),

  // Hocus variants
  variantMatcher('hocus', ({ selector }) => ({
    selector: `${selector}:hover, ${selector}:focus-visible`,
  })),

  variantMatcher('group-hocus', ({ selector }) => ({
    selector: `:where(.group,[group]):hover ${selector}, :where(.group,[group]):focus-visible ${selector}`,
  })),

  variantMatcher('leader-hocus', ({ selector }) => ({
    selector: `*:has(> :where(.leader,[leader]):where(:hover,:focus-visible)) ${selector}`,
  })),

  variantMatcher('group-has-focus-visible', ({ selector }) => ({
    selector: `:where(.group,[group]):has(:focus-visible) ${selector}`,
  })),

  // Selection variants
  variantMatcher('selected', ({ selector }) => ({
    selector: `[data-selected]${selector}, [data-selected] ${selector}`,
  })),

  variantMatcher('not-selected', ({ selector }) => ({
    selector: `:not([data-selected]), :not([data-selected]) ${selector}`,
  })),

  // Dark mode variant
  variantMatcher('global-dark', ({ selector }) => ({
    selector: `html.dark ${selector}`,
  })),

  // Radix/Headless UI motion variants
  (matcher) => {
    const motionVariants = ['from-start', 'to-start', 'from-end', 'to-end']
    for (const variant of motionVariants) {
      if (matcher.startsWith(`motion-${variant}:`)) {
        return {
          matcher: matcher.slice(`motion-${variant}:`.length),
          selector: s => `[data-motion=${variant}]${s}`,
        }
      }
    }
    return matcher
  },

  // Radix/Headless UI data-state variants
  (matcher) => {
    const dataStates = ['open', 'visible', 'hidden', 'closed', 'active']
    for (const state of dataStates) {
      const prefix = `data-${state}:`
      if (matcher.startsWith(prefix)) {
        return {
          matcher: matcher.slice(prefix.length),
          selector: s => `[data-state=${state}]:not(:has([data-state])) ${s}, [data-state=${state}]:not(:has([data-state]))${s}`,
        }
      }
    }
  },
]
