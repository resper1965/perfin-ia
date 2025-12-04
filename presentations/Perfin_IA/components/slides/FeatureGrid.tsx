/**
 * Feature grid component for displaying features in a grid layout
 */
'use client'

import * as React from "react"
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export interface Feature {
  id: string
  title: string
  description: string
  icon?: LucideIcon
  highlight?: boolean
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureGrid({ features, columns = 3, className }: FeatureGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={cn("grid gap-6", gridCols[columns], className)}>
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className={cn(
            "h-full border-slate-800 bg-slate-900/50 hover:border-primary/30 transition-all",
            feature.highlight && "border-primary/30 bg-primary/5"
          )}>
            <CardHeader>
              {feature.icon && (
                <div className={cn(
                  "mb-2 flex h-10 w-10 items-center justify-center rounded-lg",
                  feature.highlight ? "bg-primary/10" : "bg-slate-800"
                )}>
                  <feature.icon className={cn(
                    "h-5 w-5",
                    feature.highlight ? "text-primary-400" : "text-slate-400"
                  )} />
                </div>
              )}
              <CardTitle className="text-slate-100">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-400">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

