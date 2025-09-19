<script setup lang="ts">
import { createGenerator } from '@unocss/core'
import { presetMini } from '@unocss/preset-mini'
import { computedAsync, useLocalStorage, useStyleTag, createReusableTemplate } from '@vueuse/core'
import { computed, watch, ref, onMounted } from 'vue'
import Tooltip from './Tooltip.vue'
import { presetEasingGradient } from 'unocss-preset-easing-gradient'
import { easingFunctions } from 'unocss-preset-easing-gradient/easing'

const easingFunctionsNames = Object.keys(easingFunctions)

// Define available gradient shapes
const gradientShapes = [
  { name: 'linear', label: 'Linear' },
  { name: 'radial', label: 'Radial' },
  { name: 'circle', label: 'Circle' },
  { name: 'ellipse', label: 'Ellipse' },
  { name: 'conic', label: 'Conic' },
  { name: 'circle-at-center', label: 'Circle at center' },
  { name: 'ellipse-at-center', label: 'Ellipse at center' },
  { name: 'conic-from-center', label: 'Conic from center' }
]

// Define position options for center
const positionOptions = [
  { value: 'center', label: 'Center' },
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' },
  { value: 'top-left', label: 'Top Left' },
  { value: 'top-right', label: 'Top Right' },
  { value: 'bottom-left', label: 'Bottom Left' },
  { value: 'bottom-right', label: 'Bottom Right' }
]

const defaultFromColor = '#ffd200'
const defaultToColor = '#f0008b'
const defaultFromHoverColor = '#7800e1'
const defaultToHoverColor = '#00ccff'
const defaultSteps = 4
const defaultDirection = 'to-b'
const defaultShape = 'linear'
const defaultPosition = 'center'
// const defaultLength = '100%'

// Use SSR-safe reactive values
const fromColor = ref(defaultFromColor)
const toColor = ref(defaultToColor)
const fromHoverColor = ref(defaultFromHoverColor)
const toHoverColor = ref(defaultToHoverColor)
const steps = ref(defaultSteps)
const direction = ref(defaultDirection)
const position = ref(defaultPosition)
const gradientShape = ref(defaultShape)
const allowHover = ref(true)

// Initialize from localStorage only on client
onMounted(() => {
  if (typeof window !== 'undefined') {
    isClient.value = true
    fromColor.value = localStorage.getItem('from') || defaultFromColor
    toColor.value = localStorage.getItem('to') || defaultToColor
    fromHoverColor.value = localStorage.getItem('from-hover') || defaultFromHoverColor
    toHoverColor.value = localStorage.getItem('to-hover') || defaultToHoverColor
    steps.value = Number(localStorage.getItem('steps')) || defaultSteps
    direction.value = localStorage.getItem('direction') || defaultDirection
    position.value = localStorage.getItem('position') || defaultPosition
    gradientShape.value = localStorage.getItem('gradient-shape') || defaultShape
    allowHover.value = localStorage.getItem('allow-hover') !== 'false'
    easeFn.value = localStorage.getItem('easing-function') || 'ease'
  }
})

// Watch and sync to localStorage
watch(fromColor, (value) => typeof window !== 'undefined' && localStorage.setItem('from', value))
watch(toColor, (value) => typeof window !== 'undefined' && localStorage.setItem('to', value))
watch(fromHoverColor, (value) => typeof window !== 'undefined' && localStorage.setItem('from-hover', value))
watch(toHoverColor, (value) => typeof window !== 'undefined' && localStorage.setItem('to-hover', value))
watch(steps, (value) => typeof window !== 'undefined' && localStorage.setItem('steps', String(value)))
watch(direction, (value) => typeof window !== 'undefined' && localStorage.setItem('direction', value))
watch(position, (value) => typeof window !== 'undefined' && localStorage.setItem('position', value))
watch(gradientShape, (value) => typeof window !== 'undefined' && localStorage.setItem('gradient-shape', value))
watch(allowHover, (value) => typeof window !== 'undefined' && localStorage.setItem('allow-hover', String(value)))
const easeFn = ref('ease')
watch(easeFn, (value) => typeof window !== 'undefined' && localStorage.setItem('easing-function', value))

