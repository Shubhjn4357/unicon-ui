"use client"

import { TopNav } from "@/components/layout/top-nav"
import { useDesignStyle } from "@unicorn-ui/ui"

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const { designStyle } = useDesignStyle()

  return (
    <div className={`flex flex-col min-h-screen ${designStyle !== "none" ? designStyle : ""}`}>
      <TopNav />
      <main className="flex-1">{children}</main>
    </div>
  )
}
