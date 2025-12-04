/**
 * Componente para renderizar "ness." seguindo as regras de marca:
 * - "ness" em preto ou branco (dependendo do fundo)
 * - Fonte Montserrat Medium
 * - "." na cor #00ade8
 */

import { cn } from '@/lib/utils'

interface NessTextProps {
  /**
   * Cor do texto "ness" baseado no fundo
   * 'light' = texto preto (para fundos claros)
   * 'dark' = texto branco (para fundos escuros)
   * 'auto' = detecta automaticamente baseado na classe do container
   */
  variant?: 'light' | 'dark' | 'auto'
  className?: string
  /**
   * Tamanho do texto
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
}

export function NessText({ 
  variant = 'dark', 
  className = '',
  size = 'md'
}: NessTextProps) {
  // Determina a cor do texto "ness" baseado na variante
  // light = texto preto (para fundos claros/brancos)
  // dark = texto branco (para fundos escuros/coloridos)
  const textColor = variant === 'light' 
    ? 'text-neutral-900' 
    : variant === 'dark' 
    ? 'text-white' 
    : 'text-white dark:text-neutral-900' // auto mode

  return (
    <span 
      className={cn(
        'whitespace-nowrap',
        sizeClasses[size],
        textColor,
        className
      )} 
      style={{ 
        fontWeight: 500,
        fontFamily: 'var(--font-montserrat), Montserrat, sans-serif'
      }}
    >
      ness
      <span style={{ color: '#00ade8' }}>.</span>
    </span>
  )
}

