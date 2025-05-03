# Vue Component Examples

This page showcases practical examples of Vue UI components built with the Reka UI preset. These examples demonstrate how to combine colors, variants, and animations to create beautiful, accessible Vue interfaces.

## Button System

Create a comprehensive button system with different variants using Radix Colors and Reka variants in Vue.

```vue
<template>
  <div class="flex gap-4 flex-wrap items-center p-4">
    <!-- Primary Button -->
    <button
      class="px-4 py-2 rounded-md bg-blue-9 text-white
             reka-hover:bg-blue-10
             reka-disabled:opacity-50
             reka-disabled:cursor-not-allowed"
      :class="{ 'reka-disabled': isPrimaryDisabled }"
      :data-disabled="isPrimaryDisabled || undefined"
      @click="handlePrimaryClick"
    >
      Primary Button
    </button>

    <!-- Secondary Button -->
    <button
      class="px-4 py-2 rounded-md bg-slate-3 text-slate-11
             border border-slate-7
             reka-hover:bg-slate-4
             reka-disabled:opacity-50"
      :data-disabled="isSecondaryDisabled || undefined"
      @click="handleSecondaryClick"
    >
      Secondary Button
    </button>

    <!-- Destructive Button -->
    <button
      class="px-4 py-2 rounded-md bg-red-9 text-white
             reka-hover:bg-red-10
             reka-disabled:opacity-50"
      @click="handleDestructiveClick"
    >
      Destructive
    </button>

    <!-- Ghost Button -->
    <button
      class="px-4 py-2 rounded-md text-slate-11
             reka-hover:bg-slate-4
             reka-disabled:opacity-50"
      @click="handleGhostClick"
    >
      Ghost Button
    </button>

    <!-- Disabled Button -->
    <button
      data-disabled
      class="px-4 py-2 rounded-md bg-blue-9 text-white
             reka-disabled:opacity-50
             reka-disabled:cursor-not-allowed"
      @click="handleDisabledClick"
    >
      Disabled Button
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isPrimaryDisabled = ref(false)
const isSecondaryDisabled = ref(false)

const handlePrimaryClick = () => {
  console.log('Primary button clicked')
}

const handleSecondaryClick = () => {
  console.log('Secondary button clicked')
}

const handleDestructiveClick = () => {
  console.log('Destructive button clicked')
}

const handleGhostClick = () => {
  console.log('Ghost button clicked')
}

const handleDisabledClick = () => {
  console.log('This button is disabled')
}
</script>
```

## Accordion

Create a smooth accordion component with animation and state-based styling using Vue's reactive state management.

```vue
<template>
  <div class="w-full max-w-md border rounded-lg border-slate-6 divide-y divide-slate-6">
    <!-- Accordion Item 1 -->
    <div>
      <button
        @click="toggleAccordion(0)"
        class="w-full flex items-center justify-between p-4 text-left
               text-slate-12
               reka-hover:bg-slate-3
               focus:outline-none focus:ring-2 focus:ring-slate-7 focus:ring-offset-2"
      >
        <span class="font-medium">First Accordion Item</span>
        <span
          class="transform transition-transform duration-200"
          :data-state="openItems[0] ? 'open' : 'closed'"
          :class="{
            'rotate-0': !openItems[0],
            'rotate-180': openItems[0]
          }"
        >
          ↓
        </span>
      </button>

      <div
        ref="accordionContent1"
        :data-state="openItems[0] ? 'open' : 'closed'"
        class="overflow-hidden animate-accordion"
      >
        <div class="p-4 bg-slate-2">
          <p class="text-slate-11">
            This is the first accordion content. It will smoothly animate when toggled.
          </p>
        </div>
      </div>
    </div>

    <!-- Accordion Item 2 -->
    <div>
      <button
        @click="toggleAccordion(1)"
        class="w-full flex items-center justify-between p-4 text-left
               text-slate-12
               reka-hover:bg-slate-3
               focus:outline-none focus:ring-2 focus:ring-slate-7 focus:ring-offset-2"
      >
        <span class="font-medium">Second Accordion Item</span>
        <span
          class="transform transition-transform duration-200"
          :data-state="openItems[1] ? 'open' : 'closed'"
          :class="{
            'rotate-0': !openItems[1],
            'rotate-180': openItems[1]
          }"
        >
          ↓
        </span>
      </button>

      <div
        ref="accordionContent2"
        :data-state="openItems[1] ? 'open' : 'closed'"
        class="overflow-hidden animate-accordion"
      >
        <div class="p-4 bg-slate-2">
          <p class="text-slate-11">
            This is the second accordion content. It uses the same animation as the first item.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue'

// Track which accordion items are open
const openItems = reactive([false, false])

// References to DOM elements for height calculation
const accordionContent1 = ref(null)
const accordionContent2 = ref(null)

// Content height setup on mount
onMounted(() => {
  updateHeightVariables()
})

// Toggle accordion state
const toggleAccordion = async (index) => {
  openItems[index] = !openItems[index]

  // Use nextTick to ensure the DOM has updated before measuring height
  await nextTick()
  updateHeightVariables()
}

// Update CSS height variables for smooth animations
const updateHeightVariables = () => {
  if (accordionContent1.value) {
    accordionContent1.value.style.setProperty(
      '--reka-accordion-content-height',
      `${accordionContent1.value.scrollHeight}px`
    )
  }

  if (accordionContent2.value) {
    accordionContent2.value.style.setProperty(
      '--reka-accordion-content-height',
      `${accordionContent2.value.scrollHeight}px`
    )
  }
}
</script>
```

