"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface FileNode {
  name: string
  type: "file" | "folder"
  children?: FileNode[]
}

export interface FileTreeProps extends React.HTMLAttributes<HTMLDivElement> {
  data: FileNode[]
  onFileClick?: (file: FileNode) => void
}

interface FileTreeItemProps {
  node: FileNode
  level: number
  onFileClick?: (file: FileNode) => void
}

const FileTreeItem: React.FC<FileTreeItemProps> = ({ node, level, onFileClick }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const isFolder = node.type === "folder"

  return (
    <div className="select-none">
      <motion.div
        className={cn(
          "flex items-center gap-2 rounded px-2 py-1 hover:bg-accent cursor-pointer",
          level > 0 && "ml-4"
        )}
        onClick={() => {
          if (isFolder) {
            setIsOpen(!isOpen)
          } else {
            onFileClick?.(node)
          }
        }}
        whileHover={{ x: 2 }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: level * 0.05 }}
      >
        {isFolder && (
          <motion.span
            className="text-muted-foreground"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▶
          </motion.span>
        )}
        {!isFolder && <span className="w-3" />}
        <span
          className={cn(
            isFolder ? "font-medium text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]"
          )}
        >
          {node.name}
        </span>
      </motion.div>

      {isFolder && isOpen && node.children && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          {node.children.map((child, idx) => (
            <FileTreeItem
              key={`${child.name}-${idx}`}
              node={child}
              level={level + 1}
              onFileClick={onFileClick}
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}

/**
 * File Tree - Collapsible file/folder tree structure
 */
export const FileTree = React.forwardRef<HTMLDivElement, FileTreeProps>(
  ({ data, onFileClick, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4",
          className
        )}
        {...props}
      >
        {data.map((node, idx) => (
          <FileTreeItem
            key={`${node.name}-${idx}`}
            node={node}
            level={0}
            onFileClick={onFileClick}
          />
        ))}
      </div>
    )
  }
)

FileTree.displayName = "FileTree"
