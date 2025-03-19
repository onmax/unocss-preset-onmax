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
    expect(presets).toHaveLength(9)

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
  async function checkCase(_baseFolder: string, { preflights = false } = {}) {
    const baseFolder = resolve(__dirname, _baseFolder)
    const input = readFileSync(resolve(baseFolder, 'input.html'), 'utf-8')
    const { css, matched } = await uno.generate(input, { preflights })
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(baseFolder, 'matched.txt'))
    await expect(css).toMatchFileSnapshot(resolve(baseFolder, 'output.css'))
  }

  it('basic', async () => checkCase('./cases/basic', { preflights: true }))
  it('basic variants', async () => checkCase('./cases/variants'))
  it('basic attributify', async () => checkCase('./cases/variants-attributify'))
})
