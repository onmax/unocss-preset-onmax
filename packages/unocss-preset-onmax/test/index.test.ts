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

    const { css } = await uno.generate('text-4 var:test:cssvar', { preflights: false })

    expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .text-4{font-size:0.25rem;}
    .var\\:test\\:cssvar{--test:cssvar;}"
    `)
  })
})

describe('cases', () => {
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
