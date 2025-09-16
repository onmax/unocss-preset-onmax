# How Easing Gradients Work

Create perceptually uniform gradients that look more natural to the human eye.

## Overview

<figure>

![Comparison between linear gradient and easing gradient showing more natural color distribution](/assets/images/easing-gradient-comparison.svg)

<figcaption>Left: Standard linear gradient with uneven color perception. Right: Easing gradient with perceptually balanced transition.</figcaption>
</figure>

Traditional CSS gradients use linear interpolation between colors, which can create an unnatural-looking band in the middle of the gradient. Easing gradients solve this problem by:

1. **Using easing functions**: Apply mathematical curves that better match human color perception
2. **Creating multiple color stops**: Generate intermediate color steps based on easing curves
3. **Controlling color spaces**: Use appropriate color spaces for better perceptual results

## The Problem with Linear Gradients

When colors are interpolated linearly, the gradient doesn't account for how human eyes perceive color changes. This creates a perception problem where:

- The middle section appears to have a distinct "band"
- Transitions between colors seem abrupt rather than smooth
- Some color spaces exaggerate this effect more than others

## How Easing Functions Improve Gradients

Easing functions create non-linear transitions between values. When applied to gradients, they:

1. **Accelerate or decelerate color transitions**: Control how quickly colors blend throughout the gradient
2. **Create perceptual uniformity**: Match how our eyes actually perceive color transitions
3. **Eliminate the "banding" effect**: Create smoother, more pleasing gradients

### Under the Hood

The preset works by:

```css
/* What the preset generates (simplified) */
background-image: linear-gradient(
  to right,
  color-mix(in oklch, blue, purple 0%),
  /* Start point */ color-mix(in oklch, blue, purple 20%),
  /* Eased step 1 */ color-mix(in oklch, blue, purple 50%),
  /* Eased step 2 */ color-mix(in oklch, blue, purple 80%),
  /* Eased step 3 */ color-mix(in oklch, blue, purple 100%) /* End point */
);
```

The percentages for each color mix are calculated using easing functions instead of being linearly distributed.

## Common Easing Functions

Different easing functions create different gradient effects:

- **`ease`**: Starts slow, speeds up, then slows down at the end
- **`ease-in`**: Starts slow, speeds up toward the end
- **`ease-out`**: Starts fast, slows down toward the end
- **`ease-in-out`**: Slow start and end, faster in the middle
- **`cubic`, `sine`, `expo`, etc.**: Various mathematical curves for different effects

## Resources

Learn more about the concepts behind easing gradients:

- [Easing Linear Gradients](https://css-tricks.com/easing-linear-gradients/) by Andreas Larsen
- [Advanced Techniques with CSS Gradients](https://www.smashingmagazine.com/2021/08/advanced-techniques-with-css-gradients/) by Smashing Magazine
