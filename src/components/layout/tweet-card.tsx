"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"
import { Avatar } from "../core/avatar"

export interface TweetCardProps extends HTMLMotionProps<"div"> {
  author?: string
  username?: string
  avatar?: string
  text?: string
  timestamp?: string
  verified?: boolean
}

export const TweetCard = React.forwardRef<HTMLDivElement, TweetCardProps>(
  (
    {
      author = "Unicorn UI",
      username = "unicorn_ui",
      avatar,
      text = "This component library is absolutely world-class. The attention to detail is unmatched!",
      timestamp = "Just now",
      verified = true,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative flex flex-col gap-4 overflow-hidden rounded-(--radius) p-6",
          "rounded-(--radius) border border-border bg-card p-4 transition-all hover:shadow-md",
          "hover:shadow-lg hover:shadow-primary/5",
          className
        )}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        <div className="flex gap-4">
          <Avatar src={avatar} fallback={author.charAt(0)} size="md" />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1">
              <span className="font-bold text-foreground">{author}</span>
              {verified && (
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Verified account"
                  className="h-4 w-4 text-primary"
                  fill="currentColor"
                >
                  <g>
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2l-3.53-3.53 1.06-1.06 2.47 2.47 6.13-6.13 1.06 1.06-7.19 7.19z" />
                  </g>
                </svg>
              )}
            </div>
            <span className="text-sm text-muted-foreground">@{username}</span>
          </div>
          <div className="ml-auto text-xs text-muted-foreground">{timestamp}</div>
        </div>
        <p className="text-foreground leading-relaxed">{text}</p>
      </motion.div>
    )
  }
)

TweetCard.displayName = "TweetCard"
