/// <reference types="vite/client" />
import type { Preflight } from '@unocss/core'
import tailwindResetCSS from '@unocss/reset/tailwind-compat.css?raw'

export const resetPreflight: Preflight = {
  getCSS: () => tailwindResetCSS,
}
