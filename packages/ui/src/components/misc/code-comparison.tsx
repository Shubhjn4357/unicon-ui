"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface CodeComparisonProps extends React.HTMLAttributes<HTMLDivElement> {
  beforeCode: string
  afterCode: string
  language?: string
}

/**
 * Native CodeComparison - Side-by-side code diff
 */
export const CodeComparison = React.forwardRef<HTMLDivElement, CodeComparisonProps>(
  ({ beforeCode, afterCode, language = "typescript", className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid grid-cols-2 gap-4", className)} {...props}>
        <motion.div
          className="rounded-(--radius) border border-red-500/20 bg-red-950/10 p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-2 text-xs font-semibold text-red-400">Before</div>
          <pre className="overflow-x-auto text-sm">
            <code className={`language-${language}`}>{beforeCode}</code>
          </pre>
        </motion.div>
        <motion.div
          className="rounded-(--radius) border border-green-500/20 bg-green-950/10 p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="mb-2 text-xs font-semibold text-green-400">After</div>
          <pre className="overflow-x-auto text-sm">
            <code className={`language-${language}`}>{afterCode}</code>
          </pre>
        </motion.div>
      </div>
    )
  }
)

CodeComparison.displayName = "CodeComparison"
