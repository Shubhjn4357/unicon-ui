#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Component discovery and export generation
const componentDirs = [
  "core",
  "layout",
  "special",
  "backgrounds",
  "text",
  "buttons",
  "misc",
  "feedback",
  "interaction",
  "animation",
  "mocks",
  "skeletons",
]

const specialExports = {
  // InView utility
  "components/utils/in-view": "InView",
  // Core alert sub-components
  "core/alert": ["AlertTitle", "AlertDescription"],
  // Core avatar sub-components
  "core/avatar": ["AvatarImage", "AvatarFallback"],
  // Core card sub-components
  "core/card": ["CardHeader", "CardFooter", "CardTitle", "CardDescription", "CardContent"],
  // Core checkbox sub-components
  "core/checkbox": ["CheckboxIndicator"],
  // Core dialog sub-components
  "core/dialog": [
    "DialogContent",
    "DialogDescription",
    "DialogHeader",
    "DialogFooter",
    "DialogTitle",
    "DialogTrigger",
  ],
  // Core dropdown menu sub-components
  "core/dropdown-menu": [
    "DropdownMenuTrigger",
    "DropdownMenuContent",
    "DropdownMenuItem",
    "DropdownMenuLabel",
    "DropdownMenuSeparator",
  ],
  // Core radio-group sub-components
  "core/radio-group": ["RadioGroupItem"],
  // Core select sub-components
  "core/select": [
    "SelectGroup",
    "SelectValue",
    "SelectTrigger",
    "SelectContent",
    "SelectLabel",
    "SelectItem",
  ],
  // Core sheet sub-components
  "core/sheet": ["SheetContent", "SheetDescription", "SheetHeader", "SheetTitle", "SheetTrigger"],
  // Core table sub-components
  "core/table": [
    "TableHeader",
    "TableBody",
    "TableFooter",
    "TableRow",
    "TableHead",
    "TableCell",
    "TableCaption",
  ],
  // Core tabs sub-components
  "core/tabs": ["TabsList", "TabsTrigger", "TabsContent"],
  // Core toast sub-components
  "core/toast": [
    "ToastProvider",
    "ToastViewport",
    "ToastTitle",
    "ToastDescription",
    "ToastAction",
    "ToastClose",
    "useToast",
  ],
  // Core tooltip sub-components
  "core/tooltip": ["TooltipTrigger", "TooltipContent", "TooltipProvider"],
  // Core unicorn-provider sub-components
  "core/unicorn-provider": ["UnicornThemeProvider"],
  "layout/bento-grid": ["BentoCard"],
  "layout/dock": ["DockIcon"],
  "layout/resizable-panel": ["ResizablePanel", "ResizableHandle"],
  "layout/sidebar": ["SidebarItem"],
  "layout/collapsible-sidebar-new": ["SidebarHeader", "SidebarSection"],
  "misc/device-mockups": ["IPhoneMockup", "MacBookMockup"],
}

function generateExportStatement(comp) {
  if (typeof comp === "string") {
    const componentName = toPascalCase(comp)
    const category = comp.category || "unknown"
    return `export { ${componentName} } from "./components/${category}/${comp}"`
  }
  return `export { ${comp.name} } from "./components/${comp.category}/${comp.name}"`
}

function toPascalCase(str) {
  // Handle special cases for components with numbers at the start
  if (str.startsWith("3d-")) {
    return (
      "ThreeD" + str.slice(3).replace(/(^|[-_])(.)/g, (_, __, char) => char?.toUpperCase() || "")
    )
  }

  return str.replace(/(^|[-_])(.)/g, (match, sep, char) => {
    if (char && /[a-z]/.test(char)) {
      return char.toUpperCase()
    }
    return char || ""
  })
}

function generateSpecialExportStatement(compPath, exports) {
  const exportList = Array.isArray(exports) ? exports.join(", ") : exports
  const [category, componentName] = compPath.split("/")

  // Skip exporting the main component since it's handled by regular discovery
  if (componentName && Array.isArray(exports)) {
    const filteredExports = exports.filter(
      (exp) => exp.toLowerCase() !== toPascalCase(componentName).toLowerCase()
    )
    if (filteredExports.length === 0) return ""
    return `export { ${filteredExports.join(", ")} } from "./components/${compPath}"`
  }

  return `export { ${exportList} } from "./components/${compPath}"`
}

