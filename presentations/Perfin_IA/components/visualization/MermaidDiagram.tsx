/**
 * MERMAID DIAGRAM COMPONENT
 *
 * Componente para renderizar diagramas Mermaid em apresentações
 * Suporta flowcharts, sequência, arquitetura, etc
 */

'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface MermaidDiagramProps {
  code: string
  title?: string
  className?: string
  theme?: 'dark' | 'light'
}

export function MermaidDiagram({
  code,
  title,
  className,
  theme = 'dark'
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let mounted = true

    const renderDiagram = async () => {
      try {
        // Importação dinâmica do mermaid
        const mermaid = (await import('mermaid')).default

        // Configuração do tema
        mermaid.initialize({
          startOnLoad: false,
          theme: theme === 'dark' ? 'dark' : 'default',
          themeVariables: {
            darkMode: theme === 'dark',
            background: theme === 'dark' ? '#0f172a' : '#ffffff',
            primaryColor: '#00ade8',
            primaryTextColor: theme === 'dark' ? '#e2e8f0' : '#1e293b',
            primaryBorderColor: '#0891b2',
            lineColor: theme === 'dark' ? '#475569' : '#cbd5e1',
            secondaryColor: '#334155',
            tertiaryColor: '#1e293b',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif'
          },
          flowchart: {
            curve: 'basis',
            padding: 20,
            useMaxWidth: true,
            htmlLabels: true
          },
          sequence: {
            diagramMarginX: 50,
            diagramMarginY: 10,
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35
          }
        })

        // Gerar ID único
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

        // Renderizar
        const { svg: renderedSvg } = await mermaid.render(id, code)

        if (mounted) {
          setSvg(renderedSvg)
          setError('')
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Erro ao renderizar diagrama')
          console.error('Erro Mermaid:', err)
        }
      }
    }

    renderDiagram()

    return () => {
      mounted = false
    }
  }, [code, theme])

  if (error) {
    return (
      <div className={cn(
        'p-8 rounded-xl border border-rose-500/20 bg-rose-950/20',
        className
      )}>
        <p className="text-rose-400 text-sm">
          Erro ao renderizar diagrama: {error}
        </p>
      </div>
    )
  }

  return (
    <div className={cn('w-full', className)}>
      {title && (
        <h3 className="text-lg font-medium font-montserrat text-slate-200 mb-4">
          {title}
        </h3>
      )}
      <div
        ref={containerRef}
        className={cn(
          'p-6 rounded-xl border overflow-x-auto',
          theme === 'dark'
            ? 'bg-slate-900/50 border-slate-700/50'
            : 'bg-white border-slate-200'
        )}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  )
}

/**
 * Mermaid Code Templates para uso fácil
 */
export const MermaidTemplates = {
  // Fluxo básico
  basicFlow: `flowchart TB
    A[Início] --> B{Decisão}
    B -->|Sim| C[Ação 1]
    B -->|Não| D[Ação 2]
    C --> E[Fim]
    D --> E`,

  // Arquitetura em camadas
  layeredArchitecture: `flowchart TB
    subgraph "Camada de Apresentação"
      A[Frontend Web]
      B[API Gateway]
    end

    subgraph "Camada de Aplicação"
      C[Serviços de Negócio]
      D[Autenticação]
    end

    subgraph "Camada de Dados"
      E[Banco de Dados]
      F[Cache Redis]
    end

    A --> B
    B --> C
    B --> D
    C --> E
    C --> F`,

  // Pipeline RAG
  ragPipeline: `flowchart LR
    A[Documentos] --> B[Chunking]
    B --> C[Embedding]
    C --> D[(Vector DB)]
    E[Query] --> F[Embedding]
    F --> D
    D --> G[Retrieval]
    G --> H[LLM]
    H --> I[Resposta]`,

  // Sequência
  sequence: `sequenceDiagram
    participant U as Usuário
    participant A as Aplicação
    participant I as IA
    participant D as Database

    U->>A: Query
    A->>I: Processar
    I->>D: Buscar contexto
    D-->>I: Documentos
    I->>I: Gerar resposta
    I-->>A: Resultado
    A-->>U: Exibir`
}
