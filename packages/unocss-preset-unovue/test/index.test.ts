/// <reference types="vite/client" />

import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetUnoVue } from '../src'

it('presetUnoVue basic', async () => {
  const uno = await createGenerator({
    presets: [presetUnoVue()],
  })
  const presets = uno.config.presets
  expect(presets).toHaveLength(4)
})
