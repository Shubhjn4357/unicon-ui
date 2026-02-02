import type * as React from "react"
export interface GooeyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
  foregroundColor?: string
}
/**
 * Native GooeyButton - Gooey SVG filter effect
 */
export declare const GooeyButton: React.ForwardRefExoticComponent<
  GooeyButtonProps & React.RefAttributes<HTMLButtonElement>
>
//# sourceMappingURL=gooey-button.d.ts.map
