"use client"

import { useAnimate } from "framer-motion"
import type React from "react"
import { useRef, useState } from "react"
import { cn } from "../../lib/utils"

export const PixelatedImageTrail = ({
  children,
  className,
  onNewImage,
  images,
}: {
  children: React.ReactNode
  className?: string
  onNewImage?: (index: number, x: number, y: number) => void
  images: string[]
}) => {
  const [scope, animate] = useAnimate()
  const lastRenderPosition = useRef({ x: 0, y: 0 })
  const imageIndex = useRef(0)
  const isInteracting = useRef(false)

  const handleMouseMove = async (e: React.MouseEvent<HTMLDivElement>) => {
    // Only check interaction if we're not inside the component (if used as wrapper)
    // But here we usually want it to trigger everywhere inside
    const { clientX, clientY } = e

    const distance = Math.hypot(
      clientX - lastRenderPosition.current.x,
      clientY - lastRenderPosition.current.y
    )

    if (distance > 50) {
      lastRenderPosition.current = { x: clientX, y: clientY }
      await renderImage(clientX, clientY)
    }
  }

  const renderImage = async (x: number, y: number) => {
    if (images.length === 0) return

    const index = imageIndex.current % images.length
    const selector = `.trail-image-${index}`
    const el = document.querySelector(selector) as HTMLElement

    if (!el) return

    el.style.left = `${x}px`
    el.style.top = `${y}px`
    el.style.zIndex = imageIndex.current.toString()

    const initialRotation = Math.random() * 20 - 10

    animate(
      selector,
      {
        opacity: [0, 1],
        scale: [0.5, 1],
        rotate: initialRotation,
        clipPath: [
          "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ],
      },
      { duration: 0.5, ease: "circOut" }
    )

    try {
      await animate(
        selector,
        {
          opacity: [1, 0],
          scale: [1, 0.5],
          filter: ["blur(0px)", "blur(10px)"],
        },
        { duration: 0.5, delay: 0.8, ease: "easeIn" }
      )
    } catch (err) {
      // animation might be interrupted
    }

    imageIndex.current++
    if (onNewImage) onNewImage(index, x, y)
  }

  return (
    <div
      ref={scope}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
    >
      {images.map((img, i) => (
        <img
          key={i}
          className={`pixelated-trail-img trail-image-${i} pointer-events-none fixed left-0 top-0 h-40 w-40 object-cover opacity-0`}
          src={img}
          alt={`trail-${i}`}
        />
      ))}
      {children}
    </div>
  )
}
PixelatedImageTrail.displayName = "PixelatedImageTrail"
