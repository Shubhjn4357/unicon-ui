/**
 * Component Size Constants
 * Defines consistent sizing across all unicorn-ui components
 */

export const COMPONENT_SIZES = {
  sm: {
    height: "2rem", // 32px
    padding: "0.75rem", // 12px
    fontSize: "0.875rem", // 14px
    lineHeight: "1.25rem",
  },
  md: {
    height: "2.5rem", // 40px
    padding: "1rem", // 16px
    fontSize: "1rem", // 16px
    lineHeight: "1.5rem",
  },
  lg: {
    height: "3rem", // 48px
    padding: "1.5rem", // 24px
    fontSize: "1.125rem", // 18px
    lineHeight: "1.75rem",
  },
} as const

/**
 * Typography Scale (Major Third - 1.250)
 * All values in rem for accessibility
 */
export const TYPOGRAPHY_SCALE = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem", // 72px
  "8xl": "6rem", // 96px
  "9xl": "8rem", // 128px
} as const

/**
 * Touch Target Minimum (WCAG 2.1 Success Criterion 2.5.5)
 */
export const TOUCH_TARGET_MIN = "44px" as const

/**
 * Animation Durations (in milliseconds)
 */
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
} as const

/**
 * Z-Index Scale
 * Prevents z-index conflicts across components
 */
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const

/**
 * Breakpoints (matches Tailwind defaults but as constants)
 */
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const

/**
 * Color Contrast Ratios (WCAG 2.1 AA/AAA)
 */
export const CONTRAST_RATIOS = {
  normalTextAA: 4.5,
  normalTextAAA: 7,
  largeTextAA: 3,
  largeTextAAA: 4.5,
  uiComponentsAA: 3,
} as const

/**
 * Border Radius Scale
 */
export const RADIUS_SCALE = {
  none: "0",
  sm: "calc(var(--radius) - 4px)",
  DEFAULT: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  lg: "calc(var(--radius) + 2px)",
  xl: "calc(var(--radius) + 4px)",
  "2xl": "calc(var(--radius) + 8px)",
  full: "9999px",
} as const

// Re-export from other constant files
export * from "./accessibility"
export * from "./constants"
export * from "./color-tokens"
export * from "./animation-presets"

