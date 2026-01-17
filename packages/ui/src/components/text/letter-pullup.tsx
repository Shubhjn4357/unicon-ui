"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface LetterPullupProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  delay?: number
}

/**
 * Native LetterPullup - Staggered letter pull up animation
 */
export const LetterPullup = React.forwardRef<HTMLDivElement, LetterPullupProps>(
  ({ text, delay = 0.05, className, ...props }, ref) => {
    const letters = text.split("")

    const pullupVariant = {
      initial: { y: 100, opacity: 0 },
      animate: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * delay,
        },
      }),
    }

    return (
      <div ref={ref} className={cn("flex justify-center", className)} {...props}>
        {letters.map((letter, i) => (
          <motion.h1
            key={i}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            custom={i}
            className={cn("text-center font-display font-bold tracking-[-0.02em] drop-shadow-sm")}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.h1>
        ))}
      </div>
    )
  }
)

LetterPullup.displayName = "LetterPullup"
