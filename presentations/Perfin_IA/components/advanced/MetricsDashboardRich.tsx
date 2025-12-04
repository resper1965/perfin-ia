'use client'

import { motion } from 'framer-motion'
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MetricItem {
  label: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
  }
  sparklineData?: number[]
  color?: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple' | 'cyan'
}

interface MetricsDashboardRichProps {
  title?: string
  metrics: MetricItem[]
  columns?: 2 | 3 | 4
  className?: string
}

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    icon: 'text-emerald-400',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    icon: 'text-blue-400',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
    icon: 'text-amber-400',
  },
  rose: {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    text: 'text-rose-400',
    icon: 'text-rose-400',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    icon: 'text-purple-400',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    icon: 'text-cyan-400',
  },
}

function MiniSparkline({ data, color = 'blue' }: { data: number[]; color?: keyof typeof colorClasses }) {
  if (!data || data.length === 0) return null

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 100
    return `${x},${y}`
  }).join(' ')

  return (
    <svg className="w-full h-8" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={cn(colorClasses[color].text, 'opacity-50')}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function MetricsDashboardRich({
  title,
  metrics,
  columns = 4,
  className
}: MetricsDashboardRichProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={cn('space-y-4', className)}>
      {title && (
        <h3 className="text-xl font-medium font-montserrat text-slate-200">
          {title}
        </h3>
      )}
      
      <div className={cn('grid gap-4', gridCols[columns])}>
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          const color = metric.color || 'blue'
          const colors = colorClasses[color]

          const TrendIcon = metric.trend?.direction === 'up' 
            ? TrendingUp 
            : metric.trend?.direction === 'down' 
            ? TrendingDown 
            : Minus

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'relative overflow-hidden rounded-lg border p-4',
                'bg-slate-900/50 backdrop-blur-sm',
                colors.border,
                'hover:bg-slate-900/70 transition-colors duration-300'
              )}
            >
              {/* Background gradient */}
              <div className={cn(
                'absolute inset-0 opacity-5',
                colors.bg
              )} />

              {/* Content */}
              <div className="relative space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className={cn(
                    'p-2 rounded-lg',
                    colors.bg,
                    colors.border,
                    'border'
                  )}>
                    <Icon className={cn('w-5 h-5', colors.icon)} />
                  </div>

                  {metric.trend && (
                    <div className={cn(
                      'flex items-center gap-1 text-xs font-medium',
                      metric.trend.direction === 'up' && 'text-emerald-400',
                      metric.trend.direction === 'down' && 'text-rose-400',
                      metric.trend.direction === 'neutral' && 'text-slate-400'
                    )}>
                      <TrendIcon className="w-3 h-3" />
                      <span>{Math.abs(metric.trend.value)}%</span>
                    </div>
                  )}
                </div>

                {/* Value */}
                <div>
                  <div className={cn('text-3xl font-bold font-montserrat', colors.text)}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {metric.label}
                  </div>
                </div>

                {/* Sparkline */}
                {metric.sparklineData && metric.sparklineData.length > 0 && (
                  <div className="pt-2">
                    <MiniSparkline data={metric.sparklineData} color={color} />
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
