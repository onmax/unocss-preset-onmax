<script setup lang="ts">
defineProps<{ pkg :string }>()
</script>

<template>
<ul flex="~ items-center gap-8 wrap" class="nq-raw" f-my-md>
  <li><img :src="`https://img.shields.io/npm/v/${pkg}`" alt="npm" /></li>
  <li><a :href="`https://npm.chart.dev/${pkg}?primary=neutral&gray=neutral`" target="_blank"><img :src="`https://img.shields.io/npm/dt/${pkg}`" alt="Downloads" /></a></li>
  <li><img :src="`https://img.shields.io/npm/l/${pkg}`" alt="License" /></li>
</ul>
</template>
