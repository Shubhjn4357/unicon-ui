"use client"
import * as React from "react"
import { Accordion, AuroraBackground, GridPattern, MorphingText, NumberTicker, ShootingStars, SocialFlipButton, SparklesText, Stars, StatusIcon, TypingAnimation, VelocityScroll, WordRotate, cn } from "@unicorn-ui/ui"
import { Alert, AlertDescription, AlertTitle } from "@unicorn-ui/ui"
import { Avatar, AvatarFallback, AvatarImage } from "@unicorn-ui/ui"
import { Badge } from "@unicorn-ui/ui"
import { Button } from "@unicorn-ui/ui"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@unicorn-ui/ui"
import { Checkbox } from "@unicorn-ui/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@unicorn-ui/ui"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@unicorn-ui/ui"
import { Input } from "@unicorn-ui/ui"
import { Label } from "@unicorn-ui/ui"
import { Progress } from "@unicorn-ui/ui"
import { RadioGroup, RadioGroupItem } from "@unicorn-ui/ui"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@unicorn-ui/ui"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@unicorn-ui/ui"
import { Slider } from "@unicorn-ui/ui"
import { Switch } from "@unicorn-ui/ui"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unicorn-ui/ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@unicorn-ui/ui"
import { Textarea } from "@unicorn-ui/ui"
import { ToastProvider, useToast } from "@unicorn-ui/ui"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@unicorn-ui/ui"
import { BentoCard, BentoGrid } from "@unicorn-ui/ui"
import { Dock, DockIcon } from "@unicorn-ui/ui"
import { ResizablePanel } from "@unicorn-ui/ui"
import { ThreeDCard } from "@unicorn-ui/ui"
import { AnimatedList } from "@unicorn-ui/ui"
import { AvatarCircles } from "@unicorn-ui/ui"
import { FileTree } from "@unicorn-ui/ui"
import { Timeline } from "@unicorn-ui/ui"
import { Sidebar, SidebarItem } from "@unicorn-ui/ui"
import {
  AnimatedGridPattern,
  CollapsibleSidebar,
  SidebarHeader,
  SidebarSection,
  CoolMode,
  DotPattern,
  MagicCard,
  Marquee,
  Meteors,
  OrbitingCircles,
  Particles,
  RetroGrid,
  Ripple,
  // New Components
  ShimmerButton, RainbowButton, GlowButton, RippleButton, MagneticButton, PulsatingButton, ShinyButton, AnimatedButton, GooeyButton, InteractiveHoverButton, CreepyButton,
  WavyText, GradualSpacing, LetterPullup, BoxReveal, TextReveal, SeparateAway, RotateText, SpinningText, FlipText3D, TextAnimate, AnimatedNumber, TextHighlighter, ComicText, AuroraText, AnimatedShinyText, BlurFade, LineShadowText, VideoText, ScrollBasedVelocity, HyperText, FadeText, FlipText, AnimatedGradientText,
  Confetti, BorderBeam, Spotlight, SpotlightNew, AnimatedBeam, ShineBorder, RippleEffect, GlitchEffect, Magnifier, CanvasSmudge, Scene3D, ParticleImage, Gravity,
  BackgroundBeams, FlickeringGrid, InteractiveGridPattern, StripedPattern, WarpBackground,
  OrbitingDots, Snow, HoverRevealCard, MagneticWrapper, NeonGradientCard, ConfettiSideCannons,
  // Detailed Feedback & Interaction Imports
  Skeleton, ThemeToggle, CommandMenu, PercentLoader, RevealLoader, SmartInput,
  NoiseOverlay, ParallaxImage, AnimatedCircularProgressBar, CardStack, CustomPointer, FollowerPointer, PixelTrail, ScrollProgress, ScrollProgressiveBlur, CustomCursor, DeviceMockups,
} from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { useState } from "react"