## Toggle Switch

Create a toggle switch with on/off states and animations using Vue.js reactivity.

```vue
<template>
  <div class="flex items-center gap-4">
    <button
      :data-state="isOn ? 'on' : 'off'"
      @click="toggleSwitch"
      class="relative w-11 h-6 rounded-full transition-colors duration-200
             bg-slate-6
             reka-on:bg-blue-9
             focus:outline-none focus:ring-2 focus:ring-blue-9 focus:ring-offset-2"
    >
      <span
        class="block w-4 h-4 rounded-full bg-white shadow-sm
               transform transition-transform duration-200"
        :class="isOn ? 'translate-x-6' : 'translate-x-1'"
      />
    </button>
    <span class="text-slate-12">
      {{ isOn ? 'Feature is on' : 'Feature is off' }}
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOn = ref(false)

const toggleSwitch = () => {
  isOn.value = !isOn.value
}
</script>
```

## Tabs

Create a tabbed interface with active states using Vue's reactive state.

```vue
<template>
  <div class="w-full max-w-md">
    <!-- Tab buttons -->
    <div class="flex border-b border-slate-6">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :data-state="activeTab === index ? 'active' : 'inactive'"
        class="px-4 py-2
               reka-active:border-b-2
               reka-active:border-blue-9
               reka-active:text-blue-11
               reka-active:font-medium
               reka-inactive:text-slate-11
               reka-inactive:hover:text-slate-12
               focus:outline-none focus:ring-2 focus:ring-blue-9 focus:ring-offset-2"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab content panels -->
    <div class="mt-4">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :data-state="activeTab === index ? 'active' : 'inactive'"
        class="reka-inactive:hidden"
      >
        <p class="text-slate-12">{{ tab.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  {
    label: 'First Tab',
    content: 'First tab content here. This content is visible when the first tab is active.'
  },
  {
    label: 'Second Tab',
    content: 'Second tab content here. This content is visible when the second tab is active.'
  },
  {
    label: 'Third Tab',
    content: 'Third tab content here. This content is visible when the third tab is active.'
  }
]
</script>
```

## Form Input with Validation

Create form inputs with validation states using Vue's form handling.

```vue
<template>
  <div class="w-full max-w-md space-y-4">
    <!-- Valid input -->
    <div class="space-y-1">
      <label for="name-input" class="block text-sm font-medium text-slate-12">
        Name (valid)
      </label>
      <input
        id="name-input"
        v-model="name"
        type="text"
        class="w-full px-3 py-2 rounded-md
               border border-slate-7
               bg-slate-2
               text-slate-12
               focus:outline-none focus:ring-2 focus:ring-blue-9
               reka-invalid:border-red-7
               reka-invalid:ring-red-7
               reka-valid:border-green-7"
      />
    </div>

    <!-- Invalid input -->
    <div class="space-y-1">
      <label for="email-input" class="block text-sm font-medium text-slate-12">
        Email
      </label>
      <input
        id="email-input"
        v-model="email"
        type="email"
        :data-invalid="!isValidEmail && email !== '' ? true : undefined"
        class="w-full px-3 py-2 rounded-md
               border border-slate-7
               bg-slate-2
               text-slate-12
               focus:outline-none focus:ring-2 focus:ring-blue-9
               reka-invalid:border-red-7
               reka-invalid:ring-red-7
               reka-valid:border-green-7"
      />
      <p v-if="!isValidEmail && email !== ''" class="text-sm text-red-11">
        Please enter a valid email address
      </p>
    </div>

    <!-- Disabled input -->
    <div class="space-y-1">
      <label for="disabled-input" class="block text-sm font-medium text-slate-11">
        Disabled field
      </label>
      <input
        id="disabled-input"
        type="text"
        disabled
        data-disabled
        value="Can't edit this"
        class="w-full px-3 py-2 rounded-md
               border border-slate-6
               bg-slate-3
               text-slate-10
               cursor-not-allowed
               reka-disabled:opacity-70"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('John Doe')
const email = ref('invalid-email')

// Email validation
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})
</script>
```

## Card Component

Create a card component with hover effects in Vue.

```vue
<template>
  <div class="w-full max-w-sm">
    <a href="#" class="block rounded-lg overflow-hidden
                      border border-slate-6
                      bg-slate-2
                      transition-all duration-200
                      hover:shadow-md
                      hover:border-slate-7">
      <!-- Card image -->
      <div class="bg-slate-3 h-48 flex items-center justify-center">
        <span class="text-slate-11">Card Image</span>
      </div>

      <!-- Card content -->
      <div class="p-4">
        <h3 class="text-lg font-medium text-slate-12 mb-2">{{ title }}</h3>
        <p class="text-slate-11">
          {{ description }}
        </p>

        <div class="mt-4 flex justify-between items-center">
          <span class="text-sm text-slate-10">{{ category }}</span>
          <button
            class="px-3 py-1 rounded-md bg-blue-9 text-white hover:bg-blue-10"
            @click="handleAction"
          >
            Action
          </button>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
// Props for the card component
const props = defineProps({
  title: {
    type: String,
    default: 'Card Title'
  },
  description: {
    type: String,
    default: 'This is a sample card component built with Reka UI preset. It demonstrates the use of Radix Colors for a beautiful design.'
  },
  category: {
    type: String,
    default: 'Category'
  }
})

// Event for action button
const emit = defineEmits(['action'])

const handleAction = (event) => {
  event.preventDefault()
  emit('action')
}
</script>
```

## Alert Components

Create various alert components using different colors for different states in Vue.

```vue
<template>
  <div class="w-full max-w-md space-y-4">
    <!-- Success Alert -->
    <div v-if="alerts.success" class="p-4 rounded-md bg-green-3 border border-green-6">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <!-- Success icon -->
          <div class="w-5 h-5 text-green-11">✓</div>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-green-11">
            Success alert
          </h3>
          <div class="mt-2 text-sm text-green-11">
            <p>Your changes have been saved successfully.</p>
          </div>
        </div>
        <button @click="alerts.success = false" class="ml-auto text-green-11">×</button>
      </div>
    </div>

    <!-- Error Alert -->
    <div v-if="alerts.error" class="p-4 rounded-md bg-red-3 border border-red-6">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <!-- Error icon -->
          <div class="w-5 h-5 text-red-11">✕</div>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-11">
            Error alert
          </h3>
          <div class="mt-2 text-sm text-red-11">
            <p>There was an error processing your request.</p>
          </div>
        </div>
        <button @click="alerts.error = false" class="ml-auto text-red-11">×</button>
      </div>
    </div>

    <!-- Warning Alert -->
    <div v-if="alerts.warning" class="p-4 rounded-md bg-amber-3 border border-amber-6">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <!-- Warning icon -->
          <div class="w-5 h-5 text-amber-11">!</div>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-amber-11">
            Warning alert
          </h3>
          <div class="mt-2 text-sm text-amber-11">
            <p>Please review your information before continuing.</p>
          </div>
        </div>
        <button @click="alerts.warning = false" class="ml-auto text-amber-11">×</button>
      </div>
    </div>

    <!-- Info Alert -->
    <div v-if="alerts.info" class="p-4 rounded-md bg-blue-3 border border-blue-6">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <!-- Info icon -->
          <div class="w-5 h-5 text-blue-11">i</div>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-blue-11">
            Information alert
          </h3>
          <div class="mt-2 text-sm text-blue-11">
            <p>This feature will be released next week.</p>
          </div>
        </div>
        <button @click="alerts.info = false" class="ml-auto text-blue-11">×</button>
      </div>
    </div>

    <!-- Controls to show alerts -->
    <div class="flex gap-2">
      <button
        @click="alerts.success = true"
        class="px-3 py-1 bg-green-9 text-white rounded"
      >
        Show Success
      </button>
      <button
        @click="alerts.error = true"
        class="px-3 py-1 bg-red-9 text-white rounded"
      >
        Show Error
      </button>
      <button
        @click="alerts.warning = true"
        class="px-3 py-1 bg-amber-9 text-white rounded"
      >
        Show Warning
      </button>
      <button
        @click="alerts.info = true"
        class="px-3 py-1 bg-blue-9 text-white rounded"
      >
        Show Info
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const alerts = reactive({
  success: true,
  error: false,
  warning: false,
  info: false
})
</script>
```

These examples demonstrate the power and flexibility of the Reka UI preset with Vue.js. You can combine Radix Colors, variants, and animations to create responsive, accessible, and beautiful UI components in your Vue applications.
