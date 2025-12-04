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
        // Dynamically import mermaid
        const mermaid = (await import('mermaid')).default

        // Configure mermaid with ness. branding colors
        mermaid.initialize({
          startOnLoad: false,
          theme: theme === 'dark' ? 'dark' : 'default',
          themeVariables: {
            primaryColor: '#00ade8',
            primaryTextColor: theme === 'dark' ? '#e2e8f0' : '#1e293b',
            primaryBorderColor: '#00ade8',
            lineColor: theme === 'dark' ? '#475569' : '#94a3b8',
            secondaryColor: theme === 'dark' ? '#1e293b' : '#f1f5f9',
            tertiaryColor: theme === 'dark' ? '#0f172a' : '#ffffff',
            background: theme === 'dark' ? '#0f172a' : '#ffffff',
            mainBkg: theme === 'dark' ? '#1e293b' : '#f8fafc',
            secondBkg: theme === 'dark' ? '#334155' : '#e2e8f0',
            border1: theme === 'dark' ? '#475569' : '#cbd5e1',
            border2: theme === 'dark' ? '#334155' : '#94a3b8',
            arrowheadColor: '#00ade8',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontSize: '14px',
            nodeBorder: '#00ade8',
            clusterBkg: theme === 'dark' ? '#1e293b' : '#f1f5f9',
            clusterBorder: theme === 'dark' ? '#475569' : '#cbd5e1',
            defaultLinkColor: theme === 'dark' ? '#64748b' : '#94a3b8',
            titleColor: theme === 'dark' ? '#e2e8f0' : '#1e293b',
            edgeLabelBackground: theme === 'dark' ? '#1e293b' : '#ffffff',
            nodeTextColor: theme === 'dark' ? '#e2e8f0' : '#1e293b',
          },
          flowchart: {
            htmlLabels: true,
            curve: 'basis',
            padding: 15,
            nodeSpacing: 50,
            rankSpacing: 50,
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
            messageMargin: 35,
          },
          gantt: {
            titleTopMargin: 25,
            barHeight: 20,
            barGap: 4,
            topPadding: 50,
            leftPadding: 75,
            gridLineStartPadding: 35,
            fontSize: 11,
            numberSectionStyles: 4,
            axisFormat: '%Y-%m-%d',
          },
        })

        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

        // Render the diagram
        const { svg: renderedSvg } = await mermaid.render(id, code)

        if (mounted) {
          setSvg(renderedSvg)
          setError('')
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to render diagram')
          console.error('Mermaid rendering error:', err)
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
        'rounded-lg border border-rose-500/20 bg-rose-950/20 p-6',
        className
      )}>
        {title && (
          <h3 className="text-lg font-medium font-montserrat text-rose-400 mb-4">
            {title}
          </h3>
        )}
        <div className="text-sm text-rose-300">
          <p className="font-medium mb-2">Failed to render diagram:</p>
          <pre className="text-xs text-rose-400/80 whitespace-pre-wrap">{error}</pre>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('space-y-4', className)}>
      {title && (
        <h3 className="text-lg font-medium font-montserrat text-slate-200">
          {title}
        </h3>
      )}
      
      <div
        ref={containerRef}
        className={cn(
          'rounded-lg border p-6 overflow-x-auto',
          theme === 'dark' 
            ? 'bg-slate-900/50 border-slate-800' 
            : 'bg-white border-slate-200'
        )}
      >
        {svg ? (
          <div
            className="mermaid-diagram flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <div className="flex items-center justify-center py-12">
            <div className="text-slate-400 text-sm">
              Rendering diagram...
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
