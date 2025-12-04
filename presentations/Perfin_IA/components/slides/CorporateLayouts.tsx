/**
 * LAYOUTS CORPORATIVOS PREMIUM
 *
 * Componentes de layout profissionais para apresentações corporativas.
 * Design minimalista, elegante e focado em clareza visual.
 */

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NessText } from '@/components/ui/ness-text'

// ==================== HERO SLIDE CORPORATIVO ====================

interface HeroSlideProps {
  title: string
  subtitle?: string
  description?: string
  backgroundGradient?: 'default' | 'brand' | 'dark' | 'elegant'
  alignment?: 'left' | 'center'
  children?: ReactNode
}

export function HeroSlide({
  title,
  subtitle,
  description,
  backgroundGradient = 'default',
  alignment = 'center',
  children
}: HeroSlideProps) {
  const gradients = {
    default: 'from-neutral-950 via-neutral-900 to-neutral-950',
    brand: 'from-neutral-950 via-primary-950/30 to-neutral-950',
    dark: 'from-black via-neutral-950 to-black',
    elegant: 'from-neutral-950 via-neutral-900/50 to-neutral-950'
  }

  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center'
  }

  return (
    <div className={cn(
      "relative flex flex-col justify-center min-h-screen px-16 py-20",
      "bg-gradient-to-br",
      gradients[backgroundGradient]
    )}>
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className={cn(
        "relative z-10 max-w-6xl mx-auto w-full flex flex-col gap-10",
        alignmentClasses[alignment]
      )}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Title */}
          <h1 className="text-lg md:text-xl lg:text-8xl font-medium font-montserrat text-white leading-[1.1] tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-lg text-neutral-300 font-light leading-relaxed max-w-4xl">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-xl md:text-lg text-neutral-400 font-light leading-relaxed max-w-3xl pt-4">
              {description}
            </p>
          )}
        </motion.div>

        {/* Additional Content */}
        {children && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* ness. branding - bottom right */}
      <div className="absolute bottom-10 right-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <NessText variant="dark" size="xl" />
        </motion.div>
      </div>
    </div>
  )
}

// ==================== SPLIT LAYOUT ====================

interface SplitLayoutProps {
  title: string
  subtitle?: string
  icon?: LucideIcon
  leftContent: ReactNode
  rightContent: ReactNode
  splitRatio?: '50-50' | '60-40' | '40-60'
  variant?: 'default' | 'minimal' | 'elevated'
}

export function SplitLayout({
  title,
  subtitle,
  icon: Icon,
  leftContent,
  rightContent,
  splitRatio = '50-50',
  variant = 'default'
}: SplitLayoutProps) {
  const ratios = {
    '50-50': 'grid-cols-2',
    '60-40': 'grid-cols-[1.5fr_1fr]',
    '40-60': 'grid-cols-[1fr_1.5fr]'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-16 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          {Icon && (
            <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
              <Icon className="w-8 h-8 text-primary-400" />
            </div>
          )}
          <div>
            <h1 className="text-xl font-medium font-montserrat text-white tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-neutral-400 mt-2">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>

      {/* Split Content */}
      <div className={cn("grid gap-12 h-[calc(100vh-280px)]", ratios[splitRatio])}>
        {/* Left */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex flex-col",
            variant === 'elevated' && "p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50"
          )}
        >
          {leftContent}
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex flex-col",
            variant === 'elevated' && "p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50"
          )}
        >
          {rightContent}
        </motion.div>
      </div>
    </div>
  )
}

// ==================== CONTENT CARD PREMIUM ====================

interface ContentCardProps {
  title?: string
  icon?: LucideIcon
  children: ReactNode
  variant?: 'default' | 'highlight' | 'minimal' | 'glass'
  size?: 'sm' | 'md' | 'lg'
}

