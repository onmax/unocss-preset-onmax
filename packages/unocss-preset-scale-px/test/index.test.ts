/// <reference types="vite/client" />

import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetScalePx } from '../src'

const __dirname = dirname(fileURLToPath(import.meta.url))

it('presetScalePx basic', async () => {
  const uno = await createGenerator({
    presets: [presetScalePx()],
  })
  const presets = uno.config.presets
  expect(presets).toHaveLength(1)

  const input = readFileSync(resolve(__dirname, './cases/basic/input.html'), 'utf-8')
  const { css } = await uno.generate(input, { preflights: false })
  await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/basic/output.css'))
})
