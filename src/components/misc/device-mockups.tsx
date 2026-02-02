"use client"

import type * as React from "react"
import { cn } from "../../lib/utils"

export function IPhoneMockup({
  children,
  className,
}: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto max-w-[300px]", className)}>
      <div className="relative rounded-[50px] border-8 border-zinc-900 bg-zinc-950 p-3 shadow-2xl ring-1 ring-zinc-800">
        <div className="absolute left-1/2 top-4 h-6 w-24 -translate-x-1/2 rounded-full bg-zinc-900" />
        <div className="aspect-[9/19.5] overflow-hidden rounded-[40px] bg-background">
          {children}
        </div>
      </div>
    </div>
  )
}

export function MacBookMockup({
  children,
  className,
}: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto max-w-4xl", className)}>
      <div className="rounded-t-2xl border-x-8 border-t-8 border-zinc-300 bg-zinc-800 p-2 dark:border-zinc-700">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-background">
          {children}
        </div>
      </div>
      <div className="h-4 w-full rounded-b-xl bg-zinc-400 dark:bg-zinc-600" />
      <div className="mx-auto h-2 w-32 rounded-b-xl bg-zinc-500 dark:bg-zinc-700" />
    </div>
  )
}
