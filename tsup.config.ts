import { execSync } from "node:child_process"
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/cli/index.ts"],
  format: ["cjs", "esm"],
  dts: false, // Disable tsup dts, use manual tsc
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  minify: false,
  external: ["react", "react-dom", "framer-motion", "lucide-react", "next", "next-themes"],
  async onSuccess() {
    // Consolidate CSS files into a single dist/styles.css
    try {
      mkdirSync("dist", { recursive: true })

      // Read both CSS files
      const designSystem = readFileSync("src/styles/design-system.css", "utf-8")
      const globals = readFileSync("src/styles/globals.css", "utf-8")

      // Remove the @import line from globals and combine
      const globalsWithoutImport = globals.replace(
        /@import\s+['"]\.\/design-system\.css['"];?\s*/g,
        ""
      )

      // Combine: design-system first, then globals
      const combined = `${designSystem}\n\n${globalsWithoutImport}`

      // Write combined CSS
      writeFileSync("dist/styles.css", combined)

      console.log("✓ Copied and consolidated CSS files to dist/styles.css")
    } catch (error) {
      console.error("Failed to copy CSS files:", error)
    }

    // Generate Types
    try {
      console.log("Generating types...")
      // Use specific build config that only targets src/
      execSync(
        "pnpm tsc -p tsconfig.build.json --declaration --emitDeclarationOnly --outDir dist/types",
        { stdio: "inherit" }
      )

      // Copy types to dist root (since rootDir is src, output is flat)
      cpSync("dist/types", "dist", { recursive: true })

      // Cleanup types dir
      rmSync("dist/types", { recursive: true, force: true })

      console.log("✓ Generated and moved types to dist")
    } catch (err) {
      console.error("Failed to generate types:", err)
    }

    console.log("✓ Built package successfully")
    console.log("📦 Package ready for publishing")
  },
})
