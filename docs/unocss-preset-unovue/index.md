# UnoCSS UnoVue Preset

The UnoVue preset combines multiple UI component presets to create a comprehensive styling solution for Vue applications. It integrates the Reka UI preset and Shadcn UI preset into a cohesive system, giving you access to a wide range of UI utilities and components.

## Features

- **All-in-one Integration**: Combines Reka UI and Shadcn UI presets
- **Component Library Support**: Seamless integration with Vue component libraries
- **Customizable Configuration**: Fine-tune each included preset to your needs

## What's Included

UnoVue bundles the following presets:

1. **Reka UI**
   - Radix Colors support
   - UI animations
   - Custom variants

2. **Shadcn UI**
   - Component styling utilities
   - Theme configuration
   - Control options

## Basic Usage

```html
<!-- Using Reka UI features -->
<div class="bg-slate-3 text-slate-11 dark:bg-slate-12 dark:text-slate-1">
  Radix Colors with dark mode
</div>

<!-- Using Shadcn UI components -->
<button class="btn btn-primary">
  Styled Button
</button>

<!-- Combined usage -->
<div class="card reka-hover:shadow-lg">
  <h2 class="card-title">Card with hover effect</h2>
  <p class="card-body">Content with Shadcn styling and Reka variants</p>
</div>
```
