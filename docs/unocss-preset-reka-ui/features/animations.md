# Animations

The Reka UI preset includes a set of pre-configured animations designed specifically for common UI components in Vue applications like accordions and collapsible elements.

## Available Animations

### Accordion Animations

| Animation Class | Effect |
|----------------|--------|
| `animate-accordion-down` | Animates height from 0 to auto when opening |
| `animate-accordion-up` | Animates height from auto to 0 when closing |
| `animate-accordion` | Combined shortcut that applies both animations based on state |

### Collapsible Animations

| Animation Class | Effect |
|----------------|--------|
| `animate-collapsible-down` | Animates height from 0 to auto when opening |
| `animate-collapsible-up` | Animates height from auto to 0 when closing |
| `animate-collapsible` | Combined shortcut that applies both animations based on state |

## Basic Usage in Vue

Apply animation classes directly to your Vue template elements:

```vue
<template>
  <!-- Basic animation -->
  <div class="animate-accordion-down">
    This content will animate downward when appearing
  </div>
</template>
```

## Advanced Usage in Vue

### State-Based Animations with Vue Reactivity

When combined with Reka UI variants and Vue's reactivity system, you can create dynamic state-based animations:

```vue
<template>
  <div
    :data-state="isOpen ? 'open' : 'closed'"
    class="animate-accordion overflow-hidden"
  >
    This content animates down when open, up when closed
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
```

The `animate-accordion` shortcut combines both animations and applies them based on state:

- `reka-open:animate-accordion-down`
- `reka-closed:animate-accordion-up`

The same applies for `animate-collapsible`.

### CSS Variables for Height with Vue Refs

To ensure smooth animations, the preset uses CSS variables to track the natural height of elements. In Vue applications, you can use template refs to access and measure elements:

```vue
<template>
  <div
    ref="contentElement"
    :data-state="isOpen ? 'open' : 'closed'"
    class="animate-accordion overflow-hidden"
  >
    <div class="p-4">
      Animated content here
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const isOpen = ref(false)
const contentElement = ref(null)

// Update height variable when state changes
watch(isOpen, async () => {
  // Wait for DOM update
  await nextTick()

  // Set the height variable
  if (contentElement.value) {
    contentElement.value.style.setProperty(
      '--reka-accordion-content-height',
      `${contentElement.value.scrollHeight}px`
    )
  }
})
</script>
```

## Integration with Vue Components

### Accordion Component

```vue
<template>
  <div class="border rounded">
    <!-- Accordion trigger -->
    <button
      @click="toggleOpen"
      class="p-4 w-full flex justify-between items-center"
    >
      Accordion Title
      <svg
        :class="[
          'transform transition-transform',
          isOpen ? 'rotate-180' : 'rotate-0'
        ]"
        width="16" height="16" viewBox="0 0 16 16"
      >
        <!-- Simple arrow icon -->
        <path fill="currentColor" d="M8 12L2 6h12l-6 6z" />
      </svg>
    </button>

    <!-- Accordion content with animation -->
    <div
      ref="content"
      :data-state="isOpen ? 'open' : 'closed'"
      class="overflow-hidden animate-accordion"
    >
      <div class="p-4">
        <slot>Accordion content here...</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'

const props = defineProps({
  initialOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.initialOpen)
const content = ref(null)

// Update height on mount and whenever open state changes
const updateHeight = async () => {
  await nextTick()
  if (content.value) {
    content.value.style.setProperty(
      '--reka-accordion-content-height',
      `${content.value.scrollHeight}px`
    )
  }
}

// Initialize on mount
onMounted(updateHeight)

// Watch for state changes
watch(isOpen, updateHeight)

// Toggle accordion state
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>
```

### Collapsible Panel with Vue Transitions

You can also combine Reka UI animations with Vue's transition system:

