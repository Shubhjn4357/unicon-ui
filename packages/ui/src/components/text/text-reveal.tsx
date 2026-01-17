"use client"

import { motion, useInView } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface TextRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
}

/**
 * Native TextReveal - Scroll-based text reveal animation
 * Using Framer Motion's useInView hook
 */
export const TextReveal = React.forwardRef<HTMLDivElement, TextRevealProps>(
  ({ text, children, className, ...props }, _) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    const content = text || children
    const words = typeof content === "string" ? content.split(" ") : []

    return (
      <div ref={containerRef} className={cn("overflow-hidden", className)} {...props}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {word}
            </motion.span>
          ))}
          {typeof children !== "string" && children}
        </motion.div>
      </div>
    )
  }
)

TextReveal.displayName = "TextReveal"
