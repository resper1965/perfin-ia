/**
 * APRESENTAÇÃO DE IA - ness.
 * Apresentação interativa com design system ness.
 * Marca: ness. (#00ade8)
 * 
 * INSTRUÇÕES:
 * 1. Preencha os dados em lib/presentation-data.ts
 * 2. Ajuste as seções conforme necessário
 * 3. Personalize os slides conforme sua necessidade
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
  FileSearch,
  CheckSquare,
  Award,
  BarChart3,
  Activity,
  Map,
  Maximize,
  Minimize,
  HelpCircle,
  Palette,
  FileText,
  Users,
  CheckCircle2,
  Clock,
  Server,
  Laptop,
  AlertCircle,
  X,
  Calendar,
  Eye,
  Zap,
  Settings,
  HardDrive,
  AlertCircle as AlertCircleIcon,
  FileBarChart,
  Network,
  Sparkles,
  Cpu,
  Code,
  Lock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NessText } from '@/components/ui/ness-text'

// Advanced Components
import { MetricsDashboardRich } from '@/components/advanced/MetricsDashboardRich'
import { MermaidDiagram } from '@/components/visualization/MermaidDiagram'

// Professional Components
import { SlideLayout, ContentContainer } from '@/components/slides/SlideLayout'
import { DataCard, MiniDataCard } from '@/components/slides/DataCard'
import { ChartCard } from '@/components/slides/ChartCard'
import { MetricGrid } from '@/components/slides/MetricGrid'
import { StatusIndicator, StatusBadge, ProgressStatus } from '@/components/slides/StatusIndicator'
import { SectionHeader } from '@/components/slides/SectionHeader'
import { InfoPanel, FeatureList } from '@/components/slides/InfoPanel'

// Chart Components
import { CISControlsTable } from '@/components/presentation/cis-controls-table'
import { CISControlsGrid } from '@/components/presentation/cis-controls-grid'
import { MaturityRadar } from '@/components/presentation/maturity-radar'
import { EvolutionTimeline } from '@/components/presentation/evolution-timeline'
import { VulnerabilityEvolutionChart } from '@/components/presentation/vulnerability-chart'
import { CisStatusChart } from '@/components/presentation/cis-status-chart'
import { SectionDivider } from '@/components/presentation/section-divider'

// UX Components
import { MinimapOverlay } from '@/components/presentation/slide-minimap'
import { PresenterToggleButton, PresenterOverlay } from '@/components/presentation/presenter-mode'
import { ProgressIndicator, SectionProgress } from '@/components/presentation/progress-indicator'
import { KeyboardShortcutsPanel, useKeyboardShortcuts } from '@/components/presentation/keyboard-shortcuts'
import { KeyboardShortcutsHint } from '@/components/presentation/keyboard-shortcuts-hint'
import { PageTransition, Direction } from '@/components/presentation/slide-transition'

// Data
import {
  cisControls,
  workedControls,
  currentMaturity,
  vulnerabilityEvolution,
  totalVulnerabilitiesTrend,
  pentestApplications,
  pontosAtencao,
  tarefas,
  implementationEvolution,
  maturityEvolution,
  statusVsReference,
  workedEvolution,
  vulnerabilityScanScope,
  pentestSummary,
  cisStatusData,
  presentationMetadata
} from '@/lib/presentation-data'

// Sections - Atualizado para tema de IA
const slideSections = [
  { title: 'Introdução', startIndex: 0, endIndex: 3, icon: <Brain className="w-4 h-4" /> },
  { title: 'IA e Machine Learning', startIndex: 4, endIndex: 9, icon: <Sparkles className="w-4 h-4" /> },
  { title: 'Aplicações', startIndex: 10, endIndex: 11, icon: <Cpu className="w-4 h-4" /> },
  { title: 'Projetos', startIndex: 12, endIndex: 12, icon: <Code className="w-4 h-4" /> },
  { title: 'Tarefas', startIndex: 13, endIndex: 15, icon: <CheckSquare className="w-4 h-4" /> },
  { title: 'Pontos de Atenção', startIndex: 16, endIndex: 17, icon: <AlertCircle className="w-4 h-4" /> },
  { title: 'ness.', startIndex: 18, endIndex: 25, icon: <Brain className="w-4 h-4" /> },
]

// ========== SLIDE 1 ALT: LOGO NESS (Alternativa sem robô) ==========
function Slide01_LogoNess() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary-500/20 blur-3xl scale-150 animate-pulse" />

        {/* Logo */}
        <div className="relative p-16 rounded-3xl bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-2 border-primary-500/30">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-xl md:text-8xl font-montserrat font-medium tracking-tight">
                <NessText variant="dark" size="7xl" />
              </h1>
              <p className="text-xl text-neutral-400">Inteligência Artificial</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ========== SLIDE 1: TÍTULO ==========
