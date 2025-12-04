/**
 * Timeline component for displaying chronological events
 */
'use client'

import * as React from "react"
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react'
import { cn } from "@/lib/utils"

export interface TimelineItem {
  id: string
  title: string
  description?: string
  date?: string
  status?: 'completed' | 'current' | 'upcoming'
  icon?: React.ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export function Timeline({ items, orientation = 'vertical', className }: TimelineProps) {
  if (orientation === 'horizontal') {
    return (
      <div className={cn("flex gap-4 overflow-x-auto pb-4", className)}>
        {items.map((item, index) => (
          <TimelineItemHorizontal key={item.id} item={item} index={index} />
        ))}
      </div>
    )
  }

  return (
    <div className={cn("relative space-y-8", className)}>
      {items.map((item, index) => (
        <TimelineItemVertical key={item.id} item={item} index={index} isLast={index === items.length - 1} items={items} />
      ))}
    </div>
  )
}

function TimelineItemVertical({ item, index, isLast, items }: { item: TimelineItem, index: number, isLast: boolean, items: TimelineItem[] }) {
  const status = item.status || (index === 0 ? 'current' : index < items.length - 1 ? 'completed' : 'upcoming')
  
  const statusConfig = {
    completed: {
      icon: CheckCircle2,
      iconColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      lineColor: 'bg-green-500'
    },
    current: {
      icon: Clock,
      iconColor: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
      borderColor: 'border-primary-500/30',
      lineColor: 'bg-primary-500'
    },
    upcoming: {
      icon: AlertCircle,
      iconColor: 'text-slate-500',
      bgColor: 'bg-slate-800/50',
      borderColor: 'border-slate-700',
      lineColor: 'bg-slate-700'
    }
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex gap-4"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 top-12 h-full w-0.5 bg-slate-800" />
      )}

      {/* Icon */}
      <div className={cn(
        "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2",
        config.bgColor,
        config.borderColor
      )}>
        {item.icon || <Icon className={cn("h-5 w-5", config.iconColor)} />}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-1 pb-8">
        {item.date && (
          <p className="text-xs font-medium text-slate-500">{item.date}</p>
        )}
        <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
        {item.description && (
          <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
        )}
      </div>
    </motion.div>
  )
}

function TimelineItemHorizontal({ item, index }: { item: TimelineItem, index: number }) {
  const status = item.status || (index === 0 ? 'current' : 'completed')
  
  const statusConfig = {
    completed: {
      icon: CheckCircle2,
      iconColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    current: {
      icon: Clock,
      iconColor: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
      borderColor: 'border-primary-500/30'
    },
    upcoming: {
      icon: AlertCircle,
      iconColor: 'text-slate-500',
      bgColor: 'bg-slate-800/50',
      borderColor: 'border-slate-700'
    }
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex min-w-[200px] flex-col items-center gap-3"
    >
      <div className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2",
        config.bgColor,
        config.borderColor
      )}>
        {item.icon || <Icon className={cn("h-6 w-6", config.iconColor)} />}
      </div>
      <div className="text-center space-y-1">
        {item.date && (
          <p className="text-xs text-slate-500">{item.date}</p>
        )}
        <h3 className="text-sm font-semibold text-slate-100">{item.title}</h3>
        {item.description && (
          <p className="text-xs text-slate-400">{item.description}</p>
        )}
      </div>
    </motion.div>
  )
}

