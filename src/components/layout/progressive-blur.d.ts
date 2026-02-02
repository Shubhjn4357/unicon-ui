import type * as React from "react"
export interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "top" | "bottom" | "left" | "right"
  blurIntensity?: number
}
/**
 * Native ProgressiveBlur - Gradient blur overlay
 */
export declare const ProgressiveBlur: React.ForwardRefExoticComponent<
  ProgressiveBlurProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=progressive-blur.d.ts.map
