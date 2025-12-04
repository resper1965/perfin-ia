'use client'

import React from 'react'
import { SplineScene } from '@/components/ui/spline-scene'

export function HeroSection() { 
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <SplineScene
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 w-full h-full" 
      />
    </div> 
  )
}

