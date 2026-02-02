import type * as React from "react"
export interface ShinyButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {}
/**
 * Native ShinyButton - Metallic shine reflection effect
 */
export declare const ShinyButton: React.ForwardRefExoticComponent<
  ShinyButtonProps & React.RefAttributes<HTMLButtonElement>
>
//# sourceMappingURL=shiny-button.d.ts.map
