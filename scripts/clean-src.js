const fs = require("node:fs")
const path = require("node:path")

// Since we might not have glob, let's use a recursive function
function cleanDir(dir) {
  if (!fs.existsSync(dir)) return

  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      cleanDir(fullPath)
    } else {
      if (file.endsWith(".d.ts") || file.endsWith(".d.ts.map")) {
        fs.unlinkSync(fullPath)
        console.log(`Deleted: ${fullPath}`)
      }
    }
  }
}

console.log("Cleaning .d.ts files from src...")
cleanDir(path.join(__dirname, "../src"))
console.log("Clean complete.")
