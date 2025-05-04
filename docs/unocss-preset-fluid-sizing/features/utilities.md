# Utilities

UnoCSS Fluid Sizing preset provides a comprehensive set of utilities for creating responsive designs. Here's a breakdown of all the utilities available in this preset:

## Core Utilities

All utilities follow the pattern `f-{utility}` and can be combined with modifiers for min/max values.

### Spacing Utilities

| Utility | CSS Properties                  |
| ------- | ------------------------------- |
| `f-m`   | `margin`                        |
| `f-mx`  | `margin-left`, `margin-right`   |
| `f-my`  | `margin-top`, `margin-bottom`   |
| `f-mt`  | `margin-top`                    |
| `f-mr`  | `margin-right`                  |
| `f-mb`  | `margin-bottom`                 |
| `f-ml`  | `margin-left`                   |
| `f-p`   | `padding`                       |
| `f-px`  | `padding-left`, `padding-right` |
| `f-py`  | `padding-top`, `padding-bottom` |
| `f-pt`  | `padding-top`                   |
| `f-pr`  | `padding-right`                 |
| `f-pb`  | `padding-bottom`                |
| `f-pl`  | `padding-left`                  |

### Sizing Utilities

| Utility      | CSS Properties            |
| ------------ | ------------------------- |
| `f-w`        | `width`                   |
| `f-h`        | `height`                  |
| `f-size`     | `width`, `height`         |
| `f-min-w`    | `min-width`               |
| `f-min-h`    | `min-height`              |
| `f-min-size` | `min-width`, `min-height` |
| `f-max-w`    | `max-width`               |
| `f-max-h`    | `max-height`              |
| `f-max-size` | `max-width`, `max-height` |

### Positioning Utilities

| Utility             | CSS Properties |
| ------------------- | -------------- |
| `f-top` or `f-t`    | `top`          |
| `f-right` or `f-r`  | `right`        |
| `f-bottom` or `f-b` | `bottom`       |
| `f-left` or `f-l`   | `left`         |

### Layout Utilities

| Utility                     | CSS Properties |
| --------------------------- | -------------- |
| `f-gap` or `f-flex-gap`     | `gap`          |
| `f-gap-x` or `f-flex-gap-x` | `column-gap`   |
| `f-gap-y` or `f-flex-gap-y` | `row-gap`      |

### Typography Utilities

| Utility      | CSS Properties   |
| ------------ | ---------------- |
| `f-text`     | `font-size`      |
| `f-leading`  | `line-height`    |
| `f-tracking` | `letter-spacing` |

### Other Utilities

| Utility         | CSS Properties                         |
| --------------- | -------------------------------------- |
| `f-rounded`     | `border-radius`                        |
| `f-shadow`      | `box-shadow`                           |
| `f-ring`        | `--un-ring-width`                      |
| `f-ring-offset` | `--un-ring-offset-width`               |
| `f-translate`   | `--un-translate-x`, `--un-translate-y` |
| `f-translate-x` | `--un-translate-x`                     |
| `f-translate-y` | `--un-translate-y`                     |
| `f-translate-z` | `--un-translate-z`                     |

## Modifiers

You can modify each utility with these additional settings:

### `f-${utility}-min-${value}`

Sets the minimum value for the utility at the smallest viewport width.

```html
<div class="f-p-min-16"></div>
```

### `f-${utility}-max-${value}`

Sets the maximum value for the utility at the largest viewport width.

```html
<div class="f-p-max-32"></div>
```

### Shorthand Syntax

You can combine min and max values using this shorthand:

```html
<div class="f-p-16/32"></div>
<!-- Equivalent to: -->
<div class="f-p f-p-min-16 f-p-max-32"></div>
```

### `f-${utility}-min-container-${value}`

Sets the minimum screen width for the utility. By default it is `320px`. You can change it with the option `minContainerWidth` in the preset.

```html
<div class="f-p-min-container-480"></div>
```

### `f-${utility}-max-container-${value}`

Sets the maximum screen width for the utility. By default it is `1920px`. You can change it with the option `maxContainerWidth` in the preset.

```html
<div class="f-p-max-container-1440"></div>
```

### `f-${utility}-container`

Instead of using `100vw` to compute the value, it uses `100cqw` which is the width of the closest container.

```html
<div class="f-p-container"></div>
```

### `f-${utility}-base-${baseValue}`

> [!WARNING]
> This utility is experimental and may not work as expected.

Sets the base unit for the utility which by default is `1px`. You can also change the default base unit by passing the option `defaultBaseUnit` to the preset.

Available base units: `px`, `rem`, `em`, `vw`, `vh`, `vmin`, `vmax`, `fr`, `%`

```html
<div class="f-p-base-rem"></div>
```
