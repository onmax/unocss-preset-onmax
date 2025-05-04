# Variants System

The Reka UI preset includes a powerful variants system that makes it easy to style Vue components based on their state. These variants are designed to work seamlessly with Vue component libraries and frameworks that use data attributes for state management.

## Overview

The variants system uses a configurable prefix (default: `reka-`) followed by a state identifier to target elements with specific data attributes. This approach provides a clean, declarative way to style elements based on their current state.

```vue
<template>
  <button
    class="bg-blue-3 reka-hover:bg-blue-4 reka-disabled:opacity-50"
    :data-disabled="isDisabled || undefined"
  >
    This button changes style based on its state
  </button>
</template>

<script setup>
import { ref } from 'vue'
const isDisabled = ref(false)
</script>
```

## Available Variants

### State Variants

| Variant          | Matches Element                                       | Description                              |
| ---------------- | ----------------------------------------------------- | ---------------------------------------- |
| `reka-open`      | `[data-state="open"]`                                 | Element is in open state                 |
| `reka-closed`    | `[data-state="closed"]`                               | Element is in closed state               |
| `reka-on`        | `[data-state="on"]`                                   | Element is in "on" state (e.g., toggle)  |
| `reka-off`       | `[data-state="off"]`                                  | Element is in "off" state (e.g., toggle) |
| `reka-expanded`  | `[data-state="expanded"]` or `[data-expanded]`        | Element is expanded                      |
| `reka-collapsed` | `[data-state="collapsed"]` or `:not([data-expanded])` | Element is collapsed                     |
| `reka-active`    | `[data-state="active"]`                               | Element is active                        |
| `reka-inactive`  | `:not([data-state="active"])`                         | Element is inactive                      |

### Orientation and Position Variants

| Variant           | Matches Element                   | Description                         |
| ----------------- | --------------------------------- | ----------------------------------- |
| `reka-horizontal` | `[data-orientation="horizontal"]` | Element with horizontal orientation |
| `reka-vertical`   | `[data-orientation="vertical"]`   | Element with vertical orientation   |
| `reka-top`        | `[data-side="top"]`               | Element positioned at the top       |
| `reka-right`      | `[data-side="right"]`             | Element positioned at the right     |
| `reka-bottom`     | `[data-side="bottom"]`            | Element positioned at the bottom    |
| `reka-left`       | `[data-side="left"]`              | Element positioned at the left      |

### Interactive State Variants

| Variant             | Matches Element                                | Description                 |
| ------------------- | ---------------------------------------------- | --------------------------- |
| `reka-disabled`     | `[data-disabled]`                              | Element is disabled         |
| `reka-enabled`      | `:not([data-disabled])`                        | Element is enabled          |
| `reka-pressed`      | `[data-pressed]`                               | Element is pressed          |
| `reka-not-pressed`  | `:not([data-pressed])`                         | Element is not pressed      |
| `reka-focused`      | `[data-focus]` or `[data-focused]`             | Element has focus           |
| `reka-not-focused`  | `:not([data-focus])` or `:not([data-focused])` | Element does not have focus |
| `reka-readonly`     | `[data-readonly]`                              | Element is readonly         |
| `reka-not-readonly` | `:not([data-readonly])`                        | Element is not readonly     |

### Selection State Variants

| Variant                | Matches Element            | Description                |
| ---------------------- | -------------------------- | -------------------------- |
| `reka-selected`        | `[data-selected]`          | Element is selected        |
| `reka-not-selected`    | `:not([data-selected])`    | Element is not selected    |
| `reka-highlighted`     | `[data-highlighted]`       | Element is highlighted     |
| `reka-not-highlighted` | `:not([data-highlighted])` | Element is not highlighted |
| `reka-checked`         | `[data-state="checked"]`   | Element is checked         |

### Validation State Variants

