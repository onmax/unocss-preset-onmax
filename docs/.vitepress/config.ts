import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineNimiqVitepressConfig } from 'nimiq-vitepress-theme'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { themeConfig } from './theme.config'
import vite from './vite.config'

export default defineNimiqVitepressConfig({
  base: '/unocss-preset-onmax/',
  title: 'unocss-preset-onmax',
  description: 'A set of presets and utilities that I use',
  markdown: {
    codeTransformers: [
      transformerTwoslash(),
    ],
    config: (md) => {
      md.use(groupIconMdPlugin)
    },
  },
  cleanUrls: true,
  vite,
  themeConfig,

  head: [
    // ['meta', { name: 'theme-color', content: '#ffffff' }],
    // ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Maxi' }],
    // ['meta', { property: 'og:title', content: '' }],
    // ['meta', { property: 'og:image', content: '' }],
    // ['meta', { property: 'og:description', content: '_description_' }],
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { name: 'twitter:image', content: '' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
  ],
})
