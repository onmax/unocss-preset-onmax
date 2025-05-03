import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { GitChangelog } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { NimiqVitepressVitePlugin } from 'nimiq-vitepress-theme/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Tsconfig from 'vite-tsconfig-paths'
import { groupIconVitePlugin as GroupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  resolve: {
    alias: {
      'unocss-preset-onmax': resolve(__dirname, '../packages/unocss-preset-onmax/src/'),
      'unocss-preset-scale-px': resolve(__dirname, '../packages/unocss-preset-scale-px/src/'),
    },
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
    UnoCSS(
      fileURLToPath(new URL('./uno.config.ts', import.meta.url)),
    ),
    GroupIconVitePlugin(),

    GitChangelog({
      repoURL: 'https://github.com/nimi/developer-center',
    }),
    NimiqVitepressVitePlugin(),
  ],
  ssr: {
    noExternal: [
      'nimiq-vitepress-theme',
    ],
  },
})
