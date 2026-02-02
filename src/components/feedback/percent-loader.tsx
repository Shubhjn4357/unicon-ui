"use client"

import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface PercentLoaderProps {
  onComplete?: () => void
  duration?: number // duration in ms
  className?: string
}

export function PercentLoader({ 
  onComplete, 
  duration = 2000, 
  className 
}: PercentLoaderProps) {
  const [progress, setProgress] = React.useState(0)
  const [isComplete, setIsComplete] = React.useState(false)

  React.useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      
      const nextProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(nextProgress)

      if (nextProgress < 100) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setIsComplete(true)
        if (onComplete) onComplete()
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [duration, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={cn(
              "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background",
              className
            )}
        >
           <div className="relative">
             <motion.span 
               className="text-8xl font-bold font-mono tracking-tighter"
             >
               {Math.floor(progress)}%
             </motion.span>
           </div>
           {/* Progress Line */}
           <div className="w-64 h-1 bg-muted mt-4 overflow-hidden rounded-full">
             <motion.div 
               className="h-full bg-primary"
               style={{ width: `${progress}%` }}
             />
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
