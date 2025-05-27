import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { NimiqVitepressVitePlugin } from 'nimiq-vitepress-theme/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Tsconfig from 'vite-tsconfig-paths'
import { groupIconVitePlugin as GroupIconVitePlugin } from 'vitepress-plugin-group-icons'

const here = dirname(fileURLToPath(import.meta.url))
const localPresets = [
  'unocss-preset-onmax',
  'unocss-preset-scale-px',
  'unocss-preset-reka-ui',
  'unocss-preset-easing-gradient',
  'unocss-preset-unovue',
  'unocss-preset-fluid-sizing',
]
const pkg = (name: string) => resolve(here, '../../packages', name, 'src')

export default defineConfig({
  resolve: {
    alias: Object.fromEntries(localPresets.map(n => [n, pkg(n)])),
  },
  plugins: [
    Tsconfig({
      projects: [
        fileURLToPath(new URL('../../tsconfig.json', import.meta.url)),
      ],
    }),
    Components({
      dirs: [
        fileURLToPath(new URL('./components', import.meta.url)),
      ],
      dts: fileURLToPath(new URL('../components.d.ts', import.meta.url)),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      extensions: ['vue', 'md'],
    }),
    UnoCSS({
      configFile: fileURLToPath(new URL('./uno.config.ts', import.meta.url)),
    }),
    GroupIconVitePlugin(),

    NimiqVitepressVitePlugin({
      gitChangelog: {
        repoURL: 'https://github.com/nimi/developer-center',
      },
    }),
  ],
  ssr: {
    noExternal: [
      'nimiq-vitepress-theme',
    ],
  },
})
