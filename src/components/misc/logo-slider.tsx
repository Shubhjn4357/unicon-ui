"use client"

import type React from "react"
import { cn } from "../../lib/utils"

interface LogoSliderProps {
  logos: React.ReactNode[]
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export const LogoSlider = ({
  logos,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  className,
}: LogoSliderProps) => {
  return (
    <div
      className={cn("logo-slider relative w-full overflow-hidden", className)}
      style={
        {
          "--speed": speed,
        } as React.CSSProperties
      }
    >
      <div
        className="logo-slider__container flex overflow-hidden"
        data-direction={direction}
        data-pause-on-hover={pauseOnHover}
      >
        <div className="logo-slider__track flex w-[200%]">
          {Array.from({ length: 2 }).map((_, trackIndex) => (
            <div key={trackIndex} className="flex w-1/2 justify-around">
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${trackIndex}-${logoIndex}`}
                  className="logo-slider__item flex items-center justify-center"
                >
                  {logo}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
LogoSlider.displayName = "LogoSlider"