// const length = useLocalStorage('length', defaultLength)

const toKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()

function reset() {
  fromColor.value = defaultFromColor
  toColor.value = defaultToColor
  fromHoverColor.value = defaultFromHoverColor
  toHoverColor.value = defaultToHoverColor
  allowHover.value = true
  steps.value = defaultSteps
  direction.value = defaultDirection
  position.value = defaultPosition
  gradientShape.value = defaultShape
}

const isClient = ref(false)

// Create reusable template for the direction/position selector
const [DefineSelectorGrid, ReuseSelectorGrid] = createReusableTemplate<{
  modelValue: string,
  options: Array<{value: string, label: string}>,
  disabled?: boolean,
  updateModelValue: (value: string) => void
}>()

const unocssCode = computed(() => {
  // First add the direction which provides the background-image property
  let classes = [];

  // Add the shape (new)
  if (gradientShape.value === 'linear') {
    // For linear gradients, we use the direction
    classes.push(`bg-gradient-fn-${toKebabCase(direction.value)}`);
  } else if (gradientShape.value === 'circle' || gradientShape.value === 'ellipse') {
    // For circle or ellipse, add position if specified
    if (position.value && position.value !== 'center') {
      classes.push(`bg-gradient-fn-${gradientShape.value}-at-${position.value}`);
    } else {
      classes.push(`bg-gradient-fn-${gradientShape.value}`);
    }
  } else if (gradientShape.value === 'conic') {
    // For conic gradients, add position if specified
    if (position.value && position.value !== 'center') {
      classes.push(`bg-gradient-fn-conic-from-${position.value}`);
    } else {
      classes.push(`bg-gradient-fn-${gradientShape.value}`);
    }
  } else {
    // For other shapes like radial
    classes.push(`bg-gradient-fn-${gradientShape.value}`);
  }
  
  // Add the from color
  classes.push(`bg-gradient-fn-from-[${fromColor.value}]`);

  // Add the to color
  classes.push(`bg-gradient-fn-to-[${toColor.value}]`);
  
  // Add the easing function with steps if needed
  if (steps.value !== defaultSteps) {
    // Using the new syntax format: bg-gradient-fn-ease/8
    classes.push(`bg-gradient-fn-${toKebabCase(easeFn.value)}/${steps.value}`);
  } else {
    // No steps specified, use default
    classes.push(`bg-gradient-fn-${toKebabCase(easeFn.value)}`);
  }
  
  // Add hover variants if enabled
  if (allowHover.value) {
    classes.push(`hover:bg-gradient-fn-from-[${fromHoverColor.value}]`);
    classes.push(`hover:bg-gradient-fn-to-[${toHoverColor.value}]`);
  }
  
  // Add transition
  classes.push(`transition-colors duration-1s`);
  
  return classes.join(' ');
})

// Generate a unique key whenever any user-modifiable value changes
const generatorKey = computed(() =>
  `${easeFn.value}-${direction.value}-${position.value}-${fromColor.value}-${toColor.value}-${fromHoverColor.value}-${toHoverColor.value}-${steps.value}-${allowHover.value}-${gradientShape.value}`
)

const cssCode = computedAsync(async () => {
  // Skip during SSR to avoid generating CSS with unresolved reactive values
  if (typeof window === 'undefined') {
    return ''
  }

  // Force dependency on generatorKey to ensure reactivity
  const key = generatorKey.value

  // Create a fresh generator instance each time to avoid caching issues
  const ctx = await createGenerator({ presets: [presetMini(), presetEasingGradient()] })
  const res = await ctx.generate(unocssCode.value, { preflights: true })
  return res.css
})

// Watch all reactive values that should trigger CSS regeneration
watch(
  [easeFn, direction, position, fromColor, toColor, fromHoverColor, toHoverColor, steps, allowHover, gradientShape],
  () => {
    // Skip during SSR
    if (typeof window === 'undefined') {
      return
    }

    // Force immediate recalculation when any value changes
    const newClassId = `gradient-${Date.now()}`

    // Apply styles with a slight delay to ensure proper DOM update
    setTimeout(() => {
      if (cssCode.value) {
        useStyleTag(cssCode.value, { id: newClassId })
      }
    }, 50)
  },
  { immediate: true }
)

const rotation = {'to-tl': -135, 'to-t': -90, 'to-tr': -45, '': 0, 'to-l': 180, 'to-r': 0, 'to-bl': 135, 'to-b': 90, 'to-br': 45 } as const
// Create a type for the keys of rotation
type DirectionKey = keyof typeof rotation

// Calculate if direction control should be shown - only show for linear gradients
const showDirectionControl = computed(() => {
  return gradientShape.value === 'linear';
})

// Calculate if position control should be shown - show for circle, ellipse, and conic gradients
const showPositionControl = computed(() => {
  return ['circle', 'ellipse', 'conic'].includes(gradientShape.value);
})

// Directions for the grid
const directionOptions = [
  { value: 'to-tl', label: 'Top Left' },
  { value: 'to-t', label: 'Top' },
  { value: 'to-tr', label: 'Top Right' },
  { value: 'to-l', label: 'Left' },
  { value: '', label: 'Center' },
  { value: 'to-r', label: 'Right' },
  { value: 'to-bl', label: 'Bottom Left' },
  { value: 'to-b', label: 'Bottom' },
  { value: 'to-br', label: 'Bottom Right' }
]
</script>

<template>
  <div v-if="isClient" grid="~ lg:cols-[auto_1fr] gap-64" w-full class="nq-raw" f-my-lg>
    <div flex="~ col gap-16">
      <div f-size="256/320" f-rounded-xl outline="~ 1.5 neutral-300" :class="unocssCode" />
      <button ml-auto nq-pill-red @click="reset">
        <div i-nimiq:restore/>
        Reset
      </button>
    </div>
    <div>
        <h2 f-text-xl font-semibold>Settings</h2>
      <form flex="~ wrap gap-48">
        <div>
          <fieldset f-mt-xs>
            <legend><h3 text="f-2xs neutral-700" f-mb-2xs nq-label>Initial</h3></legend>
          <div flex="~ gap-16">
            <label flex="~ col gap-2">
              <input v-model="fromColor" h-24 w-64 type="color" />
              <span text="f-xs neutral-600" lh-none font="semibold italic">from</span>
            </label>
              <div i-nimiq:arrow-right text-neutral-500 mt-10 />
            <label flex="~ col gap-2">
              <input v-model="toColor" h-24 w-64 type="color" />
              <span text="f-xs neutral-600" lh-none font="semibold italic">to</span>
            </label>
          </div>
          </fieldset>

          <fieldset f-mt-xs :class="{'op-40 pointer-events-none': !allowHover}">
          <legend flex="~ items-center gap-8" f-mb-2xs>
            <h3 text="f-2xs neutral-700" nq-label >On Hover</h3>
            <Tooltip dark>
              This preset can transition the gradient between two colours. In this demo we have set the colours to transition on hover, but you can set it to transition on any event using CSS or JS.
            </Tooltip>
          </legend>
          <div flex="~ gap-16">
            <label flex="~ col gap-2">
              <input v-model="fromHoverColor" h-24 w-64 type="color" :disabled="!allowHover" />
              <span text="f-xs neutral-600" lh-none font="semibold italic">from</span>
            </label>
              <div i-nimiq:arrow-right text-neutral-500 mt-10 />
            <label flex="~ col gap-2" >
              <input v-model="toHoverColor" h-24 w-64 type="color" :disabled="!allowHover" />
              <span text="f-xs neutral-600" lh-none font="semibold italic">to</span>
            </label>
          </div>
        </fieldset>
        <fieldset f-mt-sm flex="~ col gap-8">
          <label flex="~ items-center gap-8" f-text-2xs>
              <span text-neutral-700>Add <code>hover</code> effect</span>
              <input v-model="allowHover" type="checkbox" nq-switch />
            </label>
          </fieldset>
        </div>
        <div>
          <fieldset>
          <legend flex="~ items-center gap-8" f-mb-2xs>
            <h3 text="f-2xs neutral-700" nq-label >Controls</h3>
            <Tooltip dark>
              <p>
                This preset is flexible. You can adjust the number of steps and select an easing function.
              </p>
              <p>
                Explore the other utilities for more options
              </p>
            </Tooltip>
          </legend>
          <!-- Gradient shape selector -->
          <label flex="~ col gap-2" f-mt-sm>
            <span text="neutral-800 f-xs">Gradient shape</span>
            <select v-model="gradientShape" text-neutral-200 rounded-4>
              <option v-for="shape in gradientShapes" :key="shape.name" :value="shape.name">
                {{ shape.label }}
              </option>
            </select>
          </label>

          <label flex="~ col gap-2" f-mt-sm>
            <span text="neutral-800 f-xs">Easing function</span>
            <select v-model="easeFn" text-neutral-200 rounded-4 >
              <option v-for="option in easingFunctionsNames" :key="option" :name="option" :value="option">
                {{ option }}
              </option>
            </select>
          </label>

          <label flex="~ col gap-2" f-mt-sm>
            <span text="neutral-800 f-xs">Steps: {{ steps }}</span>
            <input v-model="steps" type="range" :min="2" :max="16" px-8 py-3 bg-white:10 rounded-2 />
          </label>

          <!-- Define the reusable grid template -->
          <DefineSelectorGrid v-slot="{ modelValue, options, updateModelValue, disabled }">
            <div f-mt-2xs grid="~ cols-3 rows-3" w-max>
              <label 
                v-for="option in options" 
                :key="option.value"
                text="10 neutral-500 has-checked:white" 
                bg="hocus:neutral-200 has-checked:blue hocus:has-checked:blue" 
                transition-colors 
                stack 
                size-16 
                rounded-2 
                w-full 
                f-p-2xs 
                aspect-1
                :class="{'op-40 pointer-events-none': disabled}"
              >
                <div v-if="option.value.startsWith('to-')" i-nimiq:arrow-right :style="{ transform: `rotate(${rotation[option.value as DirectionKey] ?? 0}deg)` }" />
                <div v-else-if="option.value === ''" text-25 relative translate-y-7>&dot;</div>
                <div v-else i-nimiq:focus />
                
                <input 
                  type="radio" 
                  sr-only
                  :value="option.value" 
                  :checked="modelValue === option.value" 
                  @change="updateModelValue(option.value)"
                  :disabled="disabled"
                />
              </label>
            </div>
          </DefineSelectorGrid>

          <!-- Direction control - only show for linear gradients -->
          <div flex="~ col gap-2" f-mt-sm v-if="showDirectionControl">
            <div flex="~ gap-8 items-center">
              <span text="neutral-800 f-xs">
                Direction: <code>{{ direction }}</code>
              </span>
              <Tooltip>
                <p f-text-xs>
                  Direction controls apply to linear gradients.
                </p>
              </Tooltip>
            </div>
            <ReuseSelectorGrid
              :modelValue="direction"
              :options="directionOptions"
              :updateModelValue="(value) => direction = value"
            />
          </div>

          <!-- Position control - only show for circle, ellipse, conic gradients -->
          <div flex="~ col gap-2" f-mt-sm v-if="showPositionControl">
            <div flex="~ gap-8 items-center">
              <span text="neutral-800 f-xs">
                Position: <code>{{ position }}</code>
              </span>
              <Tooltip>
                <p f-text-xs>
                  Position controls the center point of the gradient.
                </p>
              </Tooltip>
            </div>
            <ReuseSelectorGrid
              :modelValue="position"
              :options="positionOptions"
              :updateModelValue="(value) => position = value"
            />
          </div>

          </fieldset>
        </div>
      </form>
    </div>

    <details class="mt-8">
      <summary flex="~ gap-32" w-full class="cursor-pointer">
        <h3 m-0 class="font-semibold">
          Generated Code
        </h3>
      </summary>
      <div class="p-4">
        <h4 class="text-sm font-medium">
          UnoCSS classes
        </h4>
        <pre class="w-full max-w-full bg-gray-100 dark:bg-gray-800 rounded p-4 text-xs overflow-auto">{{ unocssCode }}</pre>

        <h4 class="text-sm font-medium mt-4">
          Generated CSS
        </h4>
        <pre class="w-full max-w-full bg-gray-100 dark:bg-gray-800 rounded p-4 text-xs overflow-auto">{{ cssCode }}</pre>
      </div>
    </details>
  </div>
</template>
