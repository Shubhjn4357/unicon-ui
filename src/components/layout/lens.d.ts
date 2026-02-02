import type * as React from "react"
export interface LensProps extends React.HTMLAttributes<HTMLDivElement> {
  lensSize?: number
  magnification?: number
}
/**
 * Native Lens - Magnifying glass effect
 */
export declare const Lens: React.ForwardRefExoticComponent<
  LensProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=lens.d.ts.map