| Variant           | Matches Element         | Description               |
| ----------------- | ----------------------- | ------------------------- |
| `reka-invalid`    | `[data-invalid]`        | Element has invalid input |
| `reka-valid`      | `:not([data-invalid])`  | Element has valid input   |
| `reka-complete`   | `[data-complete]`       | Element is complete       |
| `reka-incomplete` | `:not([data-complete])` | Element is incomplete     |

### Content State Variants

| Variant                | Matches Element            | Description                        |
| ---------------------- | -------------------------- | ---------------------------------- |
| `reka-empty`           | `[data-empty]`             | Element is empty                   |
| `reka-not-empty`       | `:not([data-empty])`       | Element is not empty               |
| `reka-placeholder`     | `[data-placeholder]`       | Element is showing placeholder     |
| `reka-not-placeholder` | `:not([data-placeholder])` | Element is not showing placeholder |

### Visibility and Availability Variants

| Variant             | Matches Element                | Description             |
| ------------------- | ------------------------------ | ----------------------- |
| `reka-hidden`       | `[data-hidden]`                | Element is hidden       |
| `reka-not-hidden`   | `:not([data-hidden])`          | Element is not hidden   |
| `reka-fully-hidden` | `[data-hidden="fully-hidden"]` | Element is fully hidden |
| `reka-unavailable`  | `[data-unavailable]`           | Element is unavailable  |
| `reka-available`    | `:not([data-unavailable])`     | Element is available    |

### Alignment Variants

| Variant             | Matches Element         | Description                  |
| ------------------- | ----------------------- | ---------------------------- |
| `reka-align-start`  | `[data-align="start"]`  | Element is aligned to start  |
| `reka-align-end`    | `[data-align="end"]`    | Element is aligned to end    |
| `reka-align-center` | `[data-align="center"]` | Element is aligned to center |

### Special Case Variants

| Variant              | Matches Element          | Description                                    |
| -------------------- | ------------------------ | ---------------------------------------------- |
| `reka-linear`        | `[data-linear]`          | Element has linear behavior                    |
| `reka-non-linear`    | `:not([data-linear])`    | Element has non-linear behavior                |
| `reka-indent-{0-10}` | `[data-indent="{0-10}"]` | Element with specific indentation level (0-10) |

## Vue Usage Examples

### Basic Vue Component with State

```vue
<template>
  <button
    class="bg-blue-3 text-blue-11
           reka-hover:bg-blue-4
           reka-disabled:opacity-50
           reka-disabled:cursor-not-allowed"
    :data-disabled="isDisabled || undefined"
    @click="handleClick"
  >
    {{ isDisabled ? 'Disabled' : 'Interactive' }} Button
  </button>
</template>

<script setup>
import { ref } from 'vue'

const isDisabled = ref(false)

const handleClick = () => {
  console.log('Button clicked')
}
</script>
```

### Accordion Component with Vue

```vue
<template>
  <!-- Accordion with open/closed states -->
  <div class="border rounded-md">
    <!-- Header toggles between open/closed -->
    <button
      @click="isOpen = !isOpen"
      :data-state="isOpen ? 'open' : 'closed'"
      class="flex justify-between w-full p-4
             bg-slate-3
             reka-open:bg-slate-4"
    >
      Accordion Header
      <span class="transition-transform duration-200 reka-closed:rotate-0 reka-open:rotate-180">↓</span>
    </button>

    <!-- Content visible only when open -->
    <div
      :data-state="isOpen ? 'open' : 'closed'"
      class="overflow-hidden
             reka-closed:h-0
             reka-open:p-4"
    >
      <slot>Accordion content goes here</slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
```

### Form Input with Vue Validation

```vue
<template>
  <!-- Form input with validation state -->
  <div>
    <input
      v-model="email"
      type="email"
      :data-invalid="!isValid && email !== '' ? true : undefined"
      class="border rounded p-2
             focus:outline-none focus:ring-2
             reka-invalid:border-red-9
             reka-invalid:ring-red-9
             reka-valid:border-green-9"
    />
    <p class="text-sm reka-invalid:text-red-11 reka-invalid:block hidden"
       :data-invalid="!isValid && email !== '' ? true : undefined">
      Please enter a valid email address
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')

const isValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})
</script>
```

