import { createGenerator, presetWind } from 'unocss'
import { expect, it } from 'vitest'
import { presetScalePx } from '../src'

it('presetScalePx', async () => {
  const uno = await createGenerator({
    presets: [presetWind(), presetScalePx()],
  })
  const presets = uno.config.presets
  expect(presets).toHaveLength(2)

  const { css } = await uno.generate('text-4', { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .text-4{font-size:0.25rem;}"
  `)
})
