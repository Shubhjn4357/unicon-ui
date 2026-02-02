import type * as React from "react"
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
export declare const FileTree: React.ForwardRefExoticComponent<
  FileTreeProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=file-tree.d.ts.map
