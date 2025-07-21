// Design tokens extracted and extended from Quartz design system

export const colors = {
  primary: '#21B182',
  primaryShade1: '#65D3AF',
  primaryShade2: '#E6F2EE',

  gray: '#a0a0a0',
  grayShade1: '#CBCBCB',
  grayShade2: '#E2E2E2',
  grayShade3: '#F5F5F5',

  black: '#272727',
  white: '#FFFFFF',

  labels: {
    red: '#EB5757',
    orange: '#f2994a',
    purple: '#9B51E0',
    purpleShade2: '#F5EEFC',
    yellow: '#FFE600',
    yellowShade2: '#FFF8B3',
    green: '#21B182',
    blueShade1: '#41B7DC',
    blueShade2: '#ECF8FC',
    blue: '#186781',
    orangeShade2: '#FDF0E4',
    redShade2: '#F8DEDE',
  },
} as const;

export const darkColors = {
  white: '#181a1b',

  gray: '#A6A6A6',
  grayShade1: '#707070',
  grayShade2: '#4D4D4D',
  grayShade3: '#1e2021',

  black: '#F0F0F0',

  primary: '#229570',
  primaryShade1: '#326756',
  primaryShade2: '#264339',

  labels: {
    red: '#C44D4D',
    orange: '#C0844E',
    orangeShade2: '#503E2E',
    purple: '#8449BB',
    yellow: '#D4BF08',
    yellowShade2: '#524D1F',
    green: '#229570',
    blue: '#2885A4',
    blueShade1: '#2D5E6E',
    blueShade2: '#243439',
    redShade2: '#4E3131',
    purpleShade2: '#8449BB',
  },
} as const;

export const typography = {
  fonts: {
    text: 'Inter',
    title: 'Inter',
    subtitle: 'Inter',
    label: 'Inter',
    microlabel: 'Inter',
    value: 'IBM Plex Mono',
  },
  fontSizes: {
    text: '12px',
    title: '24px',
    subtitle: '18px',
    label: '12px',
    microlabel: '10px',
    value: '12px',
  },
  fontWeights: {
    text: 500,
    title: 700,
    subtitle: 700,
    label: 700,
    microlabel: 700,
    value: 700,
  },
} as const;

export const iconSizes = {
  xxs: '8px',
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '36px',
} as const;

// Spacing tokens (inferred from component usage patterns)
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '15px', // Common button padding
  5: '16px',
  6: '20px',
  7: '24px',
  8: '30px',
  9: '32px',
  10: '40px',
  11: '48px',
  12: '56px',
  13: '64px',
  14: '72px',
  15: '80px',
} as const;

export const shadows = {
  primary: '0px 5px 15px rgba(33, 177, 130, 0.2)',
  secondary: '0px 5px 15px rgba(144, 144, 144, 0.2)',
  explorer: '0px -1px 1px #E5E5E5',
  alert: '0px 5px 15px rgba(235, 87, 87, 0.25)',
  disabled: '0px 4px 15px rgba(0, 0, 0, 0.25)',
  cardInsetShadow: 'inset 0px -20px 30px -25px rgba(0, 0, 0, 0.15)',
  navigation: '1px 0px 0px #E5E5E5, 2px 0px 0px white',
  list: '0px 4px 15px rgba(0, 0, 0, 0.25)',
  popup: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  notification: '0px 0px 15px rgba(0, 0, 0, 0.25)',
  focused: '0 0 0 2px rgba(33, 177, 130, 0.6)',
} as const;

export const darkShadows = {
  primary: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  secondary: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  explorer: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  alert: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  disabled: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  cardInsetShadow: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  navigation: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  list: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  popup: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  notification: '0 0 1px 2px rgba(160, 160, 160, 0.1)',
  focused: '0 0 0 2px rgba(33, 177, 130, 0.6)',
} as const;

export const zIndices = {
  default: 10,
  tooltips: 1000,
  popups: 30,
  modals: 40,
  notifications: 50,
} as const;

// Border radius tokens (inferred from component usage)
export const borderRadius = {
  none: '0px',
  sm: '1px', // Common in buttons
  md: '4px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const;

export const transitions = {
  button: 'all .25s ease',
  fast: 'all .15s ease',
  normal: 'all .25s ease',
  slow: 'all .35s ease',
} as const;

// Export a complete theme object
export const tokens = {
  colors,
  darkColors,
  typography,
  iconSizes,
  spacing,
  shadows,
  darkShadows,
  zIndices,
  borderRadius,
  transitions,
} as const;

// Type exports
export type Colors = typeof colors;
export type DarkColors = typeof darkColors;
export type Typography = typeof typography;
export type IconSizes = typeof iconSizes;
export type Spacing = typeof spacing;
export type Shadows = typeof shadows;
export type ZIndices = typeof zIndices;
export type BorderRadius = typeof borderRadius;
export type Transitions = typeof transitions;
export type Tokens = typeof tokens;