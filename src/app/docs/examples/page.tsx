"use client"

import {
  Button,
  Card,
  GridPattern,
  useCopyToClipboard,
  useTheme,
  useWindowSize,
} from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { Check, Copy, Laptop, Monitor, Moon, Smartphone, Sun, Tablet } from "lucide-react"
import { useEffect, useState } from "react"

export default function ExamplesPage() {
  const { theme, setTheme } = useTheme()
  const { width, height } = useWindowSize()
  const [copyState, copyToClipboard] = useCopyToClipboard()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <GridPattern className="absolute inset-0 opacity-10" />
      </div>

      {/* Hero */}
      <section className="container py-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-4"
        >
          <h1 className="text-5xl font-bold tracking-tight">Hook Examples</h1>
          <p className="text-xl text-muted-foreground">
            Interactive examples demonstrating how to use Unicorn UI hooks with Tailwind CSS.
          </p>
        </motion.div>
      </section>

      {/* Examples */}
      <section className="container pb-24 space-y-16">
        {/* Theme Toggle Example */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Theme Toggle</h2>
            <p className="text-muted-foreground">
              Using <code>useTheme</code> to toggle dark mode
            </p>
          </div>

          <Card className="p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-xl bg-muted/50 transition-colors duration-300 dark:bg-muted/20">
                <p className="font-semibold mb-4">Current Theme: {theme}</p>
                <div className="flex gap-2">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    onClick={() => setTheme("light")}
                    className="gap-2"
                  >
                    <Sun className="h-4 w-4" /> Light
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    onClick={() => setTheme("dark")}
                    className="gap-2"
                  >
                    <Moon className="h-4 w-4" /> Dark
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    onClick={() => setTheme("system")}
                    className="gap-2"
                  >
                    <Laptop className="h-4 w-4" /> System
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Window Size Example */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Responsive Design</h2>
            <p className="text-muted-foreground">
              Using <code>useWindowSize</code> for adaptive layouts
            </p>
          </div>

          <Card className="p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 text-4xl font-bold text-primary">
                {width < 768 ? <Smartphone /> : width < 1024 ? <Tablet /> : <Monitor />}
                <span>{width}px</span>
                <span className="text-muted-foreground text-xl">x</span>
                <span>{height}px</span>
              </div>
              <p className="text-muted-foreground">Resize your browser window to see updates</p>
            </div>
          </Card>
        </div>

        {/* Clipboard Example */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Clipboard Utilities</h2>
            <p className="text-muted-foreground">
              Using <code>useCopyToClipboard</code> for copying text
            </p>
          </div>

          <Card className="p-8">
            <div className="flex flex-col items-center gap-4 max-w-sm mx-auto">
              <div className="flex w-full items-center gap-2 p-2 rounded-lg border border-border bg-background">
                <code className="flex-1 p-2 font-mono text-sm">npm install @unicorn-ui/ui</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className={copyState ? "text-green-500" : ""}
                  onClick={() => copyToClipboard("npm install @unicorn-ui/ui")}
                >
                  {copyState ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
