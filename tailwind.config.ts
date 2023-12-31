/* tailwind.config.ts */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: 'var(--accent-1)',
        white_a: 'var(--accent-1a)',
        black: 'var(--accent-2)',
        black_a: 'var(--accent-2a)',
        darkblue: 'var(--accent-3)',
        green: 'var(--accent-4)',
        blue: 'var(--accent-5)',
        violet: 'var(--accent-6)',
        red: 'var(--accent-7)',
        orange: 'var(--accent-8)',
        darkred: 'var(--accent-9)',
        electricblue: 'var(--accent-10)',
      },
      height: {
        'svh-minus': 'calc(100svh - 68px)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
