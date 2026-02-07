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

// Components with multiple exports (sub-components)
const specialExports = {
  "components/utils/in-view": "InView",
  "core/alert": ["Alert", "AlertTitle", "AlertDescription"],
  "core/avatar": ["Avatar", "AvatarImage", "AvatarFallback"],
  "core/card": ["Card", "CardHeader", "CardFooter", "CardTitle", "CardDescription", "CardContent"],
  "core/checkbox": ["Checkbox"],
  "core/dialog": [
    "Dialog",
    "DialogContent",
    "DialogDescription",
    "DialogHeader",
    "DialogFooter",
    "DialogTitle",
    "DialogTrigger",
  ],
  "core/dropdown-menu": [
    "DropdownMenu",
    "DropdownMenuTrigger",
    "DropdownMenuContent",
    "DropdownMenuItem",
    "DropdownMenuLabel",
    "DropdownMenuSeparator",
  ],
  "core/radio-group": ["RadioGroup", "RadioGroupItem"],
  "core/select": [
    "Select",
    "SelectGroup",
    "SelectValue",
    "SelectTrigger",
    "SelectContent",
    "SelectLabel",
    "SelectItem",
  ],
  "core/sheet": [
    "Sheet",
    "SheetContent",
    "SheetDescription",
    "SheetHeader",
    "SheetTitle",
    "SheetTrigger",
  ],
  "core/table": [
    "Table",
    "TableHeader",
    "TableBody",
    "TableFooter",
    "TableRow",
    "TableHead",
    "TableCell",
    "TableCaption",
  ],
  "core/tabs": ["Tabs", "TabsList", "TabsTrigger", "TabsContent"],
  "core/toast": ["ToastProvider", "useToast"],
  "core/tooltip": ["Tooltip", "TooltipTrigger", "TooltipContent", "TooltipProvider"],
  "core/unicorn-provider": ["UnicornThemeProvider"],
  "layout/bento-grid": ["BentoGrid", "BentoCard"],
  "layout/dock": ["Dock", "DockIcon"],
  "layout/resizable-panel": ["ResizablePanel"],
  "layout/sidebar": ["Sidebar", "SidebarItem"],
  "layout/collapsible-sidebar-new": ["CollapsibleSidebar", "SidebarHeader", "SidebarSection"],
  "misc/device-mockups": ["IPhoneMockup", "MacBookMockup"],
}

function toPascalCase(str) {
  if (str.startsWith("3d-")) {
    return `ThreeD${str.slice(3).replace(/(^|[-_])(.)/g, (_, __, char) => char?.toUpperCase() || "")}`
  }
  return str
    .replace(/(^|[-_])(.)/g, (match, sep, char) => {
      if (char && /[a-z]/.test(char)) return char.toUpperCase()
      return char || ""
    })
    .replace(/3d/g, "3D")
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

    // Utilities
    exportContent += "// Utilities\n"
    exportContent +=
      'export { cn, getCSSVariable, prefersReducedMotion, generateId } from "./lib/utils"\n'
    const specialUtilPaths = Object.keys(specialExports).filter((p) =>
      p.startsWith("components/utils/")
    )
    specialUtilPaths.forEach((compPath) => {
      const relativePath = compPath.replace("components/", "")
      const exports = specialExports[compPath]
      const exportList = Array.isArray(exports) ? exports.join(", ") : exports
      exportContent += `export { ${exportList} } from "./components/${relativePath}"\n`
    })
    exportContent += "\n"

    // Hooks
    exportContent += "// Hooks\n"
    exportContent += 'export * from "./hooks"\n\n'

    // Generate exports for each category
    const components = discoverComponents()
    const categoryMap = new Map()

    componentDirs.forEach((dir) => {
      categoryMap.set(
        dir,
        components.filter((c) => c.category === dir)
      )
    })

    // Export by category with proper heading
    const categoryHeadings = {
      core: "Core Components",
      layout: "Layout Components",
      special: "Special Effects Components",
      backgrounds: "Background Components",
      text: "Text Components",
      buttons: "Button Components",
      misc: "Misc Components",
      feedback: "Feedback Components",
      interaction: "Interaction Components",
      animation: "Animation Components",
      mocks: "Mock Components",
      skeletons: "Skeleton Components",
    }

    for (const [category, heading] of Object.entries(categoryHeadings)) {
      const comps = categoryMap.get(category) || []
      if (comps.length === 0) continue

      exportContent += `// ${heading}\n`
      comps.forEach((comp) => {
        const pascalName = toPascalCase(comp.name)
        // Skip if handled in specialExports
        if (!specialExports[`${category}/${comp.name}`]) {
          exportContent += `export { ${pascalName} } from "./components/${comp.category}/${comp.name}"\n`
        }
      })

      // Add special exports for this category
      const specialForCategory = Object.keys(specialExports).filter((p) =>
        p.startsWith(`${category}/`)
      )
      specialForCategory.forEach((compPath) => {
        const exports = specialExports[compPath]
        const exportList = Array.isArray(exports) ? exports.join(", ") : exports
        exportContent += `export { ${exportList} } from "./components/${compPath}"\n`
      })
      exportContent += "\n"
    }

    // Types
    exportContent += "// Types\n"
    exportContent += 'export type { AsyncState } from "./hooks/use-async"\n'
    exportContent += 'export type { Theme, ThemeContextType } from "./hooks/use-theme"\n'
    exportContent += 'export type { DesignStyle } from "./hooks/use-design-style"\n'
    exportContent += 'export type { UserConfig } from "./types/config"\n'
    exportContent += 'export type { Toast } from "./components/core/toast"\n'
    exportContent += "\n"

    // Additional hooks and utilities
    exportContent += "// Additional Hooks\n"
    exportContent +=
      'export { useDesignStyle, DesignStyleProvider } from "./hooks/use-design-style"\n'
    exportContent += 'export { useClipboard } from "./hooks/use-clipboard"\n'
    exportContent += 'export { useClickOutside } from "./hooks/use-click-outside"\n'
    exportContent += 'export { useMouse } from "./hooks/use-mouse"\n'
    exportContent += 'export { useScrollProgress } from "./hooks/use-scroll-progress"\n'
    exportContent += 'export { useThemeGenerator } from "./hooks/use-theme-generator"\n'
    // ComponentRegistry is a server-side utility; do not re-export it for client bundles.

    // Write to src/index.ts
    const indexPath = path.join(__dirname, "..", "src", "index.ts")
    fs.writeFileSync(indexPath, exportContent)

    console.log("✅ Exports updated successfully")
    console.log(
      `📊 Generated exports for ${components.length + Object.keys(specialExports).length} components`
    )

    // Generate component metadata
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
    filePath: path.join(__dirname, "..", "src", "components", `${comp.path}.tsx`),
    exports: [comp.name],
  }))

  // Add special exports
  Object.entries(specialExports).forEach(([compPath, exports]) => {
    const [category, componentName] = compPath.split("/")
    metadata.push({
      name: componentName,
      path: compPath,
      category,
      filePath: path.join(__dirname, "..", "src", "components", `${compPath}.tsx`),
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
