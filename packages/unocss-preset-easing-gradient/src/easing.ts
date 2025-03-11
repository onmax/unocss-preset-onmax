const linear = (t: number): number => t

const ease = (t: number): number => t * t
const easeIn = (t: number): number => t * t * t
const easeOut = (t: number): number => t * (2 - t)
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

const easeInCubic = (t: number): number => t * t * t
const easeOutCubic = (t: number): number => 1 + (--t) * t * t
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 + (--t) * 4 * t * t
}

const easeInQuart = (t: number): number => t * t * t * t
const easeOutQuart = (t: number): number => 1 - (--t) * t * t * t
function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
}

const easeInQuint = (t: number): number => t * t * t * t * t
const easeOutQuint = (t: number): number => 1 + (--t) * t * t * t * t
function easeInOutQuint(t: number): number {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
}

const easeInSine = (t: number): number => 1 - Math.cos((t * Math.PI) / 2)
const easeOutSine = (t: number): number => Math.sin((t * Math.PI) / 2)
const easeInOutSine = (t: number): number => -(Math.cos(Math.PI * t) - 1) / 2

const easeInExpo = (t: number): number => (t === 0 ? 0 : 2 ** (10 * (t - 1)))
const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - 2 ** (-10 * t))
function easeInOutExpo(t: number): number {
  if (t === 0 || t === 1)
    return t
  return t < 0.5
    ? 2 ** (20 * t - 10) / 2
    : (2 - 2 ** (-20 * t + 10)) / 2
}

const easeInCirc = (t: number): number => 1 - Math.sqrt(1 - t * t)
const easeOutCirc = (t: number): number => Math.sqrt(1 - (--t) * t)
function easeInOutCirc(t: number): number {
  return t < 0.5
    ? (1 - Math.sqrt(1 - 4 * t * t)) / 2
    : (Math.sqrt(1 - 4 * (--t) * t) + 1) / 2
}

export const easingFunctions = {
  linear,
  ease,
  easeIn,
  easeOut,
  easeInOut,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
}

export function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  // Helper to compute bezier values
  const bezier = (t: number, p0: number, p1: number, p2: number, p3: number): number =>
    (1 - t) ** 3 * p0
    + 3 * (1 - t) ** 2 * t * p1
    + 3 * (1 - t) * t ** 2 * p2
    + t ** 3 * p3

  // Newton's method to find the value of t for a given x
  const findTForX = (x: number): number => {
    let tValue = x // Initial guess
    for (let i = 0; i < 5; i++) { // Iterating to improve the guess
      const xEstimate = bezier(tValue, 0, x1, x2, 1)
      const dx = (3 * (1 - tValue) ** 2 * (x1))
        + (6 * (1 - tValue) * tValue * (x2 - x1))
        + (3 * tValue ** 2 * (1 - x2))
      tValue -= (xEstimate - x) / dx
    }
    return tValue
  }

  return (x: number): number => {
    if (x <= 0)
      return 0
    if (x >= 1)
      return 1
    const tValue = findTForX(x)
    return bezier(tValue, 0, y1, y2, 1) // Calculate y for the corrected t
  }
}
