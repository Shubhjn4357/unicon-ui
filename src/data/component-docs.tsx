import * as Demos from "@/components/docs/demos"
import { HookPlaceholder } from "@/components/docs/hook-placeholder"
import type { ComponentDoc } from "../components/docs/types"
import { docs } from "./docs-components"
import { hooks } from "./hook-docs"

export const components: ComponentDoc[] = [
  // --- Core ---
  {
    slug: "button",
    title: "Button",
    category: "Core",
    description: "Interactive actions with multiple variants and loading states.",
    component: Demos.ButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Button", control: { type: "text" } },
      {
        name: "variant",
        type: "enum",
        defaultValue: "default",
        control: {
          type: "select",
          options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
      },
      {
        name: "size",
        type: "enum",
        defaultValue: "default",
        control: { type: "select", options: ["default", "sm", "lg", "icon"] },
      },
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
    ],
  },
  {
    slug: "badge",
    title: "Badge",
    category: "Core",
    description: "Informational labels for status, categories, or notifications.",
    component: Demos.BadgeDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Badge", control: { type: "text" } },
      {
        name: "variant",
        type: "enum",
        defaultValue: "default",
        control: { type: "select", options: ["default", "secondary", "destructive", "outline"] },
      },
    ],
    stories: [
      { name: "Default", args: { children: "New", variant: "default" } },
      { name: "Secondary", args: { children: "Updated", variant: "secondary" } },
      { name: "Destructive", args: { children: "Error", variant: "destructive" } },
      { name: "Outline", args: { children: "Outline", variant: "outline" } },
    ],
  },
  {
    slug: "alert",
    title: "Alert",
    category: "Core",
    description: "Displays a callout for user attention with various intensities.",
    component: Demos.AlertDemo,
    props: [
      {
        name: "variant",
        type: "enum",
        defaultValue: "default",
        control: { type: "select", options: ["default", "destructive", "success", "warning"] },
      },
      {
        name: "children",
        type: "ReactNode",
        defaultValue: "Alert Content",
        control: { type: "text" },
      },
    ],
    stories: [{ name: "Default", args: { variant: "default", children: "Heads up!" } }],
  },
  {
    slug: "card",
    title: "Card",
    category: "Core",
    description: "Content containers that support design styles like Glassmorphism.",
    component: Demos.CardDemo,
    props: [
      {
        name: "children",
        type: "ReactNode",
        defaultValue: "Card Content",
        control: { type: "text" },
      },
      {
        name: "className",
        type: "string",
        defaultValue: "w-[350px] p-6",
        control: { type: "text" },
      },
    ],
    stories: [{ name: "Default", args: { className: "w-[350px] p-6", children: "Card Content" } }],
  },
  {
    slug: "select",
    title: "Select",
    category: "Core",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
    component: Demos.SelectDemo,
    props: [
      { name: "placeholder", type: "string", defaultValue: "Select a fruit", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { placeholder: "Select a fruit" } }],
  },
  {
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    category: "Core",
    description: "Displays a menu to the user triggered by a button.",
    component: Demos.DropdownMenuDemo,
    props: [
      { name: "label", type: "string", defaultValue: "My Account", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { label: "My Account" } }],
  },
  {
    slug: "dialog",
    title: "Dialog",
    category: "Core",
    description: "A window overlaid on the primary window.",
    component: Demos.DialogDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "label",
    title: "Label",
    category: "Core",
    description: "Accessible label associated with controls.",
    component: Demos.LabelDemo,
    props: [{ name: "children", type: "string", defaultValue: "Label", control: { type: "text" } }],
    stories: [{ name: "Default", args: { children: "Your Email Address" } }],
  },
  {
    slug: "radio-group",
    title: "Radio Group",
    category: "Core",
    description: "A set of checkable buttons where only one can be checked.",
    component: Demos.RadioGroupDemo,
    props: [
      { name: "defaultValue", type: "string", defaultValue: "option-one", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { defaultValue: "option-one" } }],
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    category: "Core",
    description: "A control that allows toggling between checked and unchecked.",
    component: Demos.CheckboxDemo,
    props: [
      { name: "checked", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } },
    ],
    stories: [{ name: "Default", args: { checked: true } }],
  },
  {
    slug: "switch",
    title: "Switch",
    category: "Core",
    description: "A toggle control with smooth animation.",
    component: Demos.SwitchDemo,
    props: [
      { name: "checked", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } },
    ],
    stories: [{ name: "Default", args: { checked: true } }],
  },
  {
    slug: "slider",
    title: "Slider",
    category: "Core",
    description: "Selection input for values within a range.",
    component: Demos.SliderDemo,
    props: [
      { name: "value", type: "number[]", defaultValue: [50], control: { type: "object" } },
      { name: "max", type: "number", defaultValue: 100, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { value: [33] } }],
  },
  {
    slug: "progress",
    title: "Progress",
    category: "Core",
    description: "Indicator showing completion progress of a task.",
    component: Demos.ProgressDemo,
    props: [
      { name: "value", type: "number", defaultValue: 33, control: { type: "number", min: 0, max: 100 } },
    ],
    stories: [{ name: "Default", args: { value: 60 } }],
  },
  {
    slug: "input",
    title: "Input",
    category: "Core",
    description: "Single line text input field.",
    component: Demos.InputDemo,
    props: [
      { name: "type", type: "string", defaultValue: "text", control: { type: "text" } },
      { name: "placeholder", type: "string", defaultValue: "Search...", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { placeholder: "Search components..." } }],
  },
  {
    slug: "textarea",
    title: "Textarea",
    category: "Core",
    description: "Multi-line text input field.",
    component: Demos.TextareaDemo,
    props: [
      { name: "placeholder", type: "string", defaultValue: "Message...", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { placeholder: "Write your message..." } }],
  },
  {
    slug: "avatar",
    title: "Avatar",
    category: "Core",
    description: "Image element with fallback for user representation.",
    component: Demos.AvatarDemo,
    props: [
      { name: "src", type: "string", defaultValue: "https://github.com/shadcn.png", control: { type: "text" } },
      { name: "fallback", type: "string", defaultValue: "CN", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { src: "https://github.com/shadcn.png" } }],
  },
  {
    slug: "table",
    title: "Table",
    category: "Core",
    description: "Responsive data table components.",
    component: Demos.TableDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "status-icon",
    title: "Status Icon",
    category: "Core",
    description: "Animated icon indicators for status states.",
    component: Demos.StatusIconDemo,
    props: [
      { name: "status", type: "enum", defaultValue: "success", control: { type: "select", options: ["success", "error", "loading", "idle"] } },
      { name: "pulse", type: "boolean", defaultValue: true, control: { type: "boolean" } },
    ],
    stories: [{ name: "Default", args: { status: "success" } }],
  },
  {
    slug: "tabs",
    title: "Tabs",
    category: "Core",
    description: "Layered sections of content—known as tab panels—that are displayed one at a time.",
    component: Demos.TabsDemo,
    props: [
      { name: "defaultValue", type: "string", defaultValue: "account", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "toast",
    title: "Toast",
    category: "Core",
    description: "A succinct message that is displayed temporarily.",
    component: Demos.ToastDemoWrapper,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    category: "Core",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    component: Demos.TooltipDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },

  // --- Buttons ---
  {
    slug: "shimmer-button",
    title: "Shimmer Button",
    category: "Buttons",
    description: "Button with an animated shimmer effect.",
    component: Demos.ShimmerButtonDemo,
    props: [
      { name: "shimmerColor", type: "color", defaultValue: "#ffffff", control: { type: "color" } },
      { name: "shimmerSize", type: "string", defaultValue: "0.05em", control: { type: "text" } },
      { name: "duration", type: "number", defaultValue: 3, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "rainbow-button",
    title: "Rainbow Button",
    category: "Buttons",
    description: "Button with an animated rainbow border.",
    component: Demos.RainbowButtonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "glow-button",
    title: "Glow Button",
    category: "Buttons",
    description: "Button with a glowing border effect.",
    component: Demos.GlowButtonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "ripple-button",
    title: "Ripple Button",
    category: "Buttons",
    description: "Button with a ripple effect on click.",
    component: Demos.RippleButtonDemo,
    props: [
      { name: "rippleColor", type: "color", defaultValue: "#ffffff", control: { type: "color" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "magnetic-button",
    title: "Magnetic Button",
    category: "Buttons",
    description: "Button that is magnetically attracted to the cursor.",
    component: Demos.MagneticButtonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "pulsating-button",
    title: "Pulsating Button",
    category: "Buttons",
    description: "Button with a pulsating animation.",
    component: Demos.PulsatingButtonDemo,
    props: [
      { name: "pulseColor", type: "color", defaultValue: "#3b82f6", control: { type: "color" } },
      { name: "duration", type: "string", defaultValue: "1.5s", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "shiny-button",
    title: "Shiny Button",
    category: "Buttons",
    description: "Button with a shiny reflection effect.",
    component: Demos.ShinyButtonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "animated-button",
    title: "Animated Button",
    category: "Buttons",
    description: "Button with customizable animations.",
    component: Demos.AnimatedButtonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "gooey-button",
    title: "Gooey Button",
    category: "Buttons",
    description: "Button with a gooey morphing effect.",
    component: Demos.GooeyButtonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "interactive-hover-button",
    title: "Interactive Hover Button",
    category: "Buttons",
    description: "Button with interactive hover States.",
    component: Demos.InteractiveHoverButtonDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Hover Me", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Hover Me" } }],
  },
  {
    slug: "creepy-button",
    title: "Creepy Button",
    category: "Buttons",
    description: "Button with a creepy hovering effect.",
    component: Demos.CreepyButtonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "social-flip-button",
    title: "Social Flip Button",
    category: "Buttons",
    description: "Button that flips to reveal social handle.",
    component: Demos.SocialFlipButtonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },

  // --- Layout ---
  {
    slug: "bento-grid",
    title: "Bento Grid",
    category: "Layout",
    description: "Grid layout for displaying content in a bento style.",
    component: Demos.BentoGridDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "collapsible-sidebar",
    title: "Collapsible Sidebar",
    category: "Layout",
    description: "Sidebar that can be collapsed to save space.",
    component: Demos.CollapsibleSidebarDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "dock",
    title: "Dock",
    category: "Layout",
    description: "macOS-style dock for application navigation.",
    component: Demos.DockDemo,
    props: [
      { name: "magnification", type: "number", defaultValue: 60, control: { type: "number" } },
      { name: "distance", type: "number", defaultValue: 140, control: { type: "number" } },
      { name: "direction", type: "enum", defaultValue: "middle", control: { type: "select", options: ["top", "middle", "bottom"] } },
    ],
    stories: [{ name: "Default", args: { magnification: 60, distance: 140, direction: "middle" } }],
  },
  {
    slug: "file-tree",
    title: "File Tree",
    category: "Layout",
    description: "Hierarchical file system visualization.",
    component: Demos.FileTreeDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "marquee",
    title: "Marquee",
    category: "Layout",
    description: "Infinite scrolling component.",
    component: Demos.MarqueeDemo,
    props: [
      { name: "pauseOnHover", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "reverse", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "vertical", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "repeat", type: "number", defaultValue: 4, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { pauseOnHover: false, reverse: false, vertical: false, repeat: 4 } }],
  },
  {
    slug: "split-layout",
    title: "Split Layout",
    category: "Layout",
    description: "Resizeable panel group for split screens.",
    component: Demos.SplitLayoutDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "timeline",
    title: "Timeline",
    category: "Layout",
    description: "Vertical list of events in chronological order.",
    component: Demos.TimelineDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "animated-list",
    title: "Animated List",
    category: "Layout",
    description: "List of items that animates when rendered.",
    component: Demos.AnimatedListDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "resizable-panel",
    title: "Resizable Panel",
    category: "Layout",
    description: "A resizable panel component.",
    component: Demos.ResizablePanelDemo,
    props: [
      { name: "minWidth", type: "number", defaultValue: 200, control: { type: "number" } },
      { name: "maxWidth", type: "number", defaultValue: 600, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "avatar-circles",
    title: "Avatar Circles",
    category: "Layout",
    description: "Stacked avatar group.",
    component: Demos.AvatarCirclesDemo,
    props: [
      { name: "max", type: "number", defaultValue: 5, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },

  // --- Text ---
  {
    slug: "animated-gradient-text",
    title: "Animated Gradient Text",
    category: "Text",
    description: "Text that animates a gradient background.",
    component: Demos.AnimatedGradientTextDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Gradient Text", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Gradient Text" } }],
  },
  {
    slug: "blur-fade",
    title: "Blur Fade",
    category: "Text",
    description: "Text that blurs in and out.",
    component: Demos.BlurFadeDemo,
    props: [
      { name: "delay", type: "number", defaultValue: 0.25, control: { type: "number" } },
      { name: "blur", type: "string", defaultValue: "6px", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "fade-text",
    title: "Fade Text",
    category: "Text",
    description: "Text that fades in and out.",
    component: Demos.FadeTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Fade Text", control: { type: "text" } },
      { name: "direction", type: "enum", defaultValue: "up", control: { type: "select", options: ["up", "down", "left", "right"] } },
    ],
    stories: [{ name: "Default", args: { text: "Fade Text" } }],
  },
  {
    slug: "flip-text",
    title: "Flip Text",
    category: "Text",
    description: "Text that flips to reveal new content.",
    component: Demos.FlipTextDemo,
    props: [
      { name: "word", type: "string", defaultValue: "Flip Text", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { word: "Flip Text" } }],
  },
  {
    slug: "flip-text-3d",
    title: "Flip Text 3D",
    category: "Text",
    description: "3D character flip animation.",
    component: Demos.FlipText3DDemo,
    props: [
      { name: "children", type: "string", defaultValue: "Flip Text 3D", control: { type: "text" } },
      { name: "duration", type: "number", defaultValue: 2.2, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { children: "Flip Text 3D" } }],
  },
  {
    slug: "hyper-text",
    title: "Hyper Text",
    category: "Text",
    description: "Text that cycles through characters on hover.",
    component: Demos.HyperTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Hyper Text", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Hyper Text" } }],
  },
  {
    slug: "morphing-text",
    title: "Morphing Text",
    category: "Text",
    description: "Text that morphs between different strings.",
    component: Demos.MorphingTextDemo,
    props: [
      { name: "texts", type: "array", defaultValue: ["Morphing", "Text"], control: { type: "object" } },
    ],
    stories: [{ name: "Default", args: { texts: ["Morphing", "Text"] } }],
  },
  {
    slug: "number-ticker",
    title: "Number Ticker",
    category: "Text",
    description: "Animated number counter.",
    component: Demos.NumberTickerDemo,
    props: [
      { name: "value", type: "number", defaultValue: 100, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { value: 100 } }],
  },
  {
    slug: "sparkles-text",
    title: "Sparkles Text",
    category: "Text",
    description: "Text with sparkling animation effects.",
    component: Demos.SparklesTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Sparkles", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Sparkles" } }],
  },
  {
    slug: "typing-text",
    title: "Typing Text",
    category: "Text",
    description: "Text that appears as if being typed.",
    component: Demos.TypingAnimationDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Typing...", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Typing..." } }],
  },
  {
    slug: "word-pull-up",
    title: "Word Pull Up",
    category: "Text",
    description: "Words that animate up into view.",
    component: Demos.LetterPullupDemo,
    props: [
      { name: "words", type: "string", defaultValue: "Pull Up", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { words: "Pull Up" } }],
  },
  {
    slug: "word-rotate",
    title: "Word Rotate",
    category: "Text",
    description: "Words that rotate in place.",
    component: Demos.WordRotateDemo,
    props: [
      { name: "words", type: "array", defaultValue: ["Rotate", "Words"], control: { type: "object" } },
    ],
    stories: [{ name: "Default", args: { words: ["Rotate", "Words"] } }],
  },
  {
    slug: "box-reveal",
    title: "Box Reveal",
    category: "Text",
    description: "Text revealed with animated box overlay.",
    component: Demos.BoxRevealDemo,
    props: [
      { name: "boxColor", type: "color", defaultValue: "#3b82f6", control: { type: "color" } },
      { name: "duration", type: "number", defaultValue: 0.5, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "comic-text",
    title: "Comic Text",
    category: "Text",
    description: "Comic book style text with outline effect.",
    component: Demos.ComicTextDemo,
    props: [
      { name: "children", type: "string", defaultValue: "BOOM!", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "BOOM!" } }],
  },
  {
    slug: "gradual-spacing",
    title: "Gradual Spacing",
    category: "Text",
    description: "Text with gradually increasing letter spacing.",
    component: Demos.GradualSpacingDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Gradual Spacing", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Gradual Spacing" } }],
  },
  {
    slug: "rotate-text",
    title: "Rotate Text",
    category: "Text",
    description: "Text with 3D rotation transform effect.",
    component: Demos.RotateTextDemo,
    props: [
      { name: "words", type: "array", defaultValue: ["Rotate", "Text"], control: { type: "object" } },
    ],
    stories: [{ name: "Default", args: { words: ["Rotate", "Text"] } }],
  },
  {
    slug: "separate-away",
    title: "Separate Away",
    category: "Text",
    description: "Text characters separate on hover.",
    component: Demos.SeparateAwayDemo,
    props: [
      { name: "upperText", type: "string", defaultValue: "Separate", control: { type: "text" } },
      { name: "lowerText", type: "string", defaultValue: "Away", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { upperText: "Separate", lowerText: "Away" } }],
  },
  {
    slug: "spinning-text",
    title: "Spinning Text",
    category: "Text",
    description: "Circular text with continuous spinning.",
    component: Demos.SpinningTextDemo,
    props: [
      { name: "children", type: "string", defaultValue: "SPINNING • TEXT • ", control: { type: "text" } },
      { name: "radius", type: "number", defaultValue: 80, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { children: "SPINNING • TEXT • " } }],
  },
  {
    slug: "text-animate",
    title: "Text Animate",
    category: "Text",
    description: "Text with customizable animation presets.",
    component: Demos.TextAnimateDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Animate Me", control: { type: "text" } },
      { name: "type", type: "string", defaultValue: "popIn", control: { type: "select", options: ["popIn", "fadeIn", "slideUp"] } },
    ],
    stories: [{ name: "Default", args: { text: "Animate Me" } }],
  },
  {
    slug: "text-reveal",
    title: "Text Reveal",
    category: "Text",
    description: "Text reveal animation triggered on scroll.",
    component: Demos.TextRevealDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Reveal on Scroll", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Reveal on Scroll" } }],
  },
  {
    slug: "wavy-text",
    title: "Wavy Text",
    category: "Text",
    description: "Text with wavy motion animation effect.",
    component: Demos.WavyTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Wavy Text", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Wavy Text" } }],
  },
  {
    slug: "text-highlighter",
    title: "Text Highlighter",
    category: "Text",
    description: "Text with animated highlight effect.",
    component: Demos.TextHighlighterDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Highlight this", control: { type: "text" } },
      { name: "highlight", type: "string", defaultValue: "highlight", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Highlight this", highlight: "highlight" } }],
  },
  {
    slug: "aurora-text",
    title: "Aurora Text",
    category: "Text",
    description: "Text with aurora borealis gradient effect.",
    component: Demos.AuroraTextDemo,
    props: [
      { name: "children", type: "string", defaultValue: "Aurora Text", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Aurora Text" } }],
  },
  {
    slug: "animated-shiny-text",
    title: "Animated Shiny Text",
    category: "Text",
    description: "Text with shiny gradient animation.",
    component: Demos.AnimatedShinyTextDemo,
    props: [
      { name: "children", type: "string", defaultValue: "Shiny Text", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Shiny Text" } }],
  },
  {
    slug: "line-shadow-text",
    title: "Line Shadow Text",
    category: "Text",
    description: "Text with animated line shadow effect.",
    component: Demos.LineShadowTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Line Shadow", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Line Shadow" } }],
  },
  {
    slug: "video-text",
    title: "Video Text",
    category: "Text",
    description: "Text with video background fill.",
    component: Demos.VideoTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "VIDEO", control: { type: "text" } },
      { name: "videoSrc", type: "string", defaultValue: "https://cdn.coverr.co/videos/coverr-surfers-at-sunset-4386/1080p.mp4", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "VIDEO" } }],
  },
  {
    slug: "scroll-based-velocity",
    title: "Scroll Based Velocity",
    category: "Text",
    description: "Text animation based on scroll velocity.",
    component: Demos.ScrollBasedVelocityDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Velocity Scroll", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Velocity Scroll" } }],
  },
  {
    slug: "animated-number",
    title: "Animated Number",
    category: "Text",
    description: "Number counter with smooth animation.",
    component: Demos.AnimatedNumberDemo,
    props: [
      { name: "value", type: "number", defaultValue: 100, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { value: 100 } }],
  },

  // --- Backgrounds ---
  {
    slug: "animated-grid-pattern",
    title: "Animated Grid Pattern",
    category: "Backgrounds",
    description: "Customizable animated grid background.",
    component: Demos.AnimatedGridPatternDemo,
    props: [
      { name: "width", type: "number", defaultValue: 40, control: { type: "number" } },
      { name: "height", type: "number", defaultValue: 40, control: { type: "number" } },
      { name: "numSquares", type: "number", defaultValue: 50, control: { type: "number" } },
      { name: "maxOpacity", type: "number", defaultValue: 0.5, control: { type: "number" } },
      { name: "duration", type: "number", defaultValue: 5, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "retro-grid",
    title: "Retro Grid",
    category: "Backgrounds",
    description: "80s-inspired retro grid perspective.",
    component: Demos.RetroGridDemo,
    props: [
      { name: "angle", type: "number", defaultValue: 65, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { angle: 65 } }],
  },
  {
    slug: "ripple",
    title: "Ripple",
    category: "Backgrounds",
    description: "Interactive ripple depth effect.",
    component: Demos.RippleDemo,
    props: [
      { name: "mainCircleSize", type: "number", defaultValue: 210, control: { type: "number" } },
      { name: "numCircles", type: "number", defaultValue: 8, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "dot-pattern",
    title: "Dot Pattern",
    category: "Backgrounds",
    description: "SVG dot pattern background.",
    component: Demos.DotPatternDemo,
    props: [
      { name: "width", type: "number", defaultValue: 16, control: { type: "number" } },
      { name: "cr", type: "number", defaultValue: 1, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { width: 16 } }],
  },
  {
    slug: "aurora-background",
    title: "Aurora Background",
    category: "Backgrounds",
    description: "Mesmerizing aurora borealis background.",
    component: Demos.AuroraBackgroundDemo,
    props: [
      { name: "showRadialGradient", type: "boolean", defaultValue: true, control: { type: "boolean" } },
    ],
    stories: [{ name: "Default", args: { showRadialGradient: true } }],
  },
  {
    slug: "grid-pattern",
    title: "Grid Pattern",
    category: "Backgrounds",
    description: "Simple geometric grid pattern.",
    component: Demos.GridPatternDemo,
    props: [
      { name: "width", type: "number", defaultValue: 40, control: { type: "number" } },
      { name: "strokeDasharray", type: "string", defaultValue: "4 2", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { width: 40 } }],
  },
  {
    slug: "shooting-stars",
    title: "Shooting Stars",
    category: "Backgrounds",
    description: "Animated shooting stars effect.",
    component: Demos.ShootingStarsDemo,
    props: [
      { name: "starColor", type: "color", defaultValue: "#9E00FF", control: { type: "color" } },
      { name: "trailColor", type: "color", defaultValue: "#2EB9DF", control: { type: "color" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "stars",
    title: "Stars",
    category: "Backgrounds",
    description: "Static or twinkling stars background.",
    component: Demos.StarsDemo,
    props: [
      { name: "backgroundStarsCount", type: "number", defaultValue: 50, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { backgroundStarsCount: 50 } }],
  },
  {
    slug: "background-beams",
    title: "Background Beams",
    category: "Backgrounds",
    description: "Animated background beams.",
    component: Demos.BackgroundBeamsDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "flickering-grid",
    title: "Flickering Grid",
    category: "Backgrounds",
    description: "Grid with flickering squares animation.",
    component: Demos.FlickeringGridDemo,
    props: [
      { name: "squareSize", type: "number", defaultValue: 4, control: { type: "number" } },
      { name: "gridGap", type: "number", defaultValue: 6, control: { type: "number" } },
      { name: "flickerChance", type: "number", defaultValue: 0.3, control: { type: "number" } },
      { name: "maxOpacity", type: "number", defaultValue: 0.3, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "interactive-grid-pattern",
    title: "Interactive Grid Pattern",
    category: "Backgrounds",
    description: "Grid pattern that reacts to mouse movement.",
    component: Demos.InteractiveGridPatternDemo,
    props: [
      { name: "width", type: "number", defaultValue: 40, control: { type: "number" } },
      { name: "height", type: "number", defaultValue: 40, control: { type: "number" } },
      { name: "squares", type: "object", defaultValue: [80, 80], control: { type: "object" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "striped-pattern",
    title: "Striped Pattern",
    category: "Backgrounds",
    description: "Animated striped line pattern.",
    component: Demos.StripedPatternDemo,
    props: [
      { name: "dimensions", type: "number", defaultValue: 40, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "warp-background",
    title: "Warp Background",
    category: "Backgrounds",
    description: "Hyperspace warp tunnel effect.",
    component: Demos.WarpBackgroundDemo,
    props: [
      { name: "perspective", type: "number", defaultValue: 100, control: { type: "number" } },
      { name: "beamCount", type: "number", defaultValue: 10, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },

  // --- Special ---
  {
    slug: "meteors",
    title: "Meteors",
    category: "Special",
    description: "Animated meteor shower effect.",
    component: Demos.MeteorsDemo,
    props: [
      { name: "number", type: "number", defaultValue: 20, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { number: 20 } }],
  },
  {
    slug: "particles",
    title: "Particles",
    category: "Special",
    description: "Highly performant interactive particles.",
    component: Demos.ParticlesDemo,
    props: [
      { name: "quantity", type: "number", defaultValue: 100, control: { type: "number" } },
      { name: "color", type: "color", defaultValue: "#000000", control: { type: "color" } },
    ],
    stories: [{ name: "Default", args: { quantity: 100 } }],
  },
  {
    slug: "magic-card",
    title: "Magic Card",
    category: "Special",
    description: "Card with magical spotlight effect.",
    component: Demos.MagicCardDemo,
    props: [
      { name: "gradientSize", type: "number", defaultValue: 200, control: { type: "number" } },
      { name: "gradientColor", type: "color", defaultValue: "#262626", control: { type: "color" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "3d-card",
    title: "3D Card",
    category: "Special",
    description: "Card with 3D depth and hover effects.",
    component: Demos.ThreeDCardDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "animated-beam",
    title: "Animated Beam",
    category: "Special",
    description: "Animated beam connecting two points.",
    component: Demos.AnimatedBeamDemo,
    props: [
      { name: "curvature", type: "number", defaultValue: 20, control: { type: "number" } },
      { name: "duration", type: "number", defaultValue: 3, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "border-beam",
    title: "Border Beam",
    category: "Special",
    description: "Animated beam following container border.",
    component: Demos.BorderBeamDemo,
    props: [
      { name: "size", type: "number", defaultValue: 250, control: { type: "number" } },
      { name: "duration", type: "number", defaultValue: 12, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "cool-mode",
    title: "Cool Mode",
    category: "Special",
    description: "Fun particle effect on click.",
    component: Demos.CoolModeDemo,
    props: [],
    stories: [{ name: "Default", args: { children: "Click Me" } }],
  },
  {
    slug: "shine-border",
    title: "Shine Border",
    category: "Special",
    description: "Animated shining border effect.",
    component: Demos.ShineBorderDemo,
    props: [
      { name: "borderWidth", type: "number", defaultValue: 1, control: { type: "number" } },
      { name: "duration", type: "number", defaultValue: 14, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "ripple-effect",
    title: "Ripple Effect",
    category: "Special",
    description: "Expanding ripple animation effect.",
    component: Demos.RippleEffectDemo,
    props: [
      { name: "mainCircleSize", type: "number", defaultValue: 210, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "glitch-effect",
    title: "Glitch Effect",
    category: "Special",
    description: "Digital glitch distortion effect.",
    component: Demos.GlitchEffectDemo,
    props: [
      { name: "text", type: "string", defaultValue: "GLITCH", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "GLITCH" } }],
  },
  {
    slug: "orbiting-circles",
    title: "Orbiting Circles",
    category: "Special",
    description: "Circles orbiting around a center.",
    component: Demos.OrbitingCirclesDemo,
    props: [
      { name: "radius", type: "number", defaultValue: 50, control: { type: "number" } },
      { name: "duration", type: "number", defaultValue: 20, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "scene-3d",
    title: "3D Scene",
    category: "Special",
    description: "Customizable 3D canvas scene.",
    component: Demos.Scene3DDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "gravity",
    title: "Gravity",
    category: "Special",
    description: "Physics-based falling elements.",
    component: Demos.GravityDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "confetti",
    title: "Confetti",
    category: "Special",
    description: "Canvas-based confetti celebratory effect.",
    component: Demos.ConfettiDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "spotlight",
    title: "Spotlight",
    category: "Special",
    description: "V1 spotlight effect with mouse following.",
    component: Demos.SpotlightDemo,
    props: [
      { name: "size", type: "number", defaultValue: 600, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "spotlight-new",
    title: "Spotlight (New)",
    category: "Special",
    description: "Enhanced spotlight effect with better performance.",
    component: Demos.SpotlightNewDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },

  {
    slug: "card-stack",
    title: "Card Stack",
    category: "Special",
    description: "Stack of cards with reveal animation.",
    component: Demos.CardStackDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "confetti-side-cannons",
    title: "Confetti Side Cannons",
    category: "Special",
    description: "Confetti cannons firing from sides.",
    component: Demos.ConfettiSideCannonsDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "noise-overlay",
    title: "Noise Overlay",
    category: "Special",
    description: "Grainy noise texture overlay.",
    component: Demos.NoiseOverlayDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "parallax-image",
    title: "Parallax Image",
    category: "Special",
    description: "Image with parallax scroll effect.",
    component: Demos.ParallaxImageDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "animated-circular-progress-bar",
    title: "Animated Circular Progress",
    category: "Special",
    description: "Radial progress bar with animation.",
    component: Demos.AnimatedCircularProgressBarDemo,
    props: [
      { name: "value", type: "number", defaultValue: 66, control: { type: "number" } },
      { name: "max", type: "number", defaultValue: 100, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { value: 66 } }],
  },

  // --- Feedback ---
  {
    slug: "skeleton",
    title: "Skeleton",
    category: "Feedback",
    description: "Loading placeholder states.",
    component: Demos.SkeletonDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "theme-toggle",
    title: "Theme Toggle",
    category: "Feedback",
    description: "Switch between light and dark modes.",
    component: Demos.ThemeToggleDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "command-menu",
    title: "Command Menu",
    category: "Feedback",
    description: "Command palette interface.",
    component: Demos.CommandMenuDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "percent-loader",
    title: "Percent Loader",
    category: "Feedback",
    description: "Loader showing percentage progress.",
    component: Demos.PercentLoaderDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "reveal-loader",
    title: "Reveal Loader",
    category: "Feedback",
    description: "Loader that reveals text.",
    component: Demos.RevealLoaderDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Loading...", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Loading..." } }],
  },
  {
    slug: "smart-input",
    title: "Smart Input",
    category: "Feedback",
    description: "Input with intelligent suggestions/validation.",
    component: Demos.SmartInputDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },

  // --- Interaction ---
  {
    slug: "magnifier",
    title: "Magnifier",
    category: "Interaction",
    description: "Interactive image magnification glass.",
    component: Demos.MagnifierDemo,
    props: [
      { name: "magnifierSize", type: "number", defaultValue: 150, control: { type: "number" } },
      { name: "zoomLevel", type: "number", defaultValue: 2, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "particle-image",
    title: "Particle Image",
    category: "Interaction",
    description: "Image disintegrating into particles on hover.",
    component: Demos.ParticleImageDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "hover-reveal-card",
    title: "Hover Reveal Card",
    category: "Interaction",
    description: "Card revealing background content on hover.",
    component: Demos.HoverRevealCardDemo,
    props: [
      { name: "title", type: "string", defaultValue: "Hover Me", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { title: "Hover Me" } }],
  },
  {
    slug: "magnetic-wrapper",
    title: "Magnetic Wrapper",
    category: "Interaction",
    description: "Wrapper that magnetically attracts the cursor.",
    component: Demos.MagneticWrapperDemo,
    props: [
      { name: "intensity", type: "number", defaultValue: 0.5, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { intensity: 0.5 } }],
  },

  {
    slug: "custom-pointer",
    title: "Custom Pointer",
    category: "Interaction",
    description: "Custom mouse cursor pointer.",
    component: Demos.CustomPointerDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "follower-pointer",
    title: "Follower Pointer",
    category: "Interaction",
    description: "Card following the cursor.",
    component: Demos.FollowerPointerDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "pixel-trail",
    title: "Pixel Trail",
    category: "Interaction",
    description: "Trail of pixels following cursor.",
    component: Demos.PixelTrailDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "scroll-progress",
    title: "Scroll Progress",
    category: "Interaction",
    description: "Page scroll progress indicator.",
    component: Demos.ScrollProgressDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "scroll-progressive-blur",
    title: "Scroll Progressive Blur",
    category: "Interaction",
    description: "Blur effect based on scroll position.",
    component: Demos.ScrollProgressiveBlurDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "custom-cursor",
    title: "Custom Cursor",
    category: "Interaction",
    description: "Fully custom SVG cursor.",
    component: Demos.CustomCursorDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },

  // --- Mocks ---
  {
    slug: "device-mockups",
    title: "Device Mockups",
    category: "Mocks",
    description: "Realistic device frames (iPhone, Android, Safari).",
    component: Demos.DeviceMockupsDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },

  // --- Utils ---
  {
    slug: "in-view",
    title: "In View",
    category: "Utils",
    description: "Trigger animations based on element visibility.",
    component: Demos.InViewDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
]
export function getComponentBySlug(slug: string) {
  const component = components.find((c) => c.slug === slug)
  if (component) return component

  const doc = docs.find((d) => d.slug === slug)
  if (doc) {
    return {
      ...doc,
      category: "Docs",
      props: [],
      stories: [],
    }
  }

  const hook = hooks.find((h) => h.slug === slug)
  if (hook) {
    return {
      slug: hook.slug,
      title: hook.title,
      category: "Hooks",
      description: hook.description,
      component: HookPlaceholder,
      props: hook.data.props
        ? hook.data.props.map((p) => ({
          name: p.name,
          type: p.type,
          defaultValue: p.default,
          description: p.description,
          control: { type: "text" } as const,
        }))
        : [],
      stories: [
        {
          name: "Usage",
          args: {
            example: hook.data.examples[0],
          },
        },
      ],
    }
  }

  return undefined
}

export function getAllComponentSlugs() {
  return [...components.map((c) => c.slug), ...docs.map((d) => d.slug), ...hooks.map((h) => h.slug)]
}

export function getSidebarData() {
  const categories: Record<string, { title: string; slug: string }[]> = {}

  // Process components
  components.forEach((c) => {
    if (!categories[c.category]) {
      categories[c.category] = []
    }
    categories[c.category].push({ title: c.title, slug: c.slug })
  })

  // Process docs
  docs.forEach((d) => {
    const cat = "Docs"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push({ title: d.title, slug: d.slug })
  })

  // Process hooks
  hooks.forEach((h) => {
    const cat = "Hooks"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push({ title: h.title, slug: h.slug })
  })

  const titleCase = (str: string) => str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

  // Convert to array and sort keys if needed (though Object.entries order is not guaranteed stable across all environments, it's usually insertion order)
  // We might want to enforce a specific order: Docs, Core, ...
  const order = ["Docs", "Core", "Layout", "Text", "Backgrounds", "Buttons", "Special", "Feedback", "Interaction", "Utils", "Hooks"]

  return Object.entries(categories)
    .sort((a, b) => {
      const indexA = order.indexOf(a[0])
      const indexB = order.indexOf(b[0])
      // If both are in order list, sort by index
      if (indexA !== -1 && indexB !== -1) return indexA - indexB
      // If only A is in list, A comes first
      if (indexA !== -1) return -1
      // If only B is in list, B comes first
      if (indexB !== -1) return 1
      // Otherwise sort alphabetically
      return a[0].localeCompare(b[0])
    })
    .map(([name, items]) => ({
      name,
      items: items.sort((a, b) => a.title.localeCompare(b.title)),
    }))
}