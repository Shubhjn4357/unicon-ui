"use client"

import * as React from "react"
// import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"

export interface PixelImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  pixelSize?: number
}

/**
 * Native PixelImage - Pixelate transition for images
 * Uses canvas to pixelate text/images
 */
export const PixelImage = React.forwardRef<HTMLDivElement, PixelImageProps>(
  ({ src, pixelSize = 10, className, ...props }, ref) => {
    // Simplified simulation using CSS pixelation for performance
    return (
      <div ref={ref} className={cn("overflow-hidden relative", className)} {...props}>
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${src})`,
            imageRendering: "pixelated", // CSS trick
            filter: `blur(${pixelSize / 2}px)`, // Simulating pixelation blockiness
          }}
        />
        {/* Real implementation needs Canvas API for true pixel manipulation, using CSS approximation for native speed */}
        <img
          src={src}
          alt="Pixelated"
          className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    )
  }
)

PixelImage.displayName = "PixelImage"
