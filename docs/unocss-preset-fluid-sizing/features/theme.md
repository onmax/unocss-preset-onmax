# Theme Configuration

Harmony in proportions, consistency through scale.

The UnoCSS Fluid Sizing preset includes a thoughtfully crafted theme system that provides semantic size names for common CSS properties. Rather than specifying exact min/max values for each utility, you can use these intuitive, human-readable names that automatically scale across different viewport sizes.

## Default Theme

The default theme provides predefined values for spacing, border radius, and font sizes. Each value consists of a min/max pair that defines how elements will scale from small to large viewports.

### Spacing Scale

Use these semantic sizes with any spacing utility (`margin`, `padding`, `gap`, etc.) for consistent, fluid spacing throughout your design:

| Name  | Min Value (px) | Max Value (px) | Example    | Use Case                   |
| ----- | -------------- | -------------- | ---------- | -------------------------- |
| `2xs` | 8              | 12             | `f-p-2xs`  | Very tight spacing         |
| `xs`  | 12             | 16             | `f-m-xs`   | Compact elements           |
| `sm`  | 16             | 24             | `f-gap-sm` | Default spacing            |
| `md`  | 24             | 32             | `f-mt-md`  | Medium separation          |
| `lg`  | 32             | 48             | `f-pb-lg`  | Generous spacing           |
| `xl`  | 48             | 72             | `f-mx-xl`  | Section spacing            |
| `2xl` | 72             | 96             | `f-py-2xl` | Major section spacing      |
| `3xl` | 96             | 128            | `f-p-3xl`  | Layout spacing             |
| `4xl` | 128            | 144            | `f-m-4xl`  | Large layout spacing       |
| `5xl` | 144            | 200            | `f-mt-5xl` | Extra large layout spacing |

### Border Radius Scale

Create consistent, fluid rounded corners with these semantic values for the `f-rounded` utility:

| Name  | Min Value (px) | Max Value (px) | Example         | Use Case                 |
| ----- | -------------- | -------------- | --------------- | ------------------------ |
| `xs`  | 2              | 4              | `f-rounded-xs`  | Subtle rounding          |
| `sm`  | 4              | 6              | `f-rounded-sm`  | Light rounding           |
| `md`  | 6              | 8              | `f-rounded-md`  | Standard rounding        |
| `lg`  | 8              | 12             | `f-rounded-lg`  | Prominent rounding       |
| `xl`  | 12             | 16             | `f-rounded-xl`  | High rounding            |
| `2xl` | 16             | 24             | `f-rounded-2xl` | Very pronounced rounding |

### Font Size Scale

Create a fluid type system with these semantic values for the `f-text` utility:

| Name  | Min Value (px) | Max Value (px) | Example      | Use Case                   |
| ----- | -------------- | -------------- | ------------ | -------------------------- |
| `3xs` | 9              | 11             | `f-text-3xs` | Legal text, footnotes      |
| `2xs` | 10             | 12             | `f-text-2xs` | Fine print, captions       |
| `xs`  | 12             | 14             | `f-text-xs`  | Small text, secondary info |
| `sm`  | 14             | 16             | `f-text-sm`  | UI text, form labels       |
| `md`  | 16             | 16             | `f-text-md`  | Body text                  |
| `lg`  | 16             | 18             | `f-text-lg`  | Large body text            |
| `xl`  | 18             | 22             | `f-text-xl`  | Subheadings                |
| `2xl` | 22             | 26             | `f-text-2xl` | Section headings           |
| `3xl` | 26             | 32             | `f-text-3xl` | Major headings             |
| `4xl` | 32             | 44             | `f-text-4xl` | Hero/feature headings      |

## Customization

Want to tailor these values to your design system? Learn how to build your own custom theme in the [Custom Theme Configuration](../api/custom-theme) guide.
