# @logicalclocks/tailwind-quartz

Modern Tailwind-based component library for Hopsworks.

## Installation

```bash
npm install @logicalclocks/tailwind-quartz
# or
pnpm add @logicalclocks/tailwind-quartz
# or 
yarn add @logicalclocks/tailwind-quartz
```

## Setup

### Extending Tailwind Config

To use the design tokens and theme from this library, extend your `tailwind.config.js`:

```javascript
const quartzConfig = require('@logicalclocks/tailwind-quartz/tailwind.config.js');

module.exports = {
  ...quartzConfig,
  content: [
    // Your app's content paths
    './src/**/*.{js,ts,jsx,tsx}',
    // Include the component library
    './node_modules/@logicalclocks/tailwind-quartz/dist/**/*.{js,mjs}'
  ],
  // Your additional customizations
}
```

### Integration Issues

If you encounter React import errors, see [INTEGRATION.md](./INTEGRATION.md) for troubleshooting steps.

## Router Support

The Button component is router-agnostic. You can use it with any routing library:

### With React Router

```tsx
import { Link } from 'react-router-dom';
import { Button } from '@logicalclocks/tailwind-quartz';

<Button href="/dashboard" as={Link}>
  Dashboard
</Button>
```

### With Next.js

```tsx
import Link from 'next/link';
import { Button } from '@logicalclocks/tailwind-quartz';

<Button href="/dashboard" as={Link}>
  Dashboard
</Button>
```

### Plain HTML (default)

```tsx
<Button href="/dashboard">
  Dashboard
</Button>
// Renders as <a> tag
```

### External links

```tsx
<Button href="https://hopsworks.ai" external>
  Hopsworks
</Button>
// Always renders as <a> with proper rel attributes
```