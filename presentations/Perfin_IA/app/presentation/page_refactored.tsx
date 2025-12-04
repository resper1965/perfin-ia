/**
 * APRESENTAÇÃO PERFIN IA - VERSÃO CORPORATIVA PREMIUM
 * Design elegante, minimalista e altamente profissional
 *
 * Refatoração focada em:
 * - Layouts corporativos premium
 * - Hierarquia visual clara
 * - Tipografia profissional
 * - Espaçamento generoso
 * - Animações elegantes
 */
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Brain,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckSquare,
  BarChart3,
  Map,
  Sparkles,
  Cpu,
  Code,
  AlertCircle,
  CheckCircle2,
  Zap,
  Shield,
  Rocket,
  LineChart,
  Users,
  Clock,
  ArrowRight,
  Lightbulb,
  FileText,
  Settings,
  Database,
  Lock
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { NessText } from '@/components/ui/ness-text'

// Novos Layouts Corporativos Premium
import {
  HeroSlide,
  SplitLayout,
  ContentCard,
  FeatureGridPremium,
  StatsDashboard,
  QuoteBox,
  TimelineCorporate,
  CTAPremium
} from '@/components/slides/CorporateLayouts'

// Componentes de Apresentação Existentes
import { MinimapOverlay } from '@/components/presentation/slide-minimap'
import { PresenterToggleButton, PresenterOverlay } from '@/components/presentation/presenter-mode'
import { ProgressIndicator, SectionProgress } from '@/components/presentation/progress-indicator'
import { KeyboardShortcutsPanel, useKeyboardShortcuts } from '@/components/presentation/keyboard-shortcuts'
import { PageTransition, Direction } from '@/components/presentation/slide-transition'

// Data
import {
  presentationMetadata,
  tarefas,
  pontosAtencao
} from '@/lib/presentation-data'

// ========== SEÇÕES DA APRESENTAÇÃO ==========
const slideSections = [
  { title: 'Introdução', startIndex: 0, endIndex: 1, icon: <Brain className="w-4 h-4" /> },
  { title: 'O Desafio', startIndex: 2, endIndex: 3, icon: <TrendingUp className="w-4 h-4" /> },
  { title: 'A Solução IA', startIndex: 4, endIndex: 7, icon: <Sparkles className="w-4 h-4" /> },
  { title: 'Casos de Uso', startIndex: 8, endIndex: 9, icon: <Cpu className="w-4 h-4" /> },
  { title: 'Implementação', startIndex: 10, endIndex: 11, icon: <Rocket className="w-4 h-4" /> },
  { title: 'Próximos Passos', startIndex: 12, endIndex: 12, icon: <Target className="w-4 h-4" /> },
]

// ========== SLIDE 01: HERO - TÍTULO PRINCIPAL ==========
function Slide01_Hero() {
  return (
    <HeroSlide
      title="IA Aplicada à Perfin"
      subtitle="Acelerando análise de investimentos, jurídico e backoffice com segurança regulatória"
      backgroundGradient="brand"
      alignment="center"
    >
      <div className="flex items-center gap-4 text-primary-400 font-medium text-xl">
        <span>NESS Processos e Tecnologia</span>
      </div>
    </HeroSlide>
  )
}

