import type { NimiqVitepressThemeConfig } from 'nimiq-vitepress-theme'

// @unocss-include

export const themeConfig: NimiqVitepressThemeConfig = {
  modules: [
    {
      text: 'Validators',
      subpath: '/validators/',
      icon: 'i-tabler:shield-check',
      defaultPageLink: '/validators/',
      description: 'Your Staking and Pools Hub',
      sidebar: [
        {
          label: 'Validators',
          items: [
            { text: 'Add Your Pool to the Wallet', link: 'https://github.com/nimiq/validators-api?tab=readme-ov-file#nimiq-validators', icon: 'i-tabler:wallet' },
            { text: 'Validator Trustscore', link: '/validators/validator-trustscore', icon: 'i-tabler:shield-star' },
            { text: 'FAQs for Stakers and Pools', link: '/validators/staking-faq', icon: 'i-tabler:help' },
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
