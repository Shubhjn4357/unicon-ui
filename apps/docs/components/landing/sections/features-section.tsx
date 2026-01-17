"use client"

import {
    BentoGrid,
    BentoCard,
    Globe,
    CommandMenu,
    AnimatedList,
    Particles,
    BorderBeam,
    OrbitingCircles
} from "@unicorn-ui/ui"
import {
    Zap,
    Layout,
    Palette,
    Globe as GlobeIcon,
    Terminal,
    Sparkles
} from "lucide-react"

export function FeaturesSection() {
    return (
        <section className="py-24 px-4 md:px-8 relative bg-surface-elevated/30" id="features">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Everything you need
                    </h2>
                    <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                        A complete toolkit for building modern, high-performance web applications.
                    </p>
                </div>

                <BentoGrid className="lg:grid-rows-3">
                    <BentoCard
                        name="Global Scale"
                        description="Built-in localization and CDN support."
                        href="/docs"
                        cta="Learn more"
                        className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
                        background={<div className="absolute inset-0 flex items-center justify-center opacity-50"><Globe className="h-[400px]" /></div>}
                        Icon={GlobeIcon}
                    />
                    <BentoCard
                        name="Blazing Fast"
                        description="Optimized for speed with zero runtime overhead."
                        href="/docs"
                        cta="View benchmarks"
                        className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
                        background={<div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent" />}
                        Icon={Zap}
                    />
                    <BentoCard
                        name="Theming"
                        description="Full customizable themes with CSS variables."
                        href="/docs/theming"
                        cta="Explore themes"
                        className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
                        background={<Particles className="absolute inset-0 opacity-50" quantity={30} />}
                        Icon={Palette}
                    />
                    <BentoCard
                        name="Integrations"
                        description="Works with your favorite libraries."
                        href="/docs"
                        cta="View integrations"
                        className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
                        background={
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <OrbitingCircles iconSize={30} radius={60} reverse speed={1}>
                                    <span className="i-lucide-figma text-2xl" />
                                    <span className="i-lucide-github text-2xl" />
                                    <span className="i-lucide-slack text-2xl" />
                                </OrbitingCircles>
                            </div>
                        }
                        Icon={Terminal}
                    />
                    <BentoCard
                        name="Animations"
                        description="Smooth, 60fps animations powered by Framer Motion."
                        href="/docs/components"
                        cta="See showcase"
                        className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
                        background={<div className="absolute inset-0 flex items-center justify-center"><BorderBeam size={150} duration={6} /></div>}
                        Icon={Sparkles}
                    />
                </BentoGrid>
            </div>
        </section>
    )
}
