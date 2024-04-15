import type { Config } from 'tailwindcss';
import color from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      // phone
      xs: '520px',
      // tablet(portrait)
      sm: '768px',
      // tablet(landscape)
      md: '1024px',
      // laptop
      lg: '1280px',
      // desktop
      xl: '1640px',
    },
    colors: {
      ...color,
      slate: {
        ...color.slate,
        500: '#64748B',
        700: '#334155',
        900: '#0F172A',
      },
    },
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        sourceSansPro: ['var(--font-source-sans-pro)'],
      },
      colors: {
        slate: {
          100: 'hsl(var(--slate-100))',
        },
        gray: {
          50: 'hsl(var(--gray-50))',
          100: 'hsl(var(--gray-100))',
          300: 'hsl(var(--gray-300))',
          400: 'hsl(var(--gray-400))',
          500: 'hsl(var(--gray-500))',
          600: 'hsl(var(--gray-600))',
          800: 'hsl(var(--gray-800))',
          900: 'hsl(var(--gray-900))',
        },
        danger: '#F64582',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsla(249, 64%, 98%, 1)',
          100: 'hsla(252, 89%, 71%, 1)',
          300: 'hsla(252, 89%, 51%, 1)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      // @TODO: radius key 추가
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        custom:
          '0px 14px 24px 0px rgba(14, 31, 53, 0.08), 0px 6px 12px 0px rgba(14, 31, 53, 0.12), 0px 3px 6px 0px rgba(14, 31, 53, 0.08)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
