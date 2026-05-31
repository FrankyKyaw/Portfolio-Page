/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent:        'var(--accent)',
        'accent-ink':  'var(--accent-ink)',
        accent2:       'var(--accent2)',
        ink:           'var(--ink)',
        'ink-soft':    'var(--ink-soft)',
        'ink-line':    'var(--ink-line)',
        'on-ink':      'var(--on-ink)',
        'on-ink-dim':  'var(--on-ink-dim)',
        cream:         'var(--cream)',
        'cream-soft':  'var(--cream-soft)',
        'cream-line':  'var(--cream-line)',
        'on-cream':    'var(--on-cream)',
        'on-cream-dim':'var(--on-cream-dim)',
      },
      fontFamily: {
        display: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
        body:    'var(--font-body, "Hanken Grotesk", sans-serif)',
        mono:    'var(--font-mono, "JetBrains Mono", monospace)',
      },
    },
  },
  plugins: [],
}
