import type * as React from "react"
export interface PixelTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  pixelSize?: number
  fadeDuration?: number
  color?: string
}
/**
 * Native PixelTrail - Mouse cursor pixel trail
 */
export declare const PixelTrail: React.ForwardRefExoticComponent<
  PixelTrailProps & React.RefAttributes<HTMLDivElement>
>
export declare const PixelTrailImpl: React.ForwardRefExoticComponent<
  PixelTrailProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=pixel-trail.d.ts.map
