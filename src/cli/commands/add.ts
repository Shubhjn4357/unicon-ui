import { Command } from "commander"
import chalk from "chalk"
import prompts from "prompts"
import ora from "ora"
import { existsSync, promises as fs } from "fs"
import path from "path"
import { registry } from "../registry"

const BASE_URL = "https://raw.githubusercontent.com/Shubhjn4357/unicorn-ui/main"

export const add = new Command()
  .name("add")
  .description("Add a component to your project")
  .argument("[components...]", "The components to add")
  .action(async (components, opts) => {
    try {
      let componentsToAdd = components

      if (!componentsToAdd?.length) {
        const response = await prompts({
          type: "multiselect",
          name: "components",
          message: "Which components would you like to add?",
          choices: Object.keys(registry).map((key) => ({
            title: registry[key].name,
            value: key,
          })),
        })
        componentsToAdd = response.components
      }

      if (!componentsToAdd?.length) {
        console.log(chalk.yellow("No components selected."))
        return
      }

      for (const componentName of componentsToAdd) {
        const entry = registry[componentName]
        if (!entry) {
          console.warn(chalk.yellow(`Component '${componentName}' not found in registry.`))
          continue
        }

        const spinner = ora(`Installing ${componentName}...`).start()

        for (const filePath of entry.files) {
          // Construct URL to fetch from GitHub (assuming standard structure)
          // Since the filePath in registry is like "src/components/...", we append it to BASE_URL
          const url = `${BASE_URL}/${filePath}`

          try {
            const response = await fetch(url)
            if (!response.ok) {
              throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
            }
            const content = await response.text()

            const fileName = path.basename(filePath) // button.tsx
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
        }

        spinner.succeed(chalk.green(`Installed ${componentName}`))

        if (entry.dependencies?.length) {
          console.log(chalk.gray(`  - Dependencies: ${entry.dependencies.join(", ")}`))
          console.log(chalk.gray(`  (Run 'npm install ${entry.dependencies.join(" ")}' to install)`))
        }
      }

      console.log(chalk.green("\nDone."))

    } catch (error) {
      console.error(chalk.red("Failed to add components:"))
      console.error(error)
    }
  })

