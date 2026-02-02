import type * as React from "react"
export interface NumberTickerProps
  extends Omit<
    React.HTMLAttributes<HTMLSpanElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  value: number
  duration?: number
  delay?: number
  decimalPlaces?: number
}
/**
 * Native NumberTicker - Animated number counter
 * Using Framer Motion's useSpring for smooth counting
 */
export declare const NumberTicker: React.ForwardRefExoticComponent<
  NumberTickerProps & React.RefAttributes<HTMLSpanElement>
>
//# sourceMappingURL=number-ticker.d.ts.map
