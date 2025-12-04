/**
 * LOGO NESS - Componente Corporativo
 *
 * Logo vetorial da ness. com branding correto:
 * - "ness" em Montserrat Medium
 * - "." em #00ade8
 * - Escalável e responsivo
 */

import { cn } from '@/lib/utils'

interface NessLogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl'
  className?: string
  showTagline?: boolean
  tagline?: string
}

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl',
  xl: 'text-5xl',
  '2xl': 'text-6xl',
  '3xl': 'text-7xl',
  '4xl': 'text-8xl',
  '5xl': 'text-9xl',
  '6xl': 'text-[10rem]',
  '7xl': 'text-[12rem]',
  '8xl': 'text-[14rem]'
}

const taglineSizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg',
  '2xl': 'text-xl',
  '3xl': 'text-2xl',
  '4xl': 'text-3xl',
  '5xl': 'text-4xl',
  '6xl': 'text-5xl',
  '7xl': 'text-6xl',
  '8xl': 'text-7xl'
}

export function NessLogo({
  variant = 'dark',
  size = 'xl',
  className = '',
  showTagline = false,
  tagline = 'Processos e Tecnologia'
}: NessLogoProps) {
  const textColor = variant === 'light' ? 'text-neutral-900' : 'text-white'

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      {/* Logo */}
      <div className={cn('font-montserrat font-medium tracking-tight', sizeClasses[size], textColor)}>
        <span>ness</span>
        <span className="text-[#00ade8]">.</span>
      </div>

      {/* Tagline (opcional) */}
      {showTagline && tagline && (
        <div className={cn(
          'text-neutral-400 font-light tracking-wide',
          taglineSizes[size]
        )}>
          {tagline}
        </div>
      )}
    </div>
  )
}

/**
 * Logo SVG Alternativo (se precisar de SVG puro)
 */
export function NessLogoSVG({
  variant = 'dark',
  width = 200,
  height = 80,
  className = ''
}: {
  variant?: 'light' | 'dark'
  width?: number
  height?: number
  className?: string
}) {
  const textColor = variant === 'light' ? '#171717' : '#ffffff'

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* "ness" */}
      <text
        x="20"
        y="55"
        fontFamily="Montserrat, sans-serif"
        fontWeight="500"
        fontSize="48"
        fill={textColor}
      >
        ness
      </text>

      {/* "." */}
      <circle
        cx="175"
        cy="50"
        r="8"
        fill="#00ade8"
      />
    </svg>
  )
}
