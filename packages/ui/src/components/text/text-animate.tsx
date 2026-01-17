"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface TextAnimateProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  type?: "popIn" | "slideUp" | "fadeIn"
  by?: "character" | "word"
  duration?: number
  delay?: number
}

/**
 * Native TextAnimate - Various text entrance animations
 */
export const TextAnimate = React.forwardRef<HTMLDivElement, TextAnimateProps>(
  (
    { text, type = "popIn", by = "character", duration = 0.5, delay = 0, className, ...props },
    ref
  ) => {
    const items = by === "character" ? text.split("") : text.split(" ")

    const variants = {
      popIn: {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
      },
      slideUp: {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      },
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      },
    }

    const currentVariant = variants[type]

    return (
      <div ref={ref} className={cn("inline-flex flex-wrap", className)} {...props}>
        {items.map((item, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={currentVariant.initial}
            animate={currentVariant.animate}
            transition={{
              duration,
              delay: delay + i * 0.05,
            }}
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
        ))}
      </div>
    )
  }
)

TextAnimate.displayName = "TextAnimate"
