import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/tests/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "src/components/mocks/**",
        "src/components/docs/**",
        "dist/**",
        "**/*.d.ts",
        "**/*.config.ts",
      ],
    },
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
