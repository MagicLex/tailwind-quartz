// Example: Using Quartz design tokens in your application

import { 
  colors, 
  spacing, 
  typography, 
  shadows, 
  transitions,
  borderRadius,
  tokens 
} from 'tailwind-quartz';

// 1. Using individual token categories
console.log('Primary color:', colors.primary); // '#21B182'
console.log('Button padding:', spacing[4]); // '15px'
console.log('Title font:', typography.fonts.title); // 'Inter'

// 2. Creating a styled component with tokens
const buttonStyles = {
  padding: `${spacing[2]} ${spacing[4]}`, // '8px 15px'
  backgroundColor: colors.primary,
  color: colors.white,
  fontFamily: typography.fonts.label,
  fontSize: typography.fontSizes.label,
  fontWeight: typography.fontWeights.label,
  borderRadius: borderRadius.sm,
  boxShadow: shadows.primary,
  transition: transitions.button,
  cursor: 'pointer',
};

// 3. Using the complete tokens object
const theme = {
  ...tokens,
  // Add your custom tokens
  custom: {
    headerHeight: '64px',
    sidebarWidth: '240px',
  }
};

// 4. Creating CSS variables from tokens
const cssVariables = `
  :root {
    --color-primary: ${colors.primary};
    --color-gray: ${colors.gray};
    --spacing-base: ${spacing[2]};
    --font-text: ${typography.fonts.text};
    --shadow-primary: ${shadows.primary};
  }
`;

// 5. Type-safe token usage
type ColorKey = keyof typeof colors;
type SpacingKey = keyof typeof spacing;

function getColor(key: ColorKey): string {
  return colors[key];
}

function getSpacing(key: SpacingKey): string {
  return spacing[key];
}

// 6. Creating component variants with tokens
const buttonVariants = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.white,
    boxShadow: shadows.primary,
    '&:hover': {
      backgroundColor: colors.primaryShade1,
    }
  },
  secondary: {
    backgroundColor: colors.grayShade3,
    color: colors.black,
    boxShadow: shadows.secondary,
    '&:hover': {
      backgroundColor: colors.grayShade2,
    }
  },
  danger: {
    backgroundColor: colors.labels.red,
    color: colors.white,
    boxShadow: shadows.alert,
    '&:hover': {
      backgroundColor: colors.labels.red, // Could be darker shade
      opacity: 0.9,
    }
  }
};

// 7. Responsive spacing utilities
const responsiveSpacing = {
  mobile: spacing[2],    // 8px
  tablet: spacing[4],    // 15px
  desktop: spacing[6],   // 20px
};

export { buttonStyles, theme, cssVariables, buttonVariants, responsiveSpacing };