// Hooks
import { useTheme } from "@unicorn-ui/ui"
import { useWindowSize } from "@unicorn-ui/ui"
import { useCopyToClipboard } from "@unicorn-ui/ui"
import { useAsync } from "@unicorn-ui/ui"
import { useClickOutside } from "@unicorn-ui/ui"
import { useMouse } from "@unicorn-ui/ui"

import { useScrollProgress } from "@unicorn-ui/ui"
// Utils
import { InView } from "@unicorn-ui/ui"
import { Home, Settings, User, Globe } from "lucide-react"


export function AccordionDemo(props: any) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      items={[
        {
          id: "item-1",
          title: "Is it accessible?",
          content: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
          id: "item-2",
          title: "Is it styled?",
          content:
            "Yes. It comes with default styles that matches the other components' aesthetic.",
        },
        {
          id: "item-3",
          title: "Is it animated?",
          content: "Yes. It's animated by default, but you can disable it if you prefer.",
        },
      ]}
      {...props}
    />
  )
}


export function AlertDemo({ children, ...props }: any) {
  return (
    <Alert {...props}>
      {/* <Terminal className="h-4 w-4" /> */}
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@Unicorn-ui" />
      <AvatarFallback>UI</AvatarFallback>
    </Avatar>
  )
}

export function BadgeDemo(props: any) {
  return <Badge {...props} />
}

export function ButtonDemo(props: any) {
  return <Button {...props} />
}

export function CardDemo({ children, className, ...props }: any) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

export function CheckboxDemo(props: any) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...props} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function InputDemo(props: any) {
  return <Input type="email" placeholder="Email" {...props} />
}

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}

export function ProgressDemo(props: any) {
  return <Progress className="w-[60%]" {...props} />
}

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  )
}

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </SheetContent>
    </Sheet>
  )
}

export function SliderDemo(props: any) {
  // Handle both controlled and uncontrolled scenarios or just pass props
  // ensure value is passed if it exists in props to make it controlled
  return <Slider className="w-[60%]" {...props} />
}

export function SwitchDemo(props: any) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...props} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV-002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export function TextareaDemo(props: any) {
  return <Textarea placeholder="Type your message here." {...props} />
}

export function ToastDemo() {
  const { addToast } = useToast()
  return (
    <Button
      onClick={() =>
        addToast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }
    >
      Add to calendar
    </Button>
  )
}

// Wrapper for ToastDemo to include provider
export function ToastDemoWrapper(props: any) {
  return (
    <ToastProvider>
      <ToastDemo {...props} />
    </ToastProvider>
  )
}

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-auto">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <BentoCard
          key={i}
          title={`Item ${i}`}
          description="A sleek bento grid item."

          background={
            <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-purple-500 to-pink-600" />
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          cta="Learn More"
          href="https://shubham-jain.vercel.app"
          Icon={Home}
          name={`Item ${i}`}
        />
      ))}
    </BentoGrid>
  )
}

export function DockDemo() {
  return (
    <div className="relative h-[150px] w-full flex items-center justify-center">
      <Dock className="mb-0">
        <DockIcon>
          <Home className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <User className="h-6 w-6" />
        </DockIcon>
      </Dock>
    </div>
  )
}

export function ResizablePanelDemo() {
  return (
    <div className="h-[300px] w-full border rounded-lg overflow-hidden flex">
      <ResizablePanel minWidth={150} maxWidth={400} className="p-4">
        <span className="font-semibold">Sidebar</span>
      </ResizablePanel>
    </div>
  )
}

export function ThreeDCardDemo() {
  return (
    <div className="flex items-center justify-center p-10">
      <ThreeDCard className="w-full max-w-sm">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl text-foreground">
            Make things float in air
          </h1>
          <p className="text-muted-foreground">
            Hover over this card to unleash the power of CSS perspective
          </p>
          <div className="h-40 w-full bg-blue-500 rounded-xl mt-4 shadow-xl" />
        </div>
      </ThreeDCard>
    </div>
  )
}

export function FileTreeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FileTree
        data={[
          {
            name: "src",
            type: "folder",
            children: [
              { name: "index.ts", type: "file" },
              { name: "styles.css", type: "file" },
              {
                name: "components",
                type: "folder",
                children: [
                  { name: "button.tsx", type: "file" },
                  { name: "input.tsx", type: "file" },
                ],
              },
            ],
          },
          { name: "package.json", type: "file" },
          { name: "README.md", type: "file" },
        ]}
      />
    </div>
  )
}

export function AnimatedListDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedList>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-card p-4 rounded-lg shadow-sm mb-2 w-64"
          >
            Item {item}
          </div>
        ))}
      </AnimatedList>
    </div>
  )
}

export function TimelineDemo() {
  const data = [
    { title: "2024", content: <p>Built the library</p> },
    { title: "2023", content: <p>Started the project</p> },
  ]
  return <Timeline data={data} />
}

export function SidebarDemo() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className="h-[300px] border rounded-md overflow-hidden flex">
      <Sidebar className="h-full border-r">
        <SidebarItem icon={<Home className="h-5 w-5" />}>Home</SidebarItem>
        <SidebarItem icon={<User className="h-5 w-5" />}>Profile</SidebarItem>
      </Sidebar>
      <div className="flex-1 p-4 bg-background">Content goes here</div>
    </div>
  )
}



// --- Hook Demos ---

export function UseThemeDemo() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-col gap-2">
      <p>Current Theme: {theme}</p>
      <div className="flex gap-2">
        <Button onClick={() => setTheme("light")} variant="outline">
          Light
        </Button>
        <Button onClick={() => setTheme("dark")} variant="outline">
          Dark
        </Button>
      </div>
    </div>
  )
}

export function UseWindowSizeDemo() {
  const { width, height } = useWindowSize()
  return (
    <div className="p-4 border rounded bg-muted/50 text-center">
      {width}px x {height}px
    </div>
  )
}

export function UseCopyToClipboardDemo() {
  const [text, setText] = useState("Copy me!")
  const [copied, copy] = useCopyToClipboard()

  return (
    <div className="flex gap-2 max-w-sm">
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => copy(text)}>{copied ? "Copied!" : "Copy"}</Button>
    </div>
  )
}

export function UseAsyncDemo() {
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return "Success! Data loaded."
  }
  const { execute, data, error, loading } = useAsync(fetchData)
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => execute()} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </Button>
      {data && <div className="text-green-500">{data}</div>}
      {error && <div className="text-red-500">Error: {error?.message}</div>}
    </div>
  )
}

export function UseClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div ref={ref} className="bg-background p-8 rounded-lg shadow-xl">
            Click outside to close
          </div>
        </div>
      )}
    </div>
  )
}

export function UseMouseDemo() {
  const { x, y } = useMouse()
  return (
    <div className="p-4 border rounded bg-muted/50 text-center flex flex-col items-center gap-2">
      <p>Move your mouse around</p>
      <div className="flex gap-4">
        {/* Visualizing coordinates without rendering objects directly */}
        <span className="p-2 border rounded">
          X: <motion.span>{x}</motion.span>
        </span>
        <span className="p-2 border rounded">
          Y: <motion.span>{y}</motion.span>
        </span>
      </div>
    </div>
  )
}

export function UseScrollProgressDemo() {
  const { scrollYProgress } = useScrollProgress()
  return (
    <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary"
        style={{ scaleX: scrollYProgress, transformOrigin: 0 }}
      />
    </div>
  )
}

// --- Utils Demos ---

export function InViewDemo() {
  return (
    <div className="h-[200px] overflow-auto border rounded p-4">
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        Scroll down...
      </div>
      <InView>
        <div className="p-6 bg-primary text-primary-foreground rounded-lg shadow-lg text-center">
          I'm in view!
        </div>
      </InView>
      <div className="h-[300px]" />
    </div>
  )
}

export function MeteorsDemo({ number = 30, ...props }: any) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={number} {...props} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span>
    </div>
  )
}

