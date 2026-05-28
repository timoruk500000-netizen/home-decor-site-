/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream:   { DEFAULT: '#FAF7F2', 50: '#FDFCFA', 100: '#FAF7F2', 200: '#F2EBE0', 300: '#E8DCCC' },
        sage:    { DEFAULT: '#7A9E7E', 50: '#F2F7F2', 100: '#D8EAD9', 200: '#B4D4B7', 300: '#8EBE92', 400: '#7A9E7E', 500: '#628166', 600: '#4D6650' },
        clay:    { DEFAULT: '#C4956A', 50: '#FBF5EE', 100: '#F3E4CE', 200: '#E6C89D', 300: '#D8AB6D', 400: '#C4956A', 500: '#A87850', 600: '#8A5E3A' },
        stone:   { DEFAULT: '#8C8070', 100: '#F5F3F0', 200: '#E8E3DC', 300: '#D0C8BC', 400: '#B8ADA0', 500: '#8C8070', 600: '#6B6058' },
        charcoal:'#2D2926',
        warmwhite:'#FEFCF9',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        accent:  ['"DM Serif Text"', 'Georgia', 'serif'],
      },
      aspectRatio: {
        'pin': '2/3',   // Pinterest 1000x1500
      },
      typography: (theme) => ({
        nestled: {
          css: {
            '--tw-prose-body':        theme('colors.charcoal'),
            '--tw-prose-headings':    theme('colors.charcoal'),
            '--tw-prose-links':       theme('colors.sage.500'),
            '--tw-prose-bold':        theme('colors.charcoal'),
            '--tw-prose-counters':    theme('colors.stone.500'),
            '--tw-prose-bullets':     theme('colors.sage.DEFAULT'),
            '--tw-prose-hr':          theme('colors.stone.200'),
            '--tw-prose-quotes':      theme('colors.clay.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.sage.200'),
            '--tw-prose-code':        theme('colors.clay.500'),
            '--tw-prose-pre-bg':      theme('colors.cream.200'),
            maxWidth: 'none',
            h2: { fontFamily: theme('fontFamily.accent').join(', '), fontWeight: '400', letterSpacing: '-0.01em' },
            h3: { fontFamily: theme('fontFamily.accent').join(', '), fontWeight: '400' },
            a: { textDecoration: 'underline', textDecorationColor: theme('colors.sage.200'), textUnderlineOffset: '3px', '&:hover': { textDecorationColor: theme('colors.sage.DEFAULT') } },
            p: { lineHeight: '1.75' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
