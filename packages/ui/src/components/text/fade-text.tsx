"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface FadeTextProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  text: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  framerProps?: any
}

/**
 * Native FadeText - Fade direction animation
 */
export const FadeText = React.forwardRef<HTMLDivElement, FadeTextProps>(
  ({ text, direction = "up", delay = 0, framerProps = {}, className, ...props }, ref) => {
    const directionOffset = React.useMemo(() => {
      const map = {
        up: { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } },
        down: { hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } },
        left: { hidden: { opacity: 0, x: 10 }, show: { opacity: 1, x: 0 } },
        right: { hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } },
      }
      return map[direction]
    }, [direction])

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: directionOffset.hidden,
          show: directionOffset.show,
        }}
        transition={{ duration: 0.5, delay }}
        className={cn(className)}
        {...props}
      >
        {text}
      </motion.div>
    )
  }
)

FadeText.displayName = "FadeText"
