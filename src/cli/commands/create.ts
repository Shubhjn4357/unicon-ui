import { promises as fs, existsSync } from "node:fs"
import path from "node:path"
import chalk from "chalk"
import { Command } from "commander"
import ora from "ora"
import prompts from "prompts"

export const create = new Command()
  .name("create")
  .description("Create a new component")
  .argument("[name]", "The name of the component")
  .action(async (name) => {
    let spinner: any
    try {
      let componentName = name

      if (!componentName) {
        const response = await prompts({
          type: "text",
          name: "name",
          message: "What is the name of the component?",
          validate: (value) => value.length > 0,
        })
        componentName = response.name
      }

      spinner = ora(`Creating ${componentName}...`).start()

      // Convert to PascalCase for file interaction but usage is mostly kebab-case for files?
      // Existing components seem to be kebab-case filenames.
      const fileName = `${componentName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}.tsx`
      const className =
        componentName.charAt(0).toUpperCase() +
        componentName.slice(1).replace(/-./g, (x: string) => x[1].toUpperCase())

      const targetDir = path.join(process.cwd(), "src", "components", "core")
      const targetPath = path.join(targetDir, fileName)

      if (existsSync(targetPath)) {
        spinner.fail(chalk.red(`Component '${fileName}' already exists.`))
        return
      }

      const content = `import * as React from "react"
import { cn } from "../../lib/utils"

export interface ${className}Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

/**
 * @name ${className}
 * @description A description for ${className}.
 * @status beta
 * @author Unicorn UI
 */
export function ${className}({ className, children, ...props }: ${className}Props) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}
`

      await fs.writeFile(targetPath, content)

      spinner.succeed(
        chalk.green(`Created component ${chalk.bold(className)} at src/components/core/${fileName}`)
      )

      console.log(chalk.gray("\nNext steps:"))
      console.log(chalk.gray("1. Add export in src/index.ts"))
      console.log(chalk.gray(`2. Run 'pnpm create:docs' (if available) or update docs manually`))
    } catch (error) {
      if (spinner) {
        spinner.fail(chalk.red("Failed to create component"))
      } else {
        console.error(chalk.red("Failed to create component"))
      }
      console.error(error)
    }
  })