export function ParticlesDemo({ quantity = 100, color = "#000000", ...props }: any) {
  // Use current color if no color prop is passed (or handle dark mode in parent)
  const theme = useTheme()
  const effectiveColor = color === "#000000" && theme.theme === 'dark' ? "#ffffff" : color

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Particles className="absolute inset-0" quantity={quantity} ease={80} color={effectiveColor} refresh {...props} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span>
    </div>
  )
}

export function MagicCardDemo(props: any) {
  return (
    <div className="flex h-[300px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        {...props}
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        {...props}
      >
        Card
      </MagicCard>
    </div>
  )
}

export function CoolModeDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center py-12">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  )
}

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Orbiting Circles
      </span>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <div className="h-full w-full bg-red-500 rounded-full" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <div className="h-full w-full bg-blue-500 rounded-full" />
      </OrbitingCircles>
    </div>
  )
}

export function CollapsibleSidebarDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <CollapsibleSidebar className="w-full h-full border-none">
        <SidebarHeader className="px-4 py-4">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-6 w-6 rounded-md bg-primary" />
            <span>Unicorn</span>
          </div>
        </SidebarHeader>
        <SidebarSection title="Main">
          <SidebarItem icon={<Home className="h-4 w-4" />}>Dashboard</SidebarItem>
          <SidebarItem icon={<User className="h-4 w-4" />}>Profile</SidebarItem>
        </SidebarSection>
        <SidebarSection title="Settings">
          <SidebarItem icon={<Settings className="h-4 w-4" />}>General</SidebarItem>
        </SidebarSection>
      </CollapsibleSidebar>
    </div>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mx-2 h-full w-32 rounded-lg border bg-card p-4">
            Card {i}
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export function AnimatedGridPatternDemo(props: React.ComponentProps<typeof AnimatedGridPattern>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedGridPattern {...props} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Grid Pattern
      </span>
    </div>
  )
}

export function RetroGridDemo(props: React.ComponentProps<typeof RetroGrid>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <RetroGrid {...props} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Retro Grid
      </span>
    </div>
  )
}

export function RippleDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Ripple
      </p>
      <Ripple />
    </div>
  )
}

export function DotPatternDemo(props: React.ComponentProps<typeof DotPattern>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="mask-gradient(to_bottom_right,white,transparent,transparent) "
        {...props}
      />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Dot Pattern
      </span>
    </div>
  )
}

export const SplitLayoutDemo = ResizablePanelDemo






















export function AnimatedNumberDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedNumber value={100} />
    </div>
  )
}





export function AuroraTextDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AuroraText>Aurora Text</AuroraText>
    </div>
  )
}

export function AnimatedShinyTextDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedShinyText>Shiny Text</AnimatedShinyText>
    </div>
  )
}



export function LineShadowTextDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <LineShadowText shadowColor="black">Line Shadow</LineShadowText>
    </div>
  )
}

export function VideoTextDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <VideoText text="VIDEO" videoSrc="https://cdn.coverr.co/videos/coverr-surfers-at-sunset-4386/1080p.mp4" />
    </div>
  )
}

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <ScrollBasedVelocity text="Scroll Velocity" />
    </div>
  )
}

export function BlurFadeDemo() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl p-4">
      <BlurFade delay={0.25}>
        <span className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Blur Fade
        </span>
      </BlurFade>
    </div>
  )
}

export function MorphingTextDemo() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <MorphingText texts={["Morphing", "Text", "Animation"]} />
    </div>
  )
}

export function NumberTickerDemo() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-foreground">
        <NumberTicker value={100} />
      </p>
    </div>
  )
}

export function SparklesTextDemo() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <SparklesText text="Sparkles Text" />
    </div>
  )
}

export function TypingAnimationDemo() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <TypingAnimation className="text-4xl font-bold text-foreground" text="Typing Animation" />
    </div>
  )
}

export function LetterPullupDemo() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <LetterPullup text="Letter Pull Up" delay={0.05} />
    </div>
  )
}

export function WordRotateDemo() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <WordRotate words={["Rotate", "Words", "Animation"]} />
    </div>
  )
}

