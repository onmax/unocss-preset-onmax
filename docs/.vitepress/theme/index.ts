// https://vitepress.dev/guide/custom-theme
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { defineNimiqThemeConfig } from 'nimiq-vitepress-theme'

import '@shikijs/vitepress-twoslash/style.css'
import 'uno.css'
import 'virtual:group-icons.css'

// @unocss-include

export default defineNimiqThemeConfig({
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
    // The rest of your config
  },
})
