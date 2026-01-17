import type * as React from "react"
export interface DockProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  magnification?: number
  distance?: number
}
/**
 * Native Dock - macOS-style magnifying dock
 * Using Framer Motion's useMotionValue for smooth magnification
 */
export declare const Dock: React.ForwardRefExoticComponent<
  DockProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=dock.d.ts.map
