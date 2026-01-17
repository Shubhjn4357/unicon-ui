"use client"

import { type Variants, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface WavyTextProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  text: string
  delay?: number
  duration?: number
}

/**
 * Native WavyText - Wave text animation
 */
export const WavyText = React.forwardRef<HTMLDivElement, WavyTextProps>(
  ({ text, delay = 0, duration = 0.5, className, ...props }, ref) => {
    const letters = text.split("")

    const container: Variants = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * delay },
      }),
    }

    const child: Variants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
    }

    return (
      <motion.div
        ref={ref}
        style={{ display: "flex", overflow: "hidden" }}
        variants={container}
        initial="hidden"
        animate="visible"
        className={cn("justify-center", className)}
        {...props}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    )
  }
)

WavyText.displayName = "WavyText"
