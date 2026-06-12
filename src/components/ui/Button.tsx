import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'ghost' | 'tertiary'

interface ButtonProps {
  variant?: ButtonVariant
  children: ReactNode
  /** Show a loading spinner */
  loading?: boolean
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/**
 * INEXA TECH button with 3 variants per DESIGN.md:
 *  - primary: solid Electric Blue, white text
 *  - ghost: 1px border, gradient fill on hover
 *  - tertiary: text-only with JetBrains Mono label
 */
export default function Button({
  variant = 'primary',
  children,
  loading = false,
  className = '',
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-jetbrains text-label-md rounded-md transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-secondary text-on-secondary px-6 py-3 hover:bg-secondary-container active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    ghost:
      'border border-outline text-on-surface px-6 py-3 hover:bg-gradient-to-b hover:from-surface-container-low hover:to-secondary-container/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    tertiary:
      'text-on-surface-variant px-4 py-2 hover:text-secondary active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  )
}
