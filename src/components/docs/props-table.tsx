"use client"

import React from "react"
import { Badge } from "../core/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../core/table"
import type { PropDefinition } from "./types"

interface PropsTableProps {
  props: PropDefinition[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="border rounded-md overflow-hidden bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-50">Prop</TableHead>
            <TableHead className="w-50">Type</TableHead>
            <TableHead className="w-37.5">Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(props || []).map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="font-mono text-sm font-semibold text-primary">
                {prop.name}
                {prop.required && <span className="text-destructive ml-1">*</span>}
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <Badge variant="outline" className="font-mono text-xs w-fit">
                    {prop.type}
                  </Badge>
                  {prop.type === "enum" && prop.control?.options && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {prop.control.options.map((opt) => (
                        <code
                          key={String(opt)}
                          className="text-[10px] bg-muted px-1 py-0.5 rounded text-muted-foreground"
                        >
                          {String(opt)}
                        </code>
                      ))}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="font-mono text-sm text-muted-foreground">
                {prop.defaultValue !== undefined ? (
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                    {String(prop.defaultValue)}
                  </code>
                ) : (
                  "-"
                )}
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
