// https://vitepress.dev/guide/custom-theme
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { defineNimiqThemeConfig } from 'nimiq-vitepress-theme/theme'

import '@shikijs/vitepress-twoslash/style.css'
import 'virtual:uno.css'
import 'virtual:group-icons.css'

// TODO zoom image

export default defineNimiqThemeConfig({
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
  },
})
