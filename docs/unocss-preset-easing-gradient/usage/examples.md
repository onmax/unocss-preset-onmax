# Example Components

Here are some practical examples of how to use the easing gradient preset to create beautiful UI components.

## Card with Gradient Background

```html
<div class="relative overflow-hidden rounded-xl p-8 bg-white dark:bg-black shadow-lg">
  <!-- Gradient background with easing -->
  <div class="absolute inset-0 -z-10 bg-gradient-fn-ease-in-out fn-from-blue-500/20 fn-to-purple-500/20 fn-to-br"></div>

  <h3 class="text-xl font-bold mb-4">Feature Card</h3>
  <p class="text-gray-700 dark:text-gray-300">
    This card uses an eased gradient background that creates a subtle, natural-looking effect.
  </p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Learn More</button>
</div>
```

## Animated Call-to-Action Button

```html
<button
  class="px-6 py-3 rounded-full font-medium text-white bg-gradient-fn-ease fn-from-blue-500 fn-to-violet-600 fn-to-r hover:(fn-from-violet-600 fn-to-blue-500) transition-colors duration-500"
>
  Get Started
</button>
```

## Gradient Text

```html
<h1 class="text-4xl font-bold">
  <span class="bg-gradient-fn-ease-in-out fn-from-amber-500 fn-to-rose-500 fn-to-r bg-clip-text text-transparent">
    Beautiful Gradient Text
  </span>
</h1>
```

## Image Overlay

```html
<div class="relative group">
  <img src="/image.jpg" alt="Beautiful landscape" class="w-full h-64 object-cover rounded-lg" />

  <!-- Gradient overlay -->
  <div
    class="absolute inset-0 rounded-lg bg-gradient-fn-ease-in fn-from-transparent fn-to-black/70 fn-to-t opacity-60 group-hover:opacity-90 transition-opacity"
  ></div>

  <!-- Content -->
  <div class="absolute bottom-0 left-0 p-4 text-white">
    <h3 class="font-bold">Scenic View</h3>
    <p>A beautiful landscape photo with gradient overlay</p>
  </div>
</div>
```

## Easing Gradient Card Collection

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <!-- Card 1 -->
  <div
    class="h-64 rounded-lg bg-gradient-fn-sine-in-out fn-from-sky-400 fn-to-blue-600 fn-to-br p-6 flex flex-col justify-end"
  >
    <h3 class="font-bold text-white">Analytics Dashboard</h3>
    <p class="text-white/80">Monitor your key metrics</p>
  </div>

  <!-- Card 2 -->
  <div
    class="h-64 rounded-lg bg-gradient-fn-cubic-out fn-from-emerald-400 fn-to-teal-600 fn-to-br p-6 flex flex-col justify-end"
  >
    <h3 class="font-bold text-white">Content Management</h3>
    <p class="text-white/80">Organize your digital assets</p>
  </div>

  <!-- Card 3 -->
  <div
    class="h-64 rounded-lg bg-gradient-fn-expo fn-from-purple-400 fn-to-fuchsia-600 fn-to-br p-6 flex flex-col justify-end"
  >
    <h3 class="font-bold text-white">User Profiles</h3>
    <p class="text-white/80">Manage team permissions</p>
  </div>
</div>
```

## Profile Card with Radial Gradient

```html
<div class="relative overflow-hidden rounded-xl p-6 bg-white dark:bg-gray-900 shadow-lg flex items-center gap-4">
  <!-- Gradient background -->
  <div
    class="absolute inset-0 -z-10 bg-gradient-fn-ease fn-from-rose-100 fn-to-transparent dark:(fn-from-rose-900/30 fn-to-transparent) fn-circle-at-top-left"
  ></div>

  <!-- Avatar -->
  <div
    class="w-16 h-16 rounded-full overflow-hidden bg-gradient-fn-ease-in fn-from-rose-400 fn-to-pink-600 fn-to-br flex items-center justify-center"
  >
    <span class="text-white text-xl font-bold">JD</span>
  </div>

  <!-- Content -->
  <div>
    <h3 class="font-bold">Jane Doe</h3>
    <p class="text-gray-600 dark:text-gray-400">Product Designer</p>
  </div>
</div>
```

## Advanced Conic Gradient Chart

```html
<div class="relative w-64 h-64">
  <!-- Conic gradients for chart segments -->
  <div
    class="w-full h-full rounded-full bg-gradient-fn-ease fn-from-blue-500 fn-to-green-500 fn-conic-from-0deg-at-center"
  ></div>

  <!-- Inner circle for donut effect -->
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white dark:bg-gray-900"
  ></div>

  <!-- Center content -->
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <div class="text-3xl font-bold">75%</div>
    <div class="text-sm text-gray-500">Completed</div>
  </div>
</div>
```
