"use client"

import { Github, Sparkles } from "lucide-react"
import Link from "next/link"
import type * as React from "react"
import { cn } from "../../lib/utils"
import { Button } from "../core/button"
import { ThemeToggle } from "../feedback/theme-toggle"

export interface TopNavProps {
  brandName?: string
  brandLogo?: React.ReactNode
  brandHref?: string
  links?: {
    label: string
    href: string
    external?: boolean
  }[]
  rightContent?: React.ReactNode
  showThemeToggle?: boolean
  githubHref?: string
  className?: string
}

export function TopNav({
  brandName = "Unicorn UI",
  brandLogo = <Sparkles className="h-6 w-6 text-indigo-500" />,
  brandHref = "/",
  links = [
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/components" },
    { label: "Hooks", href: "/hooks" },
  ],
  rightContent,
  showThemeToggle = true,
  githubHref,
  className,
}: TopNavProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md",
        className
      )}
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={brandHref} className="mr-6 flex items-center space-x-2">
            {brandLogo}
            {brandName && <span className="hidden font-bold sm:inline-block">{brandName}</span>}
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search component could go here */}
          </div>
          <nav className="flex items-center space-x-2">
            {rightContent}
            {githubHref && (
              <Link href={githubHref} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            )}
            {showThemeToggle && <ThemeToggle />}
          </nav>
        </div>
      </div>
    </nav>
  )
}
