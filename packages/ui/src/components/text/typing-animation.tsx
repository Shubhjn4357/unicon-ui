"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface TypingAnimationProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  duration?: number
  delay?: number
  cursor?: boolean
}

/**
 * Native TypingAnimation - Typewriter effect
 */
export const TypingAnimation = React.forwardRef<HTMLSpanElement, TypingAnimationProps>(
  ({ text, duration = 2000, delay = 0, cursor = true, className, ...props }, ref) => {
    const [displayedText, setDisplayedText] = React.useState("")
    const [currentIndex, setCurrentIndex] = React.useState(0)

    React.useEffect(() => {
      const timeout = setTimeout(
        () => {
          if (currentIndex < text.length) {
            setDisplayedText((prev) => prev + text[currentIndex])
            setCurrentIndex((prev) => prev + 1)
          }
        },
        delay + duration / text.length
      )

      return () => clearTimeout(timeout)
    }, [currentIndex, text, duration, delay])

    return (
      <span ref={ref} className={cn("inline-block", className)} {...props}>
        {displayedText}
        {cursor && currentIndex < text.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block w-0.5 h-5 bg-brand ml-1"
          />
        )}
      </span>
    )
  }
)

TypingAnimation.displayName = "TypingAnimation"
