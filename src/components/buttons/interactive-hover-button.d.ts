import type * as React from "react"
export interface InteractiveHoverButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {}
/**
 * Native InteractiveHoverButton - Mouse tracking hover effect
 */
export declare const InteractiveHoverButton: React.ForwardRefExoticComponent<
  InteractiveHoverButtonProps & React.RefAttributes<HTMLButtonElement>
>
//# sourceMappingURL=interactive-hover-button.d.ts.map
