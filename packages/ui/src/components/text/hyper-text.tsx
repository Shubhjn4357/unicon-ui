"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface HyperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  duration?: number
  delay?: number
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"

/**
 * Native HyperText - Scramble text animation
 * Pure Framer Motion, no dependencies
 */
export const HyperText = React.forwardRef<HTMLSpanElement, HyperTextProps>(
  ({ text, duration = 800, delay = 0, className, ...props }, ref) => {
    const [displayText, setDisplayText] = React.useState(text.split(""))
    // const [isAnimating, setIsAnimating] = React.useState(false)
    const iterations = React.useRef(0)

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        // setIsAnimating(true)
        iterations.current = 0

        const interval = setInterval(
          () => {
            setDisplayText((prev) =>
              prev.map((_, index) => {
                if (index < iterations.current) {
                  return text[index]
                }
                return CHARS[Math.floor(Math.random() * CHARS.length)]
              })
            )

            if (iterations.current >= text.length) {
              clearInterval(interval)
              // setIsAnimating(false)
            }

            iterations.current += 1 / 3
          },
          duration / text.length / 3
        )

        return () => clearInterval(interval)
      }, delay)

      return () => clearTimeout(timeout)
    }, [text, duration, delay])

    return (
      <span ref={ref} className={cn("inline-block", className)} {...props}>
        <AnimatePresence mode="wait">
          {displayText.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </span>
    )
  }
)

HyperText.displayName = "HyperText"
