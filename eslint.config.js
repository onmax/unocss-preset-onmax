// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    pnpm: true,
    formatters: true,
    ignores: ['**/tests/cases/**/**'],
  },
)
