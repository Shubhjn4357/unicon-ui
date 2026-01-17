import type * as React from "react"
export interface AnimatedGradientTextProps
  extends Omit<
    React.HTMLAttributes<HTMLSpanElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  children: React.ReactNode
}
/**
 * Native AnimatedGradientText - Animated gradient text
 * Pure CSS gradient animation
 */
export declare const AnimatedGradientText: React.ForwardRefExoticComponent<
  AnimatedGradientTextProps & React.RefAttributes<HTMLSpanElement>
>
export interface AnimatedShinyTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  shimmerWidth?: number
}
export declare const AnimatedShinyText: React.ForwardRefExoticComponent<
  AnimatedShinyTextProps & React.RefAttributes<HTMLSpanElement>
>
//# sourceMappingURL=animated-gradient-text.d.ts.map
