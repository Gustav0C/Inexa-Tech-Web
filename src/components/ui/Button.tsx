import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
}

const variants = {
  primary: 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90',
  ghost: 'border border-outline hover:bg-gradient-to-r hover:from-surface-container hover:to-surface-container-high text-on-surface',
  tertiary: 'text-on-surface hover:text-secondary-container',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-inter font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-container focus:ring-offset-2 focus:ring-offset-surface ${
    variants[variant]
  } ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {variant === 'tertiary' && (
        <motion.span
          className="ml-2 inline-block"
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  )
}