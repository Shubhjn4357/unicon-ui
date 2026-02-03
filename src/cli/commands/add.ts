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
  // The 'generate' command in component-registry.ts outputs 'filePath' (singular) for the main file.
  // Dependencies are listed in 'dependencies'.
  dependencies?: string[]
  registryDependencies?: string[]
}

export const add = new Command()
  .name("add")
  .description("Add a component to your project")
  .argument("[components...]", "The components to add")
  .action(async (components, opts) => {
    try {
      // Load registry from the generated JSON
      // We assume the CLI is run from project root or we can find it.
      const metadataPath = path.join(process.cwd(), "src", "registry", "component-metadata.json")

      let registry: ComponentMetadata[] = []
      if (existsSync(metadataPath)) {
        const data = await fs.readFile(metadataPath, "utf-8")
        registry = JSON.parse(data)
      } else {
        console.warn(chalk.yellow("Local registry metadata not found. Run 'pnpm unicorn-ui sync' first."))
        return
      }

      // Map legacy registry structure if needed or adapt logic
      // The new metadata has a list of objects.

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
        const entry = registry.find(c => c.name === componentName)
        if (!entry) {
          console.warn(chalk.yellow(`Component '${componentName}' not found in registry.`))
          continue
        }

        const spinner = ora(`Installing ${componentName}...`).start()

        // The metadata 'filePath' is like "core/button.tsx" or "src/components/core/button.tsx"
        // We probably want to download the file from the repo.
        // Let's assume metadata.filePath is relative to src/components if it's short, or full.
        // Looking at ComponentRegistry.analyzeComponent: 
        // filePath: filePath.replace(/\\/g, "/") -> which was passed as "core/accordion.tsx"
        // So it is "core/accordion.tsx".

        // We need to fetch from src/components/{entry.filePath}
        const fileUrl = `${BASE_URL}/src/components/${entry.files ? entry.files[0] : (entry as any).filePath}`
        // Note: The new metadata schema might not have 'files' array, but 'filePath' string. 
        // We should check the metadata format.
        // Assuming 'filePath' exists on the new metadata based on component-registry.ts

        // Fix: logic to support both/either or strictly use new metadata
        const remotePath = (entry as any).filePath
          ? `src/components/${(entry as any).filePath}`
          : (entry.files && entry.files[0]) // Fallback

        const url = `${BASE_URL}/${remotePath}`

        try {
          const response = await fetch(url)
          if (!response.ok) {
            // Try without src/components prefix if it failed? 
            // Or maybe the BASE_URL already points somewhere?
            // "https://raw.githubusercontent.com/Shubhjn4357/unicorn-ui/main/src/components/core/accordion.tsx"
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
          }
          const content = await response.text()

          const fileName = path.basename(remotePath)
          const targetDir = path.join(process.cwd(), "components", "ui")

          if (!existsSync(targetDir)) {
            await fs.mkdir(targetDir, { recursive: true })
          }

          const targetPath = path.join(targetDir, fileName)
          await fs.writeFile(targetPath, content)
        } catch (err) {
          spinner.fail(`Failed to install ${componentName}`)
          console.error(err)
          continue
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
