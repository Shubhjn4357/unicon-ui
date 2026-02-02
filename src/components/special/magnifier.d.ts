import type * as React from "react"
export interface MagnifierProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  magnifierSize?: number
  zoomLevel?: number
}
/**
 * Native Magnifier - Image zoom glass
 */
export declare const Magnifier: React.ForwardRefExoticComponent<
  MagnifierProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=magnifier.d.ts.map
