<script setup lang="ts">
import { createGenerator } from '@unocss/core'
import { presetMini } from '@unocss/preset-mini'
import { computedAsync, useLocalStorage, useStyleTag } from '@vueuse/core'
import { computed, watch, watchEffect } from 'vue'
import Tooltip from './Tooltip.vue'
import { presetEasingGradient } from 'unocss-preset-easing-gradient'
import { easingFunctions } from 'unocss-preset-easing-gradient/easing'

const easingFunctionsNames = Object.keys(easingFunctions)

const defaultFromColor = '#ffd200'
const defaultToColor = '#f0008b'
const defaultFromHoverColor = '#7800e1'
const defaultToHoverColor = '#00ccff'
const defaultSteps = 4
// const defaultLength = '100%'

const fromColor = useLocalStorage('from', defaultFromColor)
const toColor = useLocalStorage('to', defaultToColor)
const fromHoverColor = useLocalStorage('from-hover', defaultFromHoverColor)
const toHoverColor = useLocalStorage('to-hover', defaultToHoverColor)
const steps = useLocalStorage('steps', defaultSteps)

// TODO add hover to the logic
const allowHover = useLocalStorage('allow-hover', true)

// const length = useLocalStorage('length', defaultLength)

const toKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()

function reset() {
  fromColor.value = defaultFromColor
  toColor.value = defaultToColor
  fromHoverColor.value = defaultFromHoverColor
  toHoverColor.value = defaultToHoverColor
  allowHover.value = true
  steps.value = defaultSteps
}

const easeFn = useLocalStorage('easing-function', 'ease')

const unocssCode = computed(() => {
  // First add the direction which provides the background-image property
  let classes = [`bg-gradient-fn-to-b`];
  
  // Add the from color
  classes.push(`bg-gradient-fn-from-[${fromColor.value}]`);
  
  // Add the to color
  classes.push(`bg-gradient-fn-to-[${toColor.value}]`);
  
  // Add the easing function - add a timestamp to force re-evaluation
  const timestamp = Date.now()
  classes.push(`bg-gradient-fn-${toKebabCase(easeFn.value)}`);
  
  // Add optional step count if it's not the default
  if (steps.value !== defaultSteps) {
    // Note: we're not using this yet as the preset doesn't seem to support custom steps count
    // classes.push(`bg-gradient-fn-steps-${steps.value}`);
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

// Generate a unique key whenever the easing function changes to force regeneration
const generatorKey = computed(() => `${easeFn.value}-${Date.now()}`)

const cssCode = computedAsync(async () => {
  // Create a fresh generator instance each time to avoid caching issues
  const ctx = await createGenerator({ presets: [presetMini(), presetEasingGradient()] })
  const res = await ctx.generate(unocssCode.value, { preflights: true })
  return res.css
})

// Force refresh of CSS when easing function changes
watch(easeFn, () => {
  requestAnimationFrame(() => {
    useStyleTag(cssCode.value || '', { id: `gradient-${Date.now()}` })
  })
}, { immediate: true })

watchEffect(() => {
  useStyleTag(cssCode.value || '', { id: 'gradient' })
})
</script>

<template>
  <div grid="~ lg:cols-[auto_1fr] gap-64" w-full class="nq-raw" f-my-lg>
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
          <label flex="~ col gap-2">
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
          </fieldset>
        </div>
      </form>
    </div>

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
</template>
