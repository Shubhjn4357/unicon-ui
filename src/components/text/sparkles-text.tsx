"use client"

import { motion } from "framer-motion"
import { Sparkle } from "lucide-react"
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
      colors = { first: "hsl(var(--primary))", second: "hsl(var(--secondary))" },
      sparklesCount = 10,
      className,
      ...props
    },
    ref
  ) => {
    const [sparkles, setSparkles] = React.useState<
      Array<{ id: number; x: number; y: number; color: string; delay: number; scale: number; duration: number }>
    >([])

    const memoizedColors = React.useMemo(() => colors, [colors.first, colors.second])

    React.useEffect(() => {
      const newSparkles = Array.from({ length: sparklesCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: Math.random() > 0.5 ? memoizedColors.first : memoizedColors.second,
        delay: Math.random() * 2,
        scale: Math.random() * 1 + 0.3,
        duration: 1.5 + Math.random() * 2,
      }))
      setSparkles(newSparkles)
    }, [sparklesCount, memoizedColors])

    return (
      <span ref={ref} className={cn("relative inline-block", className)} {...props}>
        <span className="relative z-10">{text}</span>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute pointer-events-none"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, sparkle.scale, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          >
            <Sparkle
              className="h-4 w-4 fill-current"
              style={{ color: sparkle.color }}
            />
          </motion.div>
        ))}
      </span>
    )
  }
)

SparklesText.displayName = "SparklesText"
