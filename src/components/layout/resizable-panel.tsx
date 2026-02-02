"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ResizablePanelProps
  extends Omit<
    HTMLMotionProps<"div">,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  children?: React.ReactNode
  minWidth?: number
  maxWidth?: number
}

/**
 * Native ResizablePanel - Draggable width panel
 */
export const ResizablePanel = React.forwardRef<HTMLDivElement, ResizablePanelProps>(
  ({ children, minWidth = 200, maxWidth = 600, className, ...props }, ref) => {
    const [width, setWidth] = React.useState(300)

    return (
      <div className="flex h-full">
        <motion.div
          ref={ref}
          className={cn(
            "relative overflow-hidden border-r border-border bg-card",
            className
          )}
          style={{ width }}
          {...props}
        >
          {children}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1.5 cursor-col-resize hover:bg-primary active:bg-primary"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            dragMomentum={false}
            onDrag={(_, info) => {
              setWidth((prev) => Math.min(maxWidth, Math.max(minWidth, prev + info.delta.x)))
            }}
          />
        </motion.div>
        <div className="flex-1 p-4">Main Content</div>
      </div>
    )
  }
)

ResizablePanel.displayName = "ResizablePanel"
