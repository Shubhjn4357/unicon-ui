"use client"

import { Check, Copy, Moon, RotateCcw, Sun } from "lucide-react"
import * as React from "react"
import { type ThemePreset, useThemeGenerator } from "../../hooks/use-theme-generator"
import { Button } from "../core/button"
import { Card } from "../core/card"
import { Input } from "../core/input"
import { Label } from "../core/label"

interface RadiusTokens {
  radius: string
  "radius-sm": string
  "radius-md": string
  "radius-lg": string
  "radius-xl": string
  "radius-2xl": string
  "radius-full": string
}

interface SizeTokens {
  "size-xs": string
  "size-sm": string
  "size-md": string
  "size-lg": string
  "size-xl": string
  "size-2xl": string
}

const DEFAULT_RADIUS: RadiusTokens = {
  radius: "0.5rem",
  "radius-sm": "0.25rem",
  "radius-md": "0.5rem",
  "radius-lg": "0.75rem",
  "radius-xl": "1rem",
  "radius-2xl": "1.5rem",
  "radius-full": "9999px",
}

const DEFAULT_SIZES: SizeTokens = {
  "size-xs": "0.5rem",
  "size-sm": "0.75rem",
  "size-md": "1rem",
  "size-lg": "1.25rem",
  "size-xl": "1.5rem",
  "size-2xl": "2rem",
}

// Helper: Parse HSL string to components
function parseHSL(hsl: string): { h: number; s: number; l: number } | null {
  const match = hsl.match(/(\d+)\s+(\d+)%?\s+(\d+)%?/)
  if (match) {
    return { h: Number.parseInt(match[1]), s: Number.parseInt(match[2]), l: Number.parseInt(match[3]) }
  }
  return null
}

// Helper: Convert hex to HSL
function hexToHSL(hex: string): string {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}

// Intelligent color inversion for dark/light mode
function invertColorForMode(color: string, isDarkToLight: boolean): string {
  let hsl = color

  // Convert hex to HSL if needed
  if (color.startsWith("#")) {
    hsl = hexToHSL(color)
  }

  const parsed = parseHSL(hsl)
  if (!parsed) return color

  let { h, s, l } = parsed

  if (isDarkToLight) {
    // Dark mode → Light mode: increase lightness dramatically
    l = Math.min(97, l + 80)
    // Reduce saturation slightly for softer light mode
    s = Math.max(10, s - 10)
  } else {
    // Light mode → Dark mode: decrease lightness dramatically
    l = Math.max(11, l - 80)
    // Increase saturation slightly for vibrant dark mode
    s = Math.min(50, s + 5)
  }

  return `${h} ${s}% ${l}%`
}

// Smart foreground inversion
function invertForeground(color: string, isDarkToLight: boolean): string {
  const parsed = parseHSL(color.startsWith("#") ? hexToHSL(color) : color)
  if (!parsed) return color

  const { h, s } = parsed
  // Foreground should be high contrast
  const l = isDarkToLight ? 98 : 20

  return `${h} ${Math.max(10, s - 5)}% ${l}%`
}

