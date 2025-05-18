import type { NimiqVitepressThemeConfig } from 'nimiq-vitepress-theme/types.js'

export const playgrounds = {
  fluidSizing: 'https://unocss.dev/play/#html=DwEwlgbgBAxg9gOwC4EMwIKYCcoDMC0ADgB74A2A5nkQJ74DOAtgHwBQUUwAFgIx4C8AIiQZiSfAGYATAHoALAA5BeROIBGcMiGYBVBHADCAZSNQAYmQCuYEFCNgAXuioAFMihoUscSwhDAZXjYOYEJ2DmpGcWJ6cI4CQnwYuKg1CnwYGhQEfABWAAYU%2Bi4UEDgAdyEmWCycnnz8wRSfJDJ0DCEpKAA-KDhcXHoMcXwuzOz8OQamiOpvXxAMEHIKFJExIXGchQbIkBmoYIjAQrIoACUMekcMKBofHDVvcqGccvQy8qgkOCghm9wrDZfo5nFB0FAUDAkGBEABCcIBQhsBHgaAEKIrI4hLhdXBCdbiKTEMjKXCqfAaLTMAAqXAwjBuOmhbWhlygAAojPTstCYFAAHIoBn0ACUARxyNmoEg1ESlEi0XofUsrXam1q%2BAAbLs%2BN1Sfh5n4lpiUiF4ItUuktqNdglSDEoIQ6BI5j4jctKMwEisAuaMFiIqEFaMYgHZrSwEqNMQoCUlcA-V6iD6ZImoOUuGAYFwoBRIGyAdZbIRSuAEFRcN5GFBpCQvnBTRFFCQAHSNxEBgKoyWB1HB4mRNRJJXexi2FptTDqiba-JQXX6w2LD0UMOcP2WjIaqS2oj2pVOySuhbGz3o6JkQfD2X4Me%2BuCLHtSwjBon0NccAxwRhqdq2JB0gyUAqmALJgJcABc64Pv655JGQ96PhyjAoFgeY5N8hAigANI2ZowUmP7Doh-rIah6EUnASDfIwOHQY%2Bo7%2BKmBEciWIBlhQIrtjISIpF2kBPpwfYTmqgjWrO849IubrLis1AEiGl5wWON5MGuCYwZu1o7nOdrXoeLoEEup6rgQClEkpyZMCRgkhLxsyzBYRZfDQhBwF4KCEFwNDpmAAH0bB%2BDmcSNkQn4jqlqCbwAXhAVJok1nMY%2B3H2YGMjdgi6UCaw-EQGwQA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAHU8aAMyUAvnCxQIIOAHIuuCBLp0DSUJFiI5omADEANl2BoAysABeeUnC0dPUNjU3MAWhEFcKxXd3C6Hz9LJAwADxt4TCwAQy5nLOw8QmIyAApkYXlGOgAuOABtKMZlXDUygEpyewUWNk4ePn5O7uanOM8k3FJOgF1NDqQgA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA&version=66.0.0',
  easingGradient: 'https://unocss.dev/play/#html=DwCwjAfAUCcgdgQxASwEYCcD2AXAtgIwBMARgKYBOAlgHxRgAuAnqWutQCbkB28L5YtQDWM7AHN4AXngQQDBkzLwBEOWmEiAQQA0QDIn3rCunft16AA2mM7IAD0zA84MCGsJgAXntBwAOlAHFkQAdwBfAEpwXEDnEC9ff0I3WHRWOMT4BHZKZA8AVxt4OiUVNXRgmgBGODwRcEDdIJCwyJiKQODuEKiYmiZGNMyc-KKS8orqiNi6FKSo1LRFgGYAFiQwFvae3v7BodGJ1cW1zd3D4-PL69vbnJO7h+2HzYHm0fbo4doRhNbZ97l9fv8QWDYYYACJQAB6AEEkTAAe8Hj1HvEAF5gYHw95wQgAJQAKigRmAhGA5gAVgAHCgwXDATBgJABgAMAgtgAASCwuNQAMiMBBQQPRjEoWGh8Lg-B8QA',
} as const
// @unocss-include

