"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface FileNode {
  name: string
  isFolder?: boolean
  children?: FileNode[]
}

export interface FileTreeProps extends React.HTMLAttributes<HTMLDivElement> {
  data: FileNode[]
}

/**
 * Native FileTree - Collapsible file tree structure
 */
export const FileTree = React.forwardRef<HTMLDivElement, FileTreeProps>(
  ({ data, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("font-mono text-sm", className)} {...props}>
        {data.map((node, i) => (
          <FileTreeNode key={i} node={node} depth={0} />
        ))}
      </div>
    )
  }
)

FileTree.displayName = "FileTree"

function FileTreeNode({ node, depth }: { node: FileNode; depth: number }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 py-1 hover:bg-surface-elevated",
          hasChildren && "cursor-pointer"
        )}
        style={{ paddingLeft: `${depth * 20}px` }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            ▶
          </motion.span>
        )}
        <span className="flex items-center gap-2">
          {node.isFolder ? "📁" : "📄"} {node.name}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {node.children?.map((child, i) => (
              <FileTreeNode key={i} node={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
