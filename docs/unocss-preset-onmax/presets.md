cards:

- bgColor: blue
  icon: i-custom:preset-css-var
  title: CSS Variables
  description: Create and use CSS variables with UnoCSS
  label: Preset
  link: /unocss-preset-css-var/
- bgColor: green
  icon: i-custom:preset-easing-gradient
  title: Easing Gradient
  description: Create beautiful easing gradients for your UI elements
  label: Preset
  link: /unocss-preset-easing-gradient/
- bgColor: purple
  icon: i-custom:preset-fluid-sizing
  title: Fluid Sizing
  description: Create responsive designs with fluid sizing utilities
  label: Preset
  link: /unocss-preset-fluid-sizing/
- bgColor: orange
  icon: i-custom:preset-scale-px
  title: Scale PX
  description: Scale pixel values for responsive designs
  label: Preset
  link: /unocss-preset-scale-px/
- bgColor: red
  icon: i-custom:preset-reka-ui-mono
  title: Reka UI
  description: UI components and utilities for UnoCSS
  label: Preset
  link: /unocss-preset-reka-ui/
- bgColor: teal
  icon: i-custom:preset-unovue-mono
  title: UnoVue
  description: Vue-specific utilities and components for UnoCSS
  label: Preset
  link: /unocss-preset-unovue/

---

# Built presets

UnoCSS Preset OnMax comes with several built-in presets that you can use to enhance your styling capabilities.

<script setup lang="ts">
  import { NqGrid } from 'nimiq-vitepress-theme'
  </script>

<!-- <NqGrid :cards="frontmatter.cards" /> -->

## Using the Presets

You can use these presets by importing them in your UnoCSS configuration:

```js
// uno.config.js
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  presets: [
    presetOnmax({
      wind4: false, // Disable wind4 preset
    }),
    // ...other presets
  ],
})
```

Each preset can also be used individually. Refer to the specific preset documentation for detailed usage instructions.
