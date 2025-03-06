import { createGenerator, presetWind4 } from 'unocss'
import { expect, it } from 'vitest'
import { presetCSSVar } from '../src'

it('presetCSSVar', async () => {
  const uno = await createGenerator({
    presets: [presetWind4(), presetCSSVar()],
  })
  const presets = uno.config.presets
  expect(presets).toHaveLength(2)

  const { css } = await uno.generate('var:my-var:pink var:--max-width:70rem var:finally:blue-300', { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .var\\:--max-width\\:70rem{--max-width:70rem;}
    .var\\:finally\\:blue-300{--finally:oklch(0.809 0.105 251.813);}
    .var\\:my-var\\:pink{--my-var:oklch(0.718 0.202 349.761);}"
  `)
})
