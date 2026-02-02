import type * as React from "react"
export interface FadeTextProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  text: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  framerProps?: any
}
/**
 * Native FadeText - Fade direction animation
 */
export declare const FadeText: React.ForwardRefExoticComponent<
  FadeTextProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=fade-text.d.ts.map
