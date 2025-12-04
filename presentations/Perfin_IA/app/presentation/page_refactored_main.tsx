/**
 * APRESENTAÇÃO PERFIN IA - COMPONENTE PRINCIPAL
 * Versão Corporativa Premium Refatorada
 */
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Map,
  Maximize,
  Minimize,
  HelpCircle,
  Palette
} from 'lucide-react'

import { Button } from '@/components/ui/button'

// Componentes de Apresentação
import { MinimapOverlay } from '@/components/presentation/slide-minimap'
import { PresenterToggleButton, PresenterOverlay } from '@/components/presentation/presenter-mode'
import { ProgressIndicator, SectionProgress } from '@/components/presentation/progress-indicator'
import { KeyboardShortcutsPanel, useKeyboardShortcuts } from '@/components/presentation/keyboard-shortcuts'
import { PageTransition, Direction } from '@/components/presentation/slide-transition'

// Slides Refatorados - Parte 1
import {
  Slide01_Hero,
  Slide02_PerfinIntro,
  Slide03_Desafio,
  Slide04_OQueIAPodeFazer,
  Slide05_BaseConhecimento,
  Slide06_AgentesInteligentes
} from './page_refactored'

// Slides Refatorados - Parte 2
import {
  Slide07_DeepDiveInvestimentos,
  Slide08_OutrosCasosUso,
  Slide09_SegurancaCompliance,
  Slide10_Jornada,
  Slide11_ProximosPassos,
  Slide12_CTAFinal
} from './slides_refactored_part2'

// Seções da Apresentação (atualizado)
const slideSections = [
  { title: 'Introdução', startIndex: 0, endIndex: 1, icon: <Brain className="w-4 h-4" /> },
  { title: 'O Desafio', startIndex: 2, endIndex: 3, icon: <TrendingUp className="w-4 h-4" /> },
  { title: 'A Solução IA', startIndex: 4, endIndex: 6, icon: <Sparkles className="w-4 h-4" /> },
  { title: 'Casos de Uso', startIndex: 7, endIndex: 8, icon: <Cpu className="w-4 h-4" /> },
  { title: 'Segurança', startIndex: 9, endIndex: 9, icon: <Shield className="w-4 h-4" /> },
  { title: 'Implementação', startIndex: 10, endIndex: 11, icon: <Rocket className="w-4 h-4" /> },
  { title: 'CTA', startIndex: 12, endIndex: 12, icon: <Target className="w-4 h-4" /> },
]

// Array de slides
const slides = [
  // Seção 1: Introdução
  {
    component: Slide01_Hero,
    speakerNotes: 'Slide de abertura. Apresentar o tema: IA aplicada à Perfin para acelerar processos analíticos com segurança regulatória.'
  },
  {
    component: Slide02_PerfinIntro,
    speakerNotes: 'Contextualizar a Perfin: portfólio diversificado, volume crescente de documentos, múltiplas camadas de análise.'
  },

  // Seção 2: O Desafio
  {
    component: Slide03_Desafio,
    speakerNotes: 'Explicar o desafio de escala: análise manual intensiva, tempo, risco de erros, dificuldade de crescimento sem aumentar time proporcionalmente.'
  },
  {
    component: Slide04_OQueIAPodeFazer,
    speakerNotes: 'Apresentar as capacidades da IA: extração inteligente, cruzamento de dados, análise comparativa, geração de relatórios, compliance, insights.'
  },

  // Seção 3: A Solução IA
  {
    component: Slide05_BaseConhecimento,
    speakerNotes: 'Explicar Base de Conhecimento: repositório centralizado de documentos indexados semanticamente, tecnologia RAG.'
  },
  {
    component: Slide06_AgentesInteligentes,
    speakerNotes: 'Conceito de Agentes Inteligentes: LLM + Base de Conhecimento + Ferramentas. Diferença entre chatbot e agente autônomo.'
  },

  // Seção 4: Casos de Uso
  {
    component: Slide07_DeepDiveInvestimentos,
    speakerNotes: 'Deep dive em investimentos: comparação workflow atual vs. com IA. Ganho de tempo: dias para horas, foco em análise estratégica.'
  },
  {
    component: Slide08_OutrosCasosUso,
    speakerNotes: 'Outros casos de uso: jurídico, due diligence, backoffice/RI, compliance regulatório. Economia de 60-80% do tempo em tarefas repetitivas.'
  },

  // Seção 5: Segurança
  {
    component: Slide09_SegurancaCompliance,
    speakerNotes: 'Segurança e compliance: arquitetura on-premise/cloud privada, sem vazamento para LLMs públicos, controle de acesso, auditoria, conformidade LGPD/CVM/ANEEL.'
  },

  // Seção 6: Implementação
  {
    component: Slide10_Jornada,
    speakerNotes: 'Jornada de implementação: 3 fases - Discovery/Piloto, Implementação, Expansão. Abordagem incremental e validada.'
  },
  {
    component: Slide11_ProximosPassos,
    speakerNotes: 'Próximos passos: Workshop de Descoberta e Apresentação de Arquitetura Técnica. Por que NESS: experiência de Esper Nunes, abordagem consultiva.'
  },

  // Seção 7: CTA
  {
    component: Slide12_CTAFinal,
    speakerNotes: 'CTA final: agendar workshop. Encerramento.'
  }
]

