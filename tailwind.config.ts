import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface colors
        'surface': '#0b1326',
        'surface-dim': '#0b1326',
        'surface-bright': '#31394d',
        'surface-container-lowest': '#060e20',
        'surface-container-low': '#131b2e',
        'surface-container': '#171f33',
        'surface-container-high': '#222a3d',
        'surface-container-highest': '#2d3449',
        'on-surface': '#dae2fd',
        'on-surface-variant': '#c4c6cd',
        'inverse-surface': '#dae2fd',
        'inverse-on-surface': '#283044',
        'outline': '#8e9197',
        'outline-variant': '#44474d',
        'surface-tint': '#b6c8e3',
        
        // Primary
        'primary': '#b6c8e3',
        'on-primary': '#203147',
        'primary-container': '#001226',
        'on-primary-container': '#6d7e97',
        'inverse-primary': '#4e6077',
        
        // Secondary
        'secondary': '#adc6ff',
        'on-secondary': '#002e69',
        'secondary-container': '#4b8eff',
        'on-secondary-container': '#00285c',
        
        // Tertiary
        'tertiary': '#c1c7cf',
        'on-tertiary': '#2b3137',
        'tertiary-container': '#0c1217',
        'on-tertiary-container': '#777e85',
        
        // Error
        'error': '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        
        // Fixed
        'primary-fixed': '#d2e4ff',
        'primary-fixed-dim': '#b6c8e3',
        'on-primary-fixed': '#091c31',
        'on-primary-fixed-variant': '#37485e',
        'secondary-fixed': '#d8e2ff',
        'secondary-fixed-dim': '#adc6ff',
        'on-secondary-fixed': '#001a41',
        'on-secondary-fixed-variant': '#004493',
        'tertiary-fixed': '#dde3eb',
        'tertiary-fixed-dim': '#c1c7cf',
        'on-tertiary-fixed': '#161c22',
        'on-tertiary-fixed-variant': '#41474e',
        
        // Background
        'background': '#0b1326',
        'on-background': '#dae2fd',
        'surface-variant': '#2d3449',
      },
      
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        // Display
        'display-lg': ['64px', { lineHeight: '72px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-sm': ['48px', { lineHeight: '56px', fontWeight: '700', letterSpacing: '-0.02em' }],
        
        // Headline
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600', letterSpacing: '-0.01em' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        
        // Body
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        
        // Label
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '500', letterSpacing: '0.05em' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500', letterSpacing: '0.08em' }],
      },
      
      spacing: {
        'unit': '8px',
        'gutter': '24px',
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        // Add 8px unit based spacing
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
        '12': '96px',
        '14': '112px',
        '16': '128px',
        '20': '160px',
        '24': '192px',
      },
      
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
      },
      
      maxWidth: {
        'container': '1440px',
      },
      
      backdropBlur: {
        'glass': '20px',
      },
      
      boxShadow: {
        'glow-blue': '0 20px 40px rgba(0, 122, 255, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-inner': 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      
      transitionDuration: {
        '300': '300ms',
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      
      animation: {
        'stagger-1': 'fadeIn 0.5s ease-out 0ms forwards',
        'stagger-2': 'fadeIn 0.5s ease-out 50ms forwards',
        'stagger-3': 'fadeIn 0.5s ease-out 100ms forwards',
        'stagger-4': 'fadeIn 0.5s ease-out 150ms forwards',
        'stagger-5': 'fadeIn 0.5s ease-out 200ms forwards',
        'stagger-6': 'fadeIn 0.5s ease-out 250ms forwards',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config