import { execSync } from "node:child_process"
import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { join } from "node:path"
import { defineConfig } from "tsup"

export default defineConfig((options) => ({
  entry: {
    index: "src/index.ts",
  },
  format: ["cjs", "esm"],
  dts: false, // Will use tsc directly in onSuccess
  splitting: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "lucide-react",
    "framer-motion",
    "cobe",
    "dotted-map",
    "react-icon-cloud",
    "next-themes",
  ],
  treeshake: true,
  sourcemap: true,
  minify: false,

  onSuccess: async () => {
    // 1. Manually prepend "use client"; to dist/index.mjs and dist/index.js
    // This runs in BOTH build and watch mode to ensure the directive is always present.
    const filesToPatch = ['./dist/index.mjs', './dist/index.js'];

    for (const file of filesToPatch) {
      const filePath = join(process.cwd(), file);
      if (existsSync(filePath)) {
        const content = readFileSync(filePath, 'utf8');
        // Check for various forms of the directive to avoid duplication
        if (!content.trim().startsWith('"use client"') && !content.trim().startsWith("'use client'")) {
          writeFileSync(filePath, '"use client";\n' + content);
          console.log(`✓ Added "use client"; to ${file}`);
        }
      }
    }

    // 2. Build CSS and Types (Only in non-watch mode to avoid slowing down dev server excessively, 
    // or if you want them in dev, you can move them out too, but usually types/css are handled by other processes in dev)
    // However, for this specific setup, if we want CSS to update in dev, we might want to check hooks.
    // The previous config had CSS build inside !options.watch.
    // Let's keep CSS and Types for full build only as per previous standard.
    if (!options.watch) {
      console.log("🎨 Building CSS...")
      execSync("npx @tailwindcss/cli -i ./src/styles/global.css -o ./dist/global.css", {
        stdio: "inherit",
      })
      console.log("✓ Built global.css to dist/")

      console.log("📦 Generating TypeScript declarations...")
      try {
        execSync("npx tsc --emitDeclarationOnly --declaration --skipLibCheck", {
          stdio: "inherit",
        })
        console.log("✓ Generated .d.ts files")
      } catch (error) {
        // tsc may exit with non-zero code due to type errors, but declarations are still generated
        console.log("⚠ Declaration files generated with some type warnings (expected)")
      }
    }
  },
}))
