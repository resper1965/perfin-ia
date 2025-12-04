/**
 * Hero Section with Interactive 3D Robot
 * Seção hero com robô 3D interativo
 */
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  sceneUrl?: string
  className?: string
  showRobot?: boolean
}

export function HeroSection({ 
  title = "Apresentação Profissional",
  subtitle,
  sceneUrl = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode",
  className,
  showRobot = true
}: HeroSectionProps) {
  return (
    <div className={cn(
      "relative w-full h-screen overflow-hidden",
      "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
      className
    )}>
      {/* 3D Robot Background */}
      {showRobot && (
        <div className="absolute inset-0 z-0 opacity-80">
          <InteractiveRobotSpline
            scene={sceneUrl}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      {/* Content */}
      <div className={cn(
        "absolute inset-0 z-10",
        "flex flex-col items-center justify-center",
        "pt-20 md:pt-32 lg:pt-40",
        "px-4 md:px-8 lg:px-16",
        "pointer-events-none"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "text-center",
            "text-slate-100",
            "drop-shadow-2xl",
            "w-full max-w-4xl",
            "mx-auto",
            "space-y-6"
          )}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
              "font-bold font-montserrat",
              "leading-tight",
              "bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100",
              "bg-clip-text text-transparent"
            )}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={cn(
                "text-lg md:text-xl lg:text-2xl",
                "text-slate-300",
                "font-inter",
                "leading-relaxed",
                "max-w-2xl mx-auto"
              )}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-0.5 w-32 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full"
          />
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-[2]" />
    </div>
  )
}

