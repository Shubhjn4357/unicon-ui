import type * as React from "react"
export interface VelocityScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  defaultVelocity?: number
  className?: string
}
/**
 * Native VelocityScroll - Scroll speed reveals text
 */
export declare const VelocityScroll: React.ForwardRefExoticComponent<
  VelocityScrollProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=velocity-scroll.d.ts.map
