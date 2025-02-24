import { defineConfig } from 'vitest/config'

// biome-ignore lint/style/noDefaultExport: This is required by vitest
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
