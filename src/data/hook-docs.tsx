import * as HookDemos from "@/components/docs/hook-demos"
import type { HookDoc } from "@/components/docs/types"

export const hooks: HookDoc[] = [
  {
    slug: "use-theme",
    title: "useTheme",
    description: "Access and modify the current theme (light, dark, system).",
    data: {
      title: "useTheme",
      description: "A hook to manage the application's color scheme preference.",
      examples: [
        {
          title: "Theme Switcher",
          preview: HookDemos.UseThemeDemo,
          code: `import { useTheme, Button } from "@unicorn-ui/ui"\n\nexport default function ThemeToggle() {\n  const { theme, setTheme } = useTheme()\n\n  return (\n    <div className="flex gap-2">\n        <Button onClick={() => setTheme("light")}>Light</Button>\n        <Button onClick={() => setTheme("dark")}>Dark</Button>\n    </div>\n  )\n}`,
        },
      ],
      props: [
        {
          name: "theme",
          type: "string",
          description: "Current active theme value",
          default: "system",
        },
        {
          name: "setTheme",
          type: "(theme: Theme) => void",
          description: "Function to update the theme",
          default: "-",
        },
        {
          name: "resolvedTheme",
          type: "'light' | 'dark'",
          description: "Effectively active theme (if system)",
          default: "light",
        },
      ],
    },
  },
  {
    slug: "use-copy-to-clipboard",
    title: "useCopyToClipboard",
    description: "Copy text to clipboard with state feedback.",
    data: {
      title: "useCopyToClipboard",
      description: "Provides a function to copy text and a boolean state indicating success.",
      examples: [
        {
          title: "Copy Button",
          preview: HookDemos.UseCopyToClipboardDemo,
          code: `import { useCopyToClipboard, Input, Button } from "@unicorn-ui/ui"\nimport { useState } from "react"\n\nexport default function CopyDemo() {\n  const [text, setText] = useState("Copy me")\n  const [copiedText, copy] = useCopyToClipboard()\n\n  return (\n    <div className="flex gap-2">\n      <Input value={text} onChange={(e) => setText(e.target.value)} />\n      <Button onClick={() => copy(text)}>{copiedText ? "Copied" : "Copy"}</Button>\n    </div>\n  )\n}`,
        },
      ],
      props: [
        {
          name: "copy",
          type: "(text: string) => Promise<boolean>",
          description: "Function to execute copy",
          default: "-",
        },
        {
          name: "copiedText",
          type: "string | null",
          description: "The copied text if successful, null otherwise",
          default: "null",
        },
      ],
    },
  },
  {
    slug: "use-async",
    title: "useAsync",
    description: "Handle async operations with loading, error, and value states.",
    data: {
      title: "useAsync",
      description: "A hook that bundles loading, error, and success states for any async function.",
      examples: [
        {
          title: "Async Data Fetching",
          preview: HookDemos.UseAsyncDemo,
          code: `import { useAsync, Button } from "@unicorn-ui/ui"\n\nconst fetchData = async () => {\n  await new Promise(resolve => setTimeout(resolve, 1000))\n  return "Data loaded!"\n}\n\nexport default function AsyncDemo() {\n  const { execute, status, value, error } = useAsync(fetchData, false)\n\n  return (\n    <div>\n      <Button onClick={execute} disabled={status === "pending"}>\n        {status === "pending" ? "Loading..." : "Fetch Data"}\n      </Button>\n      {status === "success" && <div>{value}</div>}\n      {status === "error" && <div>Error: {error?.message}</div>}\n    </div>\n  )\n}`,
        },
      ],
      props: [
        {
          name: "execute",
          type: "(...args: any[]) => Promise<any>",
          description: "Trigger the async operation",
          default: "-",
        },
        {
          name: "loading",
          type: "boolean",
          description: "True while operation is pending",
          default: "false",
        },
        { name: "data", type: "T | null", description: "Resolved value", default: "null" },
        {
          name: "error",
          type: "Error | null",
          description: "Error object if failed",
          default: "null",
        },
        {
          name: "reset",
          type: "() => void",
          description: "Reset state to initial values",
          default: "-",
        },
      ],
    },
  },
  {
    slug: "use-click-outside",
    title: "useClickOutside",
    description: "Detect clicks outside of a specified element.",
    data: {
      title: "useClickOutside",
      description:
        "A hook to handle click events outside a specific DOM element, useful for closing modals or dropdowns.",
      examples: [
        {
          title: "Close on Outside Click",
          preview: HookDemos.UseClickOutsideDemo,
          code: `import { useClickOutside, Button } from "@unicorn-ui/ui"\nimport { useState } from "react"\n\nexport default function ClickOutsideDemo() {\n  const [isOpen, setIsOpen] = useState(false)\n  const ref = useClickOutside(() => setIsOpen(false))\n\n  return (\n    <div>\n      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\n      {isOpen && (\n        <div ref={ref} className="bg-card p-4 border rounded shadow-lg">\n          Click outside me to close\n        </div>\n      )}\n    </div>\n  )\n}`,
        },
      ],
      props: [
        {
          name: "ref",
          type: "RefObject<HTMLElement>",
          description: "Ref to attach to the element",
          default: "-",
        },
        {
          name: "handler",
          type: "(event: MouseEvent | TouchEvent) => void",
          description: "Function called on outside click (argument)",
          default: "-",
        },
      ],
    },
  },
  {
    slug: "use-mouse",
    title: "useMouse",
    description: "Track mouse position relative to the viewport or an element.",
    data: {
      title: "useMouse",
      description: "Returns the x and y coordinates of the mouse cursor.",
      examples: [
        {
          title: "Mouse Tracker",
          preview: HookDemos.UseMouseDemo,
          code: `import { useMouse } from "@unicorn-ui/ui"\n\nexport default function MouseDemo() {\n  const { x, y } = useMouse()\n  return <div>Mouse position: {x}, {y}</div>\n}`,
        },
      ],
      props: [
        { name: "x", type: "MotionValue<number>", description: "X coordinate", default: "0" },
        { name: "y", type: "MotionValue<number>", description: "Y coordinate", default: "0" },
        { name: "smoothX", type: "MotionValue<number>", description: "Smoothed X", default: "0" },
        { name: "smoothY", type: "MotionValue<number>", description: "Smoothed Y", default: "0" },
        { name: "velocityX", type: "MotionValue<number>", description: "Velocity X", default: "0" },
        { name: "velocityY", type: "MotionValue<number>", description: "Velocity Y", default: "0" },
      ],
    },
  },
  {
    slug: "use-responsive",
    title: "useResponsive",
    description: "Responsive design hooks for checking screen sizes.",
    data: {
      title: "useResponsive",
      description:
        "Use different boolean flags (isMobile, isTablet, isDesktop) based on window width.",
      examples: [
        {
          title: "Responsive Text",
          preview: HookDemos.UseResponsiveDemo,
          code: `import { useResponsive } from "@unicorn-ui/ui"\n\nexport default function ResponsiveDemo() {\n  const { isMobile, isDesktop } = useResponsive()\n  return <div>{isMobile ? "Mobile View" : isDesktop ? "Desktop View" : "Tablet View"}</div>\n}`,
        },
      ],
      props: [
        { name: "isMobile", type: "boolean", description: "Width < 768px", default: "false" },
        {
          name: "isTablet",
          type: "boolean",
          description: "768px <= Width < 1024px",
          default: "false",
        },
        { name: "isDesktop", type: "boolean", description: "Width >= 1024px", default: "false" },
      ],
    },
  },
  {
    slug: "use-window-size",
    title: "useWindowSize",
    description: "Track the dimensions of the browser window.",
    data: {
      title: "useWindowSize",
      description: "Returns the current window width and height, updating on resize.",
      examples: [
        {
          title: "Responsive Debugger",
          preview: HookDemos.UseWindowSizeDemo,
          code: `import { useWindowSize } from "@unicorn-ui/ui"\n\nexport default function WindowSizeDemo() {\n  const { width, height } = useWindowSize()\n  return <div>{width} x {height}</div>\n}`,
        },
      ],
      props: [
        { name: "width", type: "number", description: "Viewport width in pixels", default: "0" },
        { name: "height", type: "number", description: "Viewport height in pixels", default: "0" },
      ],
    },
  },
  {
    slug: "use-scroll-progress",
    title: "useScrollProgress",
    description: "Track vertical scroll progress of the page.",
    data: {
      title: "useScrollProgress",
      description: "Returns a value from 0 to 1 indicating the scroll percentage.",
      examples: [
        {
          title: "Reading Progress Bar",
          preview: HookDemos.UseScrollProgressDemo,
          code: `import { useScrollProgress } from "@unicorn-ui/ui"\nimport { motion } from "framer-motion"\n\nexport default function ProgressBar() {\n  const { scrollYProgress } = useScrollProgress()\n  return <motion.div style={{ scaleX: scrollXProgress }} className="fixed top-0 left-0 h-1 bg-primary origin-left w-full" />\n}`,
        },
      ],
      props: [
        {
          name: "targetRef",
          type: "RefObject<HTMLElement>",
          description: "Optional ref to track scroll of specific element",
          default: "undefined",
        },
        {
          name: "scrollYProgress",
          type: "MotionValue<number>",
          description: "Raw Framer Motion value 0-1",
          default: "0",
        },
        {
          name: "smoothProgress",
          type: "MotionValue<number>",
          description: "Smoothed Framer Motion value",
          default: "0",
        },
      ],
    },
  },

  {
    slug: "use-announcer",
    title: "useAnnouncer",
    description: "Create screen reader announcements for dynamic content changes with aria-live regions.",
    data: {
      title: "useAnnouncer",
      description: "A hook that provides a function to announce messages to screen readers and a component to render the announcement region.",
      examples: [
        {
          title: "Status Announcements",
          preview: HookDemos.UseAnnouncerDemo,
          code: `import { useAnnouncer, Button } from "@unicorn-ui/ui"\n\nexport default function AnnouncerDemo() {\n  const { announce, announcer } = useAnnouncer()\n\n  const handleSave = async () => {\n    await saveData()\n    announce("Data saved successfully", "polite")\n  }\n\n  return (\n    <>\n      {announcer}\n      <Button onClick={handleSave}>Save</Button>\n    </>\n  )\n}`,
        },
      ],
      props: [
        {
          name: "announce",
          type: "(text: string, mode?: AriaLiveMode) => void",
          description: "Function to trigger a screen reader announcement",
          default: "-",
        },
        {
          name: "announcer",
          type: "ReactNode",
          description: "AriaLiveRegion component to render in your component tree",
          default: "-",
        },
      ],
    },
  },
]

export function getHookBySlug(slug: string) {
  return hooks.find((h) => h.slug === slug)
}

export function getAllHookSlugs() {
  return hooks.map((h) => h.slug)
}