function Slide01_Titulo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-12 px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="z-10 space-y-12 text-center max-w-5xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-lg md:text-xl font-medium font-montserrat text-neutral-50 leading-tight">
            IA Aplicada à Perfin
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-4xl mx-auto">
            Acelerando análise de investimentos, jurídico e backoffice com segurança regulatória
          </p>

          <div className="pt-8">
            <p className="text-xl text-primary-400 font-medium">
              NESS Processos e Tecnologia
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ========== SLIDE 2: PERFIN HOJE - O DESAFIO DE ESCALA ==========
function Slide02_PerfinHoje() {
  const portfolioMetrics = [
    {
      label: 'Ativos em Portfólio',
      value: '15+',
      icon: TrendingUp,
      color: 'blue' as const,
      trend: { value: 25, direction: 'up' as const },
      sparklineData: [8, 10, 12, 13, 15]
    },
    {
      label: 'Verticais de Negócio',
      value: '8',
      icon: Network,
      color: 'purple' as const,
      sparklineData: [5, 6, 7, 7, 8]
    },
    {
      label: 'Documentos/Ano',
      value: '2.5k+',
      icon: FileText,
      color: 'amber' as const,
      trend: { value: 40, direction: 'up' as const },
      sparklineData: [1200, 1600, 2000, 2300, 2500]
    },
    {
      label: 'Horas Análise/Mês',
      value: '1.2k+',
      icon: Clock,
      color: 'rose' as const,
      trend: { value: 35, direction: 'up' as const },
      sparklineData: [600, 800, 1000, 1100, 1200]
    }
  ]

  return (
    <SlideLayout
      title="Perfin hoje: O desafio de escala"
      icon={TrendingUp}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="space-y-6">
          {/* Metrics Dashboard */}
          <MetricsDashboardRich
            metrics={portfolioMetrics}
            columns={4}
          />

          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Complexidade e diversificação crescentes:</h3>
            <ul className="space-y-3 text-lg text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Portfólio diversificado em infraestrutura e equity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Múltiplas verticais: transmissão, rodovias, saneamento, geração de energia, ações</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Due diligences técnicos, jurídicos e financeiros em frentes simultâneas</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Áreas com pressão identificadas:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <p className="font-medium text-slate-200 mb-2">Jurídico:</p>
                <p className="text-sm text-slate-400">Análise de contratos de concessão, PPPs, acordos de acionistas</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <p className="font-medium text-slate-200 mb-2">Backoffice:</p>
                <p className="text-sm text-slate-400">Interpretação de relatórios TOTVS RM, conciliações, auditorias</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <p className="font-medium text-slate-200 mb-2">Investimentos em Ações:</p>
                <p className="text-sm text-slate-400">Síntese de balanços, releases, comparações setoriais</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <p className="font-medium text-slate-200 mb-2">Relação com Investidores:</p>
                <p className="text-sm text-slate-400">Construção de narrativas e apresentações</p>
              </div>
            </div>
          </div>

          <InfoPanel variant="highlight" status="warning">
            <p className="text-lg">
              <strong>Tensão:</strong> Equipes especializadas vs. volume crescente de informação não-estruturada
            </p>
          </InfoPanel>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 3: O QUE IA PODE FAZER ==========
function Slide03_OQueIAPodeFazer() {
  return (
    <SlideLayout
      title="O que IA pode fazer (e o que não pode)"
      icon={Brain}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">LLM = "Analista generalista" de processamento de texto:</h3>
            <ul className="space-y-3 text-lg text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                <span>Excelente para ler, resumir, comparar, estruturar informações complexas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                <span>Processa documentos jurídicos, financeiros, técnicos em segundos</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-medium font-montserrat text-red-400 mb-4">Limitação crítica: Alucinação</h3>
            <ul className="space-y-3 text-lg text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1 shrink-0" size={20} />
                <span>Quando faltam dados, o modelo "completa" com informação inventada</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1 shrink-0" size={20} />
                <span>Risco alto em contextos regulados (CVM, LGPD, sigilo de investimentos)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1 shrink-0" size={20} />
                <span>Exemplos perigosos: números financeiros errados, cláusulas contratuais inexistentes</span>
              </li>
            </ul>
          </div>

          <InfoPanel variant="highlight" status="warning">
            <p className="text-lg">
              <strong>Conclusão:</strong> LLM "puro" é inadequado para gestoras. Precisa de controles.
            </p>
          </InfoPanel>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 4: BASE DE CONHECIMENTO ==========
function Slide04_BaseConhecimento() {
  const ragDiagram = `graph LR
    A[Usuário faz pergunta] --> B[Busca Vetorial]
    B --> C[(Base de Conhecimento<br/>Privada)]
    C --> D[Documentos Relevantes]
    D --> E[LLM + Contexto]
    E --> F[Resposta com Citações]
    
    style A fill:#1e293b,stroke:#00ade8,stroke-width:2px,color:#e2e8f0
    style B fill:#1e293b,stroke:#00ade8,stroke-width:2px,color:#e2e8f0
    style C fill:#0f172a,stroke:#00ade8,stroke-width:3px,color:#e2e8f0
    style D fill:#1e293b,stroke:#00ade8,stroke-width:2px,color:#e2e8f0
    style E fill:#1e293b,stroke:#00ade8,stroke-width:2px,color:#e2e8f0
    style F fill:#1e293b,stroke:#10b981,stroke-width:2px,color:#e2e8f0`

  return (
    <SlideLayout
      title="Nossa abordagem: Base de Conhecimento Inteligente"
      icon={HardDrive}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="space-y-6">
          {/* Mermaid Diagram */}
          <MermaidDiagram
            code={ragDiagram}
            title="Arquitetura RAG (Retrieval-Augmented Generation)"
            theme="dark"
          />

          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Repositório privado e conectado aos sistemas da Perfin:</h3>
            <ul className="space-y-3 text-lg text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Documentos reais: contratos, DDs, balanços, releases, regulamentos CVM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>IA consulta ESSA base antes de responder (não inventa)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Respostas ancoradas em fatos, com rastreabilidade por documento</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
              <h4 className="font-medium text-slate-200 mb-3">Benefícios:</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>✓ Redução drástica de alucinação</li>
                <li>✓ Precisão jurídica, financeira e operacional</li>
                <li>✓ Compliance: trilha de auditoria</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
              <h4 className="font-medium text-slate-200 mb-3">Integração potencial:</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• SharePoint / Google Drive / Sistema de RI</li>
                <li>• TOTVS RM (relatórios estruturados)</li>
                <li>• APIs de sistemas internos</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-500 italic pt-4">
            (Rodapé: Implementado com RAG - Retrieval Augmented Generation)
          </p>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 4: LISTA 18 CONTROLES ==========
function Slide04_Lista18Controles() {
  const trabalhados = cisControls.filter(c => c.worked && !c.excluded).length
  const total = cisControls.filter(c => !c.excluded).length
  const totalControles = cisControls.length // Deve ser 18
  
  return (
    <SlideLayout
      title="Escopo CIS v8.1 - IG2"
      subtitle={`${totalControles} Controles de Segurança • ${trabalhados} em foco`}
      icon={Target}
      variant="default"
      className="p-6"
    >
      <div className="flex flex-col h-full gap-3">
        {/* Legenda */}
        <div className="flex items-center gap-6 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-primary-500/15 border-2 border-primary-500/40" />
            <span className="text-neutral-300">Controles em Foco ({trabalhados})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-neutral-900/40 border-2 border-neutral-800/50" />
            <span className="text-neutral-400">Outros Controles ({total - trabalhados})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-neutral-900/20 border-2 border-neutral-800/40 opacity-40" />
            <span className="text-neutral-500">Excluído (1)</span>
          </div>
        </div>

        {/* Grid de controles */}
        <div className="flex-1 overflow-y-auto min-h-0 pr-2 custom-scrollbar">
          <CISControlsGrid controls={cisControls} />
        </div>
      </div>
    </SlideLayout>
  )
}

// ========== SLIDE 5: AGENTES INTELIGENTES ==========
function Slide05_AgentesInteligentes() {
  const agentDiagram = `graph TB
    A[Usuário] --> B[Agente Inteligente]
    B --> C[LLM]
    B --> D[(Base de<br/>Conhecimento)]
    B --> E[Ferramentas]
    E --> F[ERP/TOTVS]
    E --> G[Planilhas]
    E --> H[APIs Internas]
    C --> I[Raciocínio]
    D --> I
    E --> I
    I --> J[Ação/Output]
    J --> A
    
    style A fill:#1e293b,stroke:#00ade8,stroke-width:2px,color:#e2e8f0
    style B fill:#0f172a,stroke:#00ade8,stroke-width:3px,color:#e2e8f0
    style C fill:#1e293b,stroke:#00ade8,stroke-width:2px,color:#e2e8f0
    style D fill:#1e293b,stroke:#00ade8,stroke-width:2px,color:#e2e8f0
    style E fill:#1e293b,stroke:#00ade8,stroke-width:2px,color:#e2e8f0
    style F fill:#334155,stroke:#64748b,stroke-width:1px,color:#e2e8f0
    style G fill:#334155,stroke:#64748b,stroke-width:1px,color:#e2e8f0
    style H fill:#334155,stroke:#64748b,stroke-width:1px,color:#e2e8f0
    style I fill:#1e293b,stroke:#a855f7,stroke-width:2px,color:#e2e8f0
    style J fill:#1e293b,stroke:#10b981,stroke-width:2px,color:#e2e8f0`

  return (
    <SlideLayout
      title="Agentes Inteligentes: Executam, não apenas respondem"
      icon={Zap}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="space-y-6">
          {/* Mermaid Diagram */}
          <MermaidDiagram
            code={agentDiagram}
            title="Arquitetura de Agentes Inteligentes"
            theme="dark"
          />

          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Combinação:</h3>
            <p className="text-lg text-slate-300 mb-4">
              LLM + Base de Conhecimento + Ferramentas (ERPs, planilhas, APIs)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Capacidades:</h3>
            <ul className="space-y-3 text-lg text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                <span>Buscar e cruzar informações entre sistemas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                <span>Executar análises repetitivas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                <span>Gerar outputs estruturados (relatórios, comparações, alertas)</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-red-900/20 rounded-lg border border-red-800/30">
              <p className="text-red-400 font-medium mb-2">❌ Chatbot que responde perguntas</p>
            </div>
            <div className="p-4 bg-green-900/20 rounded-lg border border-green-800/30">
              <p className="text-green-400 font-medium mb-2">✅ Agente que executa tarefas de ponta a ponta</p>
            </div>
          </div>

          <InfoPanel variant="highlight" status="info">
            <p className="text-lg">
              <strong>Exemplo conceitual:</strong> "Agente Due Diligence: Extrai cláusulas de reajuste de contratos de transmissão, cruza com RAP ANEEL, e gera tabela comparativa"
            </p>
          </InfoPanel>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 6: DEEP DIVE INVESTIMENTOS ==========
function Slide06_DeepDiveInvestimentos() {
  return (
    <SlideLayout
      title="Deep Dive: Investimentos em Ações"
      icon={BarChart3}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-medium font-montserrat text-primary-400">Workflow Atual (estimado):</h3>
            <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">1.</span>
                <span>Analista baixa balanços trimestrais de múltiplas empresas do setor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">2.</span>
                <span>Lê centenas de páginas para extrair: margem EBITDA, CAPEX, guidance, riscos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">3.</span>
                <span>Monta planilha comparativa manual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">4.</span>
                <span>Redige síntese para comitê de investimento</span>
              </li>
            </ul>
            <div className="p-3 bg-neutral-900/50 rounded border border-neutral-800 mt-4">
              <p className="text-sm text-neutral-400">
                <strong className="text-neutral-200">Tempo:</strong> Dias de trabalho analítico por comparação setorial
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium font-montserrat text-green-400">Workflow com IA (proposto):</h3>
            <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                <span>Agente ingere os balanços da Base de Conhecimento</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                <span>Extrai métricas-chave pré-definidas em formato estruturado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                <span>Gera tabela comparativa automaticamente</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                <span>Analista valida, ajusta e complementa análise qualitativa</span>
              </li>
            </ul>
            <div className="p-3 bg-green-900/20 rounded border border-green-800/30 mt-4">
              <p className="text-sm text-green-300">
                <strong className="text-green-200">Tempo:</strong> Horas, com foco em interpretação estratégica
              </p>
            </div>
          </div>
        </div>

        <InfoPanel variant="highlight" status="success">
          <p className="text-lg">
            <strong>Ganho:</strong> Analista foca em insights, não em extração manual
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 6: GRÁFICO COMPARATIVO ==========
function Slide06_Comparativo() {
  return (
    <SlideLayout
      title={`${presentationMetadata.cliente || 'Organização'} vs Referência`}
      subtitle="Comparativo com referência"
      icon={BarChart3}
      variant="default"
    >
      <ChartCard
        title="Aderência aos Controles CIS"
        subtitle="Comparação percentual por controle"
        icon={BarChart3}
        chart={<CisStatusChart data={statusVsReference} />}
        insight={{
          value: `${workedControls.length}/${cisControls.length}`,
          label: "controles acima da média",
          trend: {
            value: cisControls.length > 0 ? Math.round((workedControls.length / cisControls.length) * 100) : 0,
            direction: 'up'
          }
        }}
        status="success"
        height="lg"
      />
    </SlideLayout>
  )
}

// ========== SLIDE 7: OUTROS CASOS DE USO ==========
function Slide07_OutrosCasosUso() {
  return (
    <SlideLayout
      title="Outros casos de uso em avaliação"
      icon={FileSearch}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left p-4 text-neutral-300 font-medium font-montserrat">Área</th>
                <th className="text-left p-4 text-neutral-300 font-medium font-montserrat">Caso de Uso</th>
                <th className="text-left p-4 text-neutral-300 font-medium font-montserrat">Impacto Esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-800/50">
                <td className="p-4 text-neutral-200 font-medium">Jurídico</td>
                <td className="p-4 text-neutral-300">Leitura assistida de contratos de PPP/concessão</td>
                <td className="p-4 text-neutral-300">
                  <div className="space-y-1">
                    <p>⏱️ Redução de tempo de análise</p>
                    <p>🎯 Diminuição de risco de cláusula perdida</p>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-neutral-800/50">
                <td className="p-4 text-neutral-200 font-medium">Backoffice</td>
                <td className="p-4 text-neutral-300">Interpretação de relatórios TOTVS RM</td>
                <td className="p-4 text-neutral-300">
                  <div className="space-y-1">
                    <p>⏱️ Aceleração de conciliações</p>
                    <p>🛡️ Detecção precoce de erros</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-neutral-200 font-medium">Relação com Investidores</td>
                <td className="p-4 text-neutral-300">Geração de narrativas a partir de indicadores</td>
                <td className="p-4 text-neutral-300">
                  <div className="space-y-1">
                    <p>⏱️ Redução de tempo de preparação</p>
                    <p>📊 Consistência de storytelling</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-neutral-500 italic">
          (Nota: Casos em fase de mapeamento. Workshop necessário para priorização.)
        </p>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 7: EVOLUÇÃO TEMPORAL ==========
function Slide07_EvolucaoTemporal() {
  if (implementationEvolution.length === 0) {
    return (
      <SlideLayout title="Evolução da Implementação" subtitle="Dados não disponíveis" icon={TrendingUp} variant="default">
        <ContentContainer variant="stack" gap={4}>
          <InfoPanel variant="highlight" status="info">
            <p>Preencha os dados de evolução em <code>lib/presentation-data.ts</code></p>
          </InfoPanel>
        </ContentContainer>
      </SlideLayout>
    )
  }
  
  const latest = implementationEvolution[implementationEvolution.length - 1]
  const first = implementationEvolution[0]
  const crescimento = ((latest.geral - first.geral) / first.geral * 100).toFixed(0)
  
  return (
    <SlideLayout
      title="Evolução da Implementação"
      subtitle="Aderência Geral ao IG2 (Dez/23 - Nov/25)"
      icon={TrendingUp}
      variant="default"
    >
      <ContentContainer variant="stack" gap={4}>
        {/* Métricas */}
        <div className="grid grid-cols-4 gap-4">
          <DataCard
            title="Início (Dez/23)"
            value={`${first.geral}%`}
            icon={Clock}
            status="neutral"
            subtitle="Baseline inicial"
          />
          <DataCard
            title="Atual (Nov/25)"
            value={`${latest.geral}%`}
            icon={TrendingUp}
            status="success"
            subtitle="Aderência atual"
          />
          <DataCard
            title="Crescimento"
            value={`${crescimento}%`}
            icon={Activity}
            status="success"
            subtitle="Em 23 meses"
          />
          <DataCard
            title="Período"
            value="23 meses"
            icon={Calendar}
            status="neutral"
            subtitle="Dez/23 a Nov/25"
          />
        </div>

        {/* Gráfico */}
        <ChartCard
          title="Progresso Geral"
          subtitle="Crescimento consistente ao longo de 23 meses"
          icon={TrendingUp}
          chart={
            <EvolutionTimeline
              data={implementationEvolution}
              lines={[{ dataKey: 'geral', name: 'Aderência Geral (%)', color: '#00ade8' }]}
            />
          }
          insight={{
            value: `${latest.geral}%`,
            label: "aderência atual",
            trend: {
              value: 200,
              direction: 'up'
            }
          }}
          status="success"
          height="md"
        />
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 8: SEGURANÇA E COMPLIANCE ==========
function Slide08_SegurancaCompliance() {
  return (
    <SlideLayout
      title="Segurança, Compliance e Governança"
      icon={Lock}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium font-montserrat text-red-400 mb-4">Riscos inerentes:</h3>
            <ul className="space-y-3 text-lg text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1 shrink-0" size={20} />
                <span>Alucinação residual em contextos não documentados</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1 shrink-0" size={20} />
                <span>Exposição de dados sensíveis (informações privilegiadas, dados de cotistas)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1 shrink-0" size={20} />
                <span>Quebra de chinese wall entre fundos (equity vs. infra)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Camadas de mitigação:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <p className="font-medium text-neutral-200 mb-2">Base de Conhecimento Privada:</p>
                <p className="text-sm text-neutral-400">IA nunca consulta internet/fontes externas</p>
              </div>
              <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <p className="font-medium text-neutral-200 mb-2">Controles de Acesso:</p>
                <p className="text-sm text-neutral-400">Segregação por fundo/área (respeitando chinese wall)</p>
              </div>
              <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <p className="font-medium text-neutral-200 mb-2">Trilha de Auditoria:</p>
                <p className="text-sm text-neutral-400">Rastreabilidade total (quem perguntou, qual documento foi usado)</p>
              </div>
              <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <p className="font-medium text-neutral-200 mb-2">LGPD e CVM:</p>
                <p className="text-sm text-neutral-400">Ambiente on-premise ou cloud privado, sem exposição a terceiros</p>
              </div>
              <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800 md:col-span-2">
                <p className="font-medium text-neutral-200 mb-2">Validação Humana:</p>
                <p className="text-sm text-neutral-400">IA como assistente, não tomador de decisão</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Governança proposta:</h3>
            <ul className="space-y-2 text-lg text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Política interna de uso de IA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Comitê de aprovação de novos agentes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Revisão periódica de acurácia e riscos</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 8: CONTROLES TRABALHADOS ==========
function Slide08_ControlesTrabalhados() {
  const trabalhados = [
    { id: '2', name: '2 - Inventário e Controle de Ativos de Software', icon: Laptop },
    { id: '3', name: '3 - Proteção de dados', icon: Lock },
    { id: '4', name: '4 - Configuração segura de ativos e softwares', icon: Server },
    { id: '5', name: '5 - Estabelecer e Manter um inventário de contas', icon: Users },
    { id: '6', name: '6 - Gerenciamento de controle de acessos', icon: Brain },
    { id: '8', name: '8 - Gerenciamento de log de auditoria', icon: FileText },
    { id: '9', name: '9 - Proteções de e-mail e navegadores da Web', icon: Brain },
    { id: '13', name: '13 - Monitoramento e proteção de rede', icon: Activity },
  ]

  return (
    <SlideLayout
      title="Controles Trabalhados"
      subtitle="8 controles prioritários em foco"
      icon={CheckCircle2}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <InfoPanel variant="highlight" status="info">
          <p className="text-lg">
            A equipe de segurança está concentrada nestes <strong>8 controles prioritários</strong> que
            trazem maior redução de risco imediato para o escritório.
          </p>
        </InfoPanel>

        <FeatureList
          items={trabalhados.map(c => ({
            id: c.id,
            title: c.name,
            icon: c.icon
          }))}
          columns={2}
          variant="default"
          showCheckmarks={true}
          staggerDelay={0.1}
        />

        <ChartCard
          title="Evolução - Controles Trabalhados"
          subtitle="Progresso específico nos controles prioritários"
          chart={
            <EvolutionTimeline
              data={workedEvolution}
              lines={[{ dataKey: 'trabalhados', name: 'Controles Trabalhados (%)', color: '#22c55e' }]}
            />
          }
          insight={{
            value: "82%",
            label: "aderência nos prioritários"
          }}
          status="success"
          height="sm"
        />
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 9: JORNADA ==========
function Slide09_Jornada() {
  return (
    <SlideLayout
      title="Jornada (proposta inicial para discussão)"
      icon={Map}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Fase 1 – Descoberta e Prova de Valor</h3>
            <ul className="space-y-2 text-lg text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Workshop com áreas-chave (Jurídico, Investimentos, Backoffice, RI)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Mapeamento de casos de uso prioritários</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Configuração inicial da Base de Conhecimento com documentos reais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Piloto em ambiente controlado (áreas selecionadas)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Avaliação de impacto: tempo economizado, qualidade, aceitação do time</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Fase 2 – Integração Operacional</h3>
            <ul className="space-y-2 text-lg text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Conexão com sistemas existentes (TOTVS RM, repositórios de documentos)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Implantação de agentes em rotinas selecionadas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Treinamento de usuários e ajustes finos</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Fase 3 – Plataforma de IA da Perfin</h3>
            <ul className="space-y-2 text-lg text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Base de Conhecimento como ativo estratégico (alimentado continuamente)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Agentes especializados por área de negócio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Governança, monitoramento e expansão gradual</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-neutral-500 italic pt-4">
            (Timeframes e escopo detalhado a definir após workshop)
          </p>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 10: PRÓXIMOS PASSOS ==========
function Slide10_ProximosPassos() {
  return (
    <SlideLayout
      title="Próximos Passos"
      icon={Target}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Nossa proposta:</h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h4 className="text-xl font-medium font-montserrat text-neutral-200 mb-3">1. Workshop de Descoberta</h4>
                <ul className="space-y-2 text-lg text-neutral-300 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">•</span>
                    <span><strong>Participantes:</strong> Lideranças de Jurídico, Investimentos, Backoffice, RI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">•</span>
                    <span><strong>Objetivo:</strong> Mapear dores específicas, volume de documentos, workflows atuais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">•</span>
                    <span><strong>Output:</strong> Priorização de casos de uso para piloto</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h4 className="text-xl font-medium font-montserrat text-neutral-200 mb-3">2. Apresentação de Arquitetura Técnica</h4>
                <ul className="space-y-2 text-lg text-neutral-300 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Proposta detalhada de integração com sistemas Perfin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Plano de segurança e compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Cronograma e entregáveis da Fase 1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-medium font-montserrat text-primary-400 mb-4">Por que NESS:</h3>
            <ul className="space-y-3 text-lg text-neutral-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span><strong>Esper Nunes:</strong> CISO, 34 anos em cibersegurança, entende riscos regulatórios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Experiência em arquiteturas seguras para ambientes críticos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Abordagem consultiva: não vendemos tecnologia, construímos solução sob medida</span>
              </li>
            </ul>
          </div>

          <InfoPanel variant="highlight" status="success">
            <p className="text-xl text-center font-medium">
              Vamos agendar o workshop?
            </p>
          </InfoPanel>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 9: RADAR MATURIDADE ==========
function Slide09_RadarMaturidade() {
  // Criar objeto de nomes dos controles
  const controleNames: Record<number, string> = {}
  cisStatusData.forEach(c => {
    controleNames[c.id] = c.name
  })
  
  return (
    <SlideLayout
      title="Maturidade por Controle"
      subtitle="Nível de implementação por controle CIS"
      icon={Activity}
      variant="default"
    >
      <div className="h-full">
        <MaturityRadar data={currentMaturity} controleNames={controleNames} />
      </div>
    </SlideLayout>
  )
}

// ========== SLIDE 10: EVOLUÇÃO MATURIDADE ==========
function Slide10_EvolucaoMaturidade() {
  const latest = maturityEvolution[maturityEvolution.length - 1]
  const first = maturityEvolution[0]
  const crescimento = ((latest.nivel - first.nivel) / first.nivel * 100).toFixed(0)
  
  return (
    <SlideLayout
      title="Evolução da Maturidade"
      subtitle="Nível médio ao longo do tempo (escala 1-5)"
      icon={TrendingUp}
      variant="default"
    >
      <ContentContainer variant="stack" gap={4}>
        {/* Métricas */}
        <div className="grid grid-cols-4 gap-4">
          <DataCard
            title="Início (Dez/23)"
            value={`${first.nivel}`}
            icon={Clock}
            status="neutral"
            subtitle="Nível Inicial"
          />
          <DataCard
            title="Atual (Nov/25)"
            value={`${latest.nivel}`}
            icon={TrendingUp}
            status="success"
            subtitle="Nível Repetitivo"
          />
          <DataCard
            title="Evolução Absoluta"
            value={`+${(latest.nivel - first.nivel).toFixed(2)}`}
            icon={Activity}
            status="success"
            subtitle="Pontos de maturidade"
          />
          <DataCard
            title="Crescimento"
            value={`${crescimento}%`}
            icon={Zap}
            status="success"
            subtitle="Em 23 meses"
          />
        </div>

        {/* Gráfico */}
        <ChartCard
          title="Progressão de Maturidade"
          subtitle="1=Inicial, 2=Repetitivo, 3=Definido, 4=Gerenciado, 5=Otimizado"
          icon={TrendingUp}
          chart={
            <EvolutionTimeline
              data={maturityEvolution}
              lines={[{ dataKey: 'nivel', name: 'Nível de Maturidade', color: '#f59e0b' }]}
              yAxisLabel="Maturidade"
            />
          }
          insight={{
            value: `${latest.nivel}`,
            label: "maturidade atual"
          }}
          status="warning"
          height="md"
        />

        <div className="grid grid-cols-2 gap-4">
          <InfoPanel variant="bordered" status="info">
            <p className="text-sm">
              <strong>Evolução:</strong> De <strong className="text-primary-400">1,06 (Inicial)</strong> para 
              <strong className="text-primary-400"> 2,12 (Repetitivo)</strong> em 23 meses — 
              <strong> +100% de crescimento</strong>.
            </p>
          </InfoPanel>
          <InfoPanel variant="highlight" status="success">
            <p className="text-sm">
              <strong>Marco:</strong> Dobrando o nível inicial e estabelecendo processos repetitivos. 
              Próximo objetivo: nível <strong className="text-primary-400">"Definido"</strong> (3.0).
            </p>
          </InfoPanel>
        </div>
        
        <InfoPanel variant="bordered" status="warning">
          <p className="text-sm">
            <strong>Contexto:</strong> A maturidade evolui mais lentamente que a implementação técnica (45% de aderência),
            pois depende de formalização de processos, treinamento de pessoas e governança estabelecida.
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 11: DIVISOR VULNERABILIDADES ==========
function Slide11_DivisorVulnerabilidades() {
  return <SectionDivider title="Gestão de Vulnerabilidades" subtitle="Scans Contínuos e Tratamento Proativo" />
}

// ========== SLIDE 12: EVOLUÇÃO VULNERABILIDADES ==========
function Slide12_EvolucaoVulnerabilidades() {
  if (totalVulnerabilitiesTrend.length === 0) {
    return (
      <SlideLayout title="Gestão de Vulnerabilidades" subtitle="Dados não disponíveis" icon={Brain} variant="default">
        <ContentContainer variant="stack" gap={4}>
          <InfoPanel variant="highlight" status="info">
            <p>Preencha os dados de vulnerabilidades em <code>lib/presentation-data.ts</code></p>
          </InfoPanel>
        </ContentContainer>
      </SlideLayout>
    )
  }
  
  const latestVuln = totalVulnerabilitiesTrend[totalVulnerabilitiesTrend.length - 1]
  const previousVuln = totalVulnerabilitiesTrend[0]

  const metrics = [
    {
      id: 'total',
      label: 'Total Atual',
      value: latestVuln.total,
      icon: AlertCircle,
      trend: {
        value: Math.round(((previousVuln.total - latestVuln.total) / previousVuln.total) * 100),
        direction: 'down' as const,
        label: 'redução em 30 dias'
      },
      status: 'success' as const,
      subtitle: `De ${previousVuln.total} para ${latestVuln.total}`
    },
    {
      id: 'criticas',
      label: 'Críticas',
      value: latestVuln.criticas,
      icon: AlertTriangle,
      trend: {
        value: Math.round(((previousVuln.criticas - latestVuln.criticas) / previousVuln.criticas) * 100),
        direction: 'down' as const,
        label: 'redução de 94%'
      },
      status: latestVuln.criticas > 50 ? 'danger' as const : 'warning' as const,
      subtitle: `De ${previousVuln.criticas} para ${latestVuln.criticas}`
    },
    {
      id: 'altas',
      label: 'Altas',
      value: latestVuln.altas,
      icon: AlertTriangle,
      status: 'warning' as const,
      subtitle: 'Prioridade de tratamento'
    },
    {
      id: 'escopo',
      label: 'Ativos Monitorados',
      value: vulnerabilityScanScope.total,
      icon: Server,
      status: 'info' as const,
      subtitle: `${vulnerabilityScanScope.servidores} servidores + ${vulnerabilityScanScope.estacoes} estações`
    },
  ]

  return (
    <SlideLayout
      title="Gestão de Vulnerabilidades"
      subtitle="Panorama atual e evolução"
      icon={Brain}
      variant="default"
    >
      <ContentContainer variant="stack" gap={4}>
        <MetricGrid
          metrics={metrics}
          columns={4}
          variant="detailed"
          staggerDelay={0.08}
        />

        <ChartCard
          title="Evolução: Novas vs Tratadas"
          subtitle="Tendência mensal de tratamento (Set/25 - Out/25)"
          icon={Activity}
          chart={<VulnerabilityEvolutionChart data={vulnerabilityEvolution} />}
          insight={{
            value: "418",
            label: "tratadas em Out/25"
          }}
          status="success"
          height="sm"
        />

        <InfoPanel variant="highlight" status="success">
          <p className="text-base">
            <strong>Progresso significativo:</strong> Redução de 47% no total (771 → 406) e 94% nas
            críticas (345 → 22), demonstrando efetividade do programa de gestão de vulnerabilidades.
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 13: PENTEST ==========
function Slide13_Pentest() {
  return (
    <SlideLayout
      title="Testes de Penetração"
      subtitle="Avaliação de Segurança Aplicacional"
      icon={FileSearch}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <InfoPanel variant="highlight" status="info">
          <p className="text-lg">
            <strong>Pentest</strong> simula ataques reais para identificar vulnerabilidades em aplicações.
            Diferente de scanners automáticos, envolve análise manual por especialistas em segurança.
          </p>
        </InfoPanel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DataCard
            title="Aplicações Testadas"
            value={pentestSummary.totalApps}
            icon={Server}
            status="neutral"
            subtitle="Aplicações corporativas críticas"
          >
            <div className="mt-3 space-y-1.5 text-sm text-neutral-300">
              {pentestApplications.length > 0 ? (
                pentestApplications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    {app.nome}
                  </div>
                ))
              ) : (
                <div className="text-neutral-400 text-xs">Nenhuma aplicação cadastrada</div>
              )}
            </div>
          </DataCard>

          <DataCard
            title="Vulnerabilidades"
            value={pentestSummary.totalVulnerabilities}
            icon={AlertCircle}
            status="success"
            subtitle="Nenhuma crítica"
          >
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-yellow-500/10 border border-yellow-500/20 text-center">
                <div className="text-xl font-bold text-yellow-400">{pentestSummary.altas}</div>
                <div className="text-xs text-neutral-400">Altas</div>
              </div>
              <div className="p-2 rounded bg-blue-500/10 border border-blue-500/20 text-center">
                <div className="text-xl font-bold text-blue-400">{pentestSummary.medias}</div>
                <div className="text-xs text-neutral-400">Médias</div>
              </div>
              <div className="p-2 rounded bg-green-500/10 border border-green-500/20 text-center">
                <div className="text-xl font-bold text-green-400">{pentestSummary.baixas}</div>
                <div className="text-xs text-neutral-400">Baixas</div>
              </div>
              <div className="p-2 rounded bg-green-500/10 border border-green-500/20 text-center">
                <div className="text-xl font-bold text-green-400">{pentestSummary.criticas}</div>
                <div className="text-xs text-neutral-400">Críticas</div>
              </div>
            </div>
          </DataCard>
        </div>

        <InfoPanel variant="bordered" status="success">
          <p className="text-base">
            <strong>Resultado:</strong> Boa postura de segurança aplicacional. Vulnerabilidades altas e médias em tratamento.
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 14: DIVISOR TAREFAS ==========
function Slide14_DivisorTarefas() {
  return <SectionDivider title="Plano de Ação" subtitle="Roadmap de Implementação" />
}

// ========== SLIDE 15: TAREFAS ==========
function Slide15_Tarefas() {
  const [selectedTarefa, setSelectedTarefa] = useState<typeof tarefas[0] | null>(null)
  
  const concluidas = tarefas.filter(t => t.status === 'concluido' && t.priority === 'alto').slice(0, 4)
  const emAndamento = tarefas.filter(t => t.status === 'em-andamento' && t.priority === 'alto')
  const pendentes = tarefas.filter(t => t.status === 'pendente' && t.priority === 'alto').slice(0, 4)

  return (
    <SlideLayout
      title="Status das Tarefas"
      subtitle="Principais entregas e iniciativas"
      icon={CheckSquare}
      variant="default"
    >
      <ContentContainer variant="grid" gap={6}>
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-2">
          <DataCard title="Concluídas" value={tarefas.filter(t => t.status === 'concluido').length} icon={CheckCircle2} status="success" />
          <DataCard title="Em Progresso" value={tarefas.filter(t => t.status === 'em-andamento').length} icon={Activity} status="neutral" />
          <DataCard title="Pendentes" value={tarefas.filter(t => t.status === 'pendente').length} icon={Clock} status="warning" />
        </div>

        {/* Três colunas */}
        <div className="grid grid-cols-3 gap-4">
          {/* Concluídas */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-green-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />Concluídas
            </h3>
            {concluidas.map(t => (
              <div 
                key={t.id} 
                onClick={() => setSelectedTarefa(t)}
                className="p-2.5 rounded bg-green-500/5 border border-green-500/20 cursor-pointer hover:bg-green-500/10 transition-colors"
              >
                <p className="text-xs font-medium text-neutral-100">{t.titulo}</p>
              </div>
            ))}
          </div>

          {/* Em Andamento */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-blue-400 flex items-center gap-1.5">
              <Activity className="w-4 h-4" />Em Progresso
            </h3>
            {emAndamento.map(t => (
              <div 
                key={t.id} 
                onClick={() => setSelectedTarefa(t)}
                className="p-2.5 rounded bg-blue-500/5 border border-blue-500/20 cursor-pointer hover:bg-blue-500/10 transition-colors"
              >
                <p className="text-xs font-medium text-neutral-100 mb-1.5">{t.titulo}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${t.progress}%` }} />
                  </div>
                  <span className="text-xs font-bold text-blue-400">{t.progress}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pendentes */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-yellow-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />Pendentes
            </h3>
            {pendentes.map(t => (
              <div 
                key={t.id} 
                onClick={() => setSelectedTarefa(t)}
                className="p-2.5 rounded bg-yellow-500/5 border border-yellow-500/20 cursor-pointer hover:bg-yellow-500/10 transition-colors"
              >
                <p className="text-xs font-medium text-neutral-100">{t.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>

      {/* Modal de Detalhes da Tarefa */}
      <AnimatePresence>
        {selectedTarefa && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTarefa(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-neutral-800 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {selectedTarefa.status === 'pendente' && (
                        <div className="px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                          <span className="text-xs font-medium text-yellow-400">Pendente</span>
                        </div>
                      )}
                      {selectedTarefa.status === 'em-andamento' && (
                        <div className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                          <span className="text-xs font-medium text-blue-400">Em Andamento</span>
                        </div>
                      )}
                      {selectedTarefa.status === 'concluido' && (
                        <div className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                          <span className="text-xs font-medium text-green-400">Concluída</span>
                        </div>
                      )}
                      {selectedTarefa.priority === 'alto' && (
                        <div className="px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                          <span className="text-xs font-medium text-red-400">Alta Prioridade</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold font-montserrat text-neutral-50">
                      {selectedTarefa.titulo}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedTarefa(null)}
                    className="p-2 rounded-lg hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-neutral-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto flex-1">
                  <div className="space-y-4">
                    {/* Descrição - O que está bloqueando */}
                    {selectedTarefa.descricao && (
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-300 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-400" />
                          {selectedTarefa.status === 'pendente' ? 'O que está bloqueando?' : 'Detalhes'}
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed bg-neutral-800/50 p-4 rounded-lg border border-neutral-800">
                          {selectedTarefa.descricao}
                        </p>
                      </div>
                    )}

                    {/* Progresso */}
                    {selectedTarefa.status === 'em-andamento' && selectedTarefa.progress !== undefined && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-neutral-300">Progresso</span>
                          <span className="text-sm font-bold text-blue-400">{selectedTarefa.progress}%</span>
                        </div>
                        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-300" 
                            style={{ width: `${selectedTarefa.progress}%` }} 
                          />
                        </div>
                      </div>
                    )}

                    {/* Controle relacionado - removido pois não é mais relevante para apresentação de IA */}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SlideLayout>
  )
}

// ========== SLIDE 16: DIVISOR PONTOS ATENÇÃO ==========
function Slide16_DivisorPontosAtencao() {
  return <SectionDivider title="Pontos de Atenção" subtitle="Riscos e Recomendações" />
}

// ========== SLIDE 17: PONTOS DE ATENÇÃO ==========
function Slide17_PontosAtencao() {
  return (
    <SlideLayout
      title="Principais Pontos de Atenção"
      subtitle="Questões que requerem priorização executiva"
      icon={AlertTriangle}
      variant="default"
    >
      <ContentContainer variant="stack" gap={4}>
        <InfoPanel variant="highlight" status="warning">
          <p className="text-sm">
            Fundamentais para evoluir de <strong>"Repetitivo"</strong> para <strong>"Definido"</strong> em maturidade.
          </p>
        </InfoPanel>

        <div className="grid grid-cols-1 gap-2">
          {pontosAtencao.map((ponto, i) => (
            <StatusIndicator
              key={i}
              status={ponto.impacto === 'alto' ? 'danger' : 'warning'}
              label={ponto.titulo}
              description={ponto.descricao}
              icon={ponto.impacto === 'alto' ? AlertTriangle : AlertCircle}
              size="sm"
              showIcon={true}
            />
          ))}
        </div>

        <InfoPanel variant="bordered" status="info">
          <div className="space-y-1.5 text-xs">
            <p className="font-semibold text-primary-400">Recomendações:</p>
            <div className="grid grid-cols-2 gap-2 text-neutral-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Aprovar políticas e normas desenvolvidas</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Formalizar Comitê de Segurança</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Retomar LGPD e awareness</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Implantar gestão de incidentes</span>
              </div>
            </div>
          </div>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 18: DIVISOR NSECOPS ==========
function Slide18_DivisorNsecops() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 px-8 relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="z-10 space-y-8 text-center max-w-4xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-lg md:text-xl font-light font-montserrat text-slate-100 tracking-tight">
            <NessText variant="dark" size="7xl" />
          </h1>
        </motion.div>

        {/* Linha decorativa superior */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto max-w-xl"
        />

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-xl text-slate-400 leading-relaxed">
            Segurança gerenciada para organizações que precisam reduzir risco e tempo de resposta (24/7)
          </p>
        </motion.div>

        {/* Linha decorativa inferior */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto max-w-xl"
        />

        {/* Descrição */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-4"
        >
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Operação contínua de segurança com <strong className="text-primary-400">SOC 24×7</strong>, 
            <strong className="text-primary-400"> EDR/AV</strong>, <strong className="text-primary-400">patching</strong> e 
            <strong className="text-primary-400"> gestão de vulnerabilidades</strong> — com evidências acionáveis para 
            auditorias e tomada de decisão.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

// ========== SLIDE 20: DIVISOR SERVIÇOS NSECOPS ==========
function Slide20_DivisorServicosNsecops() {
  return <SectionDivider title="Serviços Principais" subtitle="Capacidades e Benefícios" />
}

// ========== SLIDE 21: SOC E SIEM ==========
function Slide21_SOC_SIEM() {
  return (
    <SlideLayout
      title="SOC 24×7 e SIEM"
      subtitle="Monitoramento e centralização de logs"
      icon={Eye}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="grid grid-cols-2 gap-6">
          <DataCard
            title="SOC 24×7"
            value="Monitoramento Contínuo"
            subtitle="Ambientes on-premise e cloud"
            icon={Network}
            status="success"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Monitoramento contínuo de ambientes
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Detecção e resposta em tempo real a ameaças
              </div>
            </div>
          </DataCard>

          <DataCard
            title="SIEM"
            value="Centralização de Logs"
            subtitle="Correlação de eventos de segurança"
            icon={Activity}
            status="success"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Coleta e correlação de eventos (AD, firewalls, EDR)
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Alertas inteligentes e dashboards executivos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Compliance (ISO, SOC 2, etc.)
              </div>
            </div>
          </DataCard>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 22: EDR E GESTÃO VULNERABILIDADES ==========
function Slide22_EDR_Vulnerabilidades() {
  return (
    <SlideLayout
      title="EDR e Gestão de Vulnerabilidades"
      subtitle="Proteção de endpoints e varredura contínua"
      icon={Brain}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="grid grid-cols-2 gap-6">
          <DataCard
            title="EDR/Antivírus"
            value="Última Geração"
            subtitle="Proteção de endpoints"
            icon={Laptop}
            status="success"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Detecção comportamental e machine learning
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Resposta automatizada a processos suspeitos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Proteção contra ransomware
              </div>
            </div>
          </DataCard>

          <DataCard
            title="Gestão de Vulnerabilidades"
            value="Varredura Contínua"
            subtitle="Priorização por criticidade"
            icon={AlertTriangle}
            status="warning"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Varredura contínua do ambiente
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Priorização por criticidade e impacto
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Relatórios executivos mensais
              </div>
            </div>
          </DataCard>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 23: PATCH MANAGEMENT E HARDENING ==========
function Slide23_Patch_Hardening() {
  return (
    <SlideLayout
      title="Patch Management e Hardening"
      subtitle="Manutenção e configuração segura"
      icon={Settings}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="grid grid-cols-2 gap-6">
          <DataCard
            title="Patch Management"
            value="Gestão de Patches"
            subtitle="Aplicação orquestrada"
            icon={Zap}
            status="success"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Aplicação orquestrada de patches críticos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Janelas de manutenção planejadas
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Evita indisponibilidade
              </div>
            </div>
          </DataCard>

          <DataCard
            title="Hardening"
            value="CIS Benchmarks"
            subtitle="Configuração segura"
            icon={Brain}
            status="success"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Ajuste de configurações de segurança
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Aderência a frameworks reconhecidos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Alinhamento com CIS Controls
              </div>
            </div>
          </DataCard>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 24: INVENTÁRIO E INCIDENT RESPONSE ==========
function Slide24_Inventario_Incident() {
  return (
    <SlideLayout
      title="Inventário de Ativos e Incident Response"
      subtitle="Visibilidade e resposta a incidentes"
      icon={HardDrive}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="grid grid-cols-2 gap-6">
          <DataCard
            title="Inventário de Ativos"
            value="Descoberta Automática"
            subtitle="Visão centralizada"
            icon={HardDrive}
            status="neutral"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Descoberta automática de hardware e software
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Mapeamento de serviços
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Visão centralizada para gestão de risco
              </div>
            </div>
          </DataCard>

          <DataCard
            title="Incident Response"
            value="Playbooks Estruturados"
            subtitle="Contenção e recuperação"
            icon={AlertCircle}
            status="warning"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Playbooks estruturados de contenção
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Erradicação e recuperação de incidentes
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Resposta rápida e coordenada
              </div>
            </div>
          </DataCard>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 25: THREAT INTELLIGENCE E RELATÓRIOS ==========
function Slide25_Threat_Relatorios() {
  return (
    <SlideLayout
      title="Threat Intelligence e Relatórios Executivos"
      subtitle="Inteligência de ameaças e evidências para auditoria"
      icon={Brain}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <div className="grid grid-cols-2 gap-6">
          <DataCard
            title="Threat Intelligence"
            value="Feeds de Inteligência"
            subtitle="Detecção proativa"
            icon={Brain}
            status="success"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Integração de feeds de inteligência ao SIEM
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Detecção proativa de campanhas
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Indicadores de comprometimento (IOCs)
              </div>
            </div>
          </DataCard>

          <DataCard
            title="Relatórios Executivos"
            value="KPIs e Evidências"
            subtitle="Preparados para auditoria"
            icon={FileBarChart}
            status="success"
          >
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Dashboards e relatórios mensais com KPIs
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Evidências prontas para auditorias
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                ISO 27001, SOC 2, LGPD
              </div>
            </div>
          </DataCard>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 26: MOCKUP SOC - FECHAMENTO ==========
function Slide26_MockupSOC() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8 relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-7xl space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-lg md:text-xl font-montserrat font-medium tracking-tight">
            <span className="text-neutral-50">trustness</span>
            <span className="text-[#00ade8]">.</span>
          </h1>
          <p className="text-lg text-neutral-400">
            a <span className="text-neutral-300">ness</span><span className="text-[#00ade8]">.</span> company
          </p>
        </motion.div>

        {/* Mockup SOC Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 shadow-2xl"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-montserrat text-neutral-50">Security Operations Center</h3>
                <p className="text-sm text-neutral-400">{presentationMetadata.cliente || 'Organização'} - Monitoramento 24×7 em tempo real</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-400 font-medium">Operacional</span>
            </div>
          </div>

          {/* Dashboard Metrics */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-neutral-800/50 rounded-xl p-4 border border-neutral-700/50">
              <div className="text-xs text-neutral-400 mb-1">Vulnerabilidades Ativas</div>
              <div className="text-lg font-bold text-neutral-50">
                {totalVulnerabilitiesTrend.length > 0 
                  ? totalVulnerabilitiesTrend[totalVulnerabilitiesTrend.length - 1].total 
                  : 0}
              </div>
              <div className="text-xs text-green-400 mt-1">
                {totalVulnerabilitiesTrend.length > 1 
                  ? `↓ ${Math.round(((totalVulnerabilitiesTrend[0].total - totalVulnerabilitiesTrend[totalVulnerabilitiesTrend.length - 1].total) / totalVulnerabilitiesTrend[0].total) * 100)}% vs período anterior`
                  : 'Sem dados anteriores'}
              </div>
            </div>
            <div className="bg-neutral-800/50 rounded-xl p-4 border border-neutral-700/50">
              <div className="text-xs text-neutral-400 mb-1">Vulnerabilidades Críticas</div>
              <div className="text-lg font-bold text-red-400">
                {totalVulnerabilitiesTrend.length > 0 
                  ? totalVulnerabilitiesTrend[totalVulnerabilitiesTrend.length - 1].criticas 
                  : 0}
              </div>
              <div className="text-xs text-green-400 mt-1">
                {totalVulnerabilitiesTrend.length > 1 
                  ? `↓ ${Math.round(((totalVulnerabilitiesTrend[0].criticas - totalVulnerabilitiesTrend[totalVulnerabilitiesTrend.length - 1].criticas) / totalVulnerabilitiesTrend[0].criticas) * 100)}% vs período anterior`
                  : 'Sem dados anteriores'}
              </div>
            </div>
            <div className="bg-neutral-800/50 rounded-xl p-4 border border-neutral-700/50">
              <div className="text-xs text-neutral-400 mb-1">Assets Monitorados</div>
              <div className="text-lg font-bold text-neutral-50">{vulnerabilityScanScope.total}</div>
              <div className="text-xs text-green-400 mt-1">
                {vulnerabilityScanScope.servidores} servidores + {vulnerabilityScanScope.estacoes} estações
              </div>
            </div>
            <div className="bg-neutral-800/50 rounded-xl p-4 border border-neutral-700/50">
              <div className="text-xs text-neutral-400 mb-1">Tempo Médio Resposta</div>
              <div className="text-lg font-bold text-primary-400">3 min</div>
              <div className="text-xs text-green-400 mt-1">Meta: &lt;5min</div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-neutral-800/50 rounded-xl p-4 border border-neutral-700/50">
            <h4 className="text-sm font-semibold text-neutral-300 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Atividades Recentes
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-neutral-400">Hoje 14:32</span>
                <span className="text-neutral-300">Varredura mensal concluída: {vulnerabilityScanScope.total} assets analisados</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-neutral-400">Hoje 10:15</span>
                <span className="text-neutral-300">
                  {totalVulnerabilitiesTrend.length > 1 
                    ? `Redução de ${Math.round(((totalVulnerabilitiesTrend[0].total - totalVulnerabilitiesTrend[totalVulnerabilitiesTrend.length - 1].total) / totalVulnerabilitiesTrend[0].total) * 100)}% no total de vulnerabilidades`
                    : 'Monitoramento de vulnerabilidades ativo'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-neutral-400">Hoje 09:30</span>
                <span className="text-neutral-300">Monitoramento: {cisControls.length} controles ativos</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-neutral-400">Hoje 08:00</span>
                <span className="text-neutral-300">Relatório diário gerado: Todos os sistemas operacionais</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Main Component
export default function ProfessionalPresentation() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<Direction>('forward')
  const [showMinimap, setShowMinimap] = useState(false)
  const [showPresenter, setShowPresenter] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'high-contrast'>('dark')
  const router = useRouter()

  const slides = [
    { component: Slide01_Titulo, notes: 'IA Aplicada à Perfin - Título' },
    { component: Slide02_PerfinHoje, notes: 'Perfin hoje: O desafio de escala' },
    { component: Slide03_OQueIAPodeFazer, notes: 'O que IA pode fazer (e o que não pode)' },
    { component: Slide04_BaseConhecimento, notes: 'Base de Conhecimento Inteligente' },
    { component: Slide05_AgentesInteligentes, notes: 'Agentes Inteligentes: Executam, não apenas respondem' },
    { component: Slide06_DeepDiveInvestimentos, notes: 'Deep Dive: Investimentos em Ações' },
    { component: Slide07_OutrosCasosUso, notes: 'Outros casos de uso em avaliação' },
    { component: Slide08_SegurancaCompliance, notes: 'Segurança, Compliance e Governança' },
    { component: Slide09_Jornada, notes: 'Jornada (proposta inicial para discussão)' },
    { component: Slide10_ProximosPassos, notes: 'Próximos Passos' },
  ]

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
    <div className={`min-h-screen flex flex-col font-inter text-neutral-200 ${theme === 'high-contrast' ? 'bg-black' : 'bg-gray-900'}`}>
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <PageTransition key={current} direction={direction}>
            <CurrentSlideComponent />
          </PageTransition>
        </AnimatePresence>
      </div>

      <div className="bg-neutral-900/95 backdrop-blur-sm border-t border-neutral-800 px-6 py-3 z-50">
        <div className="mb-3">
          <SectionProgress
            sections={slideSections}
            currentSlide={current}
            onNavigate={goToSlide}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 max-w-sm">
            <ProgressIndicator
              current={current}
              total={slides.length}
              sections={slideSections}
            />
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={prevSlide} disabled={current === 0} variant="ghost" size="sm">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button onClick={nextSlide} disabled={current === slides.length - 1} variant="ghost" size="sm">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={() => setShowMinimap(true)} variant="ghost" size="sm">
              <Map className="w-4 h-4" />
            </Button>
            <PresenterToggleButton
              isOpen={showPresenter}
              onToggle={() => setShowPresenter(prev => !prev)}
            />
            <Button onClick={toggleFullscreen} variant="ghost" size="sm">
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
            <Button onClick={() => setTheme(prev => prev === 'dark' ? 'high-contrast' : 'dark')} variant="ghost" size="sm">
              <Palette className="w-4 h-4" />
            </Button>
            <Button onClick={() => setShowHelp(true)} variant="ghost" size="sm">
              <HelpCircle className="w-4 h-4" />
            </Button>
            <Button onClick={handleLogout} variant="ghost" size="sm">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <MinimapOverlay
        isOpen={showMinimap}
        onClose={() => setShowMinimap(false)}
        slides={slides.map(s => ({ type: 'slide', speakerNotes: s.notes }))}
        currentSlide={current}
        onNavigate={goToSlide}
        sections={slideSections}
      />

      <PresenterOverlay
        isOpen={showPresenter}
        onClose={() => setShowPresenter(false)}
        currentSlide={{ speakerNotes: slides[current].notes }}
        nextSlide={current < slides.length - 1 ? { speakerNotes: slides[current + 1].notes } : null}
        currentIndex={current}
        totalSlides={slides.length}
      />

      {/* Notes Overlay */}
      <AnimatePresence>
        {showNotes && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNotes(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 max-h-[50vh] bg-slate-900 border-t border-slate-700 shadow-2xl z-[101] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-montserrat text-slate-100">Notas do Slide</h3>
                    <p className="text-xs text-slate-400">
                      Slide {current + 1} de {slides.length}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => setShowNotes(false)}
                  variant="ghost"
                  size="icon-sm"
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-slate-850/50 border border-slate-800 rounded-lg p-6">
                    <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {slides[current].notes || 'Sem notas para este slide.'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <KeyboardShortcutsPanel isOpen={showHelp} onClose={() => setShowHelp(false)} />
      <KeyboardShortcutsHint />
    </div>
  )
}
