"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface AvatarCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: Array<{
    name: string
    src?: string
  }>
  max?: number
}

/**
 * Native AvatarCircles - Stacked avatar group
 */
export const AvatarCircles = React.forwardRef<HTMLDivElement, AvatarCirclesProps>(
  ({ avatars, max = 5, className, ...props }, ref) => {
    const visibleAvatars = avatars.slice(0, max)
    const remainingCount = Math.max(0, avatars.length - max)

    return (
      <div ref={ref} className={cn("flex items-center -space-x-3", className)} {...props}>
        {visibleAvatars.map((avatar, i) => (
          <motion.div
            key={i}
            className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-surface bg-[hsl(var(--primary))]/10"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            {avatar.src ? (
              <img src={avatar.src} alt={avatar.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm font-medium text-[hsl(var(--primary))]">
                {avatar.name.charAt(0).toUpperCase()}
              </div>
            )}
          </motion.div>
        ))}
        {remainingCount > 0 && (
          <motion.div
            className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface bg-muted text-xs font-medium text-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: visibleAvatars.length * 0.1 }}
          >
            +{remainingCount}
          </motion.div>
        )}
      </div>
    )
  }
)

AvatarCircles.displayName = "AvatarCircles"
