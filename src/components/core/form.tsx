"use client"

import * as React from "react"
import { useId } from "../../hooks/use-id-new"

/**
 * Form Field Context
 * Provides automatic ID and ARIA wiring for form fields
 */
interface FormFieldContextValue {
    id: string
    name: string
    formItemId: string
    formDescriptionId: string
    formMessageId: string
    error?: string
}

const FormFieldContext = React.createContext<FormFieldContextValue | undefined>(undefined)

export function useFormField() {
    const context = React.useContext(FormFieldContext)

    if (!context) {
        throw new Error("useFormField must be used within a FormField component")
    }

    return context
}

/**
 * FormField Component
 * 
 * Wrapper component that provides automatic ID generation and ARIA wiring
 * for form inputs, labels, descriptions, and error messages.
 * 
 * @example
 * ```tsx
 * <FormField name="email" error={errors.email}>
 *   <Label>Email</Label>
 *   <Input type="email" />
 *   <FormDescription>We'll never share your email.</FormDescription>
 *   <FormMessage />
 * </FormField>
 * ```
 */
export interface FormFieldProps {
    children: React.ReactNode
    /**
     * Name of the form field
     */
    name: string
    /**
     * Error message to display
     */
    error?: string
    /**
     * Custom className for the wrapper
     */
    className?: string
}

export function FormField({ children, name, error, className }: FormFieldProps) {
    const generatedId = useId()
    const id = `field-${name}-${generatedId}`
    const formItemId = `${id}-item`
    const formDescriptionId = `${id}-description`
    const formMessageId = `${id}-message`

    const contextValue: FormFieldContextValue = {
        id,
        name,
        formItemId,
        formDescriptionId,
        formMessageId,
        error,
    }

    return (
        <FormFieldContext.Provider value={contextValue}>
            <div className={className}>
                {children}
            </div>
        </FormFieldContext.Provider>
    )
}

/**
 * FormDescription Component
 * 
 * Displays helper text for a form field.
 * Automatically wired to the input via aria-describedby.
 * 
 * @example
 * ```tsx
 * <FormDescription>
 *   This will be your public display name.
 * </FormDescription>
 * ```
 */
export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode
}

export const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
    ({ className, children, ...props }, ref) => {
        const { formDescriptionId } = useFormField()

        return (
            <p
                ref={ref}
                id={formDescriptionId}
                className={`text-sm text-muted-foreground ${className || ""}`}
                {...props}
            >
                {children}
            </p>
        )
    }
)

FormDescription.displayName = "FormDescription"

/**
 * FormMessage Component
 * 
 * Displays error or validation message for a form field.
 * Automatically shows the error from FormField context.
 * Uses role="alert" for screen reader announcements.
 * 
 * @example
 * ```tsx
 * <FormMessage /> 
 * <FormMessage>Custom message</FormMessage>
 * ```
 */
export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children?: React.ReactNode
}

export const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
    ({ className, children, ...props }, ref) => {
        const { formMessageId, error } = useFormField()
        const body = children || error

        if (!body) {
            return null
        }

        return (
            <p
                ref={ref}
                id={formMessageId}
                className={`text-sm font-medium text-destructive ${className || ""}`}
                role="alert"
                aria-live="polite"
                {...props}
            >
                {body}
            </p>
        )
    }
)

FormMessage.displayName = "FormMessage"

/**
 * FormLabel Component
 * 
 * Label component that automatically wires to the form field.
 * Extends the base Label component with FormField context integration.
 * 
 * @example
 * ```tsx
 * <FormLabel>Email Address</FormLabel>
 * <FormLabel required>Password</FormLabel>
 * ```
 */
export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode
    /**
     * Show required indicator (*)
     */
    required?: boolean
}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
    ({ className, children, required, ...props }, ref) => {
        const { formItemId, error } = useFormField()

        return (
            <label
                ref={ref}
                htmlFor={formItemId}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${error ? "text-destructive" : "text-foreground"
                    } ${className || ""}`}
                {...props}
            >
                {children}
                {required && (
                    <span className="text-destructive ml-1" aria-label="required">
                        *
                    </span>
                )}
            </label>
        )
    }
)

FormLabel.displayName = "FormLabel"

/**
 * FormControl Component
 * 
 * Wrapper for the actual input element within a FormField.
 * Automatically applies ID and ARIA attributes.
 * 
 * @example
 * ```tsx
 * <FormControl>
 *   <Input type="email" />
 * </FormControl>
 * ```
 */
export interface FormControlProps {
    children: React.ReactElement
}

export function FormControl({ children }: FormControlProps) {
    const { formItemId, formDescriptionId, formMessageId, error } = useFormField()

    const describedBy = [
        formDescriptionId,
        error ? formMessageId : undefined,
    ]
        .filter(Boolean)
        .join(" ")

    return React.cloneElement(children, {
        id: formItemId,
        "aria-describedby": describedBy || undefined,
        "aria-invalid": error ? true : undefined,
    } as Partial<unknown>)
}
