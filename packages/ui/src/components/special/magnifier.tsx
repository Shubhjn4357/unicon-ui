"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface MagnifierProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  magnifierSize?: number
  zoomLevel?: number
}

/**
 * Native Magnifier - Image zoom glass
 */
export const Magnifier = React.forwardRef<HTMLDivElement, MagnifierProps>(
  ({ imgSrc, magnifierSize = 100, zoomLevel = 2, className, ...props }, ref) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [showMagnifier, setShowMagnifier] = React.useState(false)
    const [imgSize, setImgSize] = React.useState({ width: 0, height: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const elem = e.currentTarget
      const { top, left, width, height } = elem.getBoundingClientRect()
      const x = e.clientX - left - window.pageXOffset
      const y = e.clientY - top - window.pageYOffset
      setPosition({ x, y })
      setImgSize({ width, height })
    }

    return (
      <div
        ref={ref}
        className={cn("relative inline-block cursor-none", className)}
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
        {...props}
      >
        <img src={imgSrc} alt="magnifiable" className="block max-w-full" />
        {showMagnifier && (
          <div
            className="absolute pointer-events-none border border-gray-200 rounded-full bg-white shadow-lg"
            style={{
              height: `${magnifierSize}px`,
              width: `${magnifierSize}px`,
              top: `${position.y - magnifierSize / 2}px`,
              left: `${position.x - magnifierSize / 2}px`,
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: `${imgSize.width * zoomLevel}px ${imgSize.height * zoomLevel}px`,
              backgroundPositionX: `${-position.x * zoomLevel + magnifierSize / 2}px`,
              backgroundPositionY: `${-position.y * zoomLevel + magnifierSize / 2}px`,
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </div>
    )
  }
)

Magnifier.displayName = "Magnifier"
