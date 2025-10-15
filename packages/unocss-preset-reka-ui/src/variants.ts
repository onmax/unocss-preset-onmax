// How to see all the variants in the reka repo
// https://github.com/search?q=repo%3Aunovue%2Freka-ui+%2F%3Adata-%5Cw%2B%3D%2F&type=code

import type { Variant } from 'unocss'
import { variantMatcher } from '@unocss/rule-utils'

// Complex variant for nestable states (open/closed, expanded/collapsed)
// Uses :has() to prevent styles from leaking to nested components
function nestableDataVariant(prefix: string, attribute: string, selector: string): Variant {
  return variantMatcher(`${prefix}${attribute}`, (input) => {
    const base = `${selector}${input.selector}` // element that itself has the data-state + class
    const desc = `${selector} ${input.selector}` // descendant of a data-state element

    return {
      // 1) Element itself carries the attribute: keep it only if it has no deeper same-match
      // 2) Attribute is on an ancestor: pick descendants only if that ancestor doesn't contain a deeper same-match
      selector: `${base}:not(:has(${base})), ${selector}:not(:has(${desc})) ${input.selector}`,
    }
  })
}

// Simple variant for non-nestable states (on/off, pressed, selected, etc.)
// These are leaf components that semantically cannot nest, so simpler selector is sufficient
function simpleDataVariant(prefix: string, attribute: string, selector: string): Variant {
  return variantMatcher(`${prefix}${attribute}`, (input) => {
    return {
      selector: `${selector}${input.selector}, ${selector} ${input.selector}`,
    }
  })
}

export function getVariants(prefix: string): Variant[] {
  const variants = [
    // Nestable States (can contain nested instances of same state)
    nestableDataVariant(prefix, 'open', '[data-state="open"]'),
    nestableDataVariant(prefix, 'closed', '[data-state="closed"]'),
    nestableDataVariant(prefix, 'expanded', '[data-state="expanded"]'),
    nestableDataVariant(prefix, 'collapsed', '[data-state="collapsed"]'),
    nestableDataVariant(prefix, 'expanded', '[data-expanded]'),
    nestableDataVariant(prefix, 'collapsed', ':not([data-expanded])'),
    nestableDataVariant(prefix, 'active', '[data-state="active"]'),
    nestableDataVariant(prefix, 'inactive', '[data-state="inactive"]'),

    // Non-nestable States (leaf components that don't nest)
    simpleDataVariant(prefix, 'on', '[data-state="on"]'),
    simpleDataVariant(prefix, 'off', '[data-state="off"]'),
    simpleDataVariant(prefix, 'checked', '[data-state="checked"]'),

    // Orientation and Position (non-nestable - element properties)
    simpleDataVariant(prefix, 'horizontal', '[data-orientation="horizontal"]'),
    simpleDataVariant(prefix, 'vertical', '[data-orientation="vertical"]'),
    simpleDataVariant(prefix, 'top', '[data-side="top"]'),
    simpleDataVariant(prefix, 'right', '[data-side="right"]'),
    simpleDataVariant(prefix, 'bottom', '[data-side="bottom"]'),
    simpleDataVariant(prefix, 'left', '[data-side="left"]'),

    // Interactive States (non-nestable - element properties)
    simpleDataVariant(prefix, 'disabled', '[data-disabled]'),
    simpleDataVariant(prefix, 'enabled', ':not([data-disabled])'),
    simpleDataVariant(prefix, 'pressed', '[data-pressed]'),
    simpleDataVariant(prefix, 'not-pressed', ':not([data-pressed])'),
    simpleDataVariant(prefix, 'focused', '[data-focus]'),
    simpleDataVariant(prefix, 'not-focused', ':not([data-focus])'),
    simpleDataVariant(prefix, 'focused', '[data-focused]'),
    simpleDataVariant(prefix, 'not-focused', ':not([data-focused])'),
    simpleDataVariant(prefix, 'readonly', '[data-readonly]'),
    simpleDataVariant(prefix, 'not-readonly', ':not([data-readonly])'),

    // Selection States (non-nestable - element properties)
    simpleDataVariant(prefix, 'selected', '[data-selected]'),
    simpleDataVariant(prefix, 'not-selected', ':not([data-selected])'),
    simpleDataVariant(prefix, 'highlighted', '[data-highlighted]'),
    simpleDataVariant(prefix, 'not-highlighted', ':not([data-highlighted])'),

    // Validation States (non-nestable - element properties)
    simpleDataVariant(prefix, 'invalid', '[data-invalid]'),
    simpleDataVariant(prefix, 'valid', ':not([data-invalid])'),
    simpleDataVariant(prefix, 'complete', '[data-complete]'),
    simpleDataVariant(prefix, 'incomplete', ':not([data-complete])'),

    // Content States (non-nestable - element properties)
    simpleDataVariant(prefix, 'empty', '[data-empty]'),
    simpleDataVariant(prefix, 'not-empty', ':not([data-empty])'),
    simpleDataVariant(prefix, 'placeholder', '[data-placeholder]'),
    simpleDataVariant(prefix, 'not-placeholder', ':not([data-placeholder])'),

    // Visibility and Availability (non-nestable - element properties)
    simpleDataVariant(prefix, 'hidden', '[data-hidden]'),
    simpleDataVariant(prefix, 'not-hidden', ':not([data-hidden])'),
    simpleDataVariant(prefix, 'fully-hidden', '[data-hidden="fully-hidden"]'),
    simpleDataVariant(prefix, 'unavailable', '[data-unavailable]'),
    simpleDataVariant(prefix, 'available', ':not([data-unavailable])'),

    // Alignment (non-nestable - element properties)
    simpleDataVariant(prefix, 'align-start', '[data-align="start"]'),
    simpleDataVariant(prefix, 'align-end', '[data-align="end"]'),
    simpleDataVariant(prefix, 'align-center', '[data-align="center"]'),

    // Special Cases (non-nestable - element properties)
    simpleDataVariant(prefix, 'linear', '[data-linear]'),
    simpleDataVariant(prefix, 'non-linear', ':not([data-linear])'),
  ]

  // Add data-indent variant for supporting numbers (non-nestable)
  for (let i = 0; i <= 10; i++)
    variants.push(simpleDataVariant(prefix, `indent-${i}`, `[data-indent="${i}"]`))

  return variants
}
