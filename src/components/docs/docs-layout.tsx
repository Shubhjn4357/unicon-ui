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
  Terminal,
  Type,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { getSidebarData } from "@/data/component-docs"

import { useLocalStorage } from "../../hooks/use-async"

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const sidebarData = getSidebarData()

  // Persist opened accordion items
  const [openedCategories, setOpenedCategories] = useLocalStorage<string[]>(
    "docs-accordion-state",
    ["Getting Started", "Components"]
  )

  const componentAccordionItems = sidebarData.map(
    (category: { name: string; items: { title: string; slug: string }[] }) => ({
      id: category.name,
      title: category.name,
      content: (
        <div className="flex flex-col space-y-1 pl-2">
          {category.items.map((item: { title: string; slug: string }) => {
            const href = `/docs/components/${item.slug}`
            return (
              <Link key={item.slug} href={href} className="block">
                <SidebarItem
                  active={pathname === href}
                  className="text-sm py-1.5 h-auto text-muted-foreground aria-[current=page]:text-foreground"
                >
                  {item.title}
                </SidebarItem>
              </Link>
            )
          })}
        </div>
      ),
    })
  )

  return (
    <div className="flex items-start">
      <CollapsibleSidebar
        className="sticky top-14 h-[calc(100vh-3.5rem)] w-64 border-r bg-background/50 backdrop-blur-xl"
        storageKey="docs-sidebar-collapsed"
      >
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
            <Link href="/docs/cli" className="block">
              <SidebarItem
                icon={<Terminal className="h-4 w-4" />}
                active={pathname === "/docs/cli"}
              >
                CLI
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
              value={openedCategories}
              onValueChange={(val) => setOpenedCategories(val as string[])}
              className="w-full space-y-1"
            />
          </div>
        </div>
      </CollapsibleSidebar>
      <main className="flex-1 min-w-0 bg-background">{children}</main>
    </div>
  )
}
