"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

export interface ComboboxOption {
    value: string
    label: string
}

export interface ComboboxProps {
    options: ComboboxOption[]
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    emptyText?: string
    searchPlaceholder?: string
    disabled?: boolean
    className?: string
}

export function Combobox({
    options,
    value,
    onChange,
    placeholder = "Select option...",
    emptyText = "No option found.",
    searchPlaceholder = "Search...",
    disabled = false,
    className,
}: ComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(value || "")

    React.useEffect(() => {
        setSelectedValue(value || "")
    }, [value])

    const handleSelect = (currentValue: string) => {
        const newValue = currentValue === selectedValue ? "" : currentValue
        setSelectedValue(newValue)
        onChange?.(newValue)
        setOpen(false)
    }

    const selectedOption = options.find((option) => option.value === selectedValue)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                role="combobox"
                aria-expanded={open}
                className={cn("w-full justify-between inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className)}
                disabled={disabled}
            >
                {selectedOption ? selectedOption.label : placeholder}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder={searchPlaceholder} />
                    <CommandList>
                        <CommandEmpty>{emptyText}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() => handleSelect(option.value)}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedValue === option.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
