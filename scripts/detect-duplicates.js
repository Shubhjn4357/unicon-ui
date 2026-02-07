#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.join(__dirname, "..", "src", "components")
const map = new Map()

function walk(dir) {
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const full = path.join(dir, item)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) walk(full)
    else if (stat.isFile() && (item.endsWith(".tsx") || item.endsWith(".ts"))) {
      const name = path.basename(item, path.extname(item))
      if (!map.has(name)) map.set(name, [])
      map.get(name).push(full)
    }
  }
}

walk(root)

const duplicates = {}
for (const [name, paths] of map) {
  if (paths.length > 1) duplicates[name] = paths
}

const outPath = path.join(__dirname, "duplicate-report.json")
fs.writeFileSync(outPath, JSON.stringify(duplicates, null, 2))
console.log("Duplicate report written to", outPath)
console.log(Object.keys(duplicates).length, "duplicate names found")
