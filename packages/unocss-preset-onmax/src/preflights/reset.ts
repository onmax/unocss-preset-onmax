import type { Preflight } from '@unocss/core'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const path = fileURLToPath(`${import.meta.url}../../../../node_modules/@unocss/reset/tailwind-compat.css`)

export const resetPreflight: Preflight = {
  getCSS: () => readFileSync(path, 'utf8'),
}
