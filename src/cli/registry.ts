import { Registry } from "./types"

export const registry: Registry = {
    // Core
    accordion: {
        name: "accordion",
        type: "components:ui",
        files: ["src/components/core/accordion.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    alert: {
        name: "alert",
        type: "components:ui",
        files: ["src/components/core/alert.tsx"],
        dependencies: ["class-variance-authority", "lucide-react"],
    },
    avatar: {
        name: "avatar",
        type: "components:ui",
        files: ["src/components/core/avatar.tsx"],
        dependencies: [],
    },
    badge: {
        name: "badge",
        type: "components:ui",
        files: ["src/components/core/badge.tsx"],
        dependencies: ["class-variance-authority"],
    },
    button: {
        name: "button",
        type: "components:ui",
        files: ["src/components/core/button.tsx"],
        dependencies: ["class-variance-authority", "lucide-react"],
    },
    card: {
        name: "card",
        type: "components:ui",
        files: ["src/components/core/card.tsx"],
    },
    checkbox: {
        name: "checkbox",
        type: "components:ui",
        files: ["src/components/core/checkbox.tsx"],
        dependencies: ["framer-motion"],
    },
    dialog: {
        name: "dialog",
        type: "components:ui",
        files: ["src/components/core/dialog.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    "dropdown-menu": {
        name: "dropdown-menu",
        type: "components:ui",
        files: ["src/components/core/dropdown-menu.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    input: {
        name: "input",
        type: "components:ui",
        files: ["src/components/core/input.tsx"],
    },
    label: {
        name: "label",
        type: "components:ui",
        files: ["src/components/core/label.tsx"],
        dependencies: ["class-variance-authority"],
    },
    modal: {
        name: "modal",
        type: "components:ui",
        files: ["src/components/core/modal.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    popover: {
        name: "popover",
        type: "components:ui",
        files: ["src/components/core/popover.tsx"],
        dependencies: [],
    },
    progress: {
        name: "progress",
        type: "components:ui",
        files: ["src/components/core/progress.tsx"],
        dependencies: ["framer-motion"],
    },
    "radio-group": {
        name: "radio-group",
        type: "components:ui",
        files: ["src/components/core/radio-group.tsx"],
        dependencies: ["framer-motion"],
    },
    select: {
        name: "select",
        type: "components:ui",
        files: ["src/components/core/select.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    sheet: {
        name: "sheet",
        type: "components:ui",
        files: ["src/components/core/sheet.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    slider: {
        name: "slider",
        type: "components:ui",
        files: ["src/components/core/slider.tsx"],
        dependencies: ["framer-motion"],
    },
    "status-icon": {
        name: "status-icon",
        type: "components:ui",
        files: ["src/components/core/status-icon.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    switch: {
        name: "switch",
        type: "components:ui",
        files: ["src/components/core/switch.tsx"],
        dependencies: ["framer-motion"],
    },
    table: {
        name: "table",
        type: "components:ui",
        files: ["src/components/core/table.tsx"],
    },
    tabs: {
        name: "tabs",
        type: "components:ui",
        files: ["src/components/core/tabs.tsx"],
        dependencies: ["framer-motion"],
    },
    textarea: {
        name: "textarea",
        type: "components:ui",
        files: ["src/components/core/textarea.tsx"],
    },
    toast: {
        name: "toast",
        type: "components:ui",
        files: ["src/components/core/toast.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    tooltip: {
        name: "tooltip",
        type: "components:ui",
        files: ["src/components/core/tooltip.tsx"],
        dependencies: ["framer-motion"],
    },
    "unicorn-provider": {
        name: "unicorn-provider",
        type: "components:ui",
        files: ["src/components/core/unicorn-provider.tsx"],
        dependencies: ["next-themes"],
    },

    // Layout
    "animated-list": {
        name: "animated-list",
        type: "components:ui",
        files: ["src/components/layout/animated-list.tsx"],
        dependencies: ["framer-motion"],
    },
    "avatar-circles": {
        name: "avatar-circles",
        type: "components:ui",
        files: ["src/components/layout/avatar-circles.tsx"],
    },
    "bento-grid": {
        name: "bento-grid",
        type: "components:ui",
        files: ["src/components/layout/bento-grid.tsx"],
        dependencies: ["lucide-react"],
    },
    "collapsible-sidebar-new": {
        name: "collapsible-sidebar-new",
        type: "components:ui",
        files: ["src/components/layout/collapsible-sidebar-new.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    "collapsible-sidebar": {
        name: "collapsible-sidebar",
        type: "components:ui",
        files: ["src/components/layout/collapsible-sidebar.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    dock: {
        name: "dock",
        type: "components:ui",
        files: ["src/components/layout/dock.tsx"],
        dependencies: ["framer-motion"],
    },
    "docs-layout": {
        name: "docs-layout",
        type: "components:ui",
        files: ["src/components/layout/docs-layout.tsx"],
    },
    "dotted-map": {
        name: "dotted-map",
        type: "components:ui",
        files: ["src/components/layout/dotted-map.tsx"],
        dependencies: ["dotted-map", "next-themes"],
    },
    "expandable-bento-card": {
        name: "expandable-bento-card",
        type: "components:ui",
        files: ["src/components/layout/expandable-bento-card.tsx"],
        dependencies: ["framer-motion"],
    },
    "glass-dock": {
        name: "glass-dock",
        type: "components:ui",
        files: ["src/components/layout/glass-dock.tsx"],
        dependencies: ["framer-motion"],
    },
    globe: {
        name: "globe",
        type: "components:ui",
        files: ["src/components/layout/globe.tsx"],
        dependencies: ["cobe", "react-spring"],
    },
    "glow-border-card": {
        name: "glow-border-card",
        type: "components:ui",
        files: ["src/components/layout/glow-border-card.tsx"],
    },
    "hero-video-dialog": {
        name: "hero-video-dialog",
        type: "components:ui",
        files: ["src/components/layout/hero-video-dialog.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    "horizontal-scroll": {
        name: "horizontal-scroll",
        type: "components:ui",
        files: ["src/components/layout/horizontal-scroll.tsx"],
        dependencies: ["framer-motion"],
    },
    "icon-cloud": {
        name: "icon-cloud",
        type: "components:ui",
        files: ["src/components/layout/icon-cloud.tsx"],
        dependencies: ["react-icon-cloud"],
    },
    "ion-cloud": {
        name: "ion-cloud",
        type: "components:ui",
        files: ["src/components/layout/ion-cloud.tsx"],
    },
    lens: {
        name: "lens",
        type: "components:ui",
        files: ["src/components/layout/lens.tsx"],
        dependencies: ["framer-motion"],
    },
    marquee: {
        name: "marquee",
        type: "components:ui",
        files: ["src/components/layout/marquee.tsx"],
    },
    "orbiting-circles": {
        name: "orbiting-circles",
        type: "components:ui",
        files: ["src/components/layout/orbiting-circles.tsx"],
    },
    "perspective-menu": {
        name: "perspective-menu",
        type: "components:ui",
        files: ["src/components/layout/perspective-menu.tsx"],
        dependencies: ["framer-motion"],
    },
    "pixel-image": {
        name: "pixel-image",
        type: "components:ui",
        files: ["src/components/layout/pixel-image.tsx"],
    },
    pointer: {
        name: "pointer",
        type: "components:ui",
        files: ["src/components/layout/pointer.tsx"],
        dependencies: ["framer-motion"],
    },
    "progressive-blur": {
        name: "progressive-blur",
        type: "components:ui",
        files: ["src/components/layout/progressive-blur.tsx"],
        dependencies: ["framer-motion"],
    },
    "reorderable-list": {
        name: "reorderable-list",
        type: "components:ui",
        files: ["src/components/layout/reorderable-list.tsx"],
        dependencies: ["framer-motion"],
    },
    "resizable-panel": {
        name: "resizable-panel",
        type: "components:ui",
        files: ["src/components/layout/resizable-panel.tsx"],
        dependencies: ["framer-motion"],
    },
    sidebar: {
        name: "sidebar",
        type: "components:ui",
        files: ["src/components/layout/sidebar.tsx"],
        dependencies: ["framer-motion"],
    },
    "smooth-cursor": {
        name: "smooth-cursor",
        type: "components:ui",
        files: ["src/components/layout/smooth-cursor.tsx"],
        dependencies: ["framer-motion"],
    },
    "spotlight-card": {
        name: "spotlight-card",
        type: "components:ui",
        files: ["src/components/layout/spotlight-card.tsx"],
    },
    "staggered-grid": {
        name: "staggered-grid",
        type: "components:ui",
        files: ["src/components/layout/staggered-grid.tsx"],
        dependencies: ["framer-motion"],
    },
    terminal: {
        name: "terminal",
        type: "components:ui",
        files: ["src/components/layout/terminal.tsx"],
    },
    timeline: {
        name: "timeline",
        type: "components:ui",
        files: ["src/components/layout/timeline.tsx"],
        dependencies: ["framer-motion"],
    },
    "top-nav": {
        name: "top-nav",
        type: "components:ui",
        files: ["src/components/layout/top-nav.tsx"],
        dependencies: ["framer-motion"],
    },
    "tracing-beam": {
        name: "tracing-beam",
        type: "components:ui",
        files: ["src/components/layout/tracing-beam.tsx"],
        dependencies: ["framer-motion"],
    },
    "tweet-card": {
        name: "tweet-card",
        type: "components:ui",
        files: ["src/components/layout/tweet-card.tsx"],
    },

    // Feedback
    "animated-theme-toggler": {
        name: "animated-theme-toggler",
        type: "components:ui",
        files: ["src/components/feedback/animated-theme-toggler.tsx"],
        dependencies: ["next-themes", "lucide-react"],
    },
    "command-menu": {
        name: "command-menu",
        type: "components:ui",
        files: ["src/components/feedback/command-menu.tsx"],
        dependencies: ["cmdk"],
    },
    "percent-loader": {
        name: "percent-loader",
        type: "components:ui",
        files: ["src/components/feedback/percent-loader.tsx"],
        dependencies: ["framer-motion"],
    },
    "reveal-loader": {
        name: "reveal-loader",
        type: "components:ui",
        files: ["src/components/feedback/reveal-loader.tsx"],
        dependencies: ["framer-motion"],
    },
    skeleton: {
        name: "skeleton",
        type: "components:ui",
        files: ["src/components/feedback/skeleton.tsx"],
    },
    "smart-input": {
        name: "smart-input",
        type: "components:ui",
        files: ["src/components/feedback/smart-input.tsx"],
        dependencies: ["framer-motion", "lucide-react"],
    },
    "theme-toggle": {
        name: "theme-toggle",
        type: "components:ui",
        files: ["src/components/feedback/theme-toggle.tsx"],
        dependencies: ["next-themes", "lucide-react"],
    },

    // Interaction
    "custom-cursor": {
        name: "custom-cursor",
        type: "components:ui",
        files: ["src/components/interaction/custom-cursor.tsx"],
        dependencies: ["framer-motion"],
    },
    "hover-reveal-card": {
        name: "hover-reveal-card",
        type: "components:ui",
        files: ["src/components/interaction/hover-reveal-card.tsx"],
    },
    "magnetic-wrapper": {
        name: "magnetic-wrapper",
        type: "components:ui",
        files: ["src/components/interaction/magnetic-wrapper.tsx"],
        dependencies: ["framer-motion"],
    },

    // Special
    "3d-card": {
        name: "3d-card",
        type: "components:ui",
        files: ["src/components/special/3d-card.tsx"],
    },
    "animated-beam": {
        name: "animated-beam",
        type: "components:ui",
        files: ["src/components/special/animated-beam.tsx"],
        dependencies: ["framer-motion"],
    },
    "border-beam": {
        name: "border-beam",
        type: "components:ui",
        files: ["src/components/special/border-beam.tsx"],
    },
    "canvas-smudge": {
        name: "canvas-smudge",
        type: "components:ui",
        files: ["src/components/special/canvas-smudge.tsx"],
    },
    confetti: {
        name: "confetti",
        type: "components:ui",
        files: ["src/components/special/confetti.tsx"],
        dependencies: ["canvas-confetti"],
    },
    "glitch-effect": {
        name: "glitch-effect",
        type: "components:ui",
        files: ["src/components/special/glitch-effect.tsx"],
    },
    gravity: {
        name: "gravity",
        type: "components:ui",
        files: ["src/components/special/gravity.tsx"],
        dependencies: ["matter-js"],
    },
    "magic-card": {
        name: "magic-card",
        type: "components:ui",
        files: ["src/components/special/magic-card.tsx"],
    },
    magnifier: {
        name: "magnifier",
        type: "components:ui",
        files: ["src/components/special/magnifier.tsx"],
    },
    meteors: {
        name: "meteors",
        type: "components:ui",
        files: ["src/components/special/meteors.tsx"],
    },
    "noise-overlay": {
        name: "noise-overlay",
        type: "components:ui",
        files: ["src/components/special/noise-overlay.tsx"],
    },
    "parallax-image": {
        name: "parallax-image",
        type: "components:ui",
        files: ["src/components/special/parallax-image.tsx"],
        dependencies: ["framer-motion"],
    },
    "particle-image": {
        name: "particle-image",
        type: "components:ui",
        files: ["src/components/special/particle-image.tsx"],
    },
    particles: {
        name: "particles",
        type: "components:ui",
        files: ["src/components/special/particles.tsx"],
    },
    "ripple-effect": {
        name: "ripple-effect",
        type: "components:ui",
        files: ["src/components/special/ripple-effect.tsx"],
        dependencies: ["framer-motion"],
    },
    "scene-3d": {
        name: "scene-3d",
        type: "components:ui",
        files: ["src/components/special/scene-3d.tsx"],
        dependencies: ["@react-three/fiber", "@react-three/drei", "three"],
    },
    "shine-border": {
        name: "shine-border",
        type: "components:ui",
        files: ["src/components/special/shine-border.tsx"],
    },
    spotlight: {
        name: "spotlight",
        type: "components:ui",
        files: ["src/components/special/spotlight.tsx"],
    },
    "spotlight-new": {
        name: "spotlight-new",
        type: "components:ui",
        files: ["src/components/special/spotlight-new.tsx"],
    },

    // Backgrounds
    "animated-grid-pattern": {
        name: "animated-grid-pattern",
        type: "components:ui",
        files: ["src/components/backgrounds/animated-grid-pattern.tsx"],
        dependencies: ["framer-motion"],
    },
    "aurora-background": {
        name: "aurora-background",
        type: "components:ui",
        files: ["src/components/backgrounds/aurora-background.tsx"],
    },
    "background-beams": {
        name: "background-beams",
        type: "components:ui",
        files: ["src/components/backgrounds/background-beams.tsx"],
        dependencies: ["framer-motion"],
    },
    beams: {
        name: "beams",
        type: "components:ui",
        files: ["src/components/backgrounds/beams.tsx"],
        dependencies: ["framer-motion"],
    },
    "dot-pattern": {
        name: "dot-pattern",
        type: "components:ui",
        files: ["src/components/backgrounds/dot-pattern.tsx"],
    },
    "flickering-grid": {
        name: "flickering-grid",
        type: "components:ui",
        files: ["src/components/backgrounds/flickering-grid.tsx"],
        dependencies: ["framer-motion"],
    },
    "grid-pattern": {
        name: "grid-pattern",
        type: "components:ui",
        files: ["src/components/backgrounds/grid-pattern.tsx"],
    },
    "interactive-grid-pattern": {
        name: "interactive-grid-pattern",
        type: "components:ui",
        files: ["src/components/backgrounds/interactive-grid-pattern.tsx"],
    },
    "retro-grid": {
        name: "retro-grid",
        type: "components:ui",
        files: ["src/components/backgrounds/retro-grid.tsx"],
    },
    ripple: {
        name: "ripple",
        type: "components:ui",
        files: ["src/components/backgrounds/ripple.tsx"],
    },
    "shooting-stars": {
        name: "shooting-stars",
        type: "components:ui",
        files: ["src/components/backgrounds/shooting-stars.tsx"],
    },
    stars: {
        name: "stars",
        type: "components:ui",
        files: ["src/components/backgrounds/stars.tsx"],
    },
    "striped-pattern": {
        name: "striped-pattern",
        type: "components:ui",
        files: ["src/components/backgrounds/striped-pattern.tsx"],
    },
    "warp-background": {
        name: "warp-background",
        type: "components:ui",
        files: ["src/components/backgrounds/warp-background.tsx"],
        dependencies: ["framer-motion"],
    },

    // Text
    "animated-gradient-text": {
        name: "animated-gradient-text",
        type: "components:ui",
        files: ["src/components/text/animated-gradient-text.tsx"],
        dependencies: ["framer-motion"],
    },
    "animated-number": {
        name: "animated-number",
        type: "components:ui",
        files: ["src/components/text/animated-number.tsx"],
        dependencies: ["framer-motion"],
    },
    "animated-shiny-text": {
        name: "animated-shiny-text",
        type: "components:ui",
        files: ["src/components/text/animated-shiny-text.tsx"],
    },
    "aurora-text": {
        name: "aurora-text",
        type: "components:ui",
        files: ["src/components/text/aurora-text.tsx"],
        dependencies: ["framer-motion"],
    },
    "blur-fade": {
        name: "blur-fade",
        type: "components:ui",
        files: ["src/components/text/blur-fade.tsx"],
        dependencies: ["framer-motion"],
    },
    "box-reveal": {
        name: "box-reveal",
        type: "components:ui",
        files: ["src/components/text/box-reveal.tsx"],
        dependencies: ["framer-motion"],
    },
    "comic-text": {
        name: "comic-text",
        type: "components:ui",
        files: ["src/components/text/comic-text.tsx"],
    },
    "fade-text": {
        name: "fade-text",
        type: "components:ui",
        files: ["src/components/text/fade-text.tsx"],
        dependencies: ["framer-motion"],
    },
    "flip-text-3d": {
        name: "flip-text-3d",
        type: "components:ui",
        files: ["src/components/text/flip-text-3d.tsx"],
        dependencies: ["framer-motion"],
    },
    "flip-text": {
        name: "flip-text",
        type: "components:ui",
        files: ["src/components/text/flip-text.tsx"],
        dependencies: ["framer-motion"],
    },
    "gradual-spacing": {
        name: "gradual-spacing",
        type: "components:ui",
        files: ["src/components/text/gradual-spacing.tsx"],
        dependencies: ["framer-motion"],
    },
    "hyper-text": {
        name: "hyper-text",
        type: "components:ui",
        files: ["src/components/text/hyper-text.tsx"],
        dependencies: ["framer-motion"],
    },
    "letter-pullup": {
        name: "letter-pullup",
        type: "components:ui",
        files: ["src/components/text/letter-pullup.tsx"],
        dependencies: ["framer-motion"],
    },
    "line-shadow-text": {
        name: "line-shadow-text",
        type: "components:ui",
        files: ["src/components/text/line-shadow-text.tsx"],
    },
    "morphing-text": {
        name: "morphing-text",
        type: "components:ui",
        files: ["src/components/text/morphing-text.tsx"],
    },
    "number-ticker": {
        name: "number-ticker",
        type: "components:ui",
        files: ["src/components/text/number-ticker.tsx"],
        dependencies: ["framer-motion"],
    },
    "rotate-text": {
        name: "rotate-text",
        type: "components:ui",
        files: ["src/components/text/rotate-text.tsx"],
        dependencies: ["framer-motion"],
    },
    "scroll-based-velocity": {
        name: "scroll-based-velocity",
        type: "components:ui",
        files: ["src/components/text/scroll-based-velocity.tsx"],
        dependencies: ["framer-motion"],
    },
    "separate-away": {
        name: "separate-away",
        type: "components:ui",
        files: ["src/components/text/separate-away.tsx"],
        dependencies: ["framer-motion"],
    },
    "sparkles-text": {
        name: "sparkles-text",
        type: "components:ui",
        files: ["src/components/text/sparkles-text.tsx"],
    },
    "spinning-text": {
        name: "spinning-text",
        type: "components:ui",
        files: ["src/components/text/spinning-text.tsx"],
    },
    "text-animate": {
        name: "text-animate",
        type: "components:ui",
        files: ["src/components/text/text-animate.tsx"],
        dependencies: ["framer-motion"],
    },
    "text-highlighter": {
        name: "text-highlighter",
        type: "components:ui",
        files: ["src/components/text/text-highlighter.tsx"],
    },
    "text-reveal": {
        name: "text-reveal",
        type: "components:ui",
        files: ["src/components/text/text-reveal.tsx"],
    },
    "typing-animation": {
        name: "typing-animation",
        type: "components:ui",
        files: ["src/components/text/typing-animation.tsx"],
    },
    "velocity-scroll": {
        name: "velocity-scroll",
        type: "components:ui",
        files: ["src/components/text/velocity-scroll.tsx"],
        dependencies: ["framer-motion"],
    },
    "video-text": {
        name: "video-text",
        type: "components:ui",
        files: ["src/components/text/video-text.tsx"],
    },
    "wavy-text": {
        name: "wavy-text",
        type: "components:ui",
        files: ["src/components/text/wavy-text.tsx"],
        dependencies: ["framer-motion"],
    },
    "word-rotate": {
        name: "word-rotate",
        type: "components:ui",
        files: ["src/components/text/word-rotate.tsx"],
        dependencies: ["framer-motion"],
    },

    // Buttons
    "animated-button": {
        name: "animated-button",
        type: "components:ui",
        files: ["src/components/buttons/animated-button.tsx"],
    },
    "creepy-button": {
        name: "creepy-button",
        type: "components:ui",
        files: ["src/components/buttons/creepy-button.tsx"],
    },
    "glow-button": {
        name: "glow-button",
        type: "components:ui",
        files: ["src/components/buttons/glow-button.tsx"],
    },
    "gooey-button": {
        name: "gooey-button",
        type: "components:ui",
        files: ["src/components/buttons/gooey-button.tsx"],
    },
    "interactive-hover-button": {
        name: "interactive-hover-button",
        type: "components:ui",
        files: ["src/components/buttons/interactive-hover-button.tsx"],
    },
    "magnetic-button": {
        name: "magnetic-button",
        type: "components:ui",
        files: ["src/components/buttons/magnetic-button.tsx"],
        dependencies: ["framer-motion"],
    },
    "pulsating-button": {
        name: "pulsating-button",
        type: "components:ui",
        files: ["src/components/buttons/pulsating-button.tsx"],
    },
    "rainbow-button": {
        name: "rainbow-button",
        type: "components:ui",
        files: ["src/components/buttons/rainbow-button.tsx"],
    },
    "ripple-button": {
        name: "ripple-button",
        type: "components:ui",
        files: ["src/components/buttons/ripple-button.tsx"],
    },
    "shimmer-button": {
        name: "shimmer-button",
        type: "components:ui",
        files: ["src/components/buttons/shimmer-button.tsx"],
    },
    "shiny-button": {
        name: "shiny-button",
        type: "components:ui",
        files: ["src/components/buttons/shiny-button.tsx"],
        dependencies: ["framer-motion"],
    },
    "social-flip-button": {
        name: "social-flip-button",
        type: "components:ui",
        files: ["src/components/buttons/social-flip-button.tsx"],
    },

    // Misc
    "animated-circular-progress-bar": {
        name: "animated-circular-progress-bar",
        type: "components:ui",
        files: ["src/components/misc/animated-circular-progress-bar.tsx"],
    },
    "card-stack": {
        name: "card-stack",
        type: "components:ui",
        files: ["src/components/misc/card-stack.tsx"],
        dependencies: ["framer-motion"],
    },
    "code-comparison": {
        name: "code-comparison",
        type: "components:ui",
        files: ["src/components/misc/code-comparison.tsx"],
    },
    "confetti-side-cannons": {
        name: "confetti-side-cannons",
        type: "components:ui",
        files: ["src/components/misc/confetti-side-cannons.tsx"],
        dependencies: ["canvas-confetti"],
    },
    "cool-mode": {
        name: "cool-mode",
        type: "components:ui",
        files: ["src/components/misc/cool-mode.tsx"],
        dependencies: ["react-dom"],
    },
    "custom-pointer": {
        name: "custom-pointer",
        type: "components:ui",
        files: ["src/components/misc/custom-pointer.tsx"],
        dependencies: ["framer-motion"],
    },
    "device-mockups": {
        name: "device-mockups",
        type: "components:ui",
        files: ["src/components/misc/device-mockups.tsx"],
    },
    "file-tree": {
        name: "file-tree",
        type: "components:ui",
        files: ["src/components/misc/file-tree.tsx"],
    },
    "follower-pointer": {
        name: "follower-pointer",
        type: "components:ui",
        files: ["src/components/misc/follower-pointer.tsx"],
        dependencies: ["framer-motion"],
    },
    "neon-gradient-card": {
        name: "neon-gradient-card",
        type: "components:ui",
        files: ["src/components/misc/neon-gradient-card.tsx"],
    },
    "pixel-trail": {
        name: "pixel-trail",
        type: "components:ui",
        files: ["src/components/misc/pixel-trail.tsx"],
    },
    "scroll-progress": {
        name: "scroll-progress",
        type: "components:ui",
        files: ["src/components/misc/scroll-progress.tsx"],
        dependencies: ["framer-motion"],
    },
    "smooth-scroll": {
        name: "smooth-scroll",
        type: "components:ui",
        files: ["src/components/misc/smooth-scroll.tsx"],
        dependencies: ["lenis"],
    },

    // Utils
    "in-view": {
        name: "in-view",
        type: "components:ui",
        files: ["src/components/utils/in-view.tsx"],
        dependencies: ["framer-motion"],
    },
    "utils": {
        name: "utils",
        type: "components:lib",
        files: ["src/lib/utils.ts"],
    },

    // Hooks
    "use-async": {
        name: "use-async",
        type: "components:hook",
        files: ["src/hooks/use-async.ts"],
    },
    "use-click-outside": {
        name: "use-click-outside",
        type: "components:hook",
        files: ["src/hooks/use-click-outside.ts"],
    },
    "use-clipboard": {
        name: "use-clipboard",
        type: "components:hook",
        files: ["src/hooks/use-clipboard.ts"],
    },
    "use-design-style": {
        name: "use-design-style",
        type: "components:hook",
        files: ["src/hooks/use-design-style.tsx"],
    },
    "use-mouse": {
        name: "use-mouse",
        type: "components:hook",
        files: ["src/hooks/use-mouse.ts"],
        dependencies: ["framer-motion"],
    },
    "use-responsive": {
        name: "use-responsive",
        type: "components:hook",
        files: ["src/hooks/use-responsive.ts"],
    },
    "use-scroll-progress": {
        name: "use-scroll-progress",
        type: "components:hook",
        files: ["src/hooks/use-scroll-progress.ts"],
        dependencies: ["framer-motion"],
    },
    "use-theme": {
        name: "use-theme",
        type: "components:hook",
        files: ["src/hooks/use-theme.ts"],
        dependencies: ["next-themes"],
    },

    // Docs
    "component-playground": {
        name: "component-playground",
        type: "components:ui",
        files: [
            "src/components/docs/component-playground.tsx",
            "src/components/docs/control-panel.tsx",
            "src/components/docs/code-viewer.tsx",
            "src/components/docs/props-table.tsx",
            "src/components/docs/types.ts"
        ],
        dependencies: ["framer-motion", "lucide-react"],
    },
}
