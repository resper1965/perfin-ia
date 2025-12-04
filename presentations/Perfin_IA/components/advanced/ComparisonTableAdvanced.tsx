'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TableColumn {
  header: string
  key: string
  width?: string
}

interface TableCell {
  value: string | React.ReactNode
  icon?: LucideIcon
  color?: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple' | 'cyan' | 'slate'
  subtext?: string
}

interface TableRow {
  [key: string]: TableCell | string
}

interface ComparisonTableAdvancedProps {
  title?: string
  columns: TableColumn[]
  rows: TableRow[]
  className?: string
}

const colorClasses = {
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-950/30',
    border: 'border-emerald-500/20',
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-950/30',
    border: 'border-blue-500/20',
  },
  amber: {
    text: 'text-amber-400',
    bg: 'bg-amber-950/30',
    border: 'border-amber-500/20',
  },
  rose: {
    text: 'text-rose-400',
    bg: 'bg-rose-950/30',
    border: 'border-rose-500/20',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-950/30',
    border: 'border-purple-500/20',
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-950/30',
    border: 'border-cyan-500/20',
  },
  slate: {
    text: 'text-slate-400',
    bg: 'bg-slate-950/30',
    border: 'border-slate-500/20',
  },
}

function CellContent({ cell }: { cell: TableCell | string }) {
  if (typeof cell === 'string') {
    return <span className="text-slate-300">{cell}</span>
  }

  const Icon = cell.icon
  const colors = cell.color ? colorClasses[cell.color] : colorClasses.slate

  return (
    <div className="flex items-start gap-3">
      {Icon && (
        <div className={cn(
          'p-1.5 rounded border shrink-0 mt-0.5',
          colors.bg,
          colors.border
        )}>
          <Icon className={cn('w-4 h-4', colors.text)} />
        </div>
      )}
      <div className="flex-1">
        <div className={cn(
          'font-medium',
          cell.color ? colors.text : 'text-slate-200'
        )}>
          {cell.value}
        </div>
        {cell.subtext && (
          <div className="text-sm text-slate-400 mt-1">
            {cell.subtext}
          </div>
        )}
      </div>
    </div>
  )
}

export function ComparisonTableAdvanced({
  title,
  columns,
  rows,
  className
}: ComparisonTableAdvancedProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {title && (
        <h3 className="text-xl font-medium font-montserrat text-slate-200">
          {title}
        </h3>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-800">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={cn(
                    'text-left p-4 text-slate-300 font-medium font-montserrat',
                    column.width
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.1 }}
                className="border-b border-slate-800/50 hover:bg-slate-900/30 transition-colors"
              >
                {columns.map((column, colIndex) => {
                  const cell = row[column.key]
                  return (
                    <td
                      key={colIndex}
                      className={cn(
                        'p-4',
                        column.width
                      )}
                    >
                      <CellContent cell={cell} />
                    </td>
                  )
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
