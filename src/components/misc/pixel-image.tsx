"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface PixelImageProps {
  src: string
  alt?: string
  className?: string
  pixelSize?: number
}

export function PixelImage({ src, alt = "", className, pixelSize = 8 }: PixelImageProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const imageRef = React.useRef<HTMLImageElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const img = imageRef.current

    if (!canvas || !ctx || !img) return

    img.onload = () => {
      const w = img.naturalWidth
      const h = img.naturalHeight
      canvas.width = w
      canvas.height = h

      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, w, h)
      const data = imageData.data

      for (let y = 0; y < h; y += pixelSize) {
        for (let x = 0; x < w; x += pixelSize) {
          const i = (y * w + x) * 4
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const a = data[i + 3]

          ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`
          ctx.fillRect(x, y, pixelSize, pixelSize)
        }
      }
    }
  }, [pixelSize, src])

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-(--radius) border border-border shadow-md",
        className
      )}
    >
      <img ref={imageRef} src={src} alt={alt} className="hidden" />
      <canvas ref={canvasRef} className="h-full w-full object-cover" />
    </div>
  )
}