// ========== SLIDE 02: PERFIN HOJE - INTRO ==========
function Slide02_PerfinIntro() {
  const stats = [
    {
      label: 'Portfólio',
      value: 'R$ 15Bi+',
      icon: TrendingUp
    },
    {
      label: 'Ativos',
      value: '150+',
      icon: BarChart3
    },
    {
      label: 'Documentos/Ano',
      value: '10k+',
      icon: FileText
    },
    {
      label: 'Horas Análise',
      value: '5k+',
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-16 py-16">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
            <Brain className="w-8 h-8 text-primary-400" />
          </div>
          <div>
            <h1 className="text-5xl font-medium font-montserrat text-white tracking-tight">
              Perfin Hoje
            </h1>
            <p className="text-xl text-neutral-400 mt-2">Contexto e Oportunidades</p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>

      {/* Stats Dashboard */}
      <div className="mb-12">
        <StatsDashboard stats={stats} columns={4} />
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 gap-6">
        <ContentCard variant="highlight" size="lg">
          <h3 className="text-2xl font-medium font-montserrat text-white mb-4">
            Complexidade e Diversificação Crescentes
          </h3>
          <ul className="space-y-4 text-lg text-neutral-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-400 mt-1 shrink-0" />
              <span>Portfólio diversificado em infraestrutura e equity</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-400 mt-1 shrink-0" />
              <span>Múltiplas camadas de análise: financeira, jurídica, operacional, regulatória</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-400 mt-1 shrink-0" />
              <span>Volume crescente de documentos e dados não estruturados</span>
            </li>
          </ul>
        </ContentCard>
      </div>
    </div>
  )
}

// ========== SLIDE 03: O DESAFIO ==========
function Slide03_Desafio() {
  return (
    <SplitLayout
      title="O Desafio de Escala"
      icon={AlertTriangle}
      splitRatio="50-50"
      variant="elevated"
      leftContent={
        <div className="flex flex-col justify-center h-full space-y-6">
          <h3 className="text-3xl font-medium font-montserrat text-white mb-4">
            Análise Manual Intensiva
          </h3>

          <div className="space-y-4">
            <div className="p-6 bg-red-900/10 rounded-xl border border-red-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-red-400" />
                <h4 className="text-xl font-medium text-red-300">Tempo</h4>
              </div>
              <p className="text-neutral-300 text-lg">
                Dias ou semanas para análise de documentos complexos
              </p>
            </div>

            <div className="p-6 bg-red-900/10 rounded-xl border border-red-500/20">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h4 className="text-xl font-medium text-red-300">Risco</h4>
              </div>
              <p className="text-neutral-300 text-lg">
                Erros humanos em tarefas repetitivas e volumosas
              </p>
            </div>

            <div className="p-6 bg-red-900/10 rounded-xl border border-red-500/20">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-red-400" />
                <h4 className="text-xl font-medium text-red-300">Escalabilidade</h4>
              </div>
              <p className="text-neutral-300 text-lg">
                Dificuldade em crescer sem aumentar proporcionalmente o time
              </p>
            </div>
          </div>
        </div>
      }
      rightContent={
        <div className="flex flex-col justify-center h-full">
          <QuoteBox
            quote="Como acelerar análises complexas mantendo qualidade e compliance regulatório?"
            variant="highlight"
          />

          <div className="mt-8 space-y-4">
            <h4 className="text-xl font-medium font-montserrat text-primary-400">
              Oportunidade de Transformação
            </h4>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Inteligência Artificial pode automatizar tarefas repetitivas, permitindo que analistas
              foquem em insights estratégicos e decisões de alto valor.
            </p>
          </div>
        </div>
      }
    />
  )
}

// ========== SLIDE 04: O QUE É IA PODE FAZER ==========
function Slide04_OQueIAPodeFazer() {
  const features = [
    {
      icon: FileText,
      title: 'Extração Inteligente',
      description: 'Extrai dados estruturados de documentos complexos (PDFs, contratos, balanços)',
      highlight: true
    },
    {
      icon: Database,
      title: 'Cruzamento de Dados',
      description: 'Conecta informações entre múltiplos sistemas e fontes de dados',
      highlight: false
    },
    {
      icon: BarChart3,
      title: 'Análise Comparativa',
      description: 'Compara métricas entre empresas, setores e períodos automaticamente',
      highlight: false
    },
    {
      icon: Zap,
      title: 'Geração de Relatórios',
      description: 'Produz sínteses executivas e tabelas comparativas em minutos',
      highlight: true
    },
    {
      icon: Shield,
      title: 'Compliance Regulatório',
      description: 'Verifica aderência a normas e identifica riscos automaticamente',
      highlight: false
    },
    {
      icon: Lightbulb,
      title: 'Insights Estratégicos',
      description: 'Identifica padrões e anomalias que podem passar despercebidos',
      highlight: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-16 py-16">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
            <Sparkles className="w-8 h-8 text-primary-400" />
          </div>
          <div>
            <h1 className="text-5xl font-medium font-montserrat text-white tracking-tight">
              O Que IA Pode Fazer
            </h1>
            <p className="text-xl text-neutral-400 mt-2">Capacidades e Aplicações</p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>

      <FeatureGridPremium features={features} columns={3} />
    </div>
  )
}

// ========== SLIDE 05: BASE DE CONHECIMENTO ==========
function Slide05_BaseConhecimento() {
  return (
    <SplitLayout
      title="Base de Conhecimento"
      subtitle="Fundação da Inteligência Artificial"
      icon={Database}
      splitRatio="40-60"
      variant="elevated"
      leftContent={
        <div className="flex flex-col justify-center h-full space-y-6">
          <h3 className="text-3xl font-medium font-montserrat text-white">
            Repositório Centralizado
          </h3>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Todos os documentos da Perfin organizados e indexados para acesso instantâneo da IA.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-lg text-neutral-300">Balanços trimestrais</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-lg text-neutral-300">Contratos e aditivos</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-lg text-neutral-300">Regulamentos ANEEL/CVM</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-lg text-neutral-300">Due diligences anteriores</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-lg text-neutral-300">Notas técnicas e pareceres</span>
            </div>
          </div>
        </div>
      }
      rightContent={
        <div className="flex flex-col justify-center h-full">
          <ContentCard variant="highlight" size="lg">
            <h3 className="text-2xl font-medium font-montserrat text-white mb-6">
              Tecnologia RAG (Retrieval-Augmented Generation)
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 shrink-0">
                  <span className="text-2xl font-bold font-montserrat text-primary-400">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Indexação Semântica</h4>
                  <p className="text-neutral-400">
                    Documentos são processados e transformados em vetores para busca por significado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 shrink-0">
                  <span className="text-2xl font-bold font-montserrat text-primary-400">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Busca Contextual</h4>
                  <p className="text-neutral-400">
                    IA encontra informações relevantes mesmo sem palavras-chave exatas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 shrink-0">
                  <span className="text-2xl font-bold font-montserrat text-primary-400">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Geração Fundamentada</h4>
                  <p className="text-neutral-400">
                    Respostas sempre baseadas em documentos reais, com rastreabilidade total
                  </p>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
      }
    />
  )
}

// ========== SLIDE 06: AGENTES INTELIGENTES ==========
function Slide06_AgentesInteligentes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-16 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
            <Cpu className="w-8 h-8 text-primary-400" />
          </div>
          <div>
            <h1 className="text-5xl font-medium font-montserrat text-white tracking-tight">
              Agentes Inteligentes (IA Agentic)
            </h1>
            <p className="text-xl text-neutral-400 mt-2">Além do Chatbot: Execução Autônoma</p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>

      <div className="space-y-8">
        {/* Formula */}
        <ContentCard variant="highlight" size="lg">
          <div className="text-center py-6">
            <div className="text-3xl font-medium font-montserrat text-white mb-4">
              Agente IA = LLM + Base de Conhecimento + Ferramentas
            </div>
            <p className="text-xl text-neutral-400">
              (ERPs, Planilhas, APIs, Bancos de Dados)
            </p>
          </div>
        </ContentCard>

        {/* Capabilities */}
        <div className="grid grid-cols-2 gap-8">
          <ContentCard variant="glass" size="lg">
            <h3 className="text-2xl font-medium font-montserrat text-white mb-6">
              Capacidades
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <span className="text-lg text-neutral-300">Buscar e cruzar informações entre sistemas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <span className="text-lg text-neutral-300">Executar análises repetitivas autonomamente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <span className="text-lg text-neutral-300">Gerar outputs estruturados (relatórios, comparações, alertas)</span>
              </li>
            </ul>
          </ContentCard>

          <ContentCard variant="glass" size="lg">
            <h3 className="text-2xl font-medium font-montserrat text-white mb-6">
              Diferencial
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-red-900/20 rounded-xl border border-red-500/30 text-center">
                <p className="text-red-400 font-medium text-lg mb-2">❌ Chatbot</p>
                <p className="text-sm text-neutral-400">Apenas responde perguntas</p>
              </div>
              <div className="p-6 bg-green-900/20 rounded-xl border border-green-500/30 text-center">
                <p className="text-green-400 font-medium text-lg mb-2">✅ Agente</p>
                <p className="text-sm text-neutral-400">Executa tarefas de ponta a ponta</p>
              </div>
            </div>
          </ContentCard>
        </div>

        {/* Example */}
        <QuoteBox
          quote="Agente Due Diligence: Extrai cláusulas de reajuste de contratos de transmissão, cruza com RAP ANEEL, e gera tabela comparativa automaticamente"
          variant="highlight"
        />
      </div>
    </div>
  )
}

// Continua na próxima parte...
