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
      children, // Changed from 'text' to 'children'
      colors = { first: "#9E7AFF", second: "#FE8BBB" },
      sparklesCount = 10,
      className,
      ...props
    },
    ref
  ) => {
    const [sparkles, setSparkles] = React.useState<Array<{ id: number; x: number; y: number; color: string; delay: number; duration: number }>>([])

    React.useEffect(() => {
      const newSparkles = Array.from({ length: sparklesCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: Math.random() > 0.5 ? colors.first : colors.second,
        delay: Math.random() * 2,
        duration: 1 + Math.random() * 2,
      }))
      setSparkles(newSparkles)
    }, [sparklesCount, colors])

    return (
      <span ref={ref} className={cn("relative inline-block", className)} {...props}>
        <span className="relative z-10">{children}</span>
        {sparkles.map((sparkle) => (
          <motion.span
            key={sparkle.id}
            className="absolute h-1 w-1 rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              backgroundColor: sparkle.color,
              boxShadow: `0 0 10px ${sparkle.color}`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </span>
    )
  }
)

SparklesText.displayName = "SparklesText"
