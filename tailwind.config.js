const { colors, typography, spacing, shadows, zIndices, borderRadius, transitions } = require('@logicalclocks/design-tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary,
          light: colors.primaryShade1,
          lighter: colors.primaryShade2,
        },
        gray: {
          DEFAULT: colors.gray,
          light: colors.grayShade1,
          lighter: colors.grayShade2,
          lightest: colors.grayShade3,
        },
        black: colors.black,
        white: colors.white,
        label: colors.labels,
      },
      fontFamily: {
        sans: [typography.fonts.text, 'system-ui', '-apple-system', 'sans-serif'],
        mono: [typography.fonts.value, 'monospace'],
      },
      fontSize: {
        xs: typography.fontSizes.microlabel,
        sm: typography.fontSizes.label,
        base: typography.fontSizes.text,
        lg: typography.fontSizes.subtitle,
        xl: typography.fontSizes.title,
      },
      fontWeight: {
        normal: typography.fontWeights.text,
        bold: typography.fontWeights.title,
      },
      spacing: {
        ...spacing,
      },
      boxShadow: {
        ...shadows,
      },
      zIndex: {
        ...zIndices,
      },
      borderRadius: {
        ...borderRadius,
      },
      transitionProperty: {
        button: transitions.button,
      },
      animation: {
        spinner: 'spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(50deg)' },
          '100%': { transform: 'rotate(410deg)' },
        },
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};