### Tabs Component in Vue

```vue
<template>
  <!-- Tabs with active/inactive states -->
  <div class="flex flex-col">
    <div class="flex border-b">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :data-state="activeTab === index ? 'active' : 'inactive'"
        class="px-4 py-2
               reka-active:border-b-2
               reka-active:border-blue-9
               reka-active:text-blue-11
               reka-inactive:text-slate-11
               reka-inactive:hover:text-slate-12"
      >
        {{ tab }}
      </button>
    </div>

    <div class="p-4">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :data-state="activeTab === index ? 'active' : 'inactive'"
        class="reka-inactive:hidden"
      >
        Content for {{ tab }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
const activeTab = ref(0)
</script>
```

## Integration with Vue Component Libraries

### With Vue Headless UI

```vue
<template>
  <Disclosure v-slot="{ open }" as="div" class="w-full">
    <DisclosureButton
      :data-state="open ? 'open' : 'closed'"
      class="flex w-full justify-between rounded-lg bg-slate-3 px-4 py-2
             reka-open:bg-slate-4 reka-open:text-blue-11"
    >
      <span>Details</span>
      <span class="transform transition-transform reka-open:rotate-180">
        ↓
      </span>
    </DisclosureButton>
    <DisclosurePanel
      :data-state="open ? 'open' : 'closed'"
      class="px-4 pt-2 pb-2 text-slate-11 animate-accordion overflow-hidden"
    >
      Your content here
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>
```

### With Radix Vue

```vue
<template>
  <ToggleRoot v-model:pressed="isPressed" class="relative">
    <button
      :data-state="isPressed ? 'on' : 'off'"
      class="px-4 py-2 bg-slate-3 rounded-md
             reka-on:bg-blue-9 reka-on:text-white
             reka-off:text-slate-11"
    >
      {{ isPressed ? 'On' : 'Off' }}
    </button>
  </ToggleRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Toggle as ToggleRoot } from '@radix-vue/toggle'

const isPressed = ref(false)
</script>
```

## Dynamically Setting Data Attributes in Vue

You can easily toggle data attributes in Vue components:

```vue
<template>
  <button
    :data-state="buttonState"
    :data-disabled="isDisabled || undefined"
    :data-pressed="isPressed || undefined"
    class="px-4 py-2 rounded
           reka-disabled:opacity-50
           reka-pressed:bg-blue-9
           reka-pressed:text-white
           reka-active:ring-2
           reka-active:ring-blue-9"
    @click="togglePressed"
  >
    Interactive Button
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const isDisabled = ref(false)
const isPressed = ref(false)
const isActive = ref(false)

// Compute button state based on multiple factors
const buttonState = computed(() => {
  if (isActive.value) return 'active'
  return 'inactive'
})

const togglePressed = () => {
  if (!isDisabled.value) {
    isPressed.value = !isPressed.value
  }
}
</script>
```

## Configuration

You can customize the prefix used for variants or disable them completely in your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetRekaUI } from 'unocss-preset-reka-ui'

export default defineConfig({
  presets: [
    // ...other presets
    presetRekaUI({
      // Use default prefix 'reka-'
      variants: 'reka-',

      // Or use a custom prefix for Vue components
      variants: 'v-',

      // Or disable variants completely
      variants: false,
    }),
  ],
})
```

## Best Practices for Vue Applications

1. **Use Vue's Reactivity**: Use refs and computed properties to drive component states
2. **Conditional Data Attributes**: Use the `:data-attribute="condition || undefined"` pattern to conditionally apply data attributes
3. **Combine with Vue Class Bindings**: Mix static variant classes with dynamic class bindings
4. **Component Libraries**: Leverage component libraries that use data attributes like Radix Vue or Headless UI
5. **Custom Components**: Create reusable components that encapsulate variant logic
6. **Accessibility**: Always ensure your components remain accessible when styling with variants
