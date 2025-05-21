import type { Variant } from 'unocss'
import { variantMatcher } from '@unocss/rule-utils'

export const variants: Variant[] = [
  variantMatcher('hocus', ({ selector }) => ({
    selector: `${selector}:hover, ${selector}:focus-visible`,
  })),

  variantMatcher('group-hocus', ({ selector }) => ({
    selector: `:where(.group,[group]):hover ${selector}, :where(.group,[group]):focus-visible ${selector}`,
  })),

  variantMatcher('group-has-focus-visible', ({ selector }) => ({
    selector: `:where(.group,[group]):has(:focus-visible) ${selector}`,
  })),
]
