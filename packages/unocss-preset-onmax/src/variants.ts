import type { Variant } from 'unocss'

export const variants: Variant[] = [
  (matcher) => {
    if (!matcher.startsWith('inverted:'))
      return matcher
    return {
      matcher: matcher.slice(9),
      selector: s => `:is([data-inverted], [data-inverted] *) ${s}`,
    }
  },

  // TODO Move this to Nimiq CSS preset
  // (matcher) => {
  //   if (!matcher.startsWith('hocus-'))
  //     return matcher
  //   return {
  //     matcher: matcher.slice(6),
  //     selector: () => `[hocus]:hover, [hocus]:focus`,
  //   }
  // },

  (matcher) => {
    if (!matcher.startsWith('hocus:'))
      return matcher
    return {
      matcher: matcher.slice(6),
      selector: s => `${s}:hover, ${s}:focus-visible`,
    }
  },

  // TODO Move this to Nimiq CSS preset
  (matcher) => {
    if (!matcher.startsWith('group-hocus:'))
      return matcher
    return {
      matcher: matcher.slice(12),
      selector: s => `:is(.group,[group]):hover ${s}, :is(.group,[group]):focus-visible ${s}`,
    }
  },
]
