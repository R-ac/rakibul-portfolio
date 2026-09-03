/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#040608',
          900: '#080a0f',
          850: '#0d1117',
          800: '#121824',
          700: '#1a2233',
          600: '#26334a',
        },
        cyan: {
          glow: '#00f2fe',
          accent: '#00c6ff',
          dim: 'rgba(0, 242, 254, 0.15)',
        },
        emerald: {
          glow: '#00ff9d',
          accent: '#10b981',
          dim: 'rgba(0, 255, 157, 0.15)',
        },
        electric: {
          blue: '#3b82f6',
          sky: '#38bdf8',
          teal: '#14b8a6',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowLine: {
          '0%, 100%': { opacity: 0.3, transform: 'scaleX(0.95)' },
          '50%': { opacity: 0.9, transform: 'scaleX(1.05)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      backgroundImage: {
        'radial-gradient-dark': 'radial-gradient(circle at 50% 50%, rgba(14, 23, 42, 0.5) 0%, rgba(4, 6, 8, 0.95) 100%)',
        'cyber-grid': 'linear-gradient(to right, rgba(0, 242, 254, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 242, 254, 0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 242, 254, 0.4)',
        'cyan-sm': '0 0 10px rgba(0, 242, 254, 0.3)',
        'emerald-glow': '0 0 25px -5px rgba(0, 255, 157, 0.4)',
        'emerald-sm': '0 0 10px rgba(0, 255, 157, 0.3)',
        'card-glow': '0 10px 30px -10px rgba(0, 242, 254, 0.15)',
        'inner-glow': 'inset 0 0 15px rgba(0, 242, 254, 0.1)',
      }
    },
  },
  plugins: [],
}
