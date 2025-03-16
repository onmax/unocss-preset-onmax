import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/variants',
  ],
  declaration: 'node16',
  clean: true,
})
