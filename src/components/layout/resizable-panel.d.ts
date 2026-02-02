import type * as React from "react"
export interface ResizablePanelProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  minWidth?: number
  maxWidth?: number
}
/**
 * Native ResizablePanel - Draggable width panel
 */
export declare const ResizablePanel: React.ForwardRefExoticComponent<
  ResizablePanelProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=resizable-panel.d.ts.map
