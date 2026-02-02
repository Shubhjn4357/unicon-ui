"use client"

import { cn } from "../../lib/utils"

interface SpinningTextProps {
  children: string
  className?: string
  reverse?: boolean
  duration?: number
  radius?: number
}

export function SpinningText({
  children,
  className,
  reverse = false,
  duration = 10,
  radius = 5,
}: SpinningTextProps) {
  const letters = children.split("")
  const deg = 360 / letters.length

  return (
    <div
      className={cn(
        "relative mx-auto flex size-40 items-center justify-center rounded-full border bg-background",
        className
      )}
    >
      <div
        className={cn(
          "relative size-full animate-[spin_10s_linear_infinite]",
          reverse && "animate-reverse"
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 -translate-x-1/2 origin-[0_8rem]"
            style={{
              transform: `rotate(${i * deg}deg)`,
              transformOrigin: `0 ${radius}rem`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
