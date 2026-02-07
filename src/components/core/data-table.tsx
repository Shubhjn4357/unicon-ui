"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  type Row,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { cn } from "../../lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"
import { Button } from "./button"

// Memoized table row for performance
interface MemoizedRowProps<TData> {
  row: Row<TData>
  index: number
  striped: boolean
  dense: boolean
}

const MemoizedTableRowInner = <TData,>({ row, index, striped, dense }: MemoizedRowProps<TData>) => (
  <TableRow
    data-state={row.getIsSelected() && "selected"}
    className={cn(
      striped && index % 2 === 0 && "bg-muted/50",
      dense && "h-auto"
    )}
  >
    {row.getVisibleCells().map((cell) => (
      <TableCell key={cell.id} className={cn(dense && "p-2")}>
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </TableCell>
    ))}
  </TableRow>
)

const MemoizedTableRow = React.memo(MemoizedTableRowInner, (prev, next) => {
  return (
    prev.row.id === next.row.id &&
    prev.row.getIsSelected() === next.row.getIsSelected() &&
    prev.striped === next.striped &&
    prev.dense === next.dense
  )
}) as typeof MemoizedTableRowInner

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  enableRowSelection?: boolean
  enableSorting?: boolean
  enableFiltering?: boolean
  enablePagination?: boolean
  dense?: boolean
  striped?: boolean
  stickyHeader?: boolean
  className?: string
  pageSize?: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  enableRowSelection = false,
  enableSorting = true,
  enableFiltering = true,
  enablePagination = true,
  dense = false,
  striped = false,
  stickyHeader = false,
  className,
  pageSize = 10,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    enableSorting,
    enableFilters: enableFiltering,
    enableRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
  })

  return (
    <div className={cn("w-full space-y-4", className)} role="region" aria-label="Data table">
      <div className={cn("rounded-md border", stickyHeader && "relative")}>
        <Table>
          <TableHeader className={cn(stickyHeader && "sticky top-0 z-10 bg-background")}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      dense && "p-2",
                      enableSorting && header.column.getCanSort() && "cursor-pointer select-none"
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                    aria-sort={
                      header.column.getIsSorted()
                        ? header.column.getIsSorted() === "asc"
                          ? "ascending"
                          : "descending"
                        : undefined
                    }
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {enableSorting && header.column.getCanSort() && (
                          <ArrowUpDown className="h-4 w-4" aria-hidden="true" />
                        )}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <MemoizedTableRow
                  key={row.id}
                  row={row}
                  index={index}
                  striped={striped}
                  dense={dense}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {enablePagination && (
        <div className="flex items-center justify-between px-2" role="navigation" aria-label="Table pagination">
          <div className="flex-1 text-sm text-muted-foreground" role="status" aria-live="polite">
            {enableRowSelection && (
              <>
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </>
            )}
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <label htmlFor="rows-per-page" className="text-sm font-medium">Rows per page</label>
              <select
                id="rows-per-page"
                aria-label="Select rows per page"
                className="h-8 w-[70px] rounded-md border border-input bg-transparent px-2 text-sm"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value))
                }}
              >
                {[10, 20, 30, 40, 50].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to first page</span>
                «
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                ‹
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                ›
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to last page</span>
                »
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export type { ColumnDef, Row, Cell } from "@tanstack/react-table"
