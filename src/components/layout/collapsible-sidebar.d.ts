import type * as React from "react"
export interface CollapsibleSidebarProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  icon?: React.ReactNode
  title?: string
  defaultCollapsed?: boolean
}
/**
 * Native CollapsibleSidebar - Expandable sidebar navigation
 */
export declare const CollapsibleSidebar: React.ForwardRefExoticComponent<
  CollapsibleSidebarProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=collapsible-sidebar.d.ts.map
