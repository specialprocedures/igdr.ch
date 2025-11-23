const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // Catppuccin Mocha color palette
        'base': '#1e1e2e',
        'mantle': '#181825',
        'crust': '#11111b',
        'surface0': '#313244',
        'surface1': '#45475a',
        'surface2': '#585b70',
        'overlay0': '#6c7086',
        'overlay1': '#7f849c',
        'overlay2': '#9399b2',
        'text': '#cdd6f4',
        'subtext0': '#a6adc8',
        'subtext1': '#bac2de',
        'primary': {
          DEFAULT: '#89b4fa', // Blue
          50: '#cdd6f4',
          100: '#bac2de',
          200: '#a6adc8',
          300: '#89b4fa',
          400: '#74c7ec', // Sapphire
          500: '#89b4fa',
          600: '#89b4fa',
          700: '#74c7ec',
          800: '#89dceb', // Sky
          900: '#94e2d5' // Teal
        },
        'secondary': {
          DEFAULT: '#f5c2e7', // Pink
          50: '#f5e0dc',
          100: '#f2cdcd',
          200: '#f5c2e7',
          300: '#cba6f7', // Mauve
          400: '#f5c2e7',
          500: '#f5c2e7',
          600: '#cba6f7',
          700: '#cba6f7',
          800: '#b4befe', // Lavender
          900: '#cba6f7'
        },
        'neutral': {
          DEFAULT: '#6c7086',
          50: '#cdd6f4',
          100: '#bac2de',
          200: '#a6adc8',
          300: '#9399b2',
          400: '#7f849c',
          500: '#6c7086',
          600: '#585b70',
          700: '#45475a',
          800: '#313244',
          900: '#1e1e2e'
        },
        // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#cdd6f4', // text
            '--tw-prose-headings': '#cdd6f4', // text
            '--tw-prose-lead': '#bac2de', // subtext1
            '--tw-prose-links': '#89b4fa', // blue
            '--tw-prose-bold': '#cdd6f4', // text
            '--tw-prose-counters': '#a6adc8', // subtext0
            '--tw-prose-bullets': '#9399b2', // overlay2
            '--tw-prose-hr': '#585b70', // surface2
            '--tw-prose-quotes': '#bac2de', // subtext1
            '--tw-prose-quote-borders': '#585b70', // surface2
            '--tw-prose-captions': '#a6adc8', // subtext0
            '--tw-prose-code': '#f5c2e7', // pink
            '--tw-prose-pre-code': '#cdd6f4', // text
            '--tw-prose-pre-bg': '#181825', // mantle
            '--tw-prose-th-borders': '#585b70', // surface2
            '--tw-prose-td-borders': '#45475a', // surface1
            '--tw-prose-invert-body': '#cdd6f4', // text
            '--tw-prose-invert-headings': '#cdd6f4', // text
            '--tw-prose-invert-lead': '#bac2de', // subtext1
            '--tw-prose-invert-links': '#89b4fa', // blue
            '--tw-prose-invert-bold': '#cdd6f4', // text
            '--tw-prose-invert-counters': '#a6adc8', // subtext0
            '--tw-prose-invert-bullets': '#9399b2', // overlay2
            '--tw-prose-invert-hr': '#585b70', // surface2
            '--tw-prose-invert-quotes': '#bac2de', // subtext1
            '--tw-prose-invert-quote-borders': '#45475a', // surface1
            '--tw-prose-invert-captions': '#a6adc8', // subtext0
            '--tw-prose-invert-code': '#f5c2e7', // pink
            '--tw-prose-invert-pre-code': '#cdd6f4', // text
            '--tw-prose-invert-pre-bg': '#181825', // mantle
            '--tw-prose-invert-th-borders': '#585b70', // surface2
            '--tw-prose-invert-td-borders': '#45475a', // surface1
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
