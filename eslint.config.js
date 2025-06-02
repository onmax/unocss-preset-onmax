// @ts-check
import antfu from '@antfu/eslint-config'
import pnpmCatalogs from 'eslint-plugin-pnpm-catalogs'

export default antfu(
  {
    type: 'lib',
    pnpm: true,
    formatters: true,
    ignores: ['**/test/cases/**/**'],
    plugins: [pnpmCatalogs],
  },
)
