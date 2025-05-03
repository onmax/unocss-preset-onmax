# UnoCSS CSS Variables Preset

The CSS Variables preset allows you to easily define and use CSS custom properties (variables) in your UnoCSS classes. This preset makes it easy to set and manage CSS variables with the UnoCSS utility-first approach.

## Features

- Create CSS variables using UnoCSS utilities
- Set variables with color values from your theme
- Full integration with UnoCSS's theme system

## Basic Usage

```html
<!-- Define a CSS variable -->
<div class="var:my-color:blue">
  <!-- Use the CSS variable -->
  <p class="text-$my-color">This text will be blue</p>
</div>
```

The `var:` utility creates a CSS variable with the specified name and value. The format is:

```
var:variable-name:value
```

### Working with Colors

The preset supports color values from your UnoCSS theme:

```html
<div class="var:--primary:blue-500 var:--accent:green-300">
  <!-- Use the CSS variables -->
  <button class="bg-[var(--primary)] text-white">Primary Button</button>
  <button class="bg-[var(--accent)] text-black">Accent Button</button>
</div>
```
