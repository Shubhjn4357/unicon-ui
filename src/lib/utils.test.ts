
import { cn } from "./utils"
import { describe, expect, it } from "vitest"

describe("utils", () => {
  describe("cn", () => {
    it("should merge class names correctly", () => {
      expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white")
    })

    it("should handle conditional classes", () => {
      expect(cn("bg-red-500", false && "text-white", "p-4")).toBe("bg-red-500 p-4")
    })

    it("should handle arrays", () => {
      expect(cn(["bg-red-500", "text-white"])).toBe("bg-red-500 text-white")
    })
    
    it("should handle typescript optional inputs", () => {
        expect(cn("bg-red-500", undefined, null)).toBe("bg-red-500")
    })
  })
})
