"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ParticleImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  particleCount?: number
}

/**
 * Native ParticleImage - Image formed by particles
 */
export const ParticleImage = React.forwardRef<HTMLDivElement, ParticleImageProps>(
  ({ src, particleCount = 100, className, ...props }, ref) => {
    // Real particle image analysis requires Canvas pixel data reading
    // This is a visual simulation suitable for UI libraries without heavy processing
    return (
      <div ref={ref} className={cn("relative w-64 h-64", className)} {...props}>
        <img
          src={src}
          className="opacity-20 absolute inset-0 w-full h-full object-contain filter blur-sm"
          alt="reference"
        />
        {/* Simulated particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: (Math.random() - 0.5) * 20,
              y: (Math.random() - 0.5) * 20,
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    )
  }
)

ParticleImage.displayName = "ParticleImage"
