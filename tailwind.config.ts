import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        baseColor: '#0E8BFF',
        demoColor: '#949494',
      },
      animation: {
        'fade-in':
          'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'slide-in-right':
          'slide-in-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-out-right':
          'slide-out-right 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-out-right': {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          to: {
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
