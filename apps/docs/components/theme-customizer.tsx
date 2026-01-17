"use client"

import { cn } from "@/lib/utils"
import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from "@unicorn-ui/ui"
import { Droplets, Moon, Palette, RotateCcw, Square, Sun } from "lucide-react"
import * as React from "react"

export function ThemeCustomizer() {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">("system")

  const [radius, setRadius] = React.useState(0.5)
  const [brandColor, setBrandColor] = React.useState(210) // Hue value
  const [secondaryColor, setSecondaryColor] = React.useState(270) // Secondary hue
  const [accentColor, setAccentColor] = React.useState(142) // Accent hue
  const [scaling, setScaling] = React.useState(1)
  const [tab, setTab] = React.useState<"customize" | "code">("customize")
  const [styleMode, setStyleMode] = React.useState<"basic" | "glass">("basic")

  const toggleTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme)

    if (newTheme === "system") {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.toggle("dark", systemPreference)
    } else {
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
    localStorage.setItem("theme", newTheme)
  }

  const updateBrandColor = (val: number) => {
    setBrandColor(val)
    localStorage.setItem("brandColor", val.toString())
  }

  const updateSecondaryColor = (val: number) => {
    setSecondaryColor(val)
    localStorage.setItem("secondaryColor", val.toString())
  }

  const updateAccentColor = (val: number) => {
    setAccentColor(val)
    localStorage.setItem("accentColor", val.toString())
  }

  const updateRadius = (val: number) => {
    setRadius(val)
    localStorage.setItem("radius", val.toString())
  }

  const updateScaling = (val: number) => {
    setScaling(val)
    localStorage.setItem("scaling", val.toString())
  }

  const updateStyleMode = (mode: "basic" | "glass") => {
    setStyleMode(mode)
    localStorage.setItem("styleMode", mode)
    document.documentElement.classList.toggle("glass-mode", mode === "glass")
  }

  // Apply changes to document
  React.useEffect(() => {
    if (!mounted) return
    const root = document.documentElement

    // Convert Hue to HSL for Brand Color (Primary)
    root.style.setProperty("--color-brand", `hsl(${brandColor} 100% 50%)`)
    root.style.setProperty("--color-brand-hover", `hsl(${brandColor} 100% 45%)`)
    root.style.setProperty("--color-brand-light", `hsl(${brandColor} 100% 95%)`)
    root.style.setProperty("--color-brand-dark", `hsl(${brandColor} 100% 30%)`)

    // Secondary Color
    root.style.setProperty("--color-secondary", `hsl(${secondaryColor} 80% 55%)`)
    root.style.setProperty("--color-secondary-hover", `hsl(${secondaryColor} 80% 50%)`)

    // Accent Color
    root.style.setProperty("--color-accent", `hsl(${accentColor} 90% 50%)`)
    root.style.setProperty("--color-accent-hover", `hsl(${accentColor} 90% 45%)`)

    // Apply Radius (mapping to Shadcn-like variables for compatibility)
    root.style.setProperty("--radius", `${radius}rem`)

    // Apply Scaling (Font Size)
    root.style.fontSize = `${scaling * 100}%`
  }, [brandColor, secondaryColor, accentColor, radius, scaling, mounted])

  // Load preferences
  React.useEffect(() => {
    setMounted(true)
    // Read theme from localStorage or default to system
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === "system") {
        const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
        document.documentElement.classList.toggle("dark", systemPreference)
      } else {
        document.documentElement.classList.toggle("dark", savedTheme === "dark")
      }
    } else if (document.documentElement.classList.contains("dark")) {
      setTheme("dark")
    }

    // Restore saved preferences
    const savedRadius = localStorage.getItem("radius")
    if (savedRadius) setRadius(Number.parseFloat(savedRadius))

    const savedBrand = localStorage.getItem("brandColor")
    if (savedBrand) setBrandColor(Number.parseInt(savedBrand))

    const savedSecondary = localStorage.getItem("secondaryColor")
    if (savedSecondary) setSecondaryColor(Number.parseInt(savedSecondary))

    const savedAccent = localStorage.getItem("accentColor")
    if (savedAccent) setAccentColor(Number.parseInt(savedAccent))

    const savedScaling = localStorage.getItem("scaling")
    if (savedScaling) setScaling(Number.parseFloat(savedScaling))

    // Restore style mode
    const savedStyleMode = localStorage.getItem("styleMode") as "basic" | "glass" | null
    if (savedStyleMode) {
      setStyleMode(savedStyleMode)
      document.documentElement.classList.toggle("glass-mode", savedStyleMode === "glass")
    }
  }, [])

  const copyConfig = () => {
    const config = `export const theme = {
    colors: {
        brand: "hsl(${brandColor} 100% 50%)",
    },
    radius: "${radius}rem",
    // scaling: ${scaling}, // Applied to html font-size
}`
    navigator.clipboard.writeText(config)
    // Ideally show a toast here
  }

  if (!mounted) return null

  const presets = [
    { name: "Default (Blue)", hue: 210, color: "bg-blue-500" },
    { name: "Emerald", hue: 142, color: "bg-green-500" },
    { name: "Rose", hue: 340, color: "bg-rose-500" },
    { name: "Amber", hue: 38, color: "bg-amber-500" },
    { name: "Violet", hue: 262, color: "bg-violet-500" },
    { name: "Cyan", hue: 190, color: "bg-cyan-500" },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>

      <PopoverTrigger
        data-target-id="theme-customizer-popover"
        className="h-12 w-12 rounded-full shadow-lg border border-border bg-surface-elevated hover:bg-surface-elevated/90 p-0"
        aria-label="Customize Theme"
      >
        <Palette className="h-6 w-6 text-foreground" />
      </PopoverTrigger>

      <PopoverContent
        id="theme-customizer-popover"
        className="w-80 p-0 mr-4 mb-2 right-4 bottom-20 fixed m-0"
      >
        <div className="space-y-6 max-h-[80vh] overflow-y-auto p-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant={tab === "customize" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setTab("customize")}
                className="h-8"
              >
                Customize
              </Button>
              <Button
                variant={tab === "code" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setTab("code")}
                className="h-8"
              >
                Code
              </Button>
            </div>
            <Button
              variant="ghost"
              className="h-8 w-8"
              onClick={() => {
                updateBrandColor(210)
                updateRadius(0.5)
                updateScaling(1)
                updateStyleMode("basic")
                toggleTheme("light")
              }}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          {tab === "customize" ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    size="sm"
                    className="gap-1.5"
                    onClick={() => toggleTheme("light")}
                  >
                    <Sun className="h-4 w-4" /> Light
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    size="sm"
                    className="gap-1.5"
                    onClick={() => toggleTheme("dark")}
                  >
                    <Moon className="h-4 w-4" /> Dark
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    size="sm"
                    className="gap-1.5"
                    onClick={() => toggleTheme("system")}
                  >
                    System
                  </Button>
                </div>
              </div>

              {/* Style Mode (Basic/Glass) */}
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Style
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={styleMode === "basic" ? "default" : "outline"}
                    size="sm"
                    className="gap-1.5"
                    onClick={() => updateStyleMode("basic")}
                  >
                    <Square className="h-4 w-4" /> Basic
                  </Button>
                  <Button
                    variant={styleMode === "glass" ? "default" : "outline"}
                    size="sm"
                    className="gap-1.5"
                    onClick={() => updateStyleMode("glass")}
                  >
                    <Droplets className="h-4 w-4" /> Glass
                  </Button>
                </div>
              </div>

              {/* Brand Color (Primary) */}

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Brand Color
                  </label>
                  <span className="text-xs text-foreground-secondary">{brandColor}°</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {presets.map((preset) => (
                    <button
                      key={preset.name}
                      className={cn(
                        "h-6 w-6 rounded-full border border-border transition-all hover:scale-110",
                        preset.color,
                        brandColor === preset.hue &&
                        "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      )}
                      onClick={() => updateBrandColor(preset.hue)}
                      title={preset.name}
                    />
                  ))}
                </div>
                <Slider
                  defaultValue={[brandColor]}
                  min={0}
                  max={360}
                  step={1}
                  value={[brandColor]}
                  onValueChange={(vals: number[]) => updateBrandColor(vals[0])}
                  className="py-4"
                  />
              </div>

              {/* Radius Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none">Radius</label>
                  <span className="text-xs text-foreground-secondary">
                    {radius === 999 ? "full" : `${radius.toFixed(2)}rem`}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs">0</span>
                  <Slider
                    value={[radius === 999 ? 2 : radius]}
                    min={0}
                    max={2}
                    step={0.05}
                    onValueChange={(vals: number[]) => updateRadius(vals[0])}
                    className="flex-1"
                    />
                  <Button
                    variant={radius === 999 ? "default" : "outline"}
                    size="sm"
                    className="h-7 px-2 text-xs"
                    onClick={() => updateRadius(999)}
                  >
                    Full
                  </Button>
                </div>
              </div>

              {/* Secondary Color */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none">
                    Secondary Color
                  </label>
                  <span className="text-xs text-foreground-secondary">{secondaryColor}°</span>
                </div>
                <Slider
                  value={[secondaryColor]}
                  min={0}
                  max={360}
                  step={1}
                  onValueChange={(vals: number[]) => updateSecondaryColor(vals[0])}
                  className="py-2"
                />
              </div>

              {/* Accent Color */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none">
                    Accent Color
                  </label>
                  <span className="text-xs text-foreground-secondary">{accentColor}°</span>
                </div>
                <Slider
                  value={[accentColor]}
                  min={0}
                  max={360}
                  step={1}
                  onValueChange={(vals: number[]) => updateAccentColor(vals[0])}
                  className="py-2"
                />
              </div>

              {/* Scaling */}

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none">Scale</label>
                  <span className="text-xs text-foreground-secondary">{Math.round(scaling * 100)}%</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">A</span>
                  <Slider
                    defaultValue={[scaling]}
                    min={0.80}
                    max={1.15}
                    step={0.01}
                    value={[scaling]}
                    onValueChange={(vals: number[]) => updateScaling(vals[0])}
                    className="py-4 flex-1"
                  />
                  <span className="text-lg">A</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-surface p-4 overflow-hidden">
                <pre className="text-xs font-mono text-foreground-secondary whitespace-pre-wrap break-all">
                  {`export const theme = {
  colors: {
    brand: "hsl(${brandColor} 100% 50%)",
  },
  radius: "${radius}rem",
  // scaling: ${scaling}, // Applied to html font-size
}`}
                </pre>
              </div>
              <Button className="w-full" onClick={copyConfig}>
                Copy Configuration
              </Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
    </div>
  )
}
