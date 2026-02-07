"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "../../lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

export interface DatePickerProps {
    value?: Date
    onChange?: (date: Date | undefined) => void
    placeholder?: string
    disabled?: boolean
    className?: string
}

export function DatePicker({
    value,
    onChange,
    placeholder = "Pick a date",
    disabled = false,
    className,
}: DatePickerProps) {
    const [date, setDate] = React.useState<Date | undefined>(value)

    React.useEffect(() => {
        setDate(value)
    }, [value])

    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate)
        onChange?.(selectedDate)
    }

    return (
        <Popover>
            <PopoverTrigger
                className={cn(
                    "w-full justify-start text-left font-normal inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    !date && "text-muted-foreground",
                    className
                )}
                disabled={disabled}
            >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>{placeholder}</span>}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    initialFocus
                    className="p-3"
                />
            </PopoverContent>
        </Popover>
    )
}
