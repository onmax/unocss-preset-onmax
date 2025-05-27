/// <reference types="vite/client" />

import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGenerator, presetWind4 } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetLightDark } from '../src'

const __dirname = dirname(fileURLToPath(import.meta.url))

it('presetLightDark basic', async () => {
  const uno = await createGenerator({
    presets: [presetLightDark({ colors: { white: ['#fff', '#000'] } })],
  })
  const presets = uno.config.presets
  expect(presets).toHaveLength(1)
})

describe('cases', () => {
  async function checkCase(_baseFolder: string) {
    const uno = await createGenerator({
      presets: [presetWind4(), presetLightDark({
        colors: {
          primary: ['#3b82f6', '#1d4ed8'],
          secondary: { light: '#10b981', dark: '#059669' },
          accent: '#f59e0b',
        },
      })],
    })
    const baseFolder = resolve(__dirname, _baseFolder)
    const input = readFileSync(resolve(baseFolder, 'input.html'), 'utf-8')
    const { css, matched } = await uno.generate(input, { preflights: false })
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(baseFolder, 'matched.txt'))
    await expect(css).toMatchFileSnapshot(resolve(baseFolder, 'output.css'))
  }
  it('media', async () => checkCase('./cases/media'))
})
