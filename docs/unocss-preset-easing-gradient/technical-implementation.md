# Technical Implementation

This page explains how the easing gradient preset works under the hood and the browser technologies that power it.

## What is this plugin?

This plugin adds extra gradient features to UnoCSS. It allows you to use shapes beyond simple linear layouts (like radial or conic) and apply various easing methods to color transitions. It also defines custom properties that let browsers animate color variables smoothly.

This plugin is experimental and things might break. Feel free to create issues or PR to improve the current implementation :).

## How easing functions work

UnoCSS comes with a simple, yet powerful way to create gradients:

```html
<div class="bg-gradient-to-b bg-gradient-from-rose-400 bg-gradient-to-red-800" />
```

This API works great and it will convert to a linear-gradient function. The browser will automatically create a linear gradient between the initial position and final position interpolating the color accordingly.

But you can only use a linear gradient, you cannot use other function. That's why this plugin exists.

You can use for example `bg-gradient-fn-ease-out`, and automatically it will generate a linear gradient with 4 steps. In each of the steps, it will interpolate the color it should use leveraging the `color-mix` CSS function.

### How color-mix works

The `color-mix()` CSS function is crucial to how this preset creates easing gradients. It allows us to mix two colors according to a specified percentage. For example:

```
color-mix(in srgb, red, blue 50%)
```

This would give us a color that is 50% red and 50% blue. The preset leverages this to create multiple color stops along the gradient path, where each stop is a precise mix of the start and end colors based on easing curves.

[MDN Documentation for color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)

> Important: Support for `color-mix` is limited in older browsers. Check [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix#browser_compatibility) before using in production.

## Transitioning Colors

Normally, you cannot animate `background-image` in CSS, which includes gradients. This is a key limitation in standard CSS animations.

### Why @property makes transitions possible

This preset uses the `@property` CSS at-rule to register custom properties with the browser and define their behavior. By specifying a color property type:

```css
@property --from {
  syntax: '<color>';
  inherits: false;
  initial-value: transparent;
}
```

We tell the browser to treat our custom variables as actual color values rather than strings. This is critical because:

1. The browser now understands the property's data type
2. It knows how to interpolate between different color values during transitions
3. It can smoothly animate between colors using standard transition properties

Without `@property`, the browser would treat custom properties as simple strings and couldn't properly animate between color values.

[MDN Documentation for @property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)

> Important: Support for @property is limited in some browsers. Check [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/@property#browser_compatibility) before using in production. As of early 2023, it's supported in Chrome, Edge, Opera, and Safari, but not in Firefox.
