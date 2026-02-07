"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ExpandableBentoCardProps {
  /**
   * Card title
   */
  title: string
  /**
   * Card description
   */
  description: string
  /**
   * Icon or image to display
   */
  icon?: React.ReactNode
  /**
   * Expanded content
   */
  expandedContent?: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Card background gradient
   */
  gradient?: string
}

/**
 * ExpandableBentoCard - Bento-style card with expand animation
 * Features smooth expand/collapse animation with glassmorphism effect
 */
export const ExpandableBentoCard = React.forwardRef<HTMLDivElement, ExpandableBentoCardProps>(
  (
    {
      title,
      description,
      icon,
      expandedContent,
      className,
      gradient = "from-purple-500/10 to-pink-500/10",
    },
    ref
  ) => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-effect group relative cursor-pointer overflow-hidden rounded-2xl p-6",
          "border border-border/50 shadow-lg transition-all hover:shadow-xl",
          className
        )}
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background gradient */}
        <div className={cn("absolute inset-0 -z-10 bg-linear-to-br opacity-50", gradient)} />

        {/* Header */}
        <div className="flex items-start gap-4">
          {icon && (
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
          )}

          <div className="flex-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && expandedContent && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                {expandedContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }
)

ExpandableBentoCard.displayName = "ExpandableBentoCard"
