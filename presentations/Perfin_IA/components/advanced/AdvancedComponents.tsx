/**
 * COMPONENTES AVANÇADOS V2
 *
 * Componentes ricos para apresentações corporativas premium
 * - Paleta Slate (shadcn/ui)
 * - Tipografia reduzida
 * - Mais informação por componente
 * - Métricas e visualizações integradas
 */

'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

// ==================== COMPARISON TABLE ADVANCED ====================

interface ComparisonColumn {
  key: string
  label: string
  variant?: 'default' | 'highlight'
  icon?: LucideIcon
}

interface ComparisonValue {
  value: string | number
  icon?: LucideIcon
  color?: 'emerald' | 'amber' | 'rose' | 'blue' | 'slate'
  subtext?: string
}

interface ComparisonRow {
  aspect: string
  description?: string
  [key: string]: string | ComparisonValue | undefined
}

interface ComparisonTableAdvancedProps {
  title?: string
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
  className?: string
}

export function ComparisonTableAdvanced({
  title,
  columns,
  rows,
  className
}: ComparisonTableAdvancedProps) {
  const colorClasses = {
    emerald: 'text-emerald-400 bg-emerald-950/30 border-emerald-500/20',
    amber: 'text-amber-400 bg-amber-950/30 border-amber-500/20',
    rose: 'text-rose-400 bg-rose-950/30 border-rose-500/20',
    blue: 'text-blue-400 bg-blue-950/30 border-blue-500/20',
    slate: 'text-slate-400 bg-slate-900/30 border-slate-700/20'
  }

  return (
    <div className={cn('w-full', className)}>
      {title && (
        <h3 className="text-xl font-medium font-montserrat text-slate-100 mb-4">
          {title}
        </h3>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-slate-700/50">
              <th className="text-left p-4 text-xs uppercase tracking-wider text-slate-400 font-medium">
                Aspecto
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'text-left p-4 text-xs uppercase tracking-wider font-medium',
                    col.variant === 'highlight'
                      ? 'text-[#00ade8]'
                      : 'text-slate-400'
                  )}
                >
                  <div className="flex items-center gap-2">
                    {col.icon && <col.icon className="w-4 h-4" />}
                    {col.label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-slate-800/30 hover:bg-slate-900/30 transition-colors"
              >
                {/* Aspect */}
                <td className="p-4">
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      {row.aspect}
                    </p>
                    {row.description && (
                      <p className="text-xs text-slate-500 mt-1">
                        {row.description}
                      </p>
                    )}
                  </div>
                </td>

                {/* Values */}
                {columns.map((col) => {
                  const cellData = row[col.key]

                  if (typeof cellData === 'object' && cellData !== null) {
                    const value = cellData as ComparisonValue
                    const Icon = value.icon

                    return (
                      <td key={col.key} className="p-4">
                        <div className={cn(
                          'inline-flex items-center gap-2 px-3 py-2 rounded-lg border',
                          value.color ? colorClasses[value.color] : colorClasses.slate
                        )}>
                          {Icon && <Icon className="w-4 h-4" />}
                          <div>
                            <p className="text-sm font-medium">
                              {value.value}
                            </p>
                            {value.subtext && (
                              <p className="text-xs opacity-70">
                                {value.subtext}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                    )
                  }

                  return (
                    <td key={col.key} className="p-4 text-sm text-slate-300">
                      {String(cellData || '-')}
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

// ==================== METRICS DASHBOARD RICH ====================

interface Metric {
  label: string
  value: string | number
  trend?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
  }
  sparkline?: number[]
  icon?: LucideIcon
  color?: 'emerald' | 'amber' | 'rose' | 'blue' | 'primary'
  unit?: string
}

interface MetricsDashboardRichProps {
  metrics: Metric[]
  columns?: 2 | 3 | 4
  showSparklines?: boolean
  className?: string
}

export function MetricsDashboardRich({
  metrics,
  columns = 4,
  showSparklines = false,
  className
}: MetricsDashboardRichProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }

  const colorClasses = {
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    rose: 'text-rose-400',
    blue: 'text-blue-400',
    primary: 'text-[#00ade8]'
  }

  return (
    <div className={cn('grid gap-4', gridCols[columns], className)}>
      {metrics.map((metric, idx) => {
        const Icon = metric.icon
        const TrendIcon = metric.trend
          ? metric.trend.direction === 'up'
            ? TrendingUp
            : metric.trend.direction === 'down'
            ? TrendingDown
            : Minus
          : null

        return (
          <motion.div
            key={idx}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="group relative p-6 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                {metric.label}
              </p>
              {Icon && (
                <div className="p-2 rounded-lg bg-slate-800/50">
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </div>

            {/* Value */}
            <div className="flex items-baseline gap-2 mb-2">
              <p className={cn(
                'text-4xl font-bold font-montserrat',
                metric.color ? colorClasses[metric.color] : 'text-slate-100'
              )}>
                {metric.value}
              </p>
              {metric.unit && (
                <span className="text-sm text-slate-400">
                  {metric.unit}
                </span>
              )}
            </div>

            {/* Trend */}
            {metric.trend && TrendIcon && (
              <div className={cn(
                'inline-flex items-center gap-1 text-xs font-medium',
                metric.trend.direction === 'up' && 'text-emerald-400',
                metric.trend.direction === 'down' && 'text-rose-400',
                metric.trend.direction === 'neutral' && 'text-slate-400'
              )}>
                <TrendIcon className="w-3 h-3" />
                <span>{Math.abs(metric.trend.value)}%</span>
              </div>
            )}

            {/* Sparkline */}
            {showSparklines && metric.sparkline && (
              <div className="mt-4 h-8">
                <MiniSparkline data={metric.sparkline} color={metric.color} />
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

// ==================== MINI SPARKLINE ====================

function MiniSparkline({
  data,
  color = 'primary'
}: {
  data: number[]
  color?: 'emerald' | 'amber' | 'rose' | 'blue' | 'primary'
}) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min

  const colorMap = {
    emerald: '#10b981',
    amber: '#f59e0b',
    rose: '#f43f5e',
    blue: '#3b82f6',
    primary: '#00ade8'
  }

  const points = data
    .map((value, idx) => {
      const x = (idx / (data.length - 1)) * 100
      const y = 100 - ((value - min) / range) * 100
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke={colorMap[color]}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

// ==================== PROCESS STEP CARD ====================

interface ProcessStepProps {
  number: number
  title: string
  description: string
  time?: string
  status?: 'pending' | 'current' | 'completed'
  metrics?: Array<{ label: string; value: string }>
}

export function ProcessStepCard({
  number,
  title,
  description,
  time,
  status = 'pending',
  metrics
}: ProcessStepProps) {
  const statusColors = {
    pending: 'border-slate-700/50 bg-slate-900/30',
    current: 'border-[#00ade8]/50 bg-[#00ade8]/5 ring-2 ring-[#00ade8]/20',
    completed: 'border-emerald-500/50 bg-emerald-950/30'
  }

  return (
    <div className={cn(
      'relative p-4 rounded-xl border transition-all',
      statusColors[status]
    )}>
      {/* Number Badge */}
      <div className={cn(
        'absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-montserrat',
        status === 'completed' && 'bg-emerald-500 text-white',
        status === 'current' && 'bg-[#00ade8] text-white animate-pulse',
        status === 'pending' && 'bg-slate-700 text-slate-400'
      )}>
        {number}
      </div>

      {/* Content */}
      <div className="mt-2">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-base font-medium font-montserrat text-slate-100">
            {title}
          </h4>
          {time && (
            <span className="text-xs text-slate-400 whitespace-nowrap ml-2">
              ⏱️ {time}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-3">
          {description}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="text-xs px-2 py-1 rounded bg-slate-800/50 border border-slate-700/50"
              >
                <span className="text-slate-500">{metric.label}:</span>{' '}
                <span className="text-slate-300 font-medium">{metric.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ==================== INFO CARD RICH ====================

interface InfoCardRichProps {
  title: string
  icon?: LucideIcon
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

export function InfoCardRich({
  title,
  icon: Icon,
  children,
  variant = 'default',
  size = 'md'
}: InfoCardRichProps) {
  const variants = {
    default: 'border-slate-700/50 bg-slate-900/50',
    success: 'border-emerald-500/30 bg-emerald-950/30',
    warning: 'border-amber-500/30 bg-amber-950/30',
    error: 'border-rose-500/30 bg-rose-950/30',
    info: 'border-blue-500/30 bg-blue-950/30'
  }

  const iconColors = {
    default: 'text-slate-400',
    success: 'text-emerald-400',
    warning: 'text-amber-400',
    error: 'text-rose-400',
    info: 'text-blue-400'
  }

  const sizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div className={cn(
      'rounded-xl border',
      variants[variant],
      sizes[size]
    )}>
      <div className="flex items-start gap-3 mb-3">
        {Icon && (
          <div className={cn('p-2 rounded-lg bg-slate-800/50')}>
            <Icon className={cn('w-5 h-5', iconColors[variant])} />
          </div>
        )}
        <h3 className="text-lg font-medium font-montserrat text-slate-100">
          {title}
        </h3>
      </div>
      <div className="text-sm text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

// ==================== TAG GROUP ====================

interface TagGroupProps {
  tags: string[]
  variant?: 'default' | 'primary' | 'success' | 'warning'
  className?: string
}

export function TagGroup({ tags, variant = 'default', className }: TagGroupProps) {
  const variants = {
    default: 'bg-slate-800/50 text-slate-300 border-slate-700/50',
    primary: 'bg-[#00ade8]/10 text-[#00ade8] border-[#00ade8]/30',
    success: 'bg-emerald-950/50 text-emerald-400 border-emerald-500/30',
    warning: 'bg-amber-950/50 text-amber-400 border-amber-500/30'
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
            variants[variant]
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
