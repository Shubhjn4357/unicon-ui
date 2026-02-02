"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  speed?: number
}

export function ParallaxImage({ 
  src, 
  alt, 
  className,
  containerClassName,
  speed = 150 
}: ParallaxImageProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Smooth out the parallax movement
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 200
  })

  // Map scroll progress to y-translation
  const y = useTransform(smoothProgress, [0, 1], [-speed, speed])

  return (
    <div 
      ref={ref} 
      className={cn("relative overflow-hidden aspect-video w-full", containerClassName)}
    >
      <motion.img 
        src={src} 
        alt={alt}
        style={{ y, scale: 1.1 }} // Slight scale to prevent edges showing during movement
        className={cn("h-[120%] w-full object-cover", className)}
      />
    </div>
  )
}
