---
outline: false
changelog: false

features:
  - title: 🎭 Easing Functions
    description: "Natural transitions using <code>ease</code>, <code>ease-in-out</code>, and more"
    span: 'half'
  - title: 🖌️ Multiple Shapes
    description: "Linear, radial, conic, and elliptical gradients"
    span: 'half'
  - title: 🎨 Color Spaces
    description: "Control interpolation with <code>oklch</code>, <code>srgb</code>, and other color spaces"
  - title: ⚡ Animatable Gradients
    description: "Smooth animations with <code>@property</code> CSS features"
  - title: 🎛️ Fine-Tune Controls
    description: "Custom steps, bezier curves, and detailed positioning"
---

<script setup lang="ts">
import Badges from '../.vitepress/theme/components/Badges.vue'
import { playgrounds } from '../.vitepress/theme.config.ts'
</script>

# `unocss-preset-easing-gradient`

Beautiful, perceptually smooth gradients.

Create natural-looking gradients that transition evenly across colors using easing functions instead of linear interpolation.

<Badges pkg="unocss-preset-easing-gradient" />

<NqGrid :cards="[
  { title: 'Quick Start', href: '/unocss-preset-onmax/unocss-preset-easing-gradient/quick-start', icon: 'i-tabler:rocket', span: 'half', iconClass: 'text-purple text-64' },
  { title: 'Try the Generator', href: '/unocss-preset-onmax/unocss-preset-easing-gradient/generator', icon: 'i-nimiq:paint', span: 'half', iconClass: 'text-pink text-64' }
]" />

## Features

<NqGrid :cards="$frontmatter.features" />

## Why Easing Gradients?

Traditional CSS gradients create uniform color transitions that often appear unnatural to the human eye. Easing gradients use mathematical functions to create non-linear color interpolation that better matches human perception.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
  <div class="p-6 border rounded-lg">
    <h3 class="text-lg font-bold mb-2">Standard Linear Gradient</h3>
    <div class="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md"></div>
    <p class="mt-2 text-sm opacity-70">Notice how the color appears to band in the middle section</p>
  </div>
  <div class="p-6 border rounded-lg">
    <h3 class="text-lg font-bold mb-2">Easing Gradient</h3>
    <div class="h-32 bg-gradient-fn-ease fn-from-blue-500 fn-to-purple-500 fn-to-r rounded-md"></div>
    <p class="mt-2 text-sm opacity-70">The eased transition creates a more natural perception of the gradient</p>
  </div>
</div>