function discoverComponents() {
  const components = []

  componentDirs.forEach((dir) => {
    const dirPath = path.join(__dirname, "..", "src", "components", dir)
    if (!fs.existsSync(dirPath)) {
      console.warn(`⚠️  Directory not found: ${dirPath}`)
      return
    }

    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".tsx") && !f.startsWith("."))
    files.forEach((file) => {
      const componentName = path.basename(file, ".tsx")
      const componentPath = path.join(dir, componentName).replace(/\\/g, "/")

      // Skip special handled components
      if (specialExports[componentPath]) return

      components.push({
        name: componentName,
        path: componentPath,
        category: dir,
      })
    })
  })

  return components
}

function generateExports() {
  try {
    let exportContent = "// Auto-generated exports - DO NOT EDIT MANUALLY\n"
    exportContent += "// Run 'pnpm update-exports' to regenerate\n\n"

    // Utilities export
    exportContent += "// Utilities\n"
    exportContent +=
      'export { cn, getCSSVariable, prefersReducedMotion, generateId } from "./lib/utils"\n'

    // Special utility exports
    const specialUtilPaths = Object.keys(specialExports).filter((path) => path.startsWith("components/utils/"))
    specialUtilPaths.forEach((compPath) => {
      // Remove "components/" prefix for generateSpecialExportStatement as it expects path relative to components dir
      const relativePath = compPath.replace("components/", "")
      exportContent += `${generateSpecialExportStatement(relativePath, specialExports[compPath])}\n`
    })
    exportContent += "\n"

    // Hooks export
    exportContent += "// Hooks\n"
    exportContent += 'export * from "./hooks"\n\n'

    // Core Components
    exportContent += "// Core Components\n"
    const coreComponents = discoverComponents().filter((c) => c.category === "core")
    coreComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })

    // Special exports for core components with multiple items
    const specialCorePaths = Object.keys(specialExports).filter((path) => path.startsWith("core/"))
    specialCorePaths.forEach((compPath) => {
      exportContent += `${generateSpecialExportStatement(compPath, specialExports[compPath])}\n`
    })
    exportContent += "\n"

    // Layout Components
    exportContent += "// Layout Components\n"
    const layoutComponents = discoverComponents().filter((c) => c.category === "layout")
    layoutComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })

    // Special layout exports (sub-components only)
    const specialLayoutPaths = Object.keys(specialExports).filter((path) =>
      path.startsWith("layout/")
    )
    specialLayoutPaths.forEach((compPath) => {
      exportContent += `${generateSpecialExportStatement(compPath, specialExports[compPath])}\n`
    })
    exportContent += "\n"

    // Feedback Components
    exportContent += "// Feedback Components\n"
    const feedbackComponents = discoverComponents().filter((c) => c.category === "feedback")
    feedbackComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })
    exportContent += "\n"

    // Interaction Components
    exportContent += "// Interaction Components\n"
    const interactionComponents = discoverComponents().filter((c) => c.category === "interaction")
    interactionComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })
    exportContent += "\n"

    // Animation Components
    exportContent += "// Animation Components\n"
    const animationComponents = discoverComponents().filter((c) => c.category === "animation")
    animationComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })
    exportContent += "\n"

    // Special Effects Components
    exportContent += "// Special Effects Components\n"
    const specialComponents = discoverComponents().filter((c) => c.category === "special")
    specialComponents.forEach((comp) => {
      if (!specialExports[`special/${comp.name}`]) {
        const pascalName = toPascalCase(comp.name)
        exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
      }
    })
    exportContent += "\n"

    // Background Components
    exportContent += "// Background Components\n"
    const backgroundComponents = discoverComponents().filter((c) => c.category === "backgrounds")
    backgroundComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })
    exportContent += "\n"

    // Text Components
    exportContent += "// Text Components\n"
    const textComponents = discoverComponents().filter((c) => c.category === "text")
    textComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })
    exportContent += "\n"

    // Button Components
    exportContent += "// Button Components\n"
    const buttonComponents = discoverComponents().filter((c) => c.category === "buttons")
    buttonComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })
    exportContent += "\n"

    // Misc Components
    exportContent += "// Misc Components\n"
    const miscComponents = discoverComponents().filter((c) => c.category === "misc")
    miscComponents.forEach((comp) => {
      if (!specialExports[`misc/${comp.name}`]) {
        const pascalName = toPascalCase(comp.name)
        exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
      }
    })

    // Special misc exports
    const specialMiscPaths = Object.keys(specialExports).filter((path) => path.startsWith("misc/"))
    specialMiscPaths.forEach((compPath) => {
      exportContent += `${generateSpecialExportStatement(compPath, specialExports[compPath])}\n`
    })
    exportContent += "\n"

    // Mock Components
    exportContent += "// Mock Components\n"
    const mockComponents = discoverComponents().filter((c) => c.category === "mocks")
    mockComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })
    exportContent += "\n"

    // Skeleton Components
    exportContent += "// Skeleton Components\n"
    const skeletonComponents = discoverComponents().filter((c) => c.category === "skeletons")
    skeletonComponents.forEach((comp) => {
      const pascalName = toPascalCase(comp.name)
      exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
    })
    exportContent += "\n"

    // Types export
    exportContent += "// Types\n"
    exportContent += 'export type { AsyncState } from "./hooks/use-async"\n'
    exportContent += 'export type { Theme, ThemeContextType } from "./hooks/use-theme"\n'
    exportContent += 'export type { DesignStyle } from "./hooks/use-design-style"\n'
    exportContent += 'export type { UserConfig } from "./types/config"\n'
    exportContent += "\n"

    // Design Style Hook
    exportContent += "// Design Style Hook\n"
    exportContent +=
      'export { useDesignStyle, DesignStyleProvider } from "./hooks/use-design-style"\n\n'

    // New Hooks export
    exportContent += "// New Hooks\n"
    exportContent += 'export { useClipboard } from "./hooks/use-clipboard"\n'
    exportContent += 'export { useClickOutside } from "./hooks/use-click-outside"\n'
    exportContent += 'export { useMouse } from "./hooks/use-mouse"\n'
    exportContent += 'export { useScrollProgress } from "./hooks/use-scroll-progress"\n'

    // Registry System export
    exportContent += "// Registry System\n"
    exportContent += 'export { ComponentRegistry } from "./registry/component-registry"\n'

    // Theme Generator export
    exportContent += "// Theme Generator\n"
    exportContent += 'export { useThemeGenerator } from "./hooks/use-theme-generator"\n'

    // Write to src/index.ts
    const indexPath = path.join(__dirname, "..", "src", "index.ts")
    fs.writeFileSync(indexPath, exportContent)

    console.log("✅ Exports updated successfully")
    console.log(
      `📊 Generated exports for ${discoverComponents().length + Object.keys(specialExports).length} components/hooks`
    )

    // Generate component metadata for documentation system
    generateComponentMetadata()
  } catch (error) {
    console.error("❌ Error updating exports:", error.message)
    process.exit(1)
  }
}

function generateComponentMetadata() {
  const components = discoverComponents()
  const metadata = components.map((comp) => ({
    name: comp.name,
    path: comp.path,
    category: comp.category,
    filePath: path.join(__dirname, "..", "src", "components", comp.path + ".tsx"),
    exports: [comp.name],
  }))

  // Add special exports
  Object.entries(specialExports).forEach(([compPath, exports]) => {
    const [category, componentName] = compPath.split("/")
    metadata.push({
      name: componentName,
      path: compPath,
      category,
      filePath: path.join(__dirname, "..", "src", "components", compPath + ".tsx"),
      exports: Array.isArray(exports) ? exports : [exports],
    })
  })

  const metadataPath = path.join(__dirname, "..", "src", "registry", "component-metadata.json")
  const metadataDir = path.dirname(metadataPath)

  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir, { recursive: true })
  }

  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2))
  console.log("✅ Component metadata generated")
}

// Execute script
generateExports()
