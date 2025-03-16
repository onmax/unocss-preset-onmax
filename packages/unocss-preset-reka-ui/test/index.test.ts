/// <reference types="vite/client" />

import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGenerator, presetWind4 } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetRekaUI } from '../src'

const __dirname = dirname(fileURLToPath(import.meta.url))

it('presetUnoVue basic', async () => {
  const uno = await createGenerator({
    presets: [presetRekaUI()],
  })
  const presets = uno.config.presets
  expect(presets).toHaveLength(2)
})

describe('radix colors', () => {
  async function checkCase(_baseFolder: string) {
    const uno = await createGenerator({ presets: [presetWind4(), presetRekaUI({ radixColors: true })] })
    const baseFolder = resolve(__dirname, _baseFolder)
    const input = readFileSync(resolve(baseFolder, 'input.html'), 'utf-8')
    const { css, matched } = await uno.generate(input, { preflights: false })
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(baseFolder, 'matched.txt'))
    await expect(css).toMatchFileSnapshot(resolve(baseFolder, 'output.css'))
  }
  it('basic colors', async () => checkCase('./cases/radix-colors/basic-colors'))
  it('alpha colors', async () => checkCase('./cases/radix-colors/alpha-colors'))
  it('foreground colors', async () => checkCase('./cases/radix-colors/foreground-colors'))
  it('reka variants', async () => checkCase('./cases/reka-variants'))
})
