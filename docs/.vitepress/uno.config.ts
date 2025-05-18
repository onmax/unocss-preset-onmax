import { join } from 'node:path'
import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetNimiq } from 'nimiq-css/unocss'
import {
  defineConfig,
  presetIcons,
  presetWind3,
  transformerDirectives,
} from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'
import { presetScalePx } from 'unocss-preset-scale-px'

export default defineConfig({
  content: {
    filesystem: ['./vitepress/theme/components/**/*.vue', '**/**/*.md', '!**/node_modules/**', './.vitepress/theme.config.ts'],
  },
  blocklist: [
    'container',
  ],
  presets: [
    presetWind3(),
    presetOnmax({ presets: { wind4: false } }),
    presetNimiq({
      utilities: true,
      typography: true,
      attributifyUtilities: true,
    }),
    presetScalePx(),
    presetIcons({
      collections: {
        ...createExternalPackageIconLoader('@iconify-json/tabler'),
        ...createExternalPackageIconLoader('@iconify-json/logos'),
        custom: FileSystemIconLoader(join(__dirname, '../public/assets/icons/')),
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
