
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--fg)',
        primary: { DEFAULT: 'var(--primary)', foreground: 'var(--primary-fg)' },
        muted: { DEFAULT: 'var(--muted)', foreground: 'var(--muted-fg)' },
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
}
