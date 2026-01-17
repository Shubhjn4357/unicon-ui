"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SparklesTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  colors?: { first: string; second: string }
  sparklesCount?: number
}

/**
 * Native SparklesText - Animated sparkles around text
 */
export const SparklesText = React.forwardRef<HTMLSpanElement, SparklesTextProps>(
  (
    {
      text,
      colors = { first: "#9E7AFF", second: "#FE8BBB" },
      sparklesCount = 10,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span ref={ref} className={cn("relative inline-block", className)} {...props}>
        {Array.from({ length: sparklesCount }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: i % 2 === 0 ? colors.first : colors.second,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
          >
            ✨
          </motion.span>
        ))}
        <span className="relative z-10">{text}</span>
      </span>
    )
  }
)

SparklesText.displayName = "SparklesText"
