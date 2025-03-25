import type { NimiqVitepressThemeConfig } from 'nimiq-vitepress-theme/types'

// @unocss-include

export const themeConfig: NimiqVitepressThemeConfig = {
  modules: [
    {
      text: 'UnoCSS Preset Onmax',
      subpath: '/',
      defaultPageLink: '/',
      description: 'The presets and config that I use',
      sidebar: [
        {
          items: [
            { text: 'Getting started', link: '/', icon: 'i-tabler:home' },
            { text: 'Installation', link: '/installation/', icon: 'i-tabler:download' },
            { text: 'Rules and variants', link: '/rules-and-variants/', icon: 'i-tabler:code' },
          ],
        },
        {
          label: 'presets',
          items: [
            { text: 'Overview', link: '/presets/' },
            { text: 'CSS Variables', link: '/presets/unocss-preset-css-var/', icon: 'i-tabler:baseline' },
            { text: 'Easing Gradient', link: '/presets/unocss-preset-easing-gradient/', icon: 'i-tabler:gradienter' },
            { text: 'Fluid Sizing', link: '/presets/unocss-preset-fluid-sizing/', icon: 'i-tabler:spaces' },
            { text: 'Scale PX', link: '/presets/unocss-preset-scale-px/', icon: 'i-tabler:scale' },
            { text: 'Reka UI', link: '/presets/unocss-preset-reka-ui/', icon: 'i-custom:reka-ui-mono' },
            { text: 'UnoVue', link: '/presets/unocss-preset-unovue/', icon: 'i-custom:unovue-mono' },

          ],
        },
      ],
    },
  ],
  links: [
    { icon: 'i-tabler:brand-bluesky', link: 'https://twitter.com/@nimiq' },
    { icon: 'i-tabler:brand-github', link: 'https://github.com/onmax' },
  ],
  showLastUpdated: false,
  showEditContent: false,
}
