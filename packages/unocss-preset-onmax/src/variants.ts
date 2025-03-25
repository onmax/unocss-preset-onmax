import type { Variant } from 'unocss'
import { h } from '@unocss/preset-mini/utils'
import { variantGetParameter, variantMatcher } from '@unocss/rule-utils'

export const variants: Variant[] = [
  variantMatcher('hocus', ({ selector }) => ({
    selector: `${selector}:hover, ${selector}:focus-visible`,
  })),

  variantMatcher('group-hocus', ({ selector }) => ({
    selector: `:where(.group,[group]):hover ${selector}, :where(.group,[group]):focus-visible ${selector}`,
  })),

  (matcher, ctx) => {
    const variant = variantGetParameter('nth-', matcher, ctx.generator.config.separators)
    if (!variant)
      return
    const [match, rest] = variant
    const nthArgument = h.number(match) || h.bracket(match)
    if (!nthArgument)
      return
    return {
      matcher: rest,
      selector: s => `${s}>*:nth-child(${nthArgument})`,
      multipass: true,
    }
  },
]
