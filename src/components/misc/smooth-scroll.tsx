"use client"

import { ReactLenis } from "lenis/react"
import type React from "react"

export const SmoothScroll = ({
  children,
  ...props
}: {
  children: React.ReactNode
  root?: boolean
  options?: any
}) => {
  return (
    <ReactLenis root {...props}>
      {children}
    </ReactLenis>
  )
}
SmoothScroll.displayName = "SmoothScroll"