export function AuroraBackgroundDemo(props: React.ComponentProps<typeof AuroraBackground>) {
  return (
    <div className="h-[300px] w-full overflow-hidden rounded-lg border md:shadow-xl relative">
      <AuroraBackground {...props}>
        <div className="relative flex flex-col items-center justify-center gap-4 px-4">
          <div className="text-3xl font-bold dark:text-white md:text-7xl">
            Aurora
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}

export function GridPatternDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg border bg-background md:shadow-xl flex items-center justify-center">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Grid Pattern
      </p>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  )
}

export function ShootingStarsDemo() {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-slate-900">
      <h2 className="relative z-10 text-3xl font-bold text-center text-white md:text-5xl">
        Shooting Stars
      </h2>
      <ShootingStars />
      <Stars />
    </div>
  )
}

export function StarsDemo() {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-black">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Stars
      </span>
      <Stars />
    </div>
  )
}

export function VelocityScrollDemo() {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <VelocityScroll
        text="Velocity Scroll"
        defaultVelocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-foreground drop-shadow-sm md:text-7xl md:leading-20"
      />
    </div>
  )
}

export function HyperTextDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <HyperText text="Hyper Text" />
    </div>
  )
}

export function FadeTextDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FadeText text="Fade Text" direction="up" />
    </div>
  )
}

export function FlipTextDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FlipText word="Flip Text" />
    </div>
  )
}

export function AnimatedGradientTextDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedGradientText>
        <span className="inline animate-gradient bg-linear-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent">
          Animated Gradient Text
        </span>
      </AnimatedGradientText>
    </div>
  )
}

export function StripedPatternDemo(props: React.ComponentProps<typeof StripedPattern>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <StripedPattern className="opacity-50" {...props} />
      <p className="z-10 text-5xl font-medium tracking-tighter text-black dark:text-white">
        Striped Pattern
      </p>
    </div>
  )
}

export function WarpBackgroundDemo(props: React.ComponentProps<typeof WarpBackground>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <WarpBackground {...props} />
      <Card className="z-50 w-80">
        <CardHeader>
          <CardTitle>Warp Background</CardTitle>
          <CardDescription>
            A background that warps the grid behind it.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export function InteractiveGridPatternDemo(props: React.ComponentProps<typeof InteractiveGridPattern>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <InteractiveGridPattern {...props} />
      <p className="z-10 text-5xl font-medium tracking-tighter text-black dark:text-white">
        Interactive Grid
      </p>
    </div>
  )
}

export function FlickeringGridDemo(props: React.ComponentProps<typeof FlickeringGrid>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FlickeringGrid {...props} />
      <p className="z-10 text-5xl font-medium tracking-tighter text-black dark:text-white">
        Flickering Grid
      </p>
    </div>
  )
}




// --- New Button Demos ---

export function ShimmerButtonDemo(props: React.ComponentProps<typeof ShimmerButton>) {
  return (
    <div className="z-10 flex h-80 items-center justify-center">
      <ShimmerButton className="shadow-2xl" {...props}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Shimmer Button
        </span>
      </ShimmerButton>
    </div>
  );
}

export function RainbowButtonDemo(props: React.ComponentProps<typeof RainbowButton>) {
  return <RainbowButton {...props}>Get Unlimited Access</RainbowButton>;
}

export function GlowButtonDemo(props: React.ComponentProps<typeof GlowButton>) {
  return <GlowButton {...props}>Glow Button</GlowButton>;
}

export function RippleButtonDemo(props: React.ComponentProps<typeof RippleButton>) {
  return (
    <div className="flex items-center justify-center h-full">
      <RippleButton {...props}>Ripple Button</RippleButton>
    </div>
  );
}

export function MagneticButtonDemo() {
  return (
    <MagneticButton>
      <Button>Magnetic Button</Button>
    </MagneticButton>
  );
}

export function PulsatingButtonDemo(props: React.ComponentProps<typeof PulsatingButton>) {
  return <PulsatingButton {...props}>Pulsating Button</PulsatingButton>;
}