export function ContentCard({
  title,
  icon: Icon,
  children,
  variant = 'default',
  size = 'md'
}: ContentCardProps) {
  const variants = {
    default: 'bg-neutral-900/50 border border-neutral-800/50',
    highlight: 'bg-gradient-to-br from-primary-900/20 via-neutral-900/50 to-neutral-900/50 border border-primary-500/20',
    minimal: 'bg-transparent border-l-4 border-primary-500 pl-6',
    glass: 'bg-white/5 backdrop-blur-sm border border-white/10'
  }

  const sizes = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10'
  }

  return (
    <div className={cn(
      "rounded-2xl",
      variants[variant],
      sizes[size],
      variant !== 'minimal' && "shadow-xl"
    )}>
      {title && (
        <div className="flex items-center gap-3 mb-6">
          {Icon && <Icon className="w-6 h-6 text-primary-400" />}
          <h3 className="text-lg font-medium font-montserrat text-white">
            {title}
          </h3>
        </div>
      )}
      <div className="text-neutral-300 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

// ==================== FEATURE GRID PREMIUM ====================

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  highlight?: boolean
}

interface FeatureGridPremiumProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGridPremium({ features, columns = 3 }: FeatureGridPremiumProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }

  return (
    <div className={cn("grid gap-6", gridCols[columns])}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "group p-8 rounded-2xl border transition-all duration-300",
            feature.highlight
              ? "bg-gradient-to-br from-primary-900/20 to-neutral-900/50 border-primary-500/30 hover:border-primary-500/50"
              : "bg-neutral-900/30 border-neutral-800/30 hover:border-neutral-700/50",
            "hover:transform hover:scale-[1.02]"
          )}
        >
          <div className={cn(
            "p-4 rounded-xl mb-6 inline-block transition-colors",
            feature.highlight
              ? "bg-primary-500/20 group-hover:bg-primary-500/30"
              : "bg-neutral-800/50 group-hover:bg-neutral-800"
          )}>
            <feature.icon className={cn(
              "w-8 h-8",
              feature.highlight ? "text-primary-400" : "text-neutral-400"
            )} />
          </div>

          <h3 className="text-xl font-medium font-montserrat text-white mb-3">
            {feature.title}
          </h3>

          <p className="text-neutral-400 leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

// ==================== STATS DASHBOARD ====================

interface Stat {
  label: string
  value: string | number
  change?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
  }
  icon?: LucideIcon
}

interface StatsDashboardProps {
  stats: Stat[]
  columns?: 2 | 3 | 4
}

