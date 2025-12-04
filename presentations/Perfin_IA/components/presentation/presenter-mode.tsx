/**
 * Presenter Mode - Timer, Notes, Preview
 */
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Pause, Play, RotateCcw, Eye, EyeOff, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PresenterTimerProps {
  targetMinutes?: number
}

export function PresenterTimer({ targetMinutes = 30 }: PresenterTimerProps) {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const targetSeconds = targetMinutes * 60
  const isOvertime = seconds > targetSeconds
  const percentage = Math.min((seconds / targetSeconds) * 100, 100)

  return (
    <Card className="bg-slate-850/50 border-slate-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm text-slate-300 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Cronômetro
          </CardTitle>
          <Badge
            variant={isOvertime ? "danger" : seconds > targetSeconds * 0.9 ? "warning" : "default"}
            size="sm"
          >
            {isOvertime ? "Tempo esgotado" : "No tempo"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Timer Display */}
        <div className="text-center">
          <div className={cn(
            "text-xl font-bold font-mono tabular-nums",
            isOvertime ? "text-red-400" : "text-primary"
          )}>
            {formatTime(seconds)}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Meta: {targetMinutes} minutos
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className={cn(
              "h-full rounded-full",
              isOvertime ? "bg-red-500" : percentage > 90 ? "bg-yellow-500" : "bg-primary"
            )}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(percentage, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          <Button
            onClick={() => setIsRunning(!isRunning)}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                Pausar
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Iniciar
              </>
            )}
          </Button>
          <Button
            onClick={() => {
              setSeconds(0)
              setIsRunning(false)
            }}
            variant="outline"
            size="sm"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface SlideNotesProps {
  notes: string
  slideNumber: number
  totalSlides: number
}

export function SlideNotes({ notes, slideNumber, totalSlides }: SlideNotesProps) {
  return (
    <Card className="bg-slate-850/50 border-slate-800">
      <CardHeader>
        <CardTitle className="text-sm text-slate-300 flex items-center justify-between">
          <span>Notas do Apresentador</span>
          <Badge variant="secondary" size="sm">
            Slide {slideNumber + 1}/{totalSlides}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-400 leading-relaxed">
          {notes || 'Sem notas para este slide.'}
        </p>
      </CardContent>
    </Card>
  )
}

interface SlidePreviewProps {
  slide: {
    title?: string
    subtitle?: string
    speakerNotes?: string
  } | null
  label: string
}

export function SlidePreview({ slide, label }: SlidePreviewProps) {
  if (!slide) return null

  return (
    <Card className="bg-slate-850/50 border-slate-800">
      <CardHeader>
        <CardTitle className="text-xs text-slate-400">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center overflow-hidden">
          <div className="text-center p-4">
            <div className="text-sm font-medium text-slate-300 line-clamp-2">
              {slide.title || 'Sem título'}
            </div>
            {slide.subtitle && (
              <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                {slide.subtitle}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Toggle Button Component (usado no rodapé)
interface PresenterToggleButtonProps {
  isOpen: boolean
  onToggle: () => void
}

export function PresenterToggleButton({ isOpen, onToggle }: PresenterToggleButtonProps) {
  return (
    <Button
      onClick={onToggle}
      variant="ghost"
      size="sm"
      className={cn(
        "transition-colors",
        isOpen ? "text-primary" : "text-slate-500 hover:text-slate-300"
      )}
      title="Modo Apresentador (p)"
    >
      {isOpen ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
    </Button>
  )
}

// Overlay Component (renderizado separadamente)
interface PresenterOverlayProps {
  isOpen: boolean
  onClose: () => void
  currentSlide: {
    speakerNotes?: string
  }
  nextSlide: {
    speakerNotes?: string
  } | null
  currentIndex: number
  totalSlides: number
}

export function PresenterOverlay({
  isOpen,
  onClose,
  currentSlide,
  nextSlide,
  currentIndex,
  totalSlides
}: PresenterOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Presenter Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 max-h-[60vh] bg-slate-900 border-t border-slate-700 shadow-2xl z-[101] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">Modo Apresentador</h3>
                  <p className="text-xs text-slate-400">
                    Slide {currentIndex + 1} de {totalSlides}
                  </p>
                </div>
              </div>
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon-sm"
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Timer */}
                <div className="lg:col-span-1">
                  <PresenterTimer targetMinutes={30} />
                </div>

                {/* Notes */}
                <div className="lg:col-span-2">
                  <SlideNotes
                    notes={currentSlide?.speakerNotes || ''}
                    slideNumber={currentIndex}
                    totalSlides={totalSlides}
                  />
                </div>

                {/* Next Slide Preview */}
                {nextSlide && (
                  <div className="lg:col-span-1">
                    <SlidePreview slide={nextSlide} label="Próximo Slide" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
