"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface BoxRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  boxColor?: string
  duration?: number
  width?: "fit-content" | "100%"
}

/**
 * Native BoxReveal - Reveal content with a sliding box
 */
export const BoxReveal = React.forwardRef<HTMLDivElement, BoxRevealProps>(
  (
    { children, boxColor = "#5046e6", duration = 0.5, width = "fit-content", className, ...props },
    _ref
  ) => {
    const mainControls = useAnimation()
    const slideControls = useAnimation()
    const containerRef = React.useRef(null)
    const isInView = useInView(containerRef, { once: true })

    React.useEffect(() => {
      if (isInView) {
        slideControls.start("visible")
        mainControls.start("visible")
      } else {
        slideControls.start("hidden")
        mainControls.start("hidden")
      }
    }, [isInView, mainControls, slideControls])

    return (
      <div
        ref={containerRef}
        className={cn("relative overflow-hidden", className)}
        style={{ width }}
        {...props}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration, delay: 0.25 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration, ease: "easeIn" }}
          className="absolute bottom-[4px] left-0 right-0 top-[4px] z-20 bg-brand"
          style={{ background: boxColor }}
        />
      </div>
    )
  }
)

BoxReveal.displayName = "BoxReveal"
