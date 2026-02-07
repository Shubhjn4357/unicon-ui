"use client"

import { motion } from "framer-motion"
import type React from "react"
import { useState } from "react"
import { cn } from "../../lib/utils"

interface SocialFlipButtonProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  href?: string
  className?: string
}

export const SocialFlipButton = ({
  children,
  icon,
  href = "#",
  className,
}: SocialFlipButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      className={cn("relative block h-12 w-40 overflow-hidden rounded-md", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Front Face (Text) */}
      <motion.div
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground"
      >
        <span className="font-bold">{children}</span>
      </motion.div>

      {/* Back Face (Icon) */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center bg-secondary text-secondary-foreground"
      >
        <span className="text-2xl">{icon}</span>
      </motion.div>
    </a>
  )
}
SocialFlipButton.displayName = "SocialFlipButton"
