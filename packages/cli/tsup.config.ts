import { defineConfig } from 'tsup'

// biome-ignore lint/style/noDefaultExport: default export is recommended in tsup config files
export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
})