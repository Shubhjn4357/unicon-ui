"use client"

import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface TooltipProps {
    content: React.ReactNode
    children: React.ReactNode
    className?: string
    position?: "top" | "bottom" | "left" | "right"
    delay?: number
}

export function Tooltip({
    content,
    children,
    className,
    position = "top",
    delay = 0.2,
}: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false)

    const positions = {
        top: { top: -10, left: "50%", x: "-50%", y: "-100%" },
        bottom: { bottom: -10, left: "50%", x: "-50%", y: "100%" },
        left: { left: -10, top: "50%", x: "-100%", y: "-50%" },
        right: { right: -10, top: "50%", x: "100%", y: "-50%" },
    }

    const animations = {
        top: { y: 10, opacity: 0 },
        bottom: { y: -10, opacity: 0 },
        left: { x: 10, opacity: 0 },
        right: { x: -10, opacity: 0 },
    }

    const getPositionStyle = () => {
        const pos = positions[position]
        return {
            top: "top" in pos ? pos.top : "auto",
            bottom: "bottom" in pos ? pos.bottom : "auto",
            left: "left" in pos ? pos.left : "auto",
            right: "right" in pos ? pos.right : "auto",
        }
    }

    return (
        <div
            className="relative flex items-center justify-center w-fit"
            onMouseEnter={() => setTimeout(() => setIsVisible(true), delay * 1000)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <div className="z-10">{children}</div>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ ...animations[position], scale: 0.9 }}
                        animate={{ x: positions[position].x, y: positions[position].y, opacity: 1, scale: 1 }}
                        exit={{ ...animations[position], scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        style={getPositionStyle()}
                        className={cn(
                            "z-50 px-3 py-1.5 text-xs text-white bg-black dark:bg-white dark:text-black rounded-md shadow-xl whitespace-nowrap",
                            className
                        )}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
