import type * as React from "react"
export interface AvatarCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: Array<{
    name: string
    src?: string
  }>
  max?: number
}
/**
 * Native AvatarCircles - Stacked avatar group
 */
export declare const AvatarCircles: React.ForwardRefExoticComponent<
  AvatarCirclesProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=avatar-circles.d.ts.map
