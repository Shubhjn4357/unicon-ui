import type * as React from "react"
export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  color?: string
}
export declare const Pointer: React.ForwardRefExoticComponent<
  PointerProps & React.RefAttributes<HTMLDivElement>
>
export interface PointerGroupProps {
  children: React.ReactNode
}
/**
 * Native PointerGroup - Multiplayer cursor simulation container
 */
export declare const PointerGroup: React.FC<PointerGroupProps>
//# sourceMappingURL=pointer.d.ts.map
