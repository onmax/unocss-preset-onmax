// How to see all the variants in the reka repo
// https://github.com/search?q=repo%3Aunovue%2Freka-ui+%2F%3Adata-%5Cw%2B%3D%2F&type=code

import type { Variant } from 'unocss'
import { variantMatcher } from '@unocss/rule-utils'

function dataVariant(prefix: string, attribute: string, selector: string): Variant {
  return variantMatcher(`${prefix}${attribute}`, input => ({
    selector: `${selector}${input.selector}, ${selector}:not(:has(${selector})) ${input.selector}`,
  }))
}

export function getVariants(prefix: string): Variant[] {
  const variants = [
    // State
    dataVariant(prefix, 'open', '[data-state="open"]'),
    dataVariant(prefix, 'closed', '[data-state="closed"]'),
    dataVariant(prefix, 'on', '[data-state="on"]'),
    dataVariant(prefix, 'off', '[data-state="off"]'),
    dataVariant(prefix, 'expanded', '[data-state="expanded"]'),
    dataVariant(prefix, 'collapsed', '[data-state="collapsed"]'),
    dataVariant(prefix, 'expanded', '[data-expanded]'),
    dataVariant(prefix, 'collapsed', ':not([data-expanded])'),
    dataVariant(prefix, 'active', '[data-state="active"]'),
    dataVariant(prefix, 'inactive', '[data-state="inactive"]'),

    // Orientation and Position
    dataVariant(prefix, 'horizontal', '[data-orientation="horizontal"]'),
    dataVariant(prefix, 'vertical', '[data-orientation="vertical"]'),
    dataVariant(prefix, 'top', '[data-side="top"]'),
    dataVariant(prefix, 'right', '[data-side="right"]'),
    dataVariant(prefix, 'bottom', '[data-side="bottom"]'),
    dataVariant(prefix, 'left', '[data-side="left"]'),

    // Interactive States
    dataVariant(prefix, 'disabled', '[data-disabled]'),
    dataVariant(prefix, 'enabled', ':not([data-disabled])'),
    dataVariant(prefix, 'pressed', '[data-pressed]'),
    dataVariant(prefix, 'not-pressed', ':not([data-pressed])'),
    dataVariant(prefix, 'focused', '[data-focus]'),
    dataVariant(prefix, 'not-focused', ':not([data-focus])'),
    dataVariant(prefix, 'focused', '[data-focused]'),
    dataVariant(prefix, 'not-focused', ':not([data-focused])'),
    dataVariant(prefix, 'readonly', '[data-readonly]'),
    dataVariant(prefix, 'not-readonly', ':not([data-readonly])'),

    // Selection States
    dataVariant(prefix, 'selected', '[data-selected]'),
    dataVariant(prefix, 'not-selected', ':not([data-selected])'),
    dataVariant(prefix, 'highlighted', '[data-highlighted]'),
    dataVariant(prefix, 'not-highlighted', ':not([data-highlighted])'),
    dataVariant(prefix, 'checked', '[data-state="checked"]'),

    // Validation States
    dataVariant(prefix, 'invalid', '[data-invalid]'),
    dataVariant(prefix, 'valid', ':not([data-invalid])'),
    dataVariant(prefix, 'complete', '[data-complete]'),
    dataVariant(prefix, 'incomplete', ':not([data-complete])'),

    // Content States
    dataVariant(prefix, 'empty', '[data-empty]'),
    dataVariant(prefix, 'not-empty', ':not([data-empty])'),
    dataVariant(prefix, 'placeholder', '[data-placeholder]'),
    dataVariant(prefix, 'not-placeholder', ':not([data-placeholder])'),

    // Visibility and Availability
    dataVariant(prefix, 'hidden', '[data-hidden]'),
    dataVariant(prefix, 'not-hidden', ':not([data-hidden])'),
    dataVariant(prefix, 'fully-hidden', '[data-hidden="fully-hidden"]'),
    dataVariant(prefix, 'unavailable', '[data-unavailable]'),
    dataVariant(prefix, 'available', ':not([data-unavailable])'),

    // Alignment
    dataVariant(prefix, 'align-start', '[data-align="start"]'),
    dataVariant(prefix, 'align-end', '[data-align="end"]'),
    dataVariant(prefix, 'align-center', '[data-align="center"]'),

    // Special Cases
    dataVariant(prefix, 'linear', '[data-linear]'),
    dataVariant(prefix, 'non-linear', ':not([data-linear])'),
  ]

  // Add data-indent variant for supporting numbers
  for (let i = 0; i <= 10; i++)
    variants.push(dataVariant(prefix, `indent-${i}`, `[data-indent="${i}"]`))

  return variants
}
