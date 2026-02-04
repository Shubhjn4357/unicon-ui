"use client"

import type * as React from "react"
import { cn } from "../../lib/utils"

export function IPhoneMockup({
  children,
  className,
}: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto max-w-[300px]", className)}>
      <div className="relative rounded-[50px] border-8 border-border bg-card p-3 shadow-2xl ring-1 ring-border">
        <div className="absolute left-1/2 top-4 h-6 w-24 -translate-x-1/2 rounded-full bg-border" />
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
      <div className="rounded-t-2xl border-x-8 border-t-8 border-muted bg-muted/50 p-2 dark:border-muted">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-background">
          {children}
        </div>
      </div>
      <div className="h-4 w-full rounded-b-xl bg-muted-foreground/50 dark:bg-muted-foreground/50" />
      <div className="mx-auto h-2 w-32 rounded-b-xl bg-muted-foreground dark:bg-muted-foreground" />
    </div>
  )
}
