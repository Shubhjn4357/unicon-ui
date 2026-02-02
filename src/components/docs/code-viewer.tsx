"use client"

import React, { useState } from "react"
import { Button } from "../core/button"
import { Check, Copy } from "lucide-react"

interface CodeViewerProps {
  componentName: string
  args: Record<string, any>
  defaultArgs: Record<string, any>
}

export function CodeViewer({ componentName, args, defaultArgs }: CodeViewerProps) {
  const [copied, setCopied] = useState(false)

  // Generate code string
  const generateCode = () => {
    const props = Object.entries(args)
      .filter(([key, value]) => {
         // Don't show props matching default values
         return value !== defaultArgs[key] && value !== undefined
      })
      .map(([key, value]) => {
        if (typeof value === "boolean") {
          return value ? key : `${key}={false}`
        }
        if (typeof value === "number") {
           return `${key}={${value}}`
        }
        if (typeof value === "string") {
            return `${key}="${value}"`
        }
        if (typeof value === "object") {
             return `${key}={${JSON.stringify(value)}}`
        }
        return `${key}={${value}}`
      })
      .join("\n  ")

    const propsString = props ? `\n  ${props}\n` : ""
    
    return `<${componentName}${propsString}/>`
  }

  const code = generateCode()

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-lg overflow-hidden border bg-zinc-950">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20" onClick={handleCopy}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300">
        <code>
          {code}
        </code>
      </pre>
    </div>
  )
}