export function ShinyButtonDemo(props: React.ComponentProps<typeof ShinyButton>) {
  return <ShinyButton {...props}>Shiny Button</ShinyButton>;
}

export function AnimatedButtonDemo(props: React.ComponentProps<typeof AnimatedButton>) {
  return <AnimatedButton {...props}>Animated Button</AnimatedButton>;
}

export function GooeyButtonDemo(props: React.ComponentProps<typeof GooeyButton>) {
  return <GooeyButton {...props}>Gooey Button</GooeyButton>;
}

export function InteractiveHoverButtonDemo({ text = "Hover Me", ...props }: { text?: string } & React.ComponentProps<typeof InteractiveHoverButton>) {
  return <InteractiveHoverButton {...props}>{text}</InteractiveHoverButton>;
}

export function CreepyButtonDemo(props: React.ComponentProps<typeof CreepyButton>) {
  return <CreepyButton {...props}>Creepy Button</CreepyButton>;
}

export function SocialFlipButtonDemo() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-80">
      <SocialFlipButton
        frontText="GitHub"
        backText="Follow @unicorn-ui"
      />
      <SocialFlipButton
        frontText="Twitter"
        backText="Follow @unicorn_ui"
      />
    </div>
  );
}

// --- Special Effects Demos ---

export function ConfettiDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Confetti
      </span>
      <Confetti />
    </div>
  );
}

export function ConfettiSideCannonsDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <ConfettiSideCannons />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Cannons
      </span>
    </div>
  );
}

export function SpotlightDemo() {
  return (
    <div className="h-80 w-full rounded-md flex md:items-center md:justify-center bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
      </div>
    </div>
  );
}

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Border Beam
      </span>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}

export function ShineBorderDemo(props: React.ComponentProps<typeof ShineBorder>) {
  return (
    <div className="flex items-center justify-center h-[200px]">
      <ShineBorder className="text-center text-2xl font-bold capitalize" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} {...props}>
        Shine Border
      </ShineBorder>
    </div>
  );
}

export function RippleEffectDemo(props: React.ComponentProps<typeof RippleEffect>) {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <RippleEffect {...props} />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Ripple Effect
      </p>
    </div>
  )
}

export function GlitchEffectDemo() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center">
      <GlitchEffect text="GLITCH" />
    </div>
  );
}

export function CanvasSmudgeDemo(props: React.ComponentProps<typeof CanvasSmudge>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <CanvasSmudge {...props} />
      <p className="pointer-events-none z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Smudge
      </p>
    </div>
  );
}

export function Scene3DDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg border">
      <Scene3D />
    </div>
  );
}

export function GravityDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Gravity items={[
        <div key="1" className="text-4xl font-bold bg-white p-4 rounded-xl text-black">Gravity</div>,
        <div key="2" className="text-2xl font-bold bg-white p-2 rounded-xl text-black">Physics</div>,
        <div key="3" className="text-xl font-bold bg-white p-2 rounded-xl text-black">Matter</div>
      ]} />
    </div>
  );
}

// --- Background Demos ---

export function BackgroundBeamsDemo(props: React.ComponentProps<typeof BackgroundBeams>) {
  return (
    <div className="h-80 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Background Beams
        </h1>
      </div>
      <BackgroundBeams {...props} />
    </div>
  );
}

export function OrbitingDotsDemo(props: React.ComponentProps<typeof OrbitingDots>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <OrbitingDots {...props} />
    </div>
  );
}

export function SnowDemo(props: React.ComponentProps<typeof Snow>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-slate-950 md:shadow-xl">
      <Snow {...props} />
      <p className="z-10 text-5xl font-medium tracking-tighter text-white">
        Let it Snow
      </p>
    </div>
  );
}

export function HoverRevealCardDemo() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <HoverRevealCard
        title="Hover me"
        subtitle="I reveal secret content when you hover over me."
        image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"

      >
        <h2 className="text-2xl font-bold">Secret Content Revealed!</h2>
      </HoverRevealCard>
    </div>
  );
}

