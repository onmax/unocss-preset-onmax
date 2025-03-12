# UnoCSS Preset Onmax Rules and Variants

This preset includes rules and variants that I use in my day-to-day work.

## Rules

### `stack`

When you want to stack a bunch of elements on top of each other, instead of using `absolute` positioning, you can use the `stack` rule. This rule will stack the elements on top of each other using a `display: grid` with 1 column and 1 row.

```html
<div class="stack">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Variants

[Source code](https://github.com/onmax/unocss-preset-onmax/blob/main/packages/unocss-preset-onmax/src/variants.ts)

| Variant | CSS | Description |
| --- | --- | --- |
| `hocus:` | `:hover, :focus-visible` | When the element is hovered or focused. |
| `group-hocus:` | `.group:hover .group:focus-visible` | When the group is hovered or focused. |
| `inverted:` | `:is([data-inverted], [data-inverted] *) ${s}` | When the element or any of its ancestors has a `data-inverted` attribute. |
