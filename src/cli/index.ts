#!/usr/bin/env node
import { Command } from "commander"
import { add } from "./commands/add"
import { init } from "./commands/init"
import { sync } from "./commands/sync"
import { create } from "./commands/create"

const main = async () => {
  // const packageInfo = await getPackageInfo()

  const program = new Command()
    .name("unicorn-ui")
    .description("CLI for adding components and dependencies to your project")
    .version("0.1.0")

  program.addCommand(init)
  program.addCommand(add)
  program.addCommand(sync)
  program.addCommand(create)

  program.parse()
}

main()
