# tailwind-quartz

Modern Tailwind-based component library with the Quartz design system.

## Installation

```bash
npm install tailwind-quartz
# or
pnpm add tailwind-quartz
# or 
yarn add tailwind-quartz
```

## Quick Start

### Preview Components

To see all components in action with interactive documentation:

```bash
npm install
npm run storybook
```

This will open Storybook at `http://localhost:6006` with all components, their variants, and interactive controls.

### 1. Import Components

```tsx
import { Button, Card, Input, Select } from 'tailwind-quartz';

function App() {
  return (
    <Card title="Welcome">
      <Button intent="primary">Get Started</Button>
    </Card>
  );
}
```

### 2. Configure Tailwind

Add the Tailwind Quartz preset to your `tailwind.config.js`:

```javascript
const { tailwindQuartzPreset } = require('tailwind-quartz/tailwind-preset');

module.exports = {
  presets: [tailwindQuartzPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-quartz/**/*.{js,mjs}',
  ],
};
```

## Components

### Layout
- **Box** - Basic building block with polymorphic `as` prop
- **Flex** - Flexbox container with alignment props

### Typography
- **Text** - Body text component
- **Title** - Page/section titles
- **Subtitle** - Section subtitles
- **Labeling** - Form labels and small text
- **Microlabeling** - Extra small labels
- **Value** - Monospace value display

### Form Controls
- **Input** - Text input with variants and validation states
- **Select** - Dropdown select component
- **Checkbox** - Checkbox input
- **Radio** - Radio button input
- **Toggle** - Toggle switch component

### Buttons & Actions
- **Button** - Primary action button with loading states
- **IconButton** - Icon-only button variant

### Display
- **Card** - Content container with title and actions
- **Modal** - Dialog/modal component
- **Badge** - Status indicators and labels
- **Tooltip** - Hover tooltips
- **Table** - Data table components
- **Spinner** - Loading spinner

### Navigation
- **Dropdown** - Dropdown menu component

## Design Tokens

Access the complete Quartz design system tokens:

```typescript
import { colors, spacing, typography, shadows } from 'tailwind-quartz/tokens';

// Use tokens directly in your styles
const styles = {
  color: colors.primary,
  padding: spacing[4],
  fontSize: typography.fontSizes.text,
  boxShadow: shadows.primary,
};
```

### Available Tokens

- **colors** - Primary, grayscale, and semantic label colors
- **spacing** - Consistent spacing scale (0-15)
- **typography** - Font families, sizes, and weights
- **iconSizes** - Icon size scale (xxs to xl)
- **shadows** - Elevation and state shadows
- **borderRadius** - Radius scale from none to full
- **transitions** - Animation timing functions
- **zIndices** - Layering z-index values

## Dark Mode Support

The design tokens include dark mode variants. Configure your app to use the `dark` class on the root element to enable dark mode.

## TypeScript Support

This package includes TypeScript definitions for all components and tokens.

## License

MIT