import type * as React from "react"
export interface WavyTextProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  text: string
  delay?: number
  duration?: number
}
/**
 * Native WavyText - Wave text animation
 */
export declare const WavyText: React.ForwardRefExoticComponent<
  WavyTextProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=wavy-text.d.ts.map
