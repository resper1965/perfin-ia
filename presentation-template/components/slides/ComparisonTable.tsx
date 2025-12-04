/**
 * Comparison table component for side-by-side comparisons
 */
'use client'

import * as React from "react"
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Minus } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export interface ComparisonItem {
  feature: string
  description?: string
  values: {
    [key: string]: boolean | string | number | null
  }
}

interface ComparisonTableProps {
  items: ComparisonItem[]
  columns: Array<{
    key: string
    label: string
    highlight?: boolean
  }>
  className?: string
}

export function ComparisonTable({ items, columns, className }: ComparisonTableProps) {
  const getValueDisplay = (value: boolean | string | number | null) => {
    if (value === true) {
      return <CheckCircle2 className="h-5 w-5 text-green-400" />
    }
    if (value === false) {
      return <XCircle className="h-5 w-5 text-red-400" />
    }
    if (value === null) {
      return <Minus className="h-5 w-5 text-slate-600" />
    }
    return <span className="text-slate-300">{value}</span>
  }

  return (
    <div className={cn("rounded-lg border border-slate-800 overflow-hidden", className)}>
      <Table>
        <TableHeader>
          <TableRow className="border-slate-800">
            <TableHead className="w-[300px] text-slate-300">Recurso</TableHead>
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className={cn(
                  "text-center text-slate-300",
                  col.highlight && "bg-primary-500/10"
                )}
              >
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <motion.tr
              key={item.feature}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border-slate-800 hover:bg-slate-900/50 transition-colors"
            >
              <TableCell className="font-medium text-slate-200">
                <div>
                  <div>{item.feature}</div>
                  {item.description && (
                    <div className="text-xs text-slate-500 mt-1">{item.description}</div>
                  )}
                </div>
              </TableCell>
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  className={cn(
                    "text-center",
                    col.highlight && "bg-primary-500/5"
                  )}
                >
                  {getValueDisplay(item.values[col.key])}
                </TableCell>
              ))}
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

