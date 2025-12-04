/**
 * Hero Section with Spline Scene
 * Seção hero com cena Spline
 */
'use client'

import React from 'react'
import { SplineScene } from '@/components/ui/spline-scene'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  sceneUrl?: string
  className?: string
}

export function HeroSection({ 
  sceneUrl = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode",
  className
}: HeroSectionProps) {
  return (
    <div 
      className={cn(
        "relative w-full h-screen overflow-hidden",
        className
      )}
    >
      <SplineScene
        scene={sceneUrl}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
