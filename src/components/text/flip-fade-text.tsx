"use client"

import { motion, useInView } from "framer-motion"
import React, { useRef } from "react"
import { cn } from "../../lib/utils"

export const FlipFadeText = ({
  children,
  className,
  stagger = 0.1,
}: {
  children: string
  className?: string
  stagger?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const words = children.split(" ")

  return (
    <div ref={ref} className={cn("flex flex-wrap gap-2", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: i * stagger,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block origin-top"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
FlipFadeText.displayName = "FlipFadeText"
