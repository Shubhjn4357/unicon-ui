/**
 * Animation preset configurations for Framer Motion
 */
export const ANIMATION_PRESETS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  },
  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: { duration: 0.15 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
  slideLeft: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
  slideRight: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
  scaleIn: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
    transition: { duration: 0.2 },
  },
  scaleOut: {
    initial: { scale: 1, opacity: 1 },
    animate: { scale: 0.95, opacity: 0 },
    transition: { duration: 0.15 },
  },
  bounceIn: {
    initial: { scale: 0.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] },
  },
  rotateIn: {
    initial: { rotate: -5, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 5, opacity: 0 },
    transition: { duration: 0.3 },
  },
  expandIn: {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    exit: { scaleX: 0, opacity: 0 },
    transition: { duration: 0.3 },
  },
  blurIn: {
    initial: { filter: "blur(10px)", opacity: 0 },
    animate: { filter: "blur(0px)", opacity: 1 },
    exit: { filter: "blur(10px)", opacity: 0 },
    transition: { duration: 0.4 },
  },
} as const

/**
 * Animation variants for specific UI patterns
 */
export const ANIMATION_VARIANTS = {
  // For staggered children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },

  // For hover interactions
  hoverScale: {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  },
  hoverLift: {
    rest: { y: 0 },
    hover: { y: -4 },
  },
  hoverGlow: {
    rest: { boxShadow: "0 0 0 rgba(0, 0, 0, 0)" },
    hover: { boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" },
  },

  // For loading states
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  },
  spin: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  },
  bounce: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  },

  // For shimmer/wave effects
  shimmer: {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  },
} as const

export type AnimationPreset = keyof typeof ANIMATION_PRESETS
export type AnimationVariant = keyof typeof ANIMATION_VARIANTS
