"use client"

import { ReactLenis } from "lenis/react"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isDocs = pathname?.startsWith("/docs")

  if (isDocs) {
    return <>{children}</>
  }

  return (
    <ReactLenis root='asChild' options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
