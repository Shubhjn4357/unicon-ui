import { promises as fs, existsSync } from "node:fs"
import path from "node:path"
import chalk from "chalk"
import { Command } from "commander"
import ora from "ora"
import prompts from "prompts"

export const init = new Command()
  .name("init")
  .description("Initialize your project with unicorn-ui")
  .option("-y, --yes", "Skip confirmation prompt")
  .action(async (opts) => {
    try {
      const spinner = ora("Checking project configuration...").start()

      // 1. Check for tailwind.config.ts or .js
      const tailwindConfigPath = path.resolve(process.cwd(), "tailwind.config.ts")
      const tailwindConfigJsPath = path.resolve(process.cwd(), "tailwind.config.js")

      if (!existsSync(tailwindConfigPath) && !existsSync(tailwindConfigJsPath)) {
        spinner.fail("No tailwind.config.ts or tailwind.config.js found.")
        console.log(chalk.red("Please initialize a Tailwind CSS project first."))
        return
      }

      spinner.succeed("Project appears to be a Tailwind CSS project.")

      // 2. Ask for global css file
      if (!opts.yes) {
        const response = await prompts({
          type: "text",
          name: "css",
          message: "Where is your global CSS file?",
          initial: "app/globals.css",
        })
        // For now we just log it, but in real implementation we would append styles
        console.log(chalk.blue(`Noted global CSS at: ${response.css}`))
      }

      console.log(chalk.green("\nSuccess! Project initialized for unicorn-ui."))
      console.log(chalk.gray("You can now run 'npx unicorn-ui add [component]' to add components."))
    } catch (error) {
      console.error(chalk.red("Failed to initialize project:"))
      console.error(error)
    }
  })
