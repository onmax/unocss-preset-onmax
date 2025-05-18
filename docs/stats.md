---
packages:
  - unocss-preset-onmax
  - unocss-preset-fluid-sizing
  - unocss-preset-easing-gradient
  - unocss-preset-reka-ui
  - unocss-preset-scale-px
  - unocss-preset-css-var
  - unocss-preset-unovue
---

# Preset stats

<div grid="~ cols-1 gap-16" h-full f-my-md f-pb-3xl>

<div v-for="pkg in $frontmatter.packages" :key="pkg" aspect-video w-full relative>
  <iframe :src="`https://npm.chart.dev/embed/${pkg}?primary=neutral&gray=neutral`" frameborder="0" allow="clipboard-write;" absolute inset-0 w-full h-full :title="`${pkg} NPM Chart`" />
</div>
</div>
