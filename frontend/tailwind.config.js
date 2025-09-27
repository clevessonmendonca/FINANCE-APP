/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bemobi Brand Colors (baseado no site oficial)
        bemobi: {
          // Primary Blue (baseado no gradiente da Bemobi)
          primary: '#4c6fff', // Azul principal do site
          secondary: '#6366f1', // Azul secundário
          accent: '#8b5cf6', // Roxo do gradiente
          
          // Gradientes principais
          'gradient-start': '#4c6fff',
          'gradient-middle': '#6366f1', 
          'gradient-end': '#8b5cf6',
          
          // Neutros (baseado no design)
          gray: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          
          // Estados
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#06b6d4',
        },
        
        // Mantém compatibilidade
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#4c6fff',
          600: '#6366f1',
          700: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: [
          'Inter', 
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'system-ui',
          'sans-serif'
        ],
      },
      fontSize: {
        // Typography scale baseada no site da Bemobi
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        // Spacing system consistente
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        // Border radius baseado no design da Bemobi
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        // Shadows baseadas no design da Bemobi
        'bemobi-sm': '0 1px 2px 0 rgba(76, 111, 255, 0.05)',
        'bemobi': '0 4px 6px -1px rgba(76, 111, 255, 0.1), 0 2px 4px -1px rgba(76, 111, 255, 0.06)',
        'bemobi-lg': '0 10px 15px -3px rgba(76, 111, 255, 0.1), 0 4px 6px -2px rgba(76, 111, 255, 0.05)',
        'bemobi-xl': '0 20px 25px -5px rgba(76, 111, 255, 0.1), 0 10px 10px -5px rgba(76, 111, 255, 0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        // Gradientes da Bemobi
        'bemobi-gradient': 'linear-gradient(135deg, #4c6fff 0%, #6366f1 50%, #8b5cf6 100%)',
        'bemobi-gradient-light': 'linear-gradient(135deg, rgba(76, 111, 255, 0.1) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
      }
    },
  },
  plugins: [],
}
