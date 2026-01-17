"use client"

import {
    Marquee,
    TweetCard,
    SpotlightCard,
    NeonGradientCard,
    MagicCard,
    Card,
    Badge,
    GridPattern
} from "@unicorn-ui/ui"

export function ComponentShowcaseNew() {
    return (
        <section className="py-24 relative overflow-hidden" id="showcase">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <GridPattern className="opacity-20" />
            </div>

            <div className="mx-auto max-w-7xl px-4 mb-16 text-center">
                <Badge variant="outline" className="mb-4">Library</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Component Showcase
                </h2>
                <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                    See what's possible with Unicorn UI.
                </p>
            </div>

            <div className="relative flex flex-col gap-8">
                {/* First Marquee - Cards */}
                <Marquee pauseOnHover className="[--duration:40s]">
                    <SpotlightCard className="w-[300px] h-[300px] p-6 mx-4">
                        <h3 className="text-2xl font-bold mb-2">Spotlight</h3>
                        <p className="text-foreground-secondary">Move your mouse to reveal the gradient spotlight effect.</p>
                    </SpotlightCard>

                    <NeonGradientCard className="w-[300px] h-[300px] mx-4 items-center justify-center">
                        <span className="text-2xl font-bold text-white z-10">Neon Glow</span>
                    </NeonGradientCard>

                    <MagicCard className="w-[300px] h-[300px] p-6 mx-4" gradientColor="var(--color-brand)">
                        <h3 className="text-2xl font-bold mb-2">Magic Card</h3>
                        <p className="text-foreground-secondary">Hover to see the border follow your cursor.</p>
                    </MagicCard>

                    <div className="w-[300px] h-[300px] mx-4 border border-border rounded-xl bg-surface p-6 flex flex-col justify-center items-center">
                        <Badge className="mb-4">Badge</Badge>
                        <Badge variant="secondary" className="mb-4">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                </Marquee>

                {/* Second Marquee - Tweets/Social */}
                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    <TweetCard
                        author="Sarah Drasner"
                        content="Unicorn UI is absolutely stunning. The animations are top notch!"
                        className="mx-4 min-w-[300px]"
                    />
                    <TweetCard
                        author="Guillermo Rauch"
                        content="The speed and quality of these components is impressive."
                        className="mx-4 min-w-[300px]"
                    />
                    <TweetCard
                        author="Shadcn"
                        content="A great alternative for those who want more dazzle."
                        className="mx-4 min-w-[300px]"
                    />
                    <TweetCard
                        author="Design Twitter"
                        content="Finally a library that cares about micro-interactions."
                        className="mx-4 min-w-[300px]"
                    />
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-surface to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-surface to-transparent" />
            </div>
        </section>
    )
}
