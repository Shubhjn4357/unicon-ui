"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface CodeComparisonProps extends React.HTMLAttributes<HTMLDivElement> {
  beforeCode: string
  afterCode: string
  language?: string
  filename?: string
}

/**
 * Native CodeComparison - Side-by-side code diff
 */
export const CodeComparison = React.forwardRef<HTMLDivElement, CodeComparisonProps>(
  ({ beforeCode, afterCode, language = "typescript", filename, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
        {filename && (
          <div className="flex items-center gap-2 rounded-t-lg border border-b-0 px-4 py-2 text-sm font-medium text-muted-foreground bg-muted/30">
            {filename}
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="rounded-(--radius) border border-destructive/20 bg-destructive/10 p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-2 text-xs font-semibold text-destructive">Before</div>
            <pre className="overflow-x-auto text-sm">
              <code className={`language-${language}`}>{beforeCode}</code>
            </pre>
          </motion.div>
          <motion.div
            className="rounded-(--radius) border border-success/20 bg-success/10 p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="mb-2 text-xs font-semibold text-success">After</div>
            <pre className="overflow-x-auto text-sm">
              <code className={`language-${language}`}>{afterCode}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    )
  }
)

CodeComparison.displayName = "CodeComparison"
