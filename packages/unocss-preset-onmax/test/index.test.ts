import { createGenerator, presetWind4 } from 'unocss'
import { expect, it } from 'vitest'
import { presetOnmax } from '../src'

it('presetOnmax', async () => {
  const uno = await createGenerator({
    presets: [presetWind4(), presetOnmax()],
  })
  const presets = uno.config.presets
  expect(presets).toHaveLength(6)

  const { css } = await uno.generate('text-4 var:test:cssvar', { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .text-4{font-size:0.25rem;}
    .var\\:test\\:cssvar{--test:cssvar;}"
  `)
})
