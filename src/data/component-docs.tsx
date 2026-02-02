import { ComponentDoc } from "../components/docs/types"
import {
    Accordion,
    Alert,
    Avatar,
    Badge,
    Button,
    Card,
    Checkbox,
    Dialog,
    Input,
    Label,
    Progress,
    RadioGroup,
    Select,
    Slider,
    Switch,
    Tabs,
    TabsList,
    TabsTrigger,
    Textarea,
    // New Core
    DropdownMenu,
    // Layout
    AnimatedList,
    AvatarCircles,
    BentoGrid,
    CollapsibleSidebar,
    Dock,
    FileTree,
    Marquee,
    Sidebar,
    ResizablePanel, // Split Layout
    Timeline,
    // Text
    AnimatedGradientText,
    BlurFade,
    FadeText,
    FlipText,
    HyperText,
    MorphingText,
    NumberTicker,
    SparklesText,
    TypingAnimation,
    LetterPullup, // Word Pull Up
    WordRotate,
    // Backgrounds
    AnimatedGridPattern,
    RetroGrid,
    Ripple,
    DotPattern,
    AuroraBackground,
    GridPattern,
    ShootingStars,
    Stars,
    // Special
    Meteors,
    Particles,
    MagicCard,
    ThreeDCard,
    AnimatedBeam,
    BorderBeam,
    CoolMode,
    OrbitingCircles,
    ShimmerButton,
    VelocityScroll, // Velocity Scroll
} from "@unicorn-ui/ui"
import { Zap, Check, Shield, Star, User } from "lucide-react"
import React from "react"

