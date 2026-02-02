"use client"

import {
  CollapsibleSidebar,
  SidebarItem,
  SidebarSection,
} from "@/components/layout/collapsible-sidebar-new"
import { Accordion } from "@unicorn-ui/ui"
import {
  BookOpen,
  Box,
  Download,
  Image,
  Layers,
  LayoutGrid,
  Settings,
  Type,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Component Categories
const CATEGORIES = [
  {
    name: "Core",
    icon: <Box className="h-4 w-4" />,
    items: [
      "Accordion",
      "Alert",
      "Avatar",
      "Badge",
      "Button",
      "Card",
      "Checkbox",
      "Dialog",
      "Dropdown",
      "Input",
      "Label",
      "Progress",
      "Radio",
      "Select",
      "Slider",
      "Switch",
      "Textarea",
    ],
  },
  {
    name: "Layout",
    icon: <LayoutGrid className="h-4 w-4" />,
    items: [
      "Animated Tabs",
      "Avatar Circles",
      "Bento Grid",
      "Collapsible Sidebar",
      "Dock",
      "File Tree",
      "Marquee",
      "Sidebar",
      "Split Layout",
      "Tabs",
      "Timeline",
    ],
  },
  {
    name: "Text",
    icon: <Type className="h-4 w-4" />,
    items: [
      "Animated Gradient Text",
      "Blur Text",
      "Fade Text",
      "Flip Text",
      "Hyper Text",
      "Morphing Text",
      "Number Ticker",
      "Sparkles Text",
      "Typing Text",
      "Word Pull Up",
    ],
  },
  {
    name: "Backgrounds",
    icon: <Image className="h-4 w-4" />,
    items: [
      "Aurora Background",
      "Dot Pattern",
      "Grid Pattern",
      "Meteors",
      "Particles",
      "Retro Grid",
      "Shooting Stars",
      "Stars",
    ],
  },
  {
    name: "Special",
    icon: <Zap className="h-4 w-4" />,
    items: [
      "3D Card",
      "Animated Beam",
      "Border Beam",
      "Confetti",
      "Cool Mode",
      "Magic Card",
      "Orbiting Circles",
      "Shimmer Button",
      "Velocity Scroll",
    ],
  },
  {
    name: "Docs",
    icon: <BookOpen className="h-4 w-4" />,
    items: [
      "Component Playground",
    ],
  },
]

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const componentAccordionItems = CATEGORIES.map((category) => ({
    id: category.name,
    title: category.name,
    content: (
      <div className="flex flex-col space-y-1 pl-2">
        {category.items.map((item) => {
          const slug = item.toLowerCase().replace(/\s+/g, "-")
          const href = `/docs/components/${slug}`
          return (
            <Link key={slug} href={href} className="block">
              <SidebarItem
                active={pathname === href}
                className="text-sm py-1.5 h-auto text-muted-foreground aria-[current=page]:text-foreground"
              >
                {item}
              </SidebarItem>
            </Link>
          )
        })}
      </div>
    ),
  }))

  return (
    <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
      <CollapsibleSidebar className="w-64 border-r bg-background/50 backdrop-blur-xl">
        <div className="py-4 px-2 space-y-6">
          <SidebarSection title="Getting Started">
            <Link href="/docs" className="block">
              <SidebarItem icon={<BookOpen className="h-4 w-4" />} active={pathname === "/docs"}>
                Introduction
              </SidebarItem>
            </Link>
            <Link href="/docs/installation" className="block">
              <SidebarItem
                icon={<Download className="h-4 w-4" />}
                active={pathname === "/docs/installation"}
              >
                Installation
              </SidebarItem>
            </Link>
            <Link href="/docs/theming" className="block">
              <SidebarItem
                icon={<Layers className="h-4 w-4" />}
                active={pathname === "/docs/theming"}
              >
                Theming
              </SidebarItem>
            </Link>
            <Link href="/docs/configuration" className="block">
              <SidebarItem
                icon={<Settings className="h-4 w-4" />}
                active={pathname === "/docs/configuration"}
              >
                Configuration
              </SidebarItem>
            </Link>
            <Link href="/docs/configuration/templates" className="block">
              <SidebarItem
                icon={<LayoutGrid className="h-4 w-4" />}
                active={pathname === "/docs/configuration/templates"}
              >
                Templates
              </SidebarItem>
            </Link>
          </SidebarSection>

          <div className="space-y-2">
            <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase">
              Components
            </h4>
            <Accordion
              items={componentAccordionItems}
              type="multiple"
              defaultValue={[]}
              className="w-full space-y-1"
            />
          </div>

          <SidebarSection title="Hooks">
            <Link href="/docs/hooks/use-theme" className="block">
              <SidebarItem active={pathname === "/docs/hooks/use-theme"}>useTheme</SidebarItem>
            </Link>
            <Link href="/docs/hooks/use-window-size" className="block">
              <SidebarItem active={pathname === "/docs/hooks/use-window-size"}>
                useWindowSize
              </SidebarItem>
            </Link>
            <Link href="/docs/hooks/use-copy-to-clipboard" className="block">
              <SidebarItem active={pathname === "/docs/hooks/use-copy-to-clipboard"}>
                useCopyToClipboard
              </SidebarItem>
            </Link>
          </SidebarSection>
        </div>
      </CollapsibleSidebar>
      <main className="flex-1 overflow-y-auto bg-background">{children}</main>
    </div>
  )
}
