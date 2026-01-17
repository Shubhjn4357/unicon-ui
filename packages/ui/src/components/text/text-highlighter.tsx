"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface TextHighlighterProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  highlight: string | string[]
  highlightClassName?: string
}

/**
 * Native TextHighlighter - Highlight specific words in text
 */
export const TextHighlighter = React.forwardRef<HTMLSpanElement, TextHighlighterProps>(
  ({ text, highlight, highlightClassName, className, ...props }, ref) => {
    const highlights = Array.isArray(highlight) ? highlight : [highlight]

    const highlightText = (text: string) => {
      let parts: (string | React.ReactNode)[] = [text]

      highlights.forEach((word) => {
        const newParts: React.ReactNode[] = []
        parts.forEach((part) => {
          if (typeof part === "string") {
            const splitParts = part.split(new RegExp(`(${word})`, "gi"))
            splitParts.forEach((p, i) => {
              if (p.toLowerCase() === word.toLowerCase()) {
                newParts.push(
                  <motion.span
                    key={`${word}-${i}`}
                    className={cn("bg-brand/20 px-1 font-semibold text-brand", highlightClassName)}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {p}
                  </motion.span>
                )
              } else {
                newParts.push(p)
              }
            })
          } else {
            newParts.push(part)
          }
        })
        parts = newParts
      })

      return parts
    }

    return (
      <span ref={ref} className={cn(className)} {...props}>
        {highlightText(text)}
      </span>
    )
  }
)

TextHighlighter.displayName = "TextHighlighter"
