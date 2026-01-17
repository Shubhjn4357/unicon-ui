"use client"

import { Button, Badge, AnimatedGradientText, GridPattern, RainbowButton, HeroVideoDialog } from "@unicorn-ui/ui"
import { cn } from "@/lib/utils"

export function HeroSectionNew() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <GridPattern
                    className={cn(
                        "mask-[radial-gradient(900px_circle_at_center,white,transparent)]",
                        "opacity-40 animate-in fade-in duration-1000"
                    )}
                />
            </div>

            {/* Gradient Orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20 rounded-full blur-[120px] pointer-events-none -z-10"
                style={{ background: 'radial-gradient(circle, var(--color-brand) 0%, transparent 70%)' }} />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
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
                        The Ultimate
                        <span className="block mt-2 bg-linear-to-r from-foreground via-foreground/80 to-foreground/50 bg-clip-text text-transparent">
                            UI Kit for React
                        </span>
                    </h1>

                    <p className="mt-8 text-xl md:text-2xl text-foreground-secondary max-w-2xl text-pretty leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 fade-in fill-mode-both delay-200">
                        100+ production-ready components. Built with Framer Motion and Tailwind CSS.
                        No dependencies, just copy and paste.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 animate-in slide-in-from-bottom-8 duration-1000 fade-in fill-mode-both delay-300">
                        <RainbowButton className="h-14 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                            Start Building
                        </RainbowButton>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full border-foreground/10 bg-surface/50 backdrop-blur-sm hover:bg-surface hover:text-foreground transition-all"
                        >
                            Documentation
                        </Button>
                    </div>

                    {/* Hero Video/Visual */}
                    <div className="mt-20 w-full max-w-6xl mx-auto animate-in slide-in-from-bottom-12 duration-1000 fade-in fill-mode-both delay-500">
                        <div className="relative rounded-xl border border-border bg-surface shadow-2xl overflow-hidden aspect-video group">
                            <div className="absolute inset-0 bg-linear-to-tr from-brand/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <HeroVideoDialog
                                videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=4Pj3Xz2s3Q9y-7z_"
                                thumbnailSrc="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75"
                                thumbnailAlt="Unicorn UI Demo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
