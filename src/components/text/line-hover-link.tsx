"use client"

import type React from "react"
import { cn } from "../../lib/utils"

export const LineHoverLink = ({
  children,
  href = "#",
  className,
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) => {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-block cursor-pointer overflow-hidden pb-1 text-lg font-medium transition-colors hover:text-foreground text-muted-foreground",
        className
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-full bg-foreground transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
    </a>
  )
}
LineHoverLink.displayName = "LineHoverLink"
