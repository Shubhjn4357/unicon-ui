import { promises as fs, existsSync } from "node:fs"
import path from "node:path"
import chalk from "chalk"
import { Command } from "commander"
import ora from "ora"
import prompts from "prompts"

// We need to read the JSON file. In a real published CLI, this would be bundled or fetched.
// For this repo's context, we'll read it from the local registry output.
// In a distributed scenario, we might fetch this from the GitHub raw URL or package.

const BASE_URL = "https://raw.githubusercontent.com/Shubhjn4357/unicorn-ui/main"

// Define a minimal type for the metadata we need
interface ComponentMetadata {
  name: string
  files: string[] // legacy registry had 'files', metadata has 'filePath' (single?) or we need to derive?
  filePath?: string
  // The 'generate' command in component-registry.ts outputs 'filePath' (singular) for the main file.
  // Dependencies are listed in 'dependencies'.
  dependencies?: string[]
  registryDependencies?: string[]
}

export const add = new Command()
  .name("add")
  .description("Add a component to your project")
  .argument("[components...]", "The components to add")
  .option("-b, --block", "Install a block (complex component composition)")
  .action(async (components, opts) => {
    try {
      // Load registry from the generated JSON
      const metadataPath = path.join(process.cwd(), "src", "registry", "component-metadata.json")

      let registry: ComponentMetadata[] = []
      if (existsSync(metadataPath)) {
        const data = await fs.readFile(metadataPath, "utf-8")
        registry = JSON.parse(data)
      } else {
        console.warn(
          chalk.yellow("Local registry metadata not found. Run 'pnpm unicorn-ui sync' first.")
        )
        return
      }

      let componentsToAdd = components

      if (!componentsToAdd?.length) {
        const response = await prompts({
          type: "multiselect",
          name: "components",
          message: "Which components would you like to add?",
          choices: registry.map((c) => ({
            title: c.name,
            value: c.name,
          })),
        })
        componentsToAdd = response.components
      }

      if (!componentsToAdd?.length) {
        console.log(chalk.yellow("No components selected."))
        return
      }

      for (const componentName of componentsToAdd) {
        let entry = registry.find((c) => c.name === componentName)

        // If --block flag is used, we might look for it differently or it might just be in the registry 
        // but we handle the path differently. 
        // For now, let's assume blocks are just components that reside in src/components/blocks
        // OR we can explicitly look for a "blocks" type in metadata if we had it.
        // Given current metadata structure, we'll trust the registry entry.
        // usage: pnpm unicorn-ui add my-block --block

        if (!entry && opts.block) {
          // Fallback: Try to construct an entry if not found in local registry but requested as block
          // This assumes the user knows the block exists remotely.
          entry = {
            name: componentName,
            files: [`blocks/${componentName}.tsx`],
            filePath: `blocks/${componentName}.tsx`,
            dependencies: []
          }
        }

        if (!entry) {
          console.warn(chalk.yellow(`Component '${componentName}' not found in registry.`))
          continue
        }

        const spinner = ora(`Installing ${componentName}...`).start()

        // Determine remote path based on flag or entry
        // If opts.block is true, force looking into 'blocks/' if the entry path doesn't already allow it.
        // However, standard components have filePath like 'core/button.tsx'.
        // Blocks might contain multiple files.

        const filesToDownload = entry.files || (entry.filePath ? [entry.filePath] : [])

        if (filesToDownload.length === 0) {
          spinner.fail(`No files defined for ${componentName}`)
          continue
        }

        for (const file of filesToDownload) {
        // If it's a block, source might be src/components/blocks/... or just src/blocks/...
        // We'll standardise on src/components/ for now as per `update-exports.js` discovery.
        // If the file path in metadata is relative to src/components, we are good.

          // Construct URL
          // If it starts with src/, use it, otherwise prepend src/components/
          let remotePath = file
          if (!file.startsWith("src/")) {
            remotePath = `src/components/${file}`
          }

          const url = `${BASE_URL}/${remotePath}`

          try {
            const response = await fetch(url)
            if (!response.ok) {
                 throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
               }
               const content = await response.text()

               // Determine target directory
               // Default: components/ui
               // If block: components/blocks

               let targetDir = path.join(process.cwd(), "components", "ui")
               if (opts.block || file.includes("blocks/")) {
                 targetDir = path.join(process.cwd(), "components", "blocks")
               }

               if (!existsSync(targetDir)) {
                 await fs.mkdir(targetDir, { recursive: true })
               }

               const fileName = path.basename(file)
               const targetPath = path.join(targetDir, fileName)
               await fs.writeFile(targetPath, content)
             } catch (err) {
               spinner.fail(`Failed to download ${file}`)
               console.error(err)
               // Don't continue to next file if one fails? Or try best effort?
               // Best effort for now.
             }
        }

        spinner.succeed(chalk.green(`Installed ${componentName}`))

        if (entry.dependencies?.length) {
          console.log(chalk.gray(`  - Dependencies: ${entry.dependencies.join(", ")}`))
          console.log(
            chalk.gray(`  (Run 'npm install ${entry.dependencies.join(" ")}' to install)`)
          )
        }
      }

      console.log(chalk.green("\nDone."))
    } catch (error) {
      console.error(chalk.red("Failed to add components:"))
      console.error(error)
    }
  })