export function MagneticWrapperDemo(props: React.ComponentProps<typeof MagneticWrapper>) {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <MagneticWrapper {...props}>
        <Button>Magnetic Wrapper</Button>
      </MagneticWrapper>
    </div>
  );
}

export function NeonGradientCardDemo() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <NeonGradientCard className="items-center justify-center text-center" >
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-linear-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Neon Gradient
        </span>
      </NeonGradientCard>
    </div>
  );
}

export function MagnifierDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Magnifier imgSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" />
    </div>
  )
}

export function ParticleImageDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <ParticleImage src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop" />
    </div>
  )
}

export function SpotlightNewDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-slate-950">
      <SpotlightNew />
      <p className="z-10 text-5xl font-medium tracking-tighter text-foreground">
        Spotlight New
      </p>
    </div>
  )
}

export function AvatarCirclesDemo() {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <AvatarCircles
        avatars={[
          { name: "User 1", src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" },
          { name: "User 2", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
          { name: "User 3", src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop" },
          { name: "User 4", src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" },
          { name: "User 5", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
        ]}

      />
    </div>
  );
}

export function AnimatedBeamDemo({
  curvature = 20,
  pathColor = "hsl(var(--primary))",
  pathWidth = 2,
  pathOpacity = 0.2,
  duration = 3,
  ...props
}: any) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const fromRef = React.useRef<HTMLDivElement>(null);
  const toRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-10"
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <div ref={fromRef} className="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <User className="h-6 w-6 text-black" />
          </div>
          <div ref={toRef} className="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Globe className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        curvature={curvature}
        pathColor={pathColor}
        pathWidth={pathWidth}
        pathOpacity={pathOpacity}
        duration={duration}
        {...props}
      />
    </div>
  );
}

export function BoxRevealDemo({
  boxColor = "hsl(var(--primary))",
  duration = 0.5,
  width = "fit-content",
  children = "Box Reveal Animation",
  ...props
}: React.ComponentProps<typeof BoxReveal>) {
  return (
    <div className="h-full w-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={boxColor} duration={duration} width={width as any} {...props}>
        <p className="text-[3.5rem] font-semibold">
          Unicorn UI<span className="text-[hsl(var(--primary))]">.</span>
        </p>
      </BoxReveal>
      <BoxReveal boxColor={boxColor} duration={duration} width={width as any} {...props}>
        <h2 className="mt-[.5rem] text-[1rem]">
          {children}
        </h2>
      </BoxReveal>
    </div>
  );
}

export function ComicTextDemo({ children = "Comic Text", ...props }: React.ComponentProps<typeof ComicText>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <ComicText className="text-6xl" {...props}>{children}</ComicText>
    </div>
  );
}

export function FlipText3DDemo({ children = "Flip Text 3D", ...props }: React.ComponentProps<typeof FlipText3D>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <FlipText3D className="text-6xl font-black" {...props}>{children}</FlipText3D>
    </div>
  );
}

export function GradualSpacingDemo({ text = "Gradual Spacing", ...props }: React.ComponentProps<typeof GradualSpacing>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <GradualSpacing text={text} className="text-4xl font-bold tracking-tighter" {...props} />
    </div>
  );
}

export function RotateTextDemo({ words = ["Rotate", "Text", "Animation"], ...props }: React.ComponentProps<typeof RotateText>) {
  return (
    <div className="flex h-40 w-full items-center justify-center text-4xl font-bold">
      <span className="mr-2">I am</span>
      <RotateText words={words} className="text-primary" {...props} />
    </div>
  );
}

export function SeparateAwayDemo({ upperText = "Separate", lowerText = "Away", ...props }: React.ComponentProps<typeof SeparateAway>) {
  return (
    <div className="flex h-60 w-full items-center justify-center">
      <SeparateAway
        upperText={upperText}
        lowerText={lowerText}
        className="text-8xl font-black"
        {...props}
      >
        <div className="text-2xl font-bold text-primary">REVEALED</div>
      </SeparateAway>
    </div>
  );
}

