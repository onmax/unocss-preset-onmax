import { readFileSync } from 'node:fs'
import { resolve } from 'pathe'
import { createGenerator, presetWind4 } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetOnmax } from '../src'

const uno = await createGenerator({
  presets: [presetWind4(), presetOnmax()],
})

describe('basic setup', () => {
  it('presetOnmax', async () => {
    const presets = uno.config.presets
    expect(presets).toHaveLength(6)

    const { css } = await uno.generate('text-4 var:test:cssvar f-text-xl bg-gradient-fn-from-blue', { preflights: false })

    expect(css).toMatchInlineSnapshot(`
      "/* layer: shortcuts */
      .f-text-xl{--f-text-min:18;--f-text-max:22;font-size:clamp(calc(var(--f-text-unit, 1px) * var(--f-text-min, 16)), calc(var(--f-text-unit, 1px) * var(--f-text-min, 16) + (var(--f-text-max, 16) - var(--f-text-min, 16)) * (var(--f-text-container, 100vw) - (var(--f-text-unit, 1px) * var(--f-text-min-container, 320))) / (var(--f-text-max-container, 1920) - var(--f-text-min-container, 320))), calc(var(--f-text-unit, 1px) * var(--f-text-max, 16)));}
      /* layer: default */
      .text-4{font-size:1rem;}
      .var\\:test\\:cssvar{--test:cssvar;}
      .bg-gradient-fn-from-blue{--un-gradient-fn-from:oklch(0.707 0.165 254.624);}"
    `)
  })
})

describe('cases', () => {
  it('basic', async () => {
    const input = readFileSync(resolve(__dirname, './cases/basic/input.html'), 'utf-8')
    const { css, matched } = await uno.generate(input, { preflights: true /* enabled to see --spacing is correct */ })
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/basic/matched.txt'))
    await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/basic/output.css'))
  })

  it('variants', async () => {
    const input = readFileSync(resolve(__dirname, './cases/variants/input.html'), 'utf-8')
    const { css, matched } = await uno.generate(input, { preflights: false })
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/variants/matched.txt'))
    await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/variants/output.css'))
  })

  it('variants with attributify', async () => {
    const input = readFileSync(resolve(__dirname, './cases/variants-attributify/input.html'), 'utf-8')
    const { css, matched } = await uno.generate(input, { preflights: false })
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/variants-attributify/matched.txt'))
    await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/variants-attributify/output.css'))
  })
})
