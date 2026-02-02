"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SocialFlipButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode
  frontIcon?: React.ReactNode
  backIcon?: React.ReactNode
  frontText?: string
  backText?: string
}

/**
 * SocialFlipButton - Button with 3D flip effect on hover
 * Features card-flip animation revealing different content on back
 */
export const SocialFlipButton = React.forwardRef<HTMLButtonElement, SocialFlipButtonProps>(
  (
    {
      children,
      className,
      frontIcon,
      backIcon,
      frontText = "Follow",
      backText = "Following",
      ...props
    },
    ref
  ) => {
    const [isFlipped, setIsFlipped] = React.useState(false)

    return (
      <div className={cn("perspective-1000", className)} style={{ perspective: "1000px" }}>
        <motion.button
          ref={ref}
          className="relative h-12 w-40 preserve-3d"
          onHoverStart={() => setIsFlipped(true)}
          onHoverEnd={() => setIsFlipped(false)}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          {...props}
        >
          {/* Front Face */}
          <div
            className={cn(
              "backface-hidden absolute inset-0 flex items-center justify-center gap-2 rounded-lg",
              "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg",
              "font-medium"
            )}
            style={{ backfaceVisibility: "hidden" }}
          >
            {frontIcon}
            <span>{frontText}</span>
          </div>

          {/* Back Face */}
          <div
            className={cn(
              "backface-hidden absolute inset-0 flex items-center justify-center gap-2 rounded-lg",
              "bg-linear-to-r from-green-500 to-green-600 text-white shadow-lg",
              "font-medium"
            )}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {backIcon}
            <span>{backText}</span>
          </div>
        </motion.button>
      </div>
    )
  }
)

SocialFlipButton.displayName = "SocialFlipButton"
