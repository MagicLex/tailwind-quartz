# Tailwind Quartz Integration Guide

## Setup

This package ships TypeScript source files directly. Your bundler will compile them.

### Next.js

Add the package to `transpilePackages` in your `next.config.js`:

```javascript
module.exports = {
  transpilePackages: ['@logicalclocks/tailwind-quartz'],
  // ... rest of your config
}
```

### Vite/Create React App

No configuration needed - these bundlers handle TypeScript automatically.

## TypeScript Support

The package includes type definitions in the `dist` folder.