import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/easing',
  ],
  declaration: 'node16',
  clean: true,
})