export function ThemeEditor() {
  const {
    activePreset,
    customColors,
    isCustomTheme,
    isDarkMode,
    DEFAULT_PRESETS,
    DEFAULT_DESIGN_STYLES,
    applyTheme,
    resetToPreset,
    toggleDarkMode,
    setCustomColors,
    setIsCustomTheme,
    designStyle,
    setDesignStyle,
  } = useThemeGenerator()

  const [activePalette, setActivePalette] = React.useState<ThemePreset["palette"] | null>(null)
  const [radiusTokens, setRadiusTokens] = React.useState<RadiusTokens>(DEFAULT_RADIUS)
  const [sizeTokens, setSizeTokens] = React.useState<SizeTokens>(DEFAULT_SIZES)
  const [lightColors, setLightColors] = React.useState<Record<string, string>>({})
  const [darkColors, setDarkColors] = React.useState<Record<string, string>>({})
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const [copiedCSS, setCopiedCSS] = React.useState(false)

  React.useEffect(() => {
    const preset = DEFAULT_PRESETS.find((p) => p.id === activePreset)
    if (preset) {
      // Keep full palette with all properties for activePalette
      setActivePalette({
        ...preset.palette,
        colors: { ...preset.palette.colors, ...customColors },
      })

      // Only extract color tokens (exclude chart and radius) for state
      const colorTokens: Record<string, string> = {}
      Object.entries(preset.palette.colors).forEach(([key, value]) => {
        if (key !== 'chart' && key !== 'radius' && typeof value === 'string') {
          colorTokens[key] = value
        }
      })

      // Also filter customColors to only include strings
      const filteredCustomColors: Record<string, string> = {}
      Object.entries(customColors).forEach(([key, value]) => {
        if (key !== 'chart' && key !== 'radius' && typeof value === 'string') {
          filteredCustomColors[key] = value
        }
      })

      setLightColors({ ...colorTokens, ...filteredCustomColors })
    }
  }, [activePreset, customColors, DEFAULT_PRESETS])

  const handleColorChange = (key: string, value: string) => {
    setIsCustomTheme(true)
    setCustomColors((prev) => ({ ...prev, [key]: value }))

    // Auto-generate opposite mode
    if (isDarkMode) {
      // Editing dark mode → auto-generate light mode
      setDarkColors((prev) => ({ ...prev, [key]: value }))

      const inverted = key.includes("foreground")
        ? invertForeground(value, true)
        : invertColorForMode(value, true)

      setLightColors((prev) => ({ ...prev, [key]: inverted }))
    } else {
      // Editing light mode → auto-generate dark mode
      setLightColors((prev) => ({ ...prev, [key]: value }))

      const inverted = key.includes("foreground")
        ? invertForeground(value, false)
        : invertColorForMode(value, false)

      setDarkColors((prev) => ({ ...prev, [key]: inverted }))
    }

    if (activePalette) {
      const newPalette = {
        ...activePalette,
        colors: { ...activePalette.colors, [key]: value },
      }
      applyTheme(newPalette)
    }
  }

  const handlePresetSelect = (presetId: string) => {
    resetToPreset(presetId)
    setRadiusTokens(DEFAULT_RADIUS)
    setSizeTokens(DEFAULT_SIZES)
    const preset = DEFAULT_PRESETS.find((p) => p.id === presetId)
    if (preset) {
      // Filter out chart and radius from preset colors
      const colorTokens: Record<string, string> = {}
      Object.entries(preset.palette.colors).forEach(([key, value]) => {
        if (key !== 'chart' && key !== 'radius' && typeof value === 'string') {
          colorTokens[key] = value
        }
      })
      setLightColors(colorTokens)
      setDarkColors({})
    }
  }

  const generateCSS = () => {
    const activeColors = isDarkMode ? darkColors : lightColors
    const oppositeColors = isDarkMode ? lightColors : darkColors

    const lightVars = Object.entries(Object.keys(oppositeColors).length > 0 ? oppositeColors : lightColors)
      .map(([key, value]) => `    --${key}: ${value};`)
      .join("\n")

    const darkVars = Object.entries(Object.keys(activeColors).length > 0 ? activeColors : darkColors)
      .map(([key, value]) => `    --${key}: ${value};`)
      .join("\n")

    const radiusVars = Object.entries(radiusTokens)
      .map(([key, value]) => `    --${key}: ${value};`)
      .join("\n")

    const sizeVars = Object.entries(sizeTokens)
      .map(([key, value]) => `    --${key}: ${value};`)
      .join("\n")

    return `/* Generated Unicorn UI Theme */
@layer base {
  :root {
    /* Light Mode Colors */
${lightVars}

    /* Radius Tokens */
${radiusVars}

    /* Size Tokens */
${sizeVars}
  }

  .dark {
    /* Dark Mode Colors (Auto-Generated) */
${darkVars || "    /* No dark mode colors customized yet */"}
  }
}`
  }

  const copyCSS = async () => {
    const css = generateCSS()
    try {
      await navigator.clipboard.writeText(css)
      setCopiedCSS(true)
      setTimeout(() => setCopiedCSS(false), 2000)
    } catch (e) {
      console.error("Failed to copy CSS", e)
    }
  }

  const colorKeys = [
    "background",
    "foreground",
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "accent",
    "accent-foreground",
    "muted",
    "muted-foreground",
    "destructive",
    "destructive-foreground",
    "card",
    "card-foreground",
    "border",
    "input",
    "ring",
  ] as const

  const currentColors = isDarkMode ? darkColors : lightColors

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-card border-b p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Theme Editor</h1>
          <Button variant="outline" size="sm" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 lg:gap-6 p-4 lg:p-6">
        {/* Sidebar Controls */}
        <Card
          className={`p-4 space-y-4 ${mobileMenu ? "block" : "hidden"
            } lg:block lg:sticky lg:top-4 lg:h-fit lg:max-h-[calc(100vh-2rem)] overflow-y-auto`}
        >
          {/* Dark Mode Toggle */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Editing Mode</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={!isDarkMode ? "default" : "outline"}
                size="sm"
                onClick={() => toggleDarkMode(false)}
                className="text-sm"
              >
                <Sun className="w-4 h-4 mr-2" /> Light
              </Button>
              <Button
                variant={isDarkMode ? "default" : "outline"}
                size="sm"
                onClick={() => toggleDarkMode(true)}
                className="text-sm"
              >
                <Moon className="w-4 h-4 mr-2" /> Dark
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {isDarkMode ? "Editing dark mode (light auto-generates)" : "Editing light mode (dark auto-generates)"}
            </p>
          </div>

          {/* Presets */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Presets</Label>
            <div className="grid grid-cols-2 gap-2">
              {DEFAULT_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    handlePresetSelect(preset.id)
                    setMobileMenu(false)
                  }}
                  className={`p-2 rounded-lg border text-xs transition-all ${activePreset === preset.id && !isCustomTheme
                    ? "ring-2 ring-primary border-primary bg-primary/5"
                    : "hover:bg-muted border-border"
                    }`}
                >
                  <div
                    className="w-full h-8 rounded-md mb-2"
                    style={{ background: preset.preview }}
                  />
                  <span className="font-medium text-xs">{preset.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Design Style */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Design Style</Label>
            <select
              value={designStyle ?? ""}
              onChange={(e) => setDesignStyle(e.target.value || null)}
              className="w-full h-9 rounded-md border border-input px-3 bg-background text-sm"
            >
              <option value="">Default</option>
              {DEFAULT_DESIGN_STYLES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Colors */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold">Colors</Label>
              {isCustomTheme && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => resetToPreset(activePreset)}
                  className="h-7 text-xs"
                >
                  <RotateCcw className="w-3 h-3 mr-1" /> Reset
                </Button>
              )}
            </div>

            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
              {colorKeys.map((key) => {
                // Cast customColors to allow accessing -foreground keys
                const customColorsMap = customColors as Record<string, string>
                const value = currentColors[key] || customColorsMap[key] || ""
                return (
                  <div key={key} className="space-y-1">
                    <Label className="text-xs capitalize">{key.replace("-", " ")}</Label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="color"
                        value={
                          value && typeof value === "string" && !value.startsWith("hsl")
                            ? (value as string)
                            : "#3B82F6"
                        }
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        className="h-9 w-12 p-1 rounded-md border cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={value as string}
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        placeholder="hsl(...) or #HEX"
                        className="flex-1 h-9 text-xs font-mono"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Radius Tokens */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Border Radius</Label>
            <div className="space-y-2 max-h-[180px] overflow-y-auto pr-2">
              {Object.entries(radiusTokens).map(([key, value]) => (
                <div key={key} className="flex gap-2 items-center">
                  <Label className="text-xs min-w-[80px]">{key}</Label>
                  <Input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      setRadiusTokens((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                    placeholder="e.g., 0.5rem"
                    className="h-8 text-xs font-mono"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Size Tokens */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Size Scale</Label>
            <div className="space-y-2 max-h-[180px] overflow-y-auto pr-2">
              {Object.entries(sizeTokens).map(([key, value]) => (
                <div key={key} className="flex gap-2 items-center">
                  <Label className="text-xs min-w-[80px]">{key}</Label>
                  <Input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      setSizeTokens((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                    placeholder="e.g., 1rem"
                    className="h-8 text-xs font-mono"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Copy CSS Button */}
          <div className="pt-4 border-t">
            <Button
              className="w-full"
              onClick={copyCSS}
              variant={copiedCSS ? "outline" : "default"}
            >
              {copiedCSS ? (
                <>
                  <Check className="w-4 h-4 mr-2" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" /> Copy CSS
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Preview Area */}
        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <div>
              <h2 className="text-2xl font-bold">Live Preview</h2>
              <p className="text-sm text-muted-foreground">
                Customize in {isDarkMode ? "dark" : "light"} mode • Opposite mode auto-generates ✨
              </p>
            </div>

            {/* Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Buttons */}
              <Card className="p-4 space-y-3">
                <h3 className="font-semibold text-sm">Buttons</h3>
                <div className="space-y-2">
                  <Button className="w-full" size="sm">
                    Primary
                  </Button>
                  <Button variant="secondary" className="w-full" size="sm">
                    Secondary
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Outline
                  </Button>
                  <Button variant="destructive" className="w-full" size="sm">
                    Destructive
                  </Button>
                </div>
              </Card>

              {/* Inputs */}
              <Card className="p-4 space-y-3">
                <h3 className="font-semibold text-sm">Inputs</h3>
                <div className="space-y-2">
                  <Input placeholder="Default Input" />
                  <Input disabled placeholder="Disabled" />
                  <Input type="email" placeholder="Email" />
                </div>
              </Card>

              {/* Color Swatches */}
              <Card className="p-4 space-y-3 md:col-span-2">
                <h3 className="font-semibold text-sm">Color Palette</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {["background", "primary", "secondary", "accent", "muted"].map((color) => (
                    <div key={color} className="space-y-2">
                      <div
                        className="h-16 w-full rounded-lg border shadow-sm"
                        style={{ background: `hsl(var(--${color}))` }}
                      />
                      <p className="text-xs font-medium text-center capitalize">{color}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Typography */}
              <Card className="p-4 space-y-3 md:col-span-2">
                <h3 className="font-semibold text-sm">Typography</h3>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Heading 1</h1>
                  <h2 className="text-2xl font-semibold">Heading 2</h2>
                  <p className="text-base">Body text paragraph</p>
                  <p className="text-sm text-muted-foreground">Muted small text</p>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
