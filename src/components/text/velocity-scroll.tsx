"use client"

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface VelocityScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  defaultVelocity?: number
  className?: string
}

interface ParallaxProps {
  children: string
  baseVelocity: number
  className?: string
}

function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${v}%`)

  const directionFactor = React.useRef<number>(1)
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax flex whitespace-nowrap overflow-hidden">
      <motion.div
        className={cn("scroller flex whitespace-nowrap flex-nowrap", className)}
        style={{ x }}
      >
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
      </motion.div>
    </div>
  )
}

/**
 * Native VelocityScroll - Scroll speed reveals text
 */
export const VelocityScroll = React.forwardRef<HTMLDivElement, VelocityScrollProps>(
  ({ text, defaultVelocity = 5, className, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("relative w-full", className)} {...props}>
        <ParallaxText baseVelocity={defaultVelocity} className={className}>
          {text}
        </ParallaxText>
        <ParallaxText baseVelocity={-defaultVelocity} className={className}>
          {text}
        </ParallaxText>
      </section>
    )
  }
)

VelocityScroll.displayName = "VelocityScroll"