export function StatsDashboard({ stats, columns = 4 }: StatsDashboardProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }

  return (
    <div className={cn("grid gap-6", gridCols[columns])}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <p className="text-sm uppercase tracking-wider text-neutral-500 font-medium">
              {stat.label}
            </p>
            {stat.icon && (
              <stat.icon className="w-5 h-5 text-neutral-600" />
            )}
          </div>

          <div className="flex items-baseline gap-3">
            <p className="text-xl font-medium font-montserrat text-white">
              {stat.value}
            </p>

            {stat.change && (
              <span className={cn(
                "text-sm font-medium",
                stat.change.direction === 'up' && "text-green-400",
                stat.change.direction === 'down' && "text-red-400",
                stat.change.direction === 'neutral' && "text-neutral-400"
              )}>
                {stat.change.direction === 'up' && '↑'}
                {stat.change.direction === 'down' && '↓'}
                {stat.change.value}%
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ==================== QUOTE BOX ====================

interface QuoteBoxProps {
  quote: string
  author?: string
  variant?: 'default' | 'highlight' | 'minimal'
}

export function QuoteBox({ quote, author, variant = 'default' }: QuoteBoxProps) {
  const variants = {
    default: 'bg-neutral-900/50 border-neutral-800/50',
    highlight: 'bg-gradient-to-br from-primary-900/20 to-neutral-900/50 border-primary-500/30',
    minimal: 'bg-transparent border-l-4 border-primary-500'
  }

  return (
    <div className={cn(
      "p-10 rounded-2xl border",
      variants[variant]
    )}>
      <div className="flex items-start gap-4">
        <span className="text-lg text-primary-500/30 font-serif leading-none">"</span>
        <div className="flex-1 pt-4">
          <p className="text-lg text-white font-light leading-relaxed mb-6">
            {quote}
          </p>
          {author && (
            <p className="text-lg text-neutral-400">
              — {author}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// ==================== TIMELINE CORPORATIVA ====================

interface TimelineItem {
  phase: string
  title: string
  description: string
  status?: 'completed' | 'current' | 'upcoming'
}

interface TimelineCorporateProps {
  items: TimelineItem[]
  orientation?: 'horizontal' | 'vertical'
}

export function TimelineCorporate({ items, orientation = 'horizontal' }: TimelineCorporateProps) {
  if (orientation === 'vertical') {
    return (
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-6"
          >
            {/* Indicator */}
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-4 h-4 rounded-full border-4",
                item.status === 'completed' && "bg-green-500 border-green-500/30",
                item.status === 'current' && "bg-primary-500 border-primary-500/30 animate-pulse",
                (!item.status || item.status === 'upcoming') && "bg-neutral-700 border-neutral-700/30"
              )} />
              {index < items.length - 1 && (
                <div className="w-0.5 h-full mt-2 bg-gradient-to-b from-neutral-700 to-transparent" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="text-sm uppercase tracking-wider text-primary-400 font-medium mb-2">
                {item.phase}
              </div>
              <h3 className="text-lg font-medium font-montserrat text-white mb-3">
                {item.title}
              </h3>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  // Horizontal timeline
  return (
    <div className="grid grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Connector line */}
          {index < items.length - 1 && (
            <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-neutral-700 via-neutral-700 to-transparent" />
          )}

          <div className="relative text-center">
            {/* Indicator */}
            <div className="flex justify-center mb-6">
              <div className={cn(
                "w-12 h-12 rounded-full border-4 flex items-center justify-center text-lg font-medium font-montserrat",
                item.status === 'completed' && "bg-green-500 border-green-500/30 text-white",
                item.status === 'current' && "bg-primary-500 border-primary-500/30 text-white animate-pulse",
                (!item.status || item.status === 'upcoming') && "bg-neutral-900 border-neutral-700/30 text-neutral-500"
              )}>
                {index + 1}
              </div>
            </div>

            {/* Content */}
            <div className="text-sm uppercase tracking-wider text-primary-400 font-medium mb-3">
              {item.phase}
            </div>
            <h3 className="text-xl font-medium font-montserrat text-white mb-3">
              {item.title}
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ==================== CTA PREMIUM ====================

interface CTAPremiumProps {
  title: string
  description?: string
  primaryButton?: {
    text: string
    onClick?: () => void
  }
  secondaryButton?: {
    text: string
    onClick?: () => void
  }
  variant?: 'default' | 'centered' | 'split'
}

export function CTAPremium({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'centered'
}: CTAPremiumProps) {
  return (
    <div className={cn(
      "p-12 rounded-3xl bg-gradient-to-br from-primary-900/20 via-neutral-900/50 to-neutral-900/30 border border-primary-500/20",
      variant === 'centered' && "text-center"
    )}>
      <h2 className="text-lg font-medium font-montserrat text-white mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div className="flex gap-4 justify-center">
        {primaryButton && (
          <button
            onClick={primaryButton.onClick}
            className="px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20"
          >
            {primaryButton.text}
          </button>
        )}

        {secondaryButton && (
          <button
            onClick={secondaryButton.onClick}
            className="px-8 py-4 rounded-xl border-2 border-neutral-700 hover:border-neutral-600 text-white font-medium text-lg transition-all duration-300 hover:bg-neutral-800/50"
          >
            {secondaryButton.text}
          </button>
        )}
      </div>
    </div>
  )
}