```vue
<template>
  <div>
    <!-- Collapsible trigger -->
    <button
      @click="isOpen = !isOpen"
      class="bg-slate-3 p-2 rounded"
    >
      {{ isOpen ? 'Hide' : 'Show' }} Panel
    </button>

    <!-- Using Vue transition with Reka animations -->
    <transition
      @enter="setHeight"
      @before-leave="setHeight"
    >
      <div
        v-if="isOpen"
        ref="panel"
        :data-state="'open'"
        class="mt-2 animate-collapsible-down overflow-hidden bg-slate-2 rounded"
      >
        <div class="p-4">
          <slot>Collapsible panel content here...</slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const panel = ref(null)

// Set height for animation
const setHeight = (el) => {
  el.style.setProperty(
    '--reka-collapsible-content-height',
    `${el.scrollHeight}px`
  )
}
</script>
```

### Reusable Animation Composable

Create a reusable composable for animations in Vue:

```js
// useAccordionAnimation.js
import { nextTick, ref, watch } from 'vue'

export function useAccordionAnimation(initialState = false) {
  const isOpen = ref(initialState)
  const element = ref(null)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const updateHeight = async () => {
    await nextTick()
    if (element.value) {
      element.value.style.setProperty(
        '--reka-accordion-content-height',
        `${element.value.scrollHeight}px`
      )
    }
  }

  // Watch for changes in open state
  watch(isOpen, updateHeight)

  return {
    isOpen,
    element,
    toggle,
    updateHeight
  }
}
```

Usage in a component:

```vue
<template>
  <div>
    <button @click="toggle">Toggle</button>
    <div
      ref="element"
      :data-state="isOpen ? 'open' : 'closed'"
      class="animate-accordion overflow-hidden"
    >
      <div class="p-4">Content here</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAccordionAnimation } from './useAccordionAnimation'

const { isOpen, element, toggle, updateHeight } = useAccordionAnimation()

// Initialize height on mount
onMounted(updateHeight)
</script>
```

## Vue Single File Component with Radix UI + Reka Animation

Here's an example combining Radix UI for Vue with Reka animations:

```vue
<template>
  <CollapsibleRoot v-model:open="isOpen">
    <CollapsibleTrigger
      class="flex w-full justify-between items-center bg-slate-3 p-3 rounded-t"
    >
      <span class="font-medium text-slate-12">Collapsible Section</span>
      <span
        :data-state="isOpen ? 'open' : 'closed'"
        class="reka-open:rotate-180 transition-transform"
      >
        ↓
      </span>
    </CollapsibleTrigger>

    <CollapsibleContent
      ref="content"
      :class="[
        'bg-slate-2 p-3 rounded-b overflow-hidden',
        'animate-accordion'
      ]"
    >
      <p class="text-slate-11">
        This content uses Radix UI Collapsible component with Reka UI animations.
      </p>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import {
  Collapsible as CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@radix-vue/collapsible'

const isOpen = ref(false)
const content = ref(null)

const updateHeight = async () => {
  await nextTick()
  if (content.value?.$el) {
    content.value.$el.style.setProperty(
      '--reka-accordion-content-height',
      `${content.value.$el.scrollHeight}px`
    )
  }
}

onMounted(updateHeight)
watch(isOpen, updateHeight)
</script>
```

## Configuration

You can enable or disable animations when configuring the preset:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetRekaUI } from 'unocss-preset-reka-ui'

export default defineConfig({
  presets: [
    // ...other presets
    presetRekaUI({
      // Enable animations (default)
      animations: true,

      // Or disable animations
      animations: false,
    }),
  ],
})
```

## Best Practices for Vue Applications

1. **Use Vue's reactivity** to manage animation states
2. **Leverage template refs** to measure and update element heights
3. **Watch for content changes** that might affect height
4. **Use nextTick** to ensure measurements happen after DOM updates
5. **Create reusable components** that encapsulate animation logic
6. **Combine with Vue transitions** for more complex animations
7. **Consider using Radix Vue or Headless UI** for accessible state management
