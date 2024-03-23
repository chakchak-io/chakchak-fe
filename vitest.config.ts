import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    reporters: ['verbose'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'text-summary'],
      enabled: true,
      provider: 'v8',
      extension: ['.ts', '.tsx'],
      thresholds: {
        // Thresholds for all files
        // @TODO: make coverage higher
        branches: 3,
        functions: 1,
      },
    },
    exclude: [...configDefaults.exclude],
  },
});
