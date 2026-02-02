"use client"

import { useEffect, useState } from "react"
import { cn } from "../../lib/utils"

interface MorphingTextProps {
  texts: string[]
  className?: string
}

export function MorphingText({ texts, className }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts])

  return (
    <div
      className={cn(
        "relative mx-auto h-16 w-full max-w-3xl text-center leading-none filter-[url(#threshold)_blur(0.6px)] md:h-24",
        className
      )}
    >
      {/* Note: This effect relies on an SVG filter in the page or component */}

      {texts.map((text, index) => (
        <span
          key={index}
          className={cn(
            "absolute top-0 w-full transition-[opacity,filter] duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100 blur-none" : "opacity-0 blur-[10px]"
          )}
        >
          {text}
        </span>
      ))}

      <svg id="filters" className="hidden">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
