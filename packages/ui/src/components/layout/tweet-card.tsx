"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface TweetCardProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  author?: string
  username?: string
  avatar?: string
  verified?: boolean
  timestamp?: string
  text?: string
}

/**
 * Native TweetCard -  Tweet-style card component
 */
export const TweetCard = React.forwardRef<HTMLDivElement, TweetCardProps>(
  (
    {
      author = "John Doe",
      username = "johndoe",
      avatar,
      verified = false,
      timestamp = "2h",
      text,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-(--radius) border border-border bg-surface p-4 transition-all hover:shadow-md",
          className
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        <div className="flex gap-3">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-brand/10">
            {avatar ? (
              <img src={avatar} alt={author} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-brand">
                {author.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">{author}</span>
              {verified && (
                <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )}
              <span className="text-sm text-foreground-secondary">@{username}</span>
              <span className="text-sm text-foreground-secondary">· {timestamp}</span>
            </div>
            <p className="mt-2 text-foreground">{text || children}</p>
          </div>
        </div>
      </motion.div>
    )
  }
)

TweetCard.displayName = "TweetCard"