export function SpinningTextDemo({ children = "SPINNING TEXT • ", ...props }: React.ComponentProps<typeof SpinningText>) {
  return (
    <div className="flex h-60 w-full items-center justify-center">
      <SpinningText className="text-xl font-bold" {...props}>
        {children}
      </SpinningText>
    </div>
  );
}

export function TextAnimateDemo({ text = "Text Animate", ...props }: React.ComponentProps<typeof TextAnimate>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <TextAnimate text={text} className="text-5xl font-bold" {...props} />
    </div>
  );
}

export function TextRevealDemo({ text = "Text Reveal Animation", ...props }: React.ComponentProps<typeof TextReveal>) {
  return (
    <div className="h-[400px] w-full overflow-auto border rounded-lg p-4 bg-background">
      <div className="h-[200px] flex items-center justify-center text-muted-foreground">
        Scroll down to reveal...
      </div>
      <TextReveal text={text} className="text-6xl font-bold py-20" {...props} />
      <div className="h-[300px]" />
    </div>
  );
}

export function WavyTextDemo({ text = "Wavy Text", ...props }: React.ComponentProps<typeof WavyText>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <WavyText text={text} className="text-5xl font-bold" {...props} />
    </div>
  );
}

export function TextHighlighterDemo({
  text = "This is a text highlighter demo highlighting important words.",
  highlight = "highlighter",
  ...props
}: React.ComponentProps<typeof TextHighlighter>) {
  return (
    <div className="flex h-40 w-full items-center justify-center px-10">
      <TextHighlighter
        text={text}
        highlight={highlight}
        className="text-2xl font-medium leading-relaxed"
        highlightClassName="bg-yellow-200 dark:bg-yellow-800 rounded px-1"
        {...props}
      />
    </div>
  );
}

export function StatusIconDemo(props: any) {
  return (
    <div className="flex items-center justify-center p-8">
      <StatusIcon status="success" {...props} />
    </div>
  )
}

// --- Feedback Demos ---

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export function ThemeToggleDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <ThemeToggle />
    </div>
  )
}

export function CommandMenuDemo() {
  return (
    <div className="flex items-center justify-center p-8 text-sm text-muted-foreground">
      Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span className="text-xs">⌘</span>J</kbd> to open command menu
      <CommandMenu />
    </div>
  )
}

export function PercentLoaderDemo(props: any) {
  return (
    <div className="flex items-center justify-center p-8">
      <PercentLoader {...props} />
    </div>
  )
}

export function RevealLoaderDemo(props: any) {
  return (
    <div className="flex items-center justify-center p-8">
      <RevealLoader text="Loading..." {...props} />
    </div>
  )
}

export function SmartInputDemo() {
  return (
    <div className="flex w-full max-w-sm items-center justify-center p-8">
      <SmartInput placeholder="Type something smart..." />
    </div>
  )
}

// --- Special & Misc Demos ---

export function NoiseOverlayDemo() {
  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg border bg-card p-8">
      <p className="z-10 text-xl font-bold">Noise Overlay</p>
      <NoiseOverlay />
    </div>
  )
}

export function ParallaxImageDemo() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg">
      <ParallaxImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80" alt="Parallax" />
    </div>
  )
}

export function AnimatedCircularProgressBarDemo(props: any) {
  return (
    <div className="flex items-center justify-center p-8">
      <AnimatedCircularProgressBar max={100} min={0} value={66} gaugePrimaryColor="hsl(var(--primary))" gaugeSecondaryColor="hsl(var(--muted))" {...props} />
    </div>
  )
}

export function CardStackDemo() {
  return (
    <div className="flex h-60 items-center justify-center w-full">
      <CardStack
        items={[
          { id: 1, name: "Card 1", designation: "Designer", content: <p>Review the design mocks</p> },
          { id: 2, name: "Card 2", designation: "Developer", content: <p>Implement the feature</p> },
          { id: 3, name: "Card 3", designation: "Manager", content: <p>Plan the next sprint</p> },
        ]}
      />
    </div>
  )
}

