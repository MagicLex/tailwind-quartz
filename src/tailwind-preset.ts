import { colors, spacing, shadows, borderRadius, transitions, typography, zIndices, iconSizes } from './tokens';
import type { Config } from 'tailwindcss';

// Convert pixel values to rem for better scalability
const pxToRem = (px: string) => {
  const value = parseInt(px);
  return `${value / 16}rem`;
};

// Convert spacing object to Tailwind format
const spacingConfig = Object.entries(spacing).reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {} as Record<string, string>);

// Flatten color object for Tailwind
const flattenColors = (colorObj: any, prefix = ''): Record<string, string> => {
  const result: Record<string, string> = {};
  
  Object.entries(colorObj).forEach(([key, value]) => {
    const newKey = prefix ? `${prefix}-${key}` : key;
    if (typeof value === 'string') {
      result[newKey] = value;
    } else if (typeof value === 'object') {
      Object.assign(result, flattenColors(value, newKey));
    }
  });
  
  return result;
};

const colorConfig = {
  ...flattenColors(colors),
  transparent: 'transparent',
  current: 'currentColor',
  // Add semantic color mappings to match component usage
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
  // Add semantic label color mappings
  label: {
    red: colors.labels.red,
    orange: colors.labels.orange,
    purple: colors.labels.purple,
    yellow: colors.labels.yellow,
    green: colors.labels.green,
    blue: colors.labels.blue,
  },
};

// Create font family config
const fontFamilyConfig = {
  sans: [typography.fonts.text, 'ui-sans-serif', 'system-ui', 'sans-serif'],
  title: [typography.fonts.title, 'ui-sans-serif', 'system-ui', 'sans-serif'],
  mono: [typography.fonts.value, 'ui-monospace', 'monospace'],
};

// Create font size config with line height
const fontSizeConfig: Record<string, [string, { lineHeight: string }]> = {
  'text': [typography.fontSizes.text, { lineHeight: '1.5' }],
  'title': [typography.fontSizes.title, { lineHeight: '1.2' }],
  'subtitle': [typography.fontSizes.subtitle, { lineHeight: '1.3' }],
  'label': [typography.fontSizes.label, { lineHeight: '1.5' }],
  'microlabel': [typography.fontSizes.microlabel, { lineHeight: '1.5' }],
  'value': [typography.fontSizes.value, { lineHeight: '1.5' }],
  // Also include standard Tailwind sizes
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
};

// Create font weight config
const fontWeightConfig: Record<string, string> = {
  text: String(typography.fontWeights.text),
  title: String(typography.fontWeights.title),
  subtitle: String(typography.fontWeights.subtitle),
  label: String(typography.fontWeights.label),
  microlabel: String(typography.fontWeights.microlabel),
  value: String(typography.fontWeights.value),
  // Also include standard Tailwind weights
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

// Create transition config
const transitionConfig = {
  DEFAULT: transitions.normal,
  button: transitions.button,
  fast: transitions.fast,
  normal: transitions.normal,
  slow: transitions.slow,
};

// Convert icon sizes to width/height config
const sizeConfig = Object.entries(iconSizes).reduce((acc, [key, value]) => {
  acc[`icon-${key}`] = value;
  return acc;
}, {} as Record<string, string>);

export const quartzPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: colorConfig,
      spacing: spacingConfig,
      width: sizeConfig,
      height: sizeConfig,
      boxShadow: shadows,
      borderRadius: borderRadius,
      fontFamily: fontFamilyConfig,
      fontSize: fontSizeConfig,
      fontWeight: fontWeightConfig,
      zIndex: Object.entries(zIndices).reduce<Record<string, string>>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}),
      transitionProperty: transitionConfig,
      borderColor: {
        DEFAULT: colors.grayShade2, // Default border color in Quartz is light gray
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.25s ease',
        'slide-up': 'slide-up 0.25s ease',
        'spin': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
};

export default quartzPreset;