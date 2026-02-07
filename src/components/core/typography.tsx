"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * H1 - Primary Heading
 * Scroll margin for anchor links, responsive font sizes
 */
export const H1 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className
        )}
        {...props}
    >
        {children}
    </h1>
))
H1.displayName = "H1"

/**
 * H2 - Section Heading
 */
export const H2 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            className
        )}
        {...props}
    >
        {children}
    </h2>
))
H2.displayName = "H2"

/**
 * H3 - Subsection Heading
 */
export const H3 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className
        )}
        {...props}
    >
        {children}
    </h3>
))
H3.displayName = "H3"

/**
 * H4 - Minor Heading
 */
export const H4 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
    <h4
        ref={ref}
        className={cn(
            "scroll-m-20 text-xl font-semibold tracking-tight",
            className
        )}
        {...props}
    >
        {children}
    </h4>
))
H4.displayName = "H4"

/**
 * P - Paragraph
 */
export const P = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("leading-7 not-first:mt-6", className)}
        {...props}
    >
        {children}
    </p>
))
P.displayName = "P"

/**
 * Lead - Lead paragraph with larger text
 */
export const Lead = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-xl text-muted-foreground", className)}
        {...props}
    >
        {children}
    </p>
))
Lead.displayName = "Lead"

/**
 * Large - Large text
 */
export const Large = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-lg font-semibold", className)}
        {...props}
    >
        {children}
    </div>
))
Large.displayName = "Large"

/**
 * Small - Small text
 */
export const Small = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({ children, className, ...props }, ref) => (
    <small
        ref={ref}
        className={cn("text-sm font-medium leading-none", className)}
        {...props}
    >
        {children}
    </small>
))
Small.displayName = "Small"

/**
 * Muted - Muted text for less emphasis
 */
export const Muted = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    >
        {children}
    </p>
))
Muted.displayName = "Muted"

/**
 * Code - Inline code
 */
export const Code = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({ children, className, ...props }, ref) => (
    <code
        ref={ref}
        className={cn(
            "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
            className
        )}
        {...props}
    >
        {children}
    </code>
))
Code.displayName = "Code"

/**
 * BlockQuote - Quote blocks
 */
export const BlockQuote = React.forwardRef<
    HTMLQuoteElement,
    React.HTMLAttributes<HTMLQuoteElement>
>(({ children, className, ...props }, ref) => (
    <blockquote
        ref={ref}
        className={cn("mt-6 border-l-2 pl-6 italic", className)}
        {...props}
    >
        {children}
    </blockquote>
))
BlockQuote.displayName = "BlockQuote"

/**
 * List - Unordered list
 */
export const List = React.forwardRef<
    HTMLUListElement,
    React.HTMLAttributes<HTMLUListElement>
>(({ children, className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
        {...props}
    >
        {children}
    </ul>
))
List.displayName = "List"

/**
 * InlineCode - Alternative to Code for smaller contexts
 */
export const InlineCode = Code
