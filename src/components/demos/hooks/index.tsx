"use client"

import { Button, Input, useCopyToClipboard, useTheme, useWindowSize } from "@unicorn-ui/ui"
import { Check, Copy, Monitor, Moon, Smartphone, Sun } from "lucide-react"
import { useState } from "react"

export function ThemeDemo() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg bg-background">
      <p className="font-medium">
        Current Theme: <span className="font-mono">{theme}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={theme === "light" ? "default" : "outline"}
          onClick={() => setTheme("light")}
          className="gap-2"
        >
          <Sun className="w-4 h-4" /> Light
        </Button>
        <Button
          variant={theme === "dark" ? "default" : "outline"}
          onClick={() => setTheme("dark")}
          className="gap-2"
        >
          <Moon className="w-4 h-4" /> Dark
        </Button>
        <Button
          variant={theme === "system" ? "default" : "outline"}
          onClick={() => setTheme("system")}
          className="gap-2"
        >
          <Monitor className="w-4 h-4" /> System
        </Button>
      </div>
    </div>
  )
}

export function WindowSizeDemo() {
  const { width, height } = useWindowSize()
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-8 bg-muted rounded-lg border border-dashed w-full">
      <div className="text-4xl font-bold flex items-center gap-2">
        {width < 768 ? <Smartphone className="w-8 h-8" /> : <Monitor className="w-8 h-8" />}
        {width}px <span className="text-muted-foreground">x</span> {height}px
      </div>
      <p className="text-sm text-muted-foreground">Resize your window to see updates</p>
    </div>
  )
}

export function CopyDemo() {
  const [text, setText] = useState("Hello Unicorn UI!")
  const [copied, copy] = useCopyToClipboard()

  return (
    <div className="flex gap-2 max-w-sm w-full p-4 border rounded-lg">
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => copy(text)} variant="outline" className="w-12 shrink-0">
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  )
}
