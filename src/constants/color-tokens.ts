/**
 * Default color tokens for components
 * These reference CSS variables, allowing theme customization
 */
export const COLOR_TOKENS = {
  // Gradients - using CSS variable references
  GRADIENT_SUNSET: "linear-gradient(90deg, hsl(var(--warning)), hsl(var(--destructive)))",
  GRADIENT_OCEAN: "linear-gradient(90deg, hsl(var(--info)), hsl(var(--primary)))",
  GRADIENT_FOREST: "linear-gradient(90deg, hsl(var(--success)), hsl(var(--secondary)))",
  GRADIENT_AURORA:
    "linear-gradient(90deg, hsl(var(--info)), hsl(var(--primary)), hsl(var(--destructive)), hsl(var(--warning)))",
  GRADIENT_RAINBOW:
    "linear-gradient(90deg, hsl(var(--info)), hsl(var(--primary)), hsl(var(--destructive)), hsl(var(--warning)), hsl(var(--info)))",

  // Beam/Border effects
  BEAM_START: "hsl(var(--warning))",
  BEAM_END: "hsl(var(--primary))",

  // Glow effects
  GLOW_DEFAULT: "hsl(var(--primary) / 0.5)",
  GLOW_SUCCESS: "hsl(var(--success) / 0.5)",
  GLOW_WARNING: "hsl(var(--warning) / 0.5)",
  GLOW_INFO: "hsl(var(--info) / 0.5)",

  // Particles/Effects - theme-aware
  PARTICLE_LIGHT: "hsl(var(--muted-foreground))",
  PARTICLE_DARK: "hsl(var(--foreground))",

  // Neon effects
  NEON_PRIMARY: "hsl(var(--primary))",
  NEON_SECONDARY: "hsl(var(--info))",
  NEON_ACCENT: "hsl(var(--destructive))",

  // Spotlights with transparency
  SPOTLIGHT_DEFAULT: "hsl(var(--primary) / 0.15)",
  SPOTLIGHT_SOFT: "hsl(var(--primary) / 0.1)",
  SPOTLIGHT_STRONG: "hsl(var(--primary) / 0.25)",

  // Backdrop/Overlay
  BACKDROP_LIGHT: "hsl(var(--background) / 0.8)",
  BACKDROP_DARK: "hsl(var(--foreground) / 0.1)",
  BACKDROP_BLUR: "hsl(var(--background) / 0.7)",

  // Borders
  BORDER_SUBTLE: "hsl(var(--border) / 0.5)",
  BORDER_DEFAULT: "hsl(var(--border))",
  BORDER_STRONG: "hsl(var(--foreground) / 0.1)",
} as const

/**
 * Transition/Animation timing functions using CSS custom properties
 */
export const TRANSITIONS = {
  DEFAULT: "all var(--duration-normal, 200ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1))",
  FAST: "all var(--duration-fast, 150ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1))",
  SLOW: "all var(--duration-slow, 300ms) var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1))",
  TRANSFORM: "transform var(--duration-normal, 200ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1))",
  OPACITY: "opacity var(--duration-fast, 150ms) var(--ease-in, cubic-bezier(0.4, 0, 1, 1))",
  COLORS:
    "background-color var(--duration-normal, 200ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)), color var(--duration-normal, 200ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1))",
  SHADOW: "box-shadow var(--duration-normal, 200ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1))",
} as const

/**
 * Common rgba values with theme awareness
 */
export const RGBA_TOKENS = {
  WHITE_10: "rgba(255, 255, 255, 0.1)",
  WHITE_20: "rgba(255, 255, 255, 0.2)",
  WHITE_30: "rgba(255, 255, 255, 0.3)",
  WHITE_50: "rgba(255, 255, 255, 0.5)",
  WHITE_70: "rgba(255, 255, 255, 0.7)",
  WHITE_90: "rgba(255, 255, 255, 0.9)",
  BLACK_10: "rgba(0, 0, 0, 0.1)",
  BLACK_20: "rgba(0, 0, 0, 0.2)",
  BLACK_30: "rgba(0, 0, 0, 0.3)",
  BLACK_50: "rgba(0, 0, 0, 0.5)",
  BLACK_70: "rgba(0, 0, 0, 0.7)",
  BLACK_90: "rgba(0, 0, 0, 0.9)",
} as const

export type ColorToken = (typeof COLOR_TOKENS)[keyof typeof COLOR_TOKENS]
export type Transition = (typeof TRANSITIONS)[keyof typeof TRANSITIONS]
export type RgbaToken = (typeof RGBA_TOKENS)[keyof typeof RGBA_TOKENS]
