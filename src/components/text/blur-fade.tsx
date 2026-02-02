"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface BlurFadeProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  blur?: string
}

/**
 * Native BlurFade - Blur fade-in animation
 */
export const BlurFade = React.forwardRef<HTMLDivElement, BlurFadeProps>(
  (
    { children, delay = 0, duration = 0.4, yOffset = 6, blur = "6px", className, ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration, delay }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

BlurFade.displayName = "BlurFade"
