"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button, ThemeToggle, CommandMenu } from "@unicorn-ui/ui"
import { Menu, X, Sparkles, Search, Github, Book, Box, Eye, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Docs", href: "/docs", icon: <Book className="h-4 w-4" /> },
        { name: "Components", href: "/docs/components", icon: <Box className="h-4 w-4" /> },
        { name: "Showcase", href: "#showcase", icon: <Eye className="h-4 w-4" /> },
    ]

    const commandItems = [
        {
            id: "home",
            label: "Home",
            group: "Pages",
            icon: <span className="i-lucide-home" />,
            onSelect: () => window.location.href = "/",
            shortcut: "H",
        },
        {
            id: "docs",
            label: "Documentation",
            group: "Pages",
            icon: <span className="i-lucide-book" />,
            onSelect: () => window.location.href = "/docs",
            shortcut: "D",
        },
        {
            id: "components",
            label: "Components",
            group: "Pages",
            icon: <span className="i-lucide-box" />,
            onSelect: () => window.location.href = "/docs/components",
            shortcut: "C",
        },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-surface/80 backdrop-blur-xl border-border py-2"
                    : "bg-surface/0 border-transparent py-4"
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent overflow-hidden shadow-lg shadow-brand/20 transition-transform group-hover:scale-105 duration-300">
                            <Sparkles className="h-6 w-6 text-white" />
                            <div className="absolute inset-0 bg-white/20 group-hover:opacity-0 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:text-foreground transition-colors">
                            Unicorn UI
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-2 text-sm font-medium text-foreground-secondary hover:text-brand transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all hover:after:w-full"
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Utilities (Search, Theme, GitHub) */}
                    <div className="hidden md:flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-foreground-secondary hover:text-foreground hover:bg-surface-elevated"
                            onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
                        >
                            <span className="sr-only">Search</span>
                            <Search className="h-5 w-5" />
                        </Button>
                        <ThemeToggle />
                        <Link href="https://github.com" target="_blank" rel="noreferrer">
                            <Button variant="ghost" size="icon" className="text-foreground-secondary hover:text-foreground hover:bg-surface-elevated">
                                <Github className="h-5 w-5" />
                            </Button>
                        </Link>

                        <div className="pl-2">
                            <Link href="/docs/components">
                                <Button size="sm" className="bg-brand text-white hover:bg-brand-hover shadow-lg shadow-brand/20 transition-all hover:scale-105 active:scale-95">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                        {/* Hidden Command Menu for Search Handling */}
                        <div className="hidden">
                            <CommandMenu items={commandItems} />
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-foreground-secondary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-border bg-surface/95 backdrop-blur-xl rounded-xl border shadow-xl animate-in slide-in-from-top-2">
                        <div className="flex flex-col gap-1 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-3 text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between px-4 py-3 border-t border-border mt-2">
                                <span className="text-sm font-medium text-foreground-secondary">Theme</span>
                                <ThemeToggle />
                            </div>
                            <div className="flex flex-col gap-3 pt-4">
                                <Link href="/docs/components" onClick={() => setMobileMenuOpen(false)}>
                                    <Button size="sm" className="w-full bg-brand text-white shadow-lg shadow-brand/20">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
