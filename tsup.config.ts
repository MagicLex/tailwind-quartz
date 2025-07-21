import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tailwind-preset': 'src/tailwind-preset.ts',
    'tokens/index': 'src/tokens/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  minify: true,
  treeshake: true,
  target: 'es2015',
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});