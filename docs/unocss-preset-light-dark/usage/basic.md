# Basic Usage

Once you have the preset configured, you can start using the generated utility classes in your HTML.

## Generated Utility Classes

The preset generates utility classes based on your color configuration. With the default `classPrefix` of `ld-`, you get:

### Text Colors

```html
<p class="ld-text-primary">Primary text that adapts to light/dark mode</p>
<p class="ld-text-secondary">Secondary text with theme-aware colors</p>
<p class="ld-text-accent">Accent text for highlights</p>
```

### Background Colors

```html
<div class="ld-bg-primary">Primary background</div>
<div class="ld-bg-secondary">Secondary background</div>
<div class="ld-bg-surface">Surface background</div>
```

### Border Colors

```html
<div class="ld-border-primary border">Element with adaptive border</div>
<input class="ld-border-secondary border rounded" placeholder="Form input" />
```

## Quick Start Example

Here's a complete example showing how to create a theme-aware card component:

```html
<div class="ld-bg-surface ld-border-primary border rounded-lg p-6 shadow-lg">
  <h2 class="ld-text-primary text-xl font-bold mb-4">Card Title</h2>
  <p class="ld-text-secondary mb-4">
    This card automatically adapts its colors based on the user's preferred color scheme or your app's theme toggle.
  </p>
  <button class="ld-bg-primary ld-text-surface px-4 py-2 rounded hover:opacity-90">Action Button</button>
</div>
```

## How It Works

The preset uses the CSS `light-dark()` function under the hood:

```css
/* Generated CSS */
.ld-text-primary {
  color: light-dark(#111827, #f9fafb);
}

.ld-bg-primary {
  background-color: light-dark(#3b82f6, #60a5fa);
}
```

## Dark Mode Setup

### Automatic (Recommended)

The `light-dark()` function automatically respects the user's system preference:

```css
/* No JavaScript needed - works automatically */
@media (prefers-color-scheme: dark) {
  /* Styles are applied automatically */
}
```

### Manual Toggle

For manual theme switching, add the appropriate class to your root element:

```js
// Toggle between light and dark modes
function toggleTheme() {
  document.documentElement.classList.toggle('dark')
}

// Set specific theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
  }
}
```

### React Example

```jsx
import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
  }, [])

  useEffect(() => {
    // Apply theme class
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? '☀️' : '🌙'}
      {' '}
      Toggle Theme
    </button>
  )
}

function App() {
  return (
    <div className="ld-bg-surface min-h-screen">
      <header className="ld-bg-primary ld-text-surface p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">My App</h1>
          <ThemeToggle />
        </nav>
      </header>

      <main className="p-8">
        <div className="ld-bg-surface ld-border-primary border rounded-lg p-6">
          <h2 className="ld-text-primary text-2xl mb-4">Welcome</h2>
          <p className="ld-text-secondary">
            This content automatically adapts to your theme preference.
          </p>
        </div>
      </main>
    </div>
  )
}
```

### Vue Example

```vue
<template>
  <div class="ld-bg-surface min-h-screen">
    <header class="ld-bg-primary ld-text-surface p-4">
      <nav class="flex justify-between items-center">
        <h1 class="text-xl font-bold">My App</h1>
        <button @click="toggleTheme">
          {{ isDark ? '☀️' : '🌙' }} Toggle Theme
        </button>
      </nav>
    </header>

    <main class="p-8">
      <div class="ld-bg-surface ld-border-primary border rounded-lg p-6">
        <h2 class="ld-text-primary text-2xl mb-4">Welcome</h2>
        <p class="ld-text-secondary">
          This content automatically adapts to your theme preference.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

onMounted(() => {
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = prefersDark
})

watch(isDark, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>
```

## Browser Compatibility

The preset provides fallbacks for browsers that don't support `light-dark()`:

- **Modern browsers**: Use native `light-dark()` function
- **Older browsers**: Fall back to class-based or media query styles

## What's Next?

- [Examples →](/unocss-preset-light-dark/usage/examples) - See more practical examples
- [Configuration →](/unocss-preset-light-dark/configuration) - Learn about customization options
- [Playground →](https://unocss.dev/play/) - Try it out online
