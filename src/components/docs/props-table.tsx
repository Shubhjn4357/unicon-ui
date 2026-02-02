"use client"

import React from "react"
import { PropDefinition } from "./types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../core/table"
import { Badge } from "../core/badge"

interface PropsTableProps {
  props: PropDefinition[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="border rounded-md overflow-hidden">
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.map((prop) => (
                <TableRow key={prop.name}>
                    <TableCell className="font-mono text-sm font-semibold">{prop.name}</TableCell>
                    <TableCell>
                        <Badge variant="outline" className="font-mono text-xs">{prop.type}</Badge>
                    </TableCell>
                     <TableCell className="font-mono text-sm text-muted-foreground">
                        {prop.defaultValue !== undefined ? String(prop.defaultValue) : "-"}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                        {prop.description || "-"}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}
