"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  prompt?: string
  showHeader?: boolean
}

export const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({ children, prompt = "$", showHeader = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-(--radius) border border-border bg-black font-mono text-sm shadow-lg",
          className
        )}
        {...props}
      >
        {showHeader && (
          <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        )}
        <div className="p-4">
          <div className="flex items-start gap-2">
            <span className="text-green-400">{prompt}</span>
            <div className="flex-1 text-gray-300">{children}</div>
          </div>
        </div>
      </div>
    )
  }
)

Terminal.displayName = "Terminal"

export interface TerminalTypingAnimationProps {
  text: string
  delay?: number
  speed?: number
}

export const TerminalTypingAnimation: React.FC<TerminalTypingAnimationProps> = ({
  text,
  delay = 0,
  speed = 50,
}) => {
  const [displayText, setDisplayText] = React.useState("")
  const [cursor, setCursor] = React.useState(true)

  React.useEffect(() => {
    let currentIndex = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay, speed])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span>
      {displayText}
      {cursor && <span className="animate-pulse">▊</span>}
    </span>
  )
}

export const AnimatedSpan: React.ElementType = motion.span
