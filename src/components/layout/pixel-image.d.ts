import type * as React from "react"
export interface PixelImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  pixelSize?: number
}
/**
 * Native PixelImage - Pixelate transition for images
 * Uses canvas to pixelate text/images
 */
export declare const PixelImage: React.ForwardRefExoticComponent<
  PixelImageProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=pixel-image.d.ts.map
