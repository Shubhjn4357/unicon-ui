"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode
  shimmerColor?: string
  borderGradient?: string
  duration?: number
  delay?: number
}

/**
 * AnimatedButton - Button with shine/mask effect inspired by VengenceUI
 * Features animated gradient border and mask-based shine effect
 */
export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      children = "Browse Components",
      className,
      shimmerColor = "rgba(255, 255, 255, 0.66)",
      borderGradient,
      duration = 1,
      delay = 1,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border px-8 font-medium transition-all duration-200",
          "border-border bg-background text-foreground",
          "dark:border-border dark:bg-background dark:text-foreground",
          "[--shine:rgba(0,0,0,.66)] dark:[--shine:rgba(255,255,255,.66)]",
          className
        )}
        whileTap={{ scale: 0.97 }}
        transition={{
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        {...props}
      >
        {/* Text with mask animation */}
        <motion.span
          className="relative z-10 flex h-full w-full items-center justify-center font-light tracking-wide"
          style={{
            WebkitMaskImage:
              "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
            maskImage:
              "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
          }}
          initial={{ ["--mask-x" as string]: "100%" }}
          animate={{ ["--mask-x" as string]: "-100%" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: duration,
            ease: "linear",
            repeatDelay: delay,
          }}
        >
          {children}
        </motion.span>

        {/* Border shine effect */}
        <motion.span
          className="absolute inset-0 block rounded-md p-px"
          style={{
            background:
              "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
          }}
          initial={{ backgroundPosition: "100% 0", opacity: 0 }}
          animate={{
            backgroundPosition: ["100% 0", "0% 0"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatDelay: delay,
          }}
        />
      </motion.button>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"
