"use client"

import { motion, useInView, UseInViewOptions } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface InViewProps {
  children: React.ReactNode
  className?: string
  options?: UseInViewOptions
}

export function InView({ 
  children, 
  className,
  options = { once: true, amount: 0.3 }
}: InViewProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, options)

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
