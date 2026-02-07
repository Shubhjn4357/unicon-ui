"use client"

import { useInView, useMotionValue, useSpring } from "framer-motion"
import React, { useEffect, useRef } from "react"
import { cn } from "../../lib/utils"

export const AnimatedNumber = ({
  value,
  className,
  format = (v) => Math.round(v).toString(),
}: {
  value: number
  className?: string
  format?: (value: number) => string
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest)
      }
    })
  }, [springValue, format])

  return <span ref={ref} className={cn("inline-block tabular-nums", className)} />
}

export const AnimatedScore = ({ value, className }: { value: number; className?: string }) => {
  const isPositive = value >= 0
  return (
    <span
      className={cn(
        "font-bold transition-colors duration-500",
        isPositive ? "text-success" : "text-destructive",
        className
      )}
    >
      <AnimatedNumber
        value={value}
        format={(v) => (v > 0 ? `+${v.toFixed(2)}%` : `${v.toFixed(2)}%`)}
      />
    </span>
  )
}
AnimatedNumber.displayName = "AnimatedNumber"
