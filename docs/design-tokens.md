# Quartz Design Tokens

This package exports the design tokens from the Quartz design system, making them available for use in Tailwind CSS and JavaScript/TypeScript applications.

## Installation

```bash
npm install tailwind-quartz
```

## Usage

### Using with Tailwind CSS

Add the Quartz preset to your `tailwind.config.js`:

```js
import { quartzPreset } from 'tailwind-quartz';

export default {
  presets: [quartzPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Include tailwind-quartz components if using them
    './node_modules/tailwind-quartz/dist/**/*.js',
  ],
  // Your other config...
};
```

### Using tokens directly in JavaScript/TypeScript

```ts
import { colors, spacing, shadows, typography } from 'tailwind-quartz';

// Use colors
const primaryColor = colors.primary; // '#21B182'
const errorColor = colors.labels.red; // '#EB5757'

// Use spacing
const buttonPadding = spacing[4]; // '15px'

// Use typography
const titleFont = typography.fonts.title; // 'Inter'
const titleSize = typography.fontSizes.title; // '24px'
```

## Available Tokens

### Colors

- **Primary**: `primary`, `primaryShade1`, `primaryShade2`
- **Grayscale**: `gray`, `grayShade1`, `grayShade2`, `grayShade3`, `black`, `white`
- **Label colors**: Available under `labels.*`
  - `red`, `redShade2`
  - `orange`, `orangeShade2`
  - `purple`, `purpleShade2`
  - `yellow`, `yellowShade2`
  - `green`
  - `blue`, `blueShade1`, `blueShade2`

### Typography

- **Font families**: `text`, `title`, `subtitle`, `label`, `microlabel`, `value`
- **Font sizes**: Matching the font family names
- **Font weights**: Matching the font family names

### Spacing

Spacing scale from 0 to 15:
- `0`: 0px
- `1`: 4px
- `2`: 8px
- `3`: 12px
- `4`: 15px (common button padding)
- ... up to `15`: 80px

### Shadows

- `primary`, `secondary`: Component shadows
- `alert`, `disabled`: State shadows
- `focused`: Focus state shadow
- `popup`, `notification`: Overlay shadows
- And more...

### Other Tokens

- **Border radius**: `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `full`
- **Z-indices**: `default`, `tooltips`, `popups`, `modals`, `notifications`
- **Transitions**: `fast`, `normal`, `slow`, `button`
- **Icon sizes**: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`

## Dark Mode

The package also exports dark mode color tokens:

```ts
import { darkColors, darkShadows } from 'tailwind-quartz';
```

## Tailwind Classes

When using the Quartz preset, you'll have access to custom utility classes:

### Colors
- `text-primary`, `bg-primary`, `border-primary`
- `text-labels-red`, `bg-labels-yellow`, etc.

### Typography
- `font-title`, `font-value` (monospace)
- `text-title`, `text-subtitle`, `text-label`, etc.
- `font-title` (700), `font-text` (500), etc.

### Spacing
- `p-4` (15px), `m-2` (8px), etc.

### Shadows
- `shadow-primary`, `shadow-alert`, `shadow-focused`, etc.

### Animations
- `animate-fade-in`
- `animate-slide-up`
- `animate-spin`

## Example Component

```tsx
import React from 'react';

const Button = ({ children, variant = 'primary' }) => {
  return (
    <button
      className={`
        px-4 py-2 
        rounded-sm 
        font-label text-label font-label
        transition-button
        ${variant === 'primary' 
          ? 'bg-primary text-white shadow-primary hover:bg-primaryShade1' 
          : 'bg-grayShade3 text-black shadow-secondary hover:bg-grayShade2'
        }
        focus:shadow-focused
      `}
    >
      {children}
    </button>
  );
};
```