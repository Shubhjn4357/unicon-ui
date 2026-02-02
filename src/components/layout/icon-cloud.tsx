"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface IconCloudProps extends React.HTMLAttributes<HTMLDivElement> {
  icons: React.ReactNode[]
  radius?: number
}

export const IconCloud = React.forwardRef<HTMLDivElement, IconCloudProps>(
  ({ icons, radius = 250, className, ...props }, ref) => {
    const angleStep = (2 * Math.PI) / icons.length

    return (
      <div
        ref={ref}
        className={cn("relative flex items-center justify-center", className)}
        style={{ width: radius * 2, height: radius * 2 }}
        {...props}
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {icons.map((icon, i) => {
            const angle = i * angleStep
            const x = Math.sin(angle) * radius
            const z = Math.cos(angle) * radius

            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate3d(${x}px, 0, ${z}px)`,
                }}
              >
                {icon}
              </div>
            )
          })}
        </motion.div>
      </div>
    )
  }
)

IconCloud.displayName = "IconCloud"
