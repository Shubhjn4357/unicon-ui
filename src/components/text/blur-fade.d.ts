import type * as React from "react"
export interface BlurFadeProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  blur?: string
}
/**
 * Native BlurFade - Blur fade-in animation
 */
export declare const BlurFade: React.ForwardRefExoticComponent<
  BlurFadeProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=blur-fade.d.ts.map
