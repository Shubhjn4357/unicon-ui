"use client"

import { Button, Badge, AnimatedGradientText, GridPattern, RainbowButton, Particles, Safari } from "@unicorn-ui/ui"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function HeroSectionNew() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <GridPattern
                    className={cn(
                        "mask-[radial-gradient(900px_circle_at_center,white,transparent)]",
                        "opacity-40 animate-in fade-in duration-1000"
                    )}
                />
                <Particles
                    className="absolute inset-0 opacity-40"
                    quantity={100}
                    ease={80}
                    color="#ffffff text-foreground"
                    refresh
                />
            </div>

            {/* Gradient Orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20 rounded-full blur-[120px] pointer-events-none -z-10"
                style={{ background: 'radial-gradient(circle, var(--color-brand) 0%, transparent 70%)' }} />

            <div className="relative  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-dvh flex-col items-center text-center">
                    {/* Announcement Pill */}
                    <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 fade-in">
                        <AnimatedGradientText className="px-6 py-2 rounded-full border border-brand/20 bg-surface/50 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform">
                            <span className="flex items-center gap-2 text-sm font-medium">
                                ✨ <span className="inline-block bg-linear-to-r from-brand to-accent bg-clip-text text-transparent">v2.0 is now available</span>
                                <span className="text-foreground-secondary mx-2">|</span>
                                <span className="flex items-center text-foreground-secondary hover:text-foreground">Explore <span className="ml-1">→</span></span>
                            </span>
                        </AnimatedGradientText>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance max-w-5xl animate-in slide-in-from-bottom-8 duration-1000 fade-in fill-mode-both delay-100">
                        The
                        <span className="mx-4 bg-linear-to-r from-brand via-accent to-brand bg-clip-text text-transparent">
                            Ultimate
                        </span>
                        <br />
                        <span className="block mt-2 text-foreground">
                            UI Kit for React
                        </span>
                    </h1>

                    <p className="mt-8 text-xl md:text-2xl text-foreground-secondary max-w-2xl text-pretty leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 fade-in fill-mode-both delay-200">
                        100+ production-ready components. Built with Framer Motion and Tailwind CSS.
                        No dependencies, just copy and paste.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-in slide-in-from-bottom-8 duration-1000 fade-in fill-mode-both delay-300">
                        <Link href="/docs/components">
                            <RainbowButton className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto">
                                Start Building
                            </RainbowButton>
                        </Link>
                        <Link href="/docs">
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full border-foreground/10 bg-surface/50 backdrop-blur-sm hover:bg-surface hover:text-foreground transition-all w-full sm:w-auto"
                            >
                                Documentation
                            </Button>
                        </Link>
                    </div>

                    {/* Hero Visual - Safari Mockup */}
                    <div className="mt-20 w-full max-w-6xl mx-auto animate-in slide-in-from-bottom-12 duration-1000 fade-in fill-mode-both delay-500 perspective-1000">
                        <div className="relative group transform transition-all duration-500 hover:rotate-x-2">
                            <div className="absolute -inset-1 bg-linear-to-r from-brand to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                            <Safari
                                url="unicorn-ui.com"
                                className="w-full shadow-2xl rounded-xl border border-border bg-surface"
                                src="/hero-dark.png"
                            >
                                {/* Mock Content inside Safari */}
                                <div className="relative w-full h-[400px] md:h-[600px] bg-surface overflow-hidden flex items-center justify-center">
                                    <GridPattern className="opacity-20 translate-y-8" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 opacity-60 grayscale-50 scale-90 blur-[1px]">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="h-40 w-40 md:h-56 md:w-56 rounded-xl border border-border bg-surface-elevated/50 shadow-sm" />
                                            ))}
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-surface/80 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl text-center transform scale-110">
                                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-br from-foreground to-foreground/60">Ready for Production</h3>
                                                <p className="text-foreground-secondary mt-2">Just copy, paste and ship.</p>
                                                <div className="mt-6 flex gap-3 justify-center">
                                                    <div className="h-2 w-2 rounded-full bg-red-400" />
                                                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Safari>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
