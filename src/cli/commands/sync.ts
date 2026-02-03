import { Command } from "commander"
import chalk from "chalk"
import ora from "ora"
import { ComponentRegistry } from "../../registry/component-registry"

export const sync = new Command()
  .name("sync")
  .description("Sync and regenerate component registry metadata")
  .action(async () => {
    try {
      const spinner = ora("Syncing component registry...").start()
      
      const registry = new ComponentRegistry()
      registry.generate()
      
      spinner.succeed(chalk.green("Registry metadata synced successfully"))
    } catch (error) {
      console.error(chalk.red("Failed to sync registry:"))
      console.error(error)
      process.exit(1)
    }
  })
