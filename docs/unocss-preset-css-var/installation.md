# Installation

Once you have UnoCSS set up, you can install the `unocss-preset-css-var` package to start using CSS variable utilities.

::: code-group
```bash [pnpm]
pnpm add -D unocss-preset-css-var unocss
```
```bash [npm]
npm install -D unocss-preset-css-var unocss
```
```bash [yarn]
yarn add -D unocss-preset-css-var unocss
```
```bash [bun]
bun add -D unocss-preset-css-var unocss
```
:::

## Configuration

Add the preset to your UnoCSS configuration:

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetCSSVar } from 'unocss-preset-css-var'

export default defineConfig({
  presets: [
    // other presets...
    presetCSSVar(),
  ],
})
```

## Basic Usage

```html
<!-- Define CSS variables -->
<div class="var:--primary:blue-500 var:--text-size:16px">
  <!-- Use the CSS variables -->
  <p class="text-[var(--primary)] text-[var(--text-size)]">Styled text</p>
</div>
```
