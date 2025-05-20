# Custom Rules and Variants

UnoCSS Preset Onmax includes several custom rules and variants that enhance the styling capabilities beyond what's available in the standard UnoCSS presets.

## Custom Rules

### Stack Layout

The `stack` utility creates a layout where children are stacked on top of each other in the same space. This is perfect for overlays, cards with background images, and other layered designs.

```html
<div class="stack">
  <img src="/background.jpg" />
  <div class="bg-black:50 p-4">Overlay content</div>
</div>
```

#### How It Works

The `stack` rule generates the following CSS:

```css
.stack {
  width: 100%;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.stack > * {
  grid-area: 1 / 1;
  align-self: center;
  justify-self: center;
}
```

This creates a grid with a single cell, and all children are placed in that cell, stacked on top of each other.

## Custom Variants

### Hocus Variant

The `hocus:` variant applies styles when an element is either hovered or focused with keyboard navigation (focus-visible). It's a convenient shorthand for applying the same styles to both interaction states.

```html
<button class="bg-blue-500 hocus:bg-blue-600 hocus:text-white">Button</button>
```

This generates CSS equivalent to:

```css
button {
  background-color: #3b82f6;
}

button:hover,
button:focus-visible {
  background-color: #2563eb;
  color: white;
}
```

### Group Hocus Variant

Similar to the standard `group-hover:` variant, the `group-hocus:` variant allows styling elements when their parent (with the `group` class) is hovered or focused.

```html
<div class="group border p-4">
  <span class="text-gray-500 group-hocus:text-blue-500">
    This text changes color when the parent is hovered or focused
  </span>
</div>
```

<!-- ### Nth-Child Variant

The `nth-*:` variant provides a convenient way to target specific children within a container using CSS's `nth-child` selector.

```html
<ul>
  <li class="nth-1:font-bold">First item</li>
  <li class="nth-2:text-red-500">Second item</li>
  <li class="nth-3:bg-yellow-100">Third item</li>
  <li class="nth-[2n]:italic">Every even item is italic</li>
</ul>
```

You can use any valid CSS nth-child selector pattern:

- Simple numbers: `nth-1:`, `nth-2:`, etc.
- Even/odd: `nth-[2n]:`, `nth-[odd]:`
- Formulas: `nth-[3n+1]:`, `nth-[n+4]:` -->

## Combining with Other Variants

Custom variants can be combined with other variants for more complex styling:

```html
<button class="bg-blue-500 hocus:bg-blue-600 dark:hocus:bg-blue-700">Works in light and dark modes</button>
```

## Integration with Theme Variables

All custom rules and variants work seamlessly with theme variables and other UnoCSS features:

```html
<div class="stack gap-4 p-$spacing-lg bg-$color-surface">
  <!-- Uses CSS variables with the stack layout -->
</div>
```
