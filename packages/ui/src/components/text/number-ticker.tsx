"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface NumberTickerProps
  extends Omit<
    React.HTMLAttributes<HTMLSpanElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  value: number
  duration?: number
  delay?: number
  decimalPlaces?: number
}

/**
 * Native NumberTicker - Animated number counter
 * Using Framer Motion's useSpring for smooth counting
 */
export const NumberTicker = React.forwardRef<HTMLSpanElement, NumberTickerProps>(
  ({ value, duration = 2, delay = 0, decimalPlaces = 0, className, ...props }, ref) => {
    const spring = useSpring(0, { duration: duration * 1000 })
    const display = useTransform(
      spring,
      (current) => Math.floor(current * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
    )

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        spring.set(value)
      }, delay * 1000)

      return () => clearTimeout(timeout)
    }, [value, delay, spring])

    return (
      <motion.span ref={ref} className={cn("inline-block tabular-nums", className)} {...props}>
        {display as any}
      </motion.span>
    )
  }
)

NumberTicker.displayName = "NumberTicker"
