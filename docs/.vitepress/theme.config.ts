import type { NimiqVitepressThemeConfig } from 'nimiq-vitepress-theme/types'

const playgrounds = {
  fluidSizing: 'https://unocss.dev/play/#html=DwEwlgbgBAxg9gOwC4EMwIKYCcoDMC0ADgB74A2A5nkQJ74DOAtgHwBQUUwAFgIx4C8AIiQZiSfAGYATAHoALAA5BeROIBGcMiGYBVBHADCAZSNQAYmQCuYEFCNgAXuioAFMihoUscSwhDAZXjYOYEJ2DmpGcWJ6cI4CQnwYuKg1CnwYGhQEfABWAAYU%2Bi4UEDgAdyEmWCycnnz8wRSfJDJ0DCEpKAA-KDhcXHoMcXwuzOz8OQamiOpvXxAMEHIKFJExIXGchQbIkBmoYIjAQrIoACUMekcMKBofHDVvcqGccvQy8qgkOCghm9wrDZfo5nFB0FAUDAkGBEABCcIBQhsBHgaAEKIrI4hLhdXBCdbiKTEMjKXCqfAaLTMAAqXAwjBuOmhbWhlygAAojPTstCYFAAHIoBn0ACUARxyNmoEg1ESlEi0XofUsrXam1q%2BAAbLs%2BN1Sfh5n4lpiUiF4ItUuktqNdglSDEoIQ6BI5j4jctKMwEisAuaMFiIqEFaMYgHZrSwEqNMQoCUlcA-V6iD6ZImoOUuGAYFwoBRIGyAdZbIRSuAEFRcN5GFBpCQvnBTRFFCQAHSNxEBgKoyWB1HB4mRNRJJXexi2FptTDqiba-JQXX6w2LD0UMOcP2WjIaqS2oj2pVOySuhbGz3o6JkQfD2X4Me%2BuCLHtSwjBon0NccAxwRhqdq2JB0gyUAqmALJgJcABc64Pv655JGQ96PhyjAoFgeY5N8hAigANI2ZowUmP7Doh-rIah6EUnASDfIwOHQY%2Bo7%2BKmBEciWIBlhQIrtjISIpF2kBPpwfYTmqgjWrO849IubrLis1AEiGl5wWON5MGuCYwZu1o7nOdrXoeLoEEup6rgQClEkpyZMCRgkhLxsyzBYRZfDQhBwF4KCEFwNDpmAAH0bB%2BDmcSNkQn4jqlqCbwAXhAVJok1nMY%2B3H2YGMjdgi6UCaw-EQGwQA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAHU8aAMyUAvnCxQIIOAHIuuCBLp0DSUJFiI5omADEANl2BoAysABeeUnC0dPUNjU3MAWhEFcKxXd3C6Hz9LJAwADxt4TCwAQy5nLOw8QmIyAApkYXlGOgAuOABtKMZlXDUygEpyewUWNk4ePn5O7uanOM8k3FJOgF1NDqQgA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA&version=66.0.0',
}
// @unocss-include

export const themeConfig: NimiqVitepressThemeConfig = {
  modules: [
    {
      text: 'UnoCSS Preset Onmax',
      subpath: '/overview',
      defaultPageLink: '/overview/',
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
            { text: 'Scale PX', link: '/presets/unocss-preset-scale-px/', icon: 'i-tabler:scale' },
            { text: 'Reka UI', link: '/presets/unocss-preset-reka-ui/', icon: 'i-custom:reka-ui-mono' },
            { text: 'UnoVue', link: '/presets/unocss-preset-unovue/', icon: 'i-custom:unovue-mono' },
          ],
        },
      ],
    },
    {
      text: 'UnoCSS Fluid Sizing',
      subpath: 'unocss-preset-fluid-sizing',
      defaultPageLink: '/unocss-preset-fluid-sizing/',
      description: 'Rethinking spacing in CSS',
      sidebar: [
        {
          items: [
            { text: 'Introduction', link: '/unocss-preset-fluid-sizing/', icon: 'i-tabler:home' },
            { text: 'Getting Started', link: '/unocss-preset-fluid-sizing/getting-started/', icon: 'i-tabler:rocket' },
            { text: 'Installation', link: '/unocss-preset-fluid-sizing/installation/', icon: 'i-tabler:download' },
            { text: 'Playground', link: playgrounds.fluidSizing, icon: 'i-tabler:ball-basketball' },
            { text: 'API Configuration', link: '/unocss-preset-fluid-sizing/api/configuration/', icon: 'i-tabler:settings' },
          ],
        },
        {
          label: 'Features',
          items: [
            { text: 'Utilities', link: '/unocss-preset-fluid-sizing/features/utilities/', icon: 'i-tabler:tools' },
            { text: 'Theme', link: '/unocss-preset-fluid-sizing/features/theme/', icon: 'i-tabler:color-swatch' },
            { text: 'CSS Variables', link: '/unocss-preset-fluid-sizing/features/css-variables/', icon: 'i-tabler:variable' },
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
