import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { presetNimiq } from 'nimiq-css/unocss'
import {
  defineConfig,
  presetIcons,
} from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  content: {
    filesystem: ['./vitepress/theme/components/**/*.vue', '**/*.md', '!**/node_modules/**', './.vitepress/theme.config.ts'],
  },
  blocklist: [
    'container',
  ],
  presets: [
    presetOnmax(),
    presetNimiq({
      utilities: true,
      typography: true,
      attributifyUtilities: true,
    }),
    presetIcons({
      collections: {
        ...createExternalPackageIconLoader('@iconify-json/tabler'),
        ...createExternalPackageIconLoader('@iconify-json/logos'),
        ...createExternalPackageIconLoader('@iconify-json/nimiq'),
      },
    }),
  ],
})