export default function PresentationRefactored() {
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<Direction>('forward')
  const [showPresenter, setShowPresenter] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [showMinimap, setShowMinimap] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'high-contrast'>('dark')

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setDirection('forward')
      setCurrent(current + 1)
    }
  }

  const prevSlide = () => {
    if (current > 0) {
      setDirection('backward')
      setCurrent(current - 1)
    }
  }

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > current ? 'forward' : 'backward')
      setCurrent(index)
    }
  }

  const goToSection = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < slideSections.length) {
      goToSlide(slideSections[sectionIndex].startIndex)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  useKeyboardShortcuts({
    onNext: nextSlide,
    onPrevious: prevSlide,
    onFirst: () => goToSlide(0),
    onLast: () => goToSlide(slides.length - 1),
    onToggleNotes: () => setShowNotes(prev => !prev),
    onToggleFullscreen: toggleFullscreen,
    onTogglePresenter: () => setShowPresenter(prev => !prev),
    onToggleMinimap: () => setShowMinimap(prev => !prev),
    onToggleHelp: () => setShowHelp(prev => !prev),
    onToggleTheme: () => setTheme(prev => prev === 'dark' ? 'high-contrast' : 'dark'),
    onGotoSection: goToSection,
  })

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const CurrentSlideComponent = slides[current].component

  return (
    <div className={`min-h-screen flex flex-col font-inter text-neutral-200 ${theme === 'high-contrast' ? 'bg-black' : 'bg-neutral-900'}`}>
      {/* Slide Container */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <PageTransition key={current} direction={direction}>
            <CurrentSlideComponent />
          </PageTransition>
        </AnimatePresence>
      </div>

      {/* Navigation Footer - Design Premium */}
      <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 backdrop-blur-xl border-t border-neutral-800/50 px-8 py-4 z-50 shadow-2xl">
        {/* Section Progress */}
        <div className="mb-4">
          <SectionProgress
            sections={slideSections}
            currentSlide={current}
            onNavigate={goToSlide}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-6">
          {/* Left: Progress Indicator */}
          <div className="flex-1 max-w-md">
            <ProgressIndicator
              current={current}
              total={slides.length}
              sections={slideSections}
            />
          </div>

          {/* Center: Navigation Buttons */}
          <div className="flex items-center gap-3">
            <Button
              onClick={prevSlide}
              disabled={current === 0}
              variant="ghost"
              size="sm"
              className="hover:bg-neutral-800 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
              <span className="text-sm font-medium text-neutral-300">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            <Button
              onClick={nextSlide}
              disabled={current === slides.length - 1}
              variant="ghost"
              size="sm"
              className="hover:bg-neutral-800 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right: Utility Buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowMinimap(true)}
              variant="ghost"
              size="sm"
              title="Minimap (M)"
              className="hover:bg-neutral-800"
            >
              <Map className="w-4 h-4" />
            </Button>

            <PresenterToggleButton
              isOpen={showPresenter}
              onToggle={() => setShowPresenter(prev => !prev)}
            />

            <Button
              onClick={toggleFullscreen}
              variant="ghost"
              size="sm"
              title={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
              className="hover:bg-neutral-800"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>

            <Button
              onClick={() => setShowHelp(true)}
              variant="ghost"
              size="sm"
              title="Keyboard Shortcuts (?)"
              className="hover:bg-neutral-800"
            >
              <HelpCircle className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => setTheme(prev => prev === 'dark' ? 'high-contrast' : 'dark')}
              variant="ghost"
              size="sm"
              title="Toggle Theme (T)"
              className="hover:bg-neutral-800"
            >
              <Palette className="w-4 h-4" />
            </Button>

            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              title="Logout"
              className="hover:bg-red-900/20 hover:text-red-400"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Overlays */}
      <MinimapOverlay
        isOpen={showMinimap}
        onClose={() => setShowMinimap(false)}
        slides={slides}
        currentSlide={current}
        onNavigate={goToSlide}
        sections={slideSections}
      />

      <PresenterOverlay
        isOpen={showPresenter}
        onToggle={() => setShowPresenter(prev => !prev)}
        currentSlide={slides[current]}
        nextSlide={current < slides.length - 1 ? slides[current + 1] : undefined}
        currentIndex={current}
        totalSlides={slides.length}
      />

      <KeyboardShortcutsPanel
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />
    </div>
  )
}
