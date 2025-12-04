/**
 * SLIDES REFATORADOS - PARTE 2
 * Continuação dos slides corporativos premium
 */

import { motion } from 'framer-motion'
import {
  BarChart3,
  CheckCircle2,
  Clock,
  Target,
  Rocket,
  Shield,
  Users,
  Calendar,
  Sparkles,
  TrendingUp
} from 'lucide-react'

import {
  SplitLayout,
  ContentCard,
  TimelineCorporate,
  CTAPremium,
  QuoteBox
} from '@/components/slides/CorporateLayouts'

// ========== SLIDE 07: DEEP DIVE INVESTIMENTOS ==========
export function Slide07_DeepDiveInvestimentos() {
  return (
    <SplitLayout
      title="Deep Dive: Investimentos em Ações"
      subtitle="Transformação do Workflow"
      icon={BarChart3}
      splitRatio="50-50"
      variant="elevated"
      leftContent={
        <div className="flex flex-col justify-center h-full">
          <div className="p-8 bg-neutral-900/30 rounded-xl border border-neutral-800/50">
            <h3 className="text-2xl font-medium font-montserrat text-neutral-300 mb-6">
              Workflow Atual (estimado)
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800 text-neutral-400 font-medium shrink-0">1</div>
                <p className="text-lg text-neutral-400">
                  Analista baixa balanços trimestrais de múltiplas empresas do setor
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800 text-neutral-400 font-medium shrink-0">2</div>
                <p className="text-lg text-neutral-400">
                  Lê centenas de páginas para extrair: margem EBITDA, CAPEX, guidance, riscos
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800 text-neutral-400 font-medium shrink-0">3</div>
                <p className="text-lg text-neutral-400">
                  Monta planilha comparativa manual
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800 text-neutral-400 font-medium shrink-0">4</div>
                <p className="text-lg text-neutral-400">
                  Redige síntese para comitê de investimento
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
              <p className="text-sm text-red-300">
                <strong className="text-red-200">Tempo:</strong> Dias de trabalho analítico por comparação setorial
              </p>
            </div>
          </div>
        </div>
      }
      rightContent={
        <div className="flex flex-col justify-center h-full">
          <div className="p-8 bg-gradient-to-br from-green-900/20 to-neutral-900/30 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium font-montserrat text-green-300 mb-6">
              Workflow com IA (proposto)
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <p className="text-lg text-neutral-300">
                  Agente ingere os balanços da Base de Conhecimento
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <p className="text-lg text-neutral-300">
                  Extrai métricas-chave pré-definidas em formato estruturado
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <p className="text-lg text-neutral-300">
                  Gera tabela comparativa automaticamente
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <p className="text-lg text-neutral-300">
                  Analista valida, ajusta e complementa análise qualitativa
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-900/30 rounded-lg border border-green-500/40">
              <p className="text-sm text-green-200">
                <strong className="text-green-100">Tempo:</strong> Horas, com foco em interpretação estratégica
              </p>
            </div>
          </div>

          <div className="mt-6">
            <QuoteBox
              quote="Analista foca em insights, não em extração manual"
              variant="highlight"
            />
          </div>
        </div>
      }
    />
  )
}

