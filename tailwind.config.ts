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
    }, screens: {
      'sm': '276px',
      // => @media (min-width: 576px) { ... }

      'md': '860px',
      // => @media (min-width: 960px) { ... }

      'lg': '1040px',
      // => @media (min-width: 1440px) { ... }
    },
    backdropBlur: {
      'none': '0',
      'sm': '4px',
      'DEFAULT': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '40px',
      '3xl': '64px',
    }
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'], // or other variants you want to enable
    }
  },
  plugins: [],
}
export default config
