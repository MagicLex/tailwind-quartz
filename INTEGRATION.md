# Tailwind Quartz Integration Guide

## Installation

```bash
npm install tailwind-quartz
# or
yarn add tailwind-quartz
# or
pnpm add tailwind-quartz
```

## Setup

### 1. Import Components

```tsx
import { Button, Card, Input } from 'tailwind-quartz';
```

### 2. Configure Tailwind CSS

Add the Tailwind Quartz preset to your `tailwind.config.js`:

```javascript
const { tailwindQuartzPreset } = require('tailwind-quartz/tailwind-preset');

module.exports = {
  presets: [tailwindQuartzPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-quartz/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of your config
};
```

### 3. Use Design Tokens (Optional)

You can also import and use the design tokens directly:

```javascript
import { colors, typography, spacing } from 'tailwind-quartz/tokens';

// Use in your styles
const styles = {
  color: colors.primary,
  fontSize: typography.fontSizes.text,
  padding: spacing[4],
};
```

## TypeScript Support

This package includes TypeScript definitions. No additional setup is required.

## Peer Dependencies

Make sure you have the following peer dependencies installed:
- React >= 16.8.0
- React DOM >= 16.8.0

## Framework Integration

### Next.js
No additional configuration needed. The package works out of the box with Next.js.

### Vite
No additional configuration needed. The package works out of the box with Vite.

### Create React App
No additional configuration needed. The package works out of the box with Create React App.