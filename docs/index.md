---
layout: home
---

<script setup lang="ts">
import type { NimiqVitepressThemeConfig } from '../types'
import type { NqCardProps } from './NqCard.vue'
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

const { theme } = useData<NimiqVitepressThemeConfig>()

const mainTitle = 'Preset Onmax'
const main = computed(() => {
  const onmaxPreset = theme.value.modules.find(({ text }) => text === mainTitle)
  return {
    title: onmaxPreset.text,
    description: onmaxPreset.description,
    icon: onmaxPreset.icon,
    href: withBase(`/${onmaxPreset.href}`),
  }
})

const items = computed(() => {
  return theme.value.modules
  .filter(({ text }) => text !== mainTitle)
  .map(({ text, icon, defaultPageLink, description }) => ({
    title: text.replace('UnoCSS ', ''),
    icon,
    iconClass: 'f-size-md',
    href: withBase(defaultPageLink),
    description,
  } satisfies NqCardProps))
})

const itemsOnmax = computed(() => {
  return [{...main.value, span: 'full'}].concat(theme.value.modules
  .filter(({ text }) => text === mainTitle).at(0)
  .sidebar.at(0)?.items
  .filter(({ text }) => text !== 'Introduction')
  .map(({ text, icon, link }) => ({
    title: text,
    icon,
    iconClass: 'f-size-md',
    href: withBase(link),
  } satisfies NqCardProps)))
})

</script>

# Onmax Preset for UnoCSS

Presets hand-crafted by <a href="https://github.com/onmax" target="_blank" un-text-inherit flex="inline items-baseline gap-6" px-4 rounded-4 h-max py-4><span i-custom:preset-onmax rounded-8 mx-0 size-28 translate-y-8 inline-block />@onmax</a> to fill the gaps in UnoCSS.

Battle-tested extensions that improve your UnoCSS experience with clean, easy and predictable utilities in mind.

<NqGrid :cards="items"  />

<div rounded-8 size-32 bg-pink />

---

## Want everything at once?

All-in-one preset:

<NqGrid :cards="itemsOnmax" mt-16  />
