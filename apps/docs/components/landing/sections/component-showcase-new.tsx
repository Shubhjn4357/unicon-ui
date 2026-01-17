"use client"

import { Bell, Check, User } from "lucide-react"

import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Card,
    Badge,
    Button,
    Input,
    Switch,
    Slider,
    RainbowButton,
    ShimmerButton,
    RippleButton,
    GridPattern,
    Marquee,
    SpotlightCard,
    MagicCard,
    NeonGradientCard
} from "@unicorn-ui/ui"

export function ComponentShowcaseNew() {
    return (
        <section className="py-24 relative overflow-hidden bg-surface" id="showcase">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <GridPattern className="opacity-20" />
            </div>

            <div className="mx-auto max-w-7xl px-4 mb-16 text-center">
                <Badge variant="outline" className="mb-4">Library</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Interactive Showcase
                </h2>
                <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                    Explore our collection of interactive components.
                </p>
            </div>

            <div className="mx-auto max-w-4xl px-4">
                <Tabs defaultValue="buttons" className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid w-full max-w-md grid-cols-3">
                            <TabsTrigger value="buttons">Buttons</TabsTrigger>
                            <TabsTrigger value="inputs">Inputs</TabsTrigger>
                            <TabsTrigger value="cards">Cards</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="buttons" className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="p-8 flex flex-col items-center justify-center gap-6 min-h-[300px] bg-surface/50 backdrop-blur-sm border-border">
                                <h3 className="text-lg font-semibold text-foreground-secondary mb-2">Special Effects</h3>
                                <div className="flex flex-col gap-4 w-full max-w-xs">
                                    <RainbowButton>Rainbow Button</RainbowButton>
                                    <ShimmerButton>Shimmer Button</ShimmerButton>
                                    <RippleButton>Ripple Button</RippleButton>
                                </div>
                            </Card>
                            <Card className="p-8 flex flex-col items-center justify-center gap-6 min-h-[300px] bg-surface/50 backdrop-blur-sm border-border">
                                <h3 className="text-lg font-semibold text-foreground-secondary mb-2">Standard Variants</h3>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Button>Default</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="ghost">Ghost</Button>
                                    <Button variant="destructive">Destructive</Button>
                                </div>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="inputs" className="space-y-8">
                        <Card className="p-8 min-h-[300px] bg-surface/50 backdrop-blur-sm border-border">
                            <div className="max-w-md mx-auto space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold">Notifications</h3>
                                        <Switch />
                                    </div>
                                    <p className="text-sm text-foreground-secondary">
                                        Receive emails about new products, features, and more.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email address</label>
                                    <Input placeholder="hello@unicorn.com" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Volume</label>
                                    <Slider defaultValue={[50]} max={100} step={1} />
                                </div>
                                <div className="flex items-center gap-4 p-4 border rounded-lg bg-surface">
                                    <Bell className="h-5 w-5 text-brand" />
                                    <div className="flex-1">
                                        <div className="text-sm font-medium">Push Notifications</div>
                                        <div className="text-xs text-foreground-secondary">Send notifications to device</div>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="cards" className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <SpotlightCard className="h-[300px] p-6" mode="after">
                                <div className="h-full flex flex-col justify-center text-center z-10 relative">
                                    <User className="h-12 w-12 text-brand mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Spotlight Card</h3>
                                    <p className="text-foreground-secondary">
                                        A card that tracks your mouse movement with a spotlight effect.
                                    </p>
                                </div>
                            </SpotlightCard>

                            <MagicCard className="h-[300px] p-6 flex flex-col items-center justify-center text-center" gradientColor="var(--color-brand)">
                                <h3 className="text-2xl font-bold mb-2">Magic Card</h3>
                                <p className="text-foreground-secondary">
                                    Hover over this card to reveal the gradient border effect.
                                </p>
                            </MagicCard>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="mt-20">
                <Marquee pauseOnHover className="[--duration:40s] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="mx-8 p-4 border border-border rounded-lg bg-surface/30">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-brand/20 animate-pulse" />
                                <div className="space-y-1">
                                    <div className="h-2 w-24 bg-foreground/20 rounded animate-pulse" />
                                    <div className="h-2 w-16 bg-foreground/10 rounded animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
