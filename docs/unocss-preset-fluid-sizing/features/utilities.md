# Utilities

Adaptability in simplicity, fluidity in design.

This preset works with any CSS property that accepts length values (px, rem, etc.). It automatically generates responsive, fluid CSS rules that smoothly scale between viewport sizes.

## Core Utilities

All fluid utilities follow the naming pattern `f-{utility}` and can be combined with various modifiers. Here are the most commonly used utilities:

| Utility     | CSS Properties                |
| ----------- | ----------------------------- |
| `f-m`       | `margin`                      |
| `f-p`       | `padding`                     |
| `f-text`    | `font-size`                   |
| `f-{size}`  | `width`, `height`             |
| `f-{side}`  | `top`/`bottom`/`right`/`left` |
| `f-rounded` | `border-radius`               |

> [!NOTE]
> The above are just examples. You can use this preset with any CSS property that accepts length values - the preset will detect and handle them automatically.

## Modifiers

Each utility can be customized with these powerful modifiers:

### `f-${utility}-min-${value}`

Sets the minimum size at the smallest viewport width.
For example, with `f-p-min-16`, the padding will never be smaller than 16px (or your base unit).

```html
<div class="f-p-min-16"></div>
```

### `f-${utility}-max-${value}`

Sets the maximum size at the largest viewport width.
For example, with `f-p-max-32`, the padding will never be larger than 32px (or your base unit).

```html
<div class="f-p-max-32"></div>
```

### Shorthand Syntax

Save typing with this convenient shorthand for min/max values:

```html
<div class="f-p-16/32"></div>
<!-- This is equivalent to: -->
<div class="f-p f-p-min-16 f-p-max-32"></div>
```

This creates padding that scales from 16px at the smallest viewport to 32px at the largest.

### `f-${utility}-min-container-${value}`

Customizes the lower boundary of the responsive range.
By default, the smallest viewport width is `320px`, but you can override it:

```html
<div class="f-p-min-container-480"></div>
```

> This sets the minimum container width to 480px instead of the default 320px.

### `f-${utility}-max-container-${value}`

Customizes the upper boundary of the responsive range.
By default, the largest viewport width is `1920px`, but you can override it:

```html
<div class="f-p-max-container-1440"></div>
```

> This sets the maximum container width to 1440px instead of the default 1920px.

### `f-${utility}-container`

**Container-relative sizing:** Instead of using viewport width (`100vw`), this uses the container query width (`100cqw`) to calculate values based on the closest parent container's width.

```html
<div class="f-p-container"></div>
```

This is especially useful for components that need to scale within containers rather than the viewport.

### `f-${utility}-base-${baseValue}`

Changes the unit of measurement for the utility (default is `1px`).
Available units: `px`, `rem`, `em`, `vw`, `vh`, `vmin`, `vmax`, `fr`, `%`

```html
<div class="f-p-base-rem"></div>
```

You can also set a global default unit with the `defaultBaseUnit` option in your preset configuration.
