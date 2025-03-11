/// <reference types="vite/client" />

import type { UnoGenerator } from 'unocss'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGenerator, presetAttributify, presetWind3 } from 'unocss'
import { beforeEach, describe, expect, it } from 'vitest'
import { presetEasingGradient } from '../src'

const __dirname = dirname(fileURLToPath(import.meta.url))

let uno: UnoGenerator
beforeEach(async () => {
  uno = await createGenerator({ presets: [presetWind3(), presetEasingGradient(), presetAttributify()] })
})

describe('cases', () => {
  describe('basic functionality', () => {
    it('should generate basic gradient css', async () => {
      const input = readFileSync(resolve(__dirname, './cases/basic/input.html'), 'utf-8')
      const { css, matched } = await uno.generate(input, { preflights: false })
      await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/basic/matched.txt'))
      await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/basic/output.css'))
    })
  })

  describe('directions and color spaces', () => {
    it('should handle different directions and color spaces', async () => {
      const input = readFileSync(resolve(__dirname, './cases/directions/input.html'), 'utf-8')
      const { css, matched } = await uno.generate(input, { preflights: false })
      await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/directions/matched.txt'))
      await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/directions/output.css'))
    })
  })

  describe('custom timing functions', () => {
    it('should handle cubic-bezier timing functions', async () => {
      const input = readFileSync(resolve(__dirname, './cases/custom-timing/input.html'), 'utf-8')
      const { css, matched } = await uno.generate(input, { preflights: false })
      await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/custom-timing/matched.txt'))
      await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/custom-timing/output.css'))
    })
  })

  describe('attributify mode', () => {
    it('should work with attributify syntax', async () => {
      const input = readFileSync(resolve(__dirname, './cases/attributify/input.html'), 'utf-8')
      const { css, matched } = await uno.generate(input, { preflights: false })
      await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/attributify/matched.txt'))
      await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/attributify/output.css'))
    })
  })
})