export const themeConfig: NimiqVitepressThemeConfig = {
  modules: [
    {
      text: 'Preset Onmax',
      subpath: 'unocss-preset-onmax',
      defaultPageLink: '/unocss-preset-onmax/',
      icon: 'i-custom:preset-onmax',
      description: 'Opinionated UnoCSS setup',
      sidebar: [
        {
          items: [
            { text: 'Introduction', link: '/unocss-preset-onmax/', icon: 'i-tabler:home' },
            { text: 'Installation', link: '/unocss-preset-onmax/installation', icon: 'i-tabler:download' },
            { text: 'Rules and variants', link: '/unocss-preset-onmax/rules-and-variants', icon: 'i-tabler:code' },
            { text: 'Presets', link: '/unocss-preset-onmax/presets', icon: 'i-tabler:palette' },
          ],
        },
      ],
    },
    {
      text: 'UnoCSS Fluid Sizing',
      subpath: 'unocss-preset-fluid-sizing',
      defaultPageLink: '/unocss-preset-fluid-sizing/',
      description: 'Rethinking spacing in CSS',
      icon: 'i-custom:preset-fluid-sizing',
      sidebar: [
        {
          items: [
            { text: 'Home', link: '/unocss-preset-fluid-sizing/', icon: 'i-tabler:home' },
            { text: 'Quick start', link: '/unocss-preset-fluid-sizing/quick-start', icon: 'i-tabler:rocket' },
            { text: 'How does it work', link: '/unocss-preset-fluid-sizing/how-does-it-work', icon: 'i-tabler:school' },
            { text: 'Playground', link: playgrounds.fluidSizing, icon: 'i-tabler:ball-basketball' },
          ],
        },
        {
          label: 'Features',
          items: [
            { text: 'Utilities', link: '/unocss-preset-fluid-sizing/features/utilities', icon: 'i-tabler:tools' },
            { text: 'Theme', link: '/unocss-preset-fluid-sizing/features/theme', icon: 'i-tabler:color-swatch' },
          ],
        },
        {
          label: 'Advanced',
          items: [
            { text: 'CSS Variables', link: '/unocss-preset-fluid-sizing/api/css-variables', icon: 'i-tabler:variable' },
            { text: 'Configuration', link: '/unocss-preset-fluid-sizing/api/configuration', icon: 'i-tabler:tools' },
            { text: 'Custom Theme', link: '/unocss-preset-fluid-sizing/api/custom-theme', icon: 'i-tabler:brand-abstract' },
          ],
        },
      ],
    },
    {
      text: 'CSS Variables',
      subpath: 'unocss-preset-css-var',
      defaultPageLink: '/unocss-preset-css-var/',
      description: 'CSS vars with ease',
      icon: 'i-custom:preset-css-var',
      sidebar: [
        {
          items: [
            { text: 'Introduction', link: '/unocss-preset-css-var/', icon: 'i-tabler:home' },
            { text: 'Installation', link: '/unocss-preset-css-var/installation', icon: 'i-tabler:download' },
          ],
        },
      ],
    },
    {
      text: 'Easing Gradient',
      subpath: 'unocss-preset-easing-gradient',
      defaultPageLink: '/unocss-preset-easing-gradient/',
      description: 'Extending native gradients',
      icon: 'i-custom:preset-easing-gradient',
      sidebar: [
        {
          items: [
            { text: 'Introduction', link: '/unocss-preset-easing-gradient/', icon: 'i-tabler:home' },
            { text: 'Installation', link: '/unocss-preset-easing-gradient/installation', icon: 'i-tabler:download' },
            { text: 'Usage Guide', link: '/unocss-preset-easing-gradient/usage', icon: 'i-tabler:book' },
          ],
        },
        {
          label: 'Playground',
          items: [
            { text: 'Generator', link: '/unocss-preset-easing-gradient/generator', icon: 'i-tabler:adjustments' },
            { text: 'Interactive Playground', link: playgrounds.easingGradient, icon: 'i-tabler:ball-basketball' },
          ],
        },
        {
          label: 'Technical',
          items: [
            { text: 'Implementation Details', link: '/unocss-preset-easing-gradient/technical-implementation', icon: 'i-tabler:code' },
          ],
        },
      ],
    },
    {
      text: 'UnoCSS Scale px',
      subpath: 'unocss-preset-scale-px',
      defaultPageLink: '/unocss-preset-scale-px/',
      description: 'Use rem thinking in px',
      icon: 'i-custom:preset-scale-px',
      sidebar: [
        {
          items: [
            { text: 'Introduction', link: '/unocss-preset-scale-px/', icon: 'i-tabler:home' },
            { text: 'Installation', link: '/unocss-preset-scale-px/installation', icon: 'i-tabler:download' },
          ],
        },
      ],
    },
    {
      text: 'Reka UI',
      subpath: 'unocss-preset-reka-ui',
      defaultPageLink: '/unocss-preset-reka-ui/',
      description: 'With UnoCSS flexibility',
      icon: 'i-custom:preset-reka-ui',
      sidebar: [
        {
          items: [
            { text: 'Introduction', link: '/unocss-preset-reka-ui/', icon: 'i-tabler:home' },
            { text: 'Installation', link: '/unocss-preset-reka-ui/installation', icon: 'i-tabler:download' },
          ],
        },
        {
          label: 'Features',
          items: [
            { text: 'Radix Colors', link: '/unocss-preset-reka-ui/features/radix-colors', icon: 'i-tabler:palette' },
            { text: 'Variants System', link: '/unocss-preset-reka-ui/features/variants', icon: 'i-tabler:selector' },
            { text: 'Animations', link: '/unocss-preset-reka-ui/features/animations', icon: 'i-tabler:animation' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { text: 'Component Examples', link: '/unocss-preset-reka-ui/examples', icon: 'i-tabler:components' },
          ],
        },
      ],
    },
    {
      text: 'UnoVue',
      subpath: 'unocss-preset-unovue',
      defaultPageLink: '/unocss-preset-unovue/',
      description: 'UnoCSS for UnoVue libraries',
      icon: 'i-custom:preset-unovue',
      sidebar: [
        {
          items: [
            { text: 'Introduction', link: '/unocss-preset-unovue/', icon: 'i-tabler:home' },
            { text: 'Installation', link: '/unocss-preset-unovue/installation', icon: 'i-tabler:download' },
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
