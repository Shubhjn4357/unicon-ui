"use client"

import type * as React from "react"
import { cn } from "../../lib/utils"

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children: React.ReactNode
}

export function Terminal({ title = "bash", children, className, ...props }: TerminalProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-(--radius) border border-border bg-zinc-950 font-mono text-sm shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="ml-2 text-xs text-zinc-400 select-none">{title}</div>
      </div>
      <div className="p-4 text-zinc-100 overflow-x-auto whitespace-pre">{children}</div>
    </div>
  )
}

export function TerminalCommand({ command, output }: { command: string; output?: string }) {
  return (
    <div className="mb-2">
      <div className="flex gap-2 text-primary">
        <span className="text-emerald-500">➜</span>
        <span className="text-blue-400">~</span>
        <span className="text-zinc-100 font-bold">{command}</span>
      </div>
      {output && <div className="mt-1 text-zinc-400 pl-4">{output}</div>}
    </div>
  )
}