// ========== SLIDE 08: OUTROS CASOS DE USO ==========
export function Slide08_OutrosCasosUso() {
  const casosUso = [
    {
      icon: Shield,
      title: 'Jurídico Corporativo',
      description: 'Análise de contratos: identificar cláusulas de reajuste, garantias, penalidades',
      highlight: true
    },
    {
      icon: TrendingUp,
      title: 'Due Diligence',
      description: 'Cruzamento de informações regulatórias, identificação de red flags em documentos',
      highlight: false
    },
    {
      icon: Users,
      title: 'Backoffice e RI',
      description: 'Consolidação de relatórios gerenciais, resposta automática a questões recorrentes',
      highlight: false
    },
    {
      icon: Calendar,
      title: 'Compliance Regulatório',
      description: 'Verificação automática de aderência a normas CVM, ANEEL, requisitos contratuais',
      highlight: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-16 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
            <Sparkles className="w-8 h-8 text-primary-400" />
          </div>
          <div>
            <h1 className="text-5xl font-medium font-montserrat text-white tracking-tight">
              Outros Casos de Uso
            </h1>
            <p className="text-xl text-neutral-400 mt-2">Aplicações Práticas da IA na Perfin</p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>

      <div className="grid grid-cols-2 gap-8">
        {casosUso.map((caso, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContentCard
              variant={caso.highlight ? 'highlight' : 'glass'}
              size="lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-4 rounded-xl ${caso.highlight ? 'bg-primary-500/20' : 'bg-neutral-800/50'}`}>
                  <caso.icon className={`w-8 h-8 ${caso.highlight ? 'text-primary-400' : 'text-neutral-400'}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium font-montserrat text-white mb-3">
                    {caso.title}
                  </h3>
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    {caso.description}
                  </p>
                </div>
              </div>
            </ContentCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <QuoteBox
          quote="Cada caso de uso gera economia de 60-80% do tempo em tarefas repetitivas, permitindo foco em análise de maior valor"
          variant="highlight"
        />
      </div>
    </div>
  )
}

// ========== SLIDE 09: SEGURANÇA E COMPLIANCE ==========
export function Slide09_SegurancaCompliance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-16 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
            <Shield className="w-8 h-8 text-primary-400" />
          </div>
          <div>
            <h1 className="text-5xl font-medium font-montserrat text-white tracking-tight">
              Segurança e Compliance
            </h1>
            <p className="text-xl text-neutral-400 mt-2">Prioridades Não Negociáveis</p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>

      <div className="space-y-8">
        <ContentCard variant="highlight" size="lg">
          <h3 className="text-2xl font-medium font-montserrat text-white mb-6">
            Arquitetura Segura
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h4 className="text-xl font-medium text-green-300">On-Premise ou Cloud Privada</h4>
              </div>
              <p className="text-neutral-400 text-lg pl-6">
                Dados sensíveis permanecem dentro da infraestrutura Perfin
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h4 className="text-xl font-medium text-green-300">Sem Vazamento para LLMs Públicos</h4>
              </div>
              <p className="text-neutral-400 text-lg pl-6">
                Modelos de IA rodando em ambiente isolado
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h4 className="text-xl font-medium text-green-300">Controle de Acesso Granular</h4>
              </div>
              <p className="text-neutral-400 text-lg pl-6">
                Permissões baseadas em perfil e necessidade
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h4 className="text-xl font-medium text-green-300">Auditoria Completa</h4>
              </div>
              <p className="text-neutral-400 text-lg pl-6">
                Rastreamento de todas as consultas e ações da IA
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard variant="glass" size="lg">
          <h3 className="text-2xl font-medium font-montserrat text-white mb-6">
            Conformidade Regulatória
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
              <span className="text-lg text-neutral-300">
                Aderência à LGPD (Lei Geral de Proteção de Dados)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
              <span className="text-lg text-neutral-300">
                Conformidade com regulamentos CVM e ANEEL
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
              <span className="text-lg text-neutral-300">
                Rastreabilidade total: todas as respostas da IA referenciadas em documentos fonte
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
              <span className="text-lg text-neutral-300">
                Validação humana obrigatória para decisões críticas
              </span>
            </li>
          </ul>
        </ContentCard>
      </div>
    </div>
  )
}

// ========== SLIDE 10: JORNADA DE IMPLEMENTAÇÃO ==========
export function Slide10_Jornada() {
  const timelineItems = [
    {
      phase: 'FASE 1',
      title: 'Discovery e Piloto',
      description: 'Workshop, mapeamento de casos de uso, prototipação de 1 agente prioritário',
      status: 'upcoming' as const
    },
    {
      phase: 'FASE 2',
      title: 'Implementação',
      description: 'Desenvolvimento dos agentes prioritários, integração com sistemas, treinamento do time',
      status: 'upcoming' as const
    },
    {
      phase: 'FASE 3',
      title: 'Expansão',
      description: 'Governança, monitoramento, otimização e expansão gradual para novos casos de uso',
      status: 'upcoming' as const
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-16 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
            <Rocket className="w-8 h-8 text-primary-400" />
          </div>
          <div>
            <h1 className="text-5xl font-medium font-montserrat text-white tracking-tight">
              Jornada de Implementação
            </h1>
            <p className="text-xl text-neutral-400 mt-2">Abordagem Incremental e Validada</p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>

      <TimelineCorporate items={timelineItems} orientation="horizontal" />

      <div className="mt-12">
        <p className="text-neutral-500 italic text-center text-lg">
          Timeframes e escopo detalhado a definir após workshop de descoberta
        </p>
      </div>
    </div>
  )
}

// ========== SLIDE 11: PRÓXIMOS PASSOS ==========
export function Slide11_ProximosPassos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-16 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
            <Target className="w-8 h-8 text-primary-400" />
          </div>
          <div>
            <h1 className="text-5xl font-medium font-montserrat text-white tracking-tight">
              Próximos Passos
            </h1>
            <p className="text-xl text-neutral-400 mt-2">Nossa Proposta</p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <ContentCard variant="highlight" size="lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary-500/20">
                <span className="text-3xl font-bold font-montserrat text-primary-400">1</span>
              </div>
              <h3 className="text-2xl font-medium font-montserrat text-white">
                Workshop de Descoberta
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0" />
                <div>
                  <span className="text-white font-medium">Participantes:</span>
                  <span className="text-neutral-300"> Lideranças de Jurídico, Investimentos, Backoffice, RI</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0" />
                <div>
                  <span className="text-white font-medium">Objetivo:</span>
                  <span className="text-neutral-300"> Mapear dores específicas, volume de documentos, workflows atuais</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0" />
                <div>
                  <span className="text-white font-medium">Output:</span>
                  <span className="text-neutral-300"> Priorização de casos de uso para piloto</span>
                </div>
              </li>
            </ul>
          </ContentCard>

          <ContentCard variant="highlight" size="lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary-500/20">
                <span className="text-3xl font-bold font-montserrat text-primary-400">2</span>
              </div>
              <h3 className="text-2xl font-medium font-montserrat text-white">
                Arquitetura Técnica
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0" />
                <span className="text-neutral-300">Proposta detalhada de integração com sistemas Perfin</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0" />
                <span className="text-neutral-300">Plano de segurança e compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0" />
                <span className="text-neutral-300">Cronograma e entregáveis da Fase 1</span>
              </li>
            </ul>
          </ContentCard>
        </div>

        <ContentCard variant="glass" size="lg">
          <h3 className="text-2xl font-medium font-montserrat text-primary-400 mb-6">
            Por que NESS
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-400 mt-1 shrink-0" />
              <span className="text-lg text-neutral-300">
                <strong className="text-white">Esper Nunes:</strong> CISO, 34 anos em cibersegurança, entende profundamente riscos regulatórios
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-400 mt-1 shrink-0" />
              <span className="text-lg text-neutral-300">
                Experiência comprovada em arquiteturas seguras para ambientes críticos
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-400 mt-1 shrink-0" />
              <span className="text-lg text-neutral-300">
                Abordagem consultiva: não vendemos tecnologia, construímos solução sob medida
              </span>
            </li>
          </ul>
        </ContentCard>
      </div>
    </div>
  )
}

// ========== SLIDE 12: CTA FINAL ==========
export function Slide12_CTAFinal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center px-16 py-16">
      <div className="max-w-5xl w-full">
        <CTAPremium
          title="Vamos agendar o workshop?"
          description="Descubra como IA pode transformar a operação da Perfin com segurança e compliance regulatório"
          variant="centered"
        />

        <div className="mt-16 text-center">
          <p className="text-xl text-neutral-400 mb-4">
            Apresentado por
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-5xl">
              <NessText variant="dark" size="5xl" />
            </div>
          </div>
          <p className="text-lg text-neutral-500 mt-4">
            Processos e Tecnologia
          </p>
        </div>
      </div>
    </div>
  )
}