export const components: ComponentDoc[] = [
    // --- Core ---
    {
        slug: "button",
        title: "Button",
        description: "Interactive actions with multiple variants and loading states.",
        component: Button,
        props: [
            { name: "children", type: "ReactNode", defaultValue: "Button", control: { type: "text" } },
            { name: "variant", type: "enum", defaultValue: "default", control: { type: "select", options: ["default", "destructive", "outline", "secondary", "ghost", "link"] } },
            { name: "size", type: "enum", defaultValue: "default", control: { type: "select", options: ["default", "sm", "lg", "icon"] } },
            { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } },
            { name: "isLoading", type: "boolean", defaultValue: false, control: { type: "boolean" } },
            { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
        ],
        stories: [
            { name: "Default", args: { children: "Button", variant: "default" } },
            { name: "Secondary", args: { children: "Secondary", variant: "secondary" } },
            { name: "Destructive", args: { children: "Destructive", variant: "destructive" } },
            { name: "Outline", args: { children: "Outline", variant: "outline" } },
            { name: "Ghost", args: { children: "Ghost", variant: "ghost" } },
            { name: "Loading", args: { children: "Loading", isLoading: true } },
        ]
    },
    {
        slug: "badge",
        title: "Badge",
        description: "Informational labels for status, categories, or notifications.",
        component: Badge,
        props: [
            { name: "children", type: "ReactNode", defaultValue: "Badge", control: { type: "text" } },
            { name: "variant", type: "enum", defaultValue: "default", control: { type: "select", options: ["default", "secondary", "destructive", "outline"] } }
        ],
        stories: [
            { name: "Default", args: { children: "New", variant: "default" } },
            { name: "Secondary", args: { children: "Updated", variant: "secondary" } },
            { name: "Destructive", args: { children: "Error", variant: "destructive" } },
            { name: "Outline", args: { children: "Outline", variant: "outline" } }
        ]
    },
    {
        slug: "accordion",
        title: "Accordion",
        description: "A vertically stacked set of interactive headings that each reveal a section of content.",
        component: Accordion,
        props: [
            {
                name: "items",
                type: "object[]",
                defaultValue: [
                    { id: "1", title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
                    { id: "2", title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components' aesthetic." },
                ],
                control: { type: "object" }
            },
            { name: "type", type: "enum", defaultValue: "single", control: { type: "select", options: ["single", "multiple"] } }
        ],
        stories: [
            {
                name: "Default",
                args: {
                    items: [
                        { id: "1", title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
                        { id: "2", title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components' aesthetic." },
                    ]
                }
            }
        ]
    },
    {
        slug: "alert",
        title: "Alert",
        description: "Displays a callout for user attention with various intensities.",
        component: Alert,
        props: [
            { name: "variant", type: "enum", defaultValue: "default", control: { type: "select", options: ["default", "destructive", "success", "warning"] } },
            { name: "children", type: "ReactNode", defaultValue: "Alert Content", control: { type: "text" } }
        ],
        stories: [{ name: "Default", args: { variant: "default", children: "Heads up!" } }]
    },
    {
        slug: "card",
        title: "Card",
        description: "Content containers that support design styles like Glassmorphism.",
        component: Card,
        props: [
            { name: "children", type: "ReactNode", defaultValue: "Card Content", control: { type: "text" } },
            { name: "className", type: "string", defaultValue: "w-[350px] p-6", control: { type: "text" } }
        ],
        stories: [{ name: "Default", args: { className: "w-[350px] p-6", children: "Card Content" } }]
    },
    {
        slug: "label",
        title: "Label",
        description: "Renders an accessible label associated with controls.",
        component: Label,
        props: [{ name: "children", type: "string", defaultValue: "Label", control: { type: "text" } }],
        stories: [{ name: "Default", args: { children: "Your Email Address" } }]
    },
    {
        slug: "radio",
        title: "Radio Group",
        description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
        component: RadioGroup,
        props: [{ name: "defaultValue", type: "string", defaultValue: "option-one", control: { type: "text" } }],
        stories: [{ name: "Default", args: { defaultValue: "option-one" } }] // Needs wrapper in real usage
    },
    {
        slug: "select",
        title: "Select",
        description: "Displays a list of options for the user to pick from—triggered by a button.",
        component: Select, // Complex component, placeholder for now
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "dropdown",
        title: "Dropdown Menu",
        description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
        component: DropdownMenu, // Complex
        props: [],
        stories: [{ name: "Default", args: {} }]
    },

    // --- Feedback ---
    {
        slug: "dialog",
        title: "Dialog",
        description: "A window overlaid on either the primary window or another dialog window.",
        component: Dialog,
        props: [
            { name: "children", type: "ReactNode", defaultValue: "Dialog Content", control: { type: "text" } },
            { name: "open", type: "boolean", defaultValue: false, control: { type: "boolean" } }
        ],
        stories: [{ name: "Default", args: { children: "Dialog Content" } }]
    },
    {
        slug: "checkbox",
        title: "Checkbox",
        description: "A control that allows the user to toggle between checked and not checked.",
        component: Checkbox,
        props: [
            { name: "checked", type: "boolean", defaultValue: false, control: { type: "boolean" } },
            { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } }
        ],
        stories: [{ name: "Default", args: { checked: true } }]
    },
    {
        slug: "switch",
        title: "Switch",
        description: "A control that allows the user to toggle between checked and not checked.",
        component: Switch,
        props: [
            { name: "checked", type: "boolean", defaultValue: false, control: { type: "boolean" } },
            { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } }
        ],
        stories: [{ name: "Default", args: { checked: true } }]
    },
    {
        slug: "slider",
        title: "Slider",
        description: "An input where the user selects a value from within a given range.",
        component: Slider,
        props: [
            { name: "defaultValue", type: "number[]", defaultValue: [50], control: { type: "object" } },
            { name: "max", type: "number", defaultValue: 100, control: { type: "number" } },
            { name: "step", type: "number", defaultValue: 1, control: { type: "number" } },
        ],
        stories: [{ name: "Default", args: { defaultValue: [33], max: 100, step: 1 } }]
    },
    {
        slug: "progress",
        title: "Progress",
        description: "Displays an indicator showing the completion progress of a task.",
        component: Progress,
        props: [
            { name: "value", type: "number", defaultValue: 33, control: { type: "number", min: 0, max: 100 } }
        ],
        stories: [{ name: "Default", args: { value: 60 } }]
    },
    {
        slug: "textarea",
        title: "Textarea",
        description: "Displays a form textarea or a component that looks like a textarea.",
        component: Textarea,
        props: [
            { name: "placeholder", type: "string", defaultValue: "Type your message here.", control: { type: "text" } },
        ],
        stories: [{ name: "Default", args: { placeholder: "Type your details here." } }]
    },
    {
        slug: "input",
        title: "Input",
        description: "Displays a form input field or a component that looks like an input field.",
        component: Input,
        props: [
            { name: "type", type: "enum", defaultValue: "text", control: { type: "select", options: ["text", "email", "password", "number"] } },
            { name: "placeholder", type: "string", defaultValue: "Email", control: { type: "text" } },
        ],
        stories: [{ name: "Default", args: { type: "email", placeholder: "Email" } }]
    },

    // --- Layout ---
    {
        slug: "tabs",
        title: "Tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        component: Tabs,
        props: [],
        stories: [{ name: "Default", args: { defaultValue: "account", className: "w-[400px]" } }]
    },
    {
        slug: "avatar-circles",
        title: "Avatar Circles",
        description: "Stacked circular avatars.",
        component: AvatarCircles,
        props: [],
        stories: [{ name: "Default", args: { avatarUrls: ["https://github.com/shadcn.png"], numPeople: 99 } }]
    },
    {
        slug: "bento-grid",
        title: "Bento Grid",
        description: "A grid layout for displaying content in a bento box style.",
        component: BentoGrid,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "collapsible-sidebar",
        title: "Collapsible Sidebar",
        description: "A sidebar that can be collapsed to save space.",
        component: CollapsibleSidebar,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "dock",
        title: "Dock",
        description: "A macOS-style dock for application navigation.",
        component: Dock,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "file-tree",
        title: "File Tree",
        description: "A hierarchical file system visualization.",
        component: FileTree,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "marquee",
        title: "Marquee",
        description: "An infinite scrolling component for announcements or logos.",
        component: Marquee,
        props: [],
        stories: [{ name: "Default", args: { children: <div>Marquee Item</div> } }]
    },
    {
        slug: "sidebar",
        title: "Sidebar",
        description: "A standard navigation sidebar layout.",
        component: Sidebar,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "split-layout", // ResizablePanel
        title: "Split Layout",
        description: "A resizeable panel group for split-screen layouts.",
        component: ResizablePanel,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "timeline",
        title: "Timeline",
        description: "A vertical list of events in chronological order.",
        component: Timeline,
        props: [],
        stories: [{ name: "Default", args: { data: [] } }]
    },
    {
        slug: "avatar",
        title: "Avatar",
        description: "An image element with a fallback for representing the user.",
        component: Avatar,
        props: [
            { name: "src", type: "string", defaultValue: "https://github.com/shadcn.png", control: { type: "text" } },
            { name: "alt", type: "string", defaultValue: "@shadcn", control: { type: "text" } },
            { name: "fallback", type: "string", defaultValue: "CN", control: { type: "text" } }
        ],
        stories: [
            { name: "Default", args: { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" } }
        ]
    },

    // --- Text ---
    { slug: "animated-gradient-text", title: "Animated Gradient Text", description: "Text that animates a gradient background.", component: AnimatedGradientText, props: [], stories: [{ name: "Default", args: { children: "Gradient Text" } }] },
    { slug: "blur-text", title: "Blur Text", description: "Text that fades in with a blur effect.", component: BlurFade, props: [], stories: [{ name: "Default", args: { children: "Blur Text" } }] },
    { slug: "fade-text", title: "Fade Text", description: "Text that fades in and out.", component: FadeText, props: [], stories: [{ name: "Default", args: { text: "Fade Text" } }] },
    { slug: "flip-text", title: "Flip Text", description: "Text that flips to reveal new content.", component: FlipText, props: [], stories: [{ name: "Default", args: { children: "Flip Text" } }] },
    { slug: "hyper-text", title: "Hyper Text", description: "Text that cycles through characters on hover.", component: HyperText, props: [], stories: [{ name: "Default", args: { text: "Hyper Text" } }] },
    { slug: "morphing-text", title: "Morphing Text", description: "Text that morphs between different strings.", component: MorphingText, props: [], stories: [{ name: "Default", args: { texts: ["Morphing", "Text"] } }] },
    { slug: "number-ticker", title: "Number Ticker", description: "Animated number counter.", component: NumberTicker, props: [], stories: [{ name: "Default", args: { value: 100 } }] },
    { slug: "sparkles-text", title: "Sparkles Text", description: "Text with sparkling animation effects.", component: SparklesText, props: [], stories: [{ name: "Default", args: { text: "Sparkles" } }] },
    { slug: "typing-text", title: "Typing Text", description: "Text that appears as if being typed.", component: TypingAnimation, props: [], stories: [{ name: "Default", args: { text: "Typing..." } }] },
    { slug: "word-pull-up", title: "Word Pull Up", description: "Words that animate up into view.", component: LetterPullup, props: [], stories: [{ name: "Default", args: { words: "Pull Up" } }] },

    // --- Backgrounds ---
    {
        slug: "animated-grid-pattern",
        title: "Animated Grid Pattern",
        description: "A customizable animated grid background with pulsing squares.",
        component: () => <div className="p-10 border rounded relative h-[300px] overflow-hidden bg-background"><AnimatedGridPattern className="inset-x-0 inset-y-[-30%] h-[200%] skew-y-12" /></div>,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "retro-grid",
        title: "Retro Grid",
        description: "An 80s-inspired retro grid background with perspective motion.",
        component: () => <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-background border"><RetroGrid /></div>,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "ripple",
        title: "Ripple",
        description: "Interactive or static ripple effect for background depth.",
        component: () => <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-background border"><Ripple /></div>,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "dot-pattern",
        title: "Dot Pattern",
        description: "A classic SVG dot pattern background for subtle texture.",
        component: () => <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-background border"><DotPattern className="mask-[radial-gradient(300px_circle_at_center,white,transparent)]" /></div>,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    { slug: "aurora-background", title: "Aurora Background", description: "A mesmerizing aurora borealis background effect.", component: AuroraBackground, props: [], stories: [{ name: "Default", args: { children: <div>Aurora</div> } }] },
    { slug: "grid-pattern", title: "Grid Pattern", description: "A simple geometric grid pattern background.", component: GridPattern, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "shooting-stars", title: "Shooting Stars", description: "Animated shooting stars effect.", component: ShootingStars, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "stars", title: "Stars", description: "Static or twinkling stars background.", component: Stars, props: [], stories: [{ name: "Default", args: {} }] },

    // --- Special Effects ---
    {
        slug: "meteors",
        title: "Meteors",
        description: "Animated meteor shower effect for cosmic background storytelling.",
        component: () => <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-slate-950 border"><Meteors number={20} /></div>,
        props: [{ name: "number", type: "number", defaultValue: 20, control: { type: "number" } }],
        stories: [{ name: "Default", args: { number: 20 } }]
    },
    {
        slug: "particles",
        title: "Particles",
        description: "Highly performant interactive particle backgrounds.",
        component: () => <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-background border"><Particles className="absolute inset-0" refresh /></div>,
        props: [
            { name: "quantity", type: "number", defaultValue: 100, control: { type: "number" } },
            { name: "color", type: "color", defaultValue: "#000000", control: { type: "color" } }
        ],
        stories: [{ name: "Default", args: { quantity: 100, color: "#000000" } }]
    },
    {
        slug: "magic-card",
        title: "Magic Card",
        description: "A card with a spotlight hover effect and interactive glass styles.",
        component: MagicCard,
        props: [
            { name: "children", type: "ReactNode", defaultValue: "Magic Card", control: { type: "text" } },
            { name: "spotlightColor", type: "string", defaultValue: "rgba(220,220,220,0.3)", control: { type: "text" } },
            { name: "className", type: "string", defaultValue: "p-10 shadow-2xl", control: { type: "text" } }
        ],
        stories: [
            { name: "Default", args: { children: "Hover me", spotlightColor: "rgba(220,220,220,0.3)", className: "p-10 shadow-2xl" } }
        ]
    },
    { slug: "3d-card", title: "3D Card", description: "A card with 3D depth and hover effects.", component: ThreeDCard, props: [], stories: [{ name: "Default", args: { children: "3D Card" } }] },
    { slug: "animated-beam", title: "Animated Beam", description: "A beam of light traveling along a path.", component: AnimatedBeam, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "border-beam", title: "Border Beam", description: "An animated beam of light traveling around a container's border.", component: BorderBeam, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "cool-mode", title: "Cool Mode", description: "A fun particle effect when clicking elements.", component: CoolMode, props: [], stories: [{ name: "Default", args: { children: <Button>Cool Mode</Button> } }] },
    { slug: "orbiting-circles", title: "Orbiting Circles", description: "Circles orbiting around a central point.", component: OrbitingCircles, props: [], stories: [{ name: "Default", args: { children: <User /> } }] },
    { slug: "shimmer-button", title: "Shimmer Button", description: "A button with a shimmering light effect.", component: ShimmerButton, props: [], stories: [{ name: "Default", args: { children: "Shimmer" } }] },
    { slug: "velocity-scroll", title: "Velocity Scroll", description: "Text that scrolls based on scroll velocity.", component: VelocityScroll, props: [], stories: [{ name: "Default", args: { text: "Velocity Scroll" } }] },
]

export function getComponentBySlug(slug: string) {
    return components.find((c) => c.slug === slug)
}

export function getAllComponentSlugs() {
    return components.map((c) => c.slug)
}
