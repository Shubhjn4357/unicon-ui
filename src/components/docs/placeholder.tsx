"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/core/alert"
import { AlertCircle } from "lucide-react"

interface PlaceholderProps {
  example?: {
    code: string
  }
}

export function HookPlaceholder({ example }: PlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Hook Documentation</AlertTitle>
        <AlertDescription>
          This is a React Hook. It does not have a visual component preview. Please refer to the
          code example below.
        </AlertDescription>
      </Alert>
      {example && (
        <div className="w-full rounded-md border bg-muted p-4 overflow-x-auto">
          <pre className="text-sm font-mono text-foreground">{example.code}</pre>
        </div>
      )}
    </div>
  )
}

export function ComponentPlaceholder({ example }: PlaceholderProps){
  return <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full">
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Component Documentation</AlertTitle>
      <AlertDescription>
        This is a React Component. It does not have a visual component preview. Please refer to the
        code example below.
      </AlertDescription>
    </Alert>
    {example && (
      <div className="w-full rounded-md border bg-muted p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-foreground">{example.code}</pre>
      </div>
    )}
  </div>
}
