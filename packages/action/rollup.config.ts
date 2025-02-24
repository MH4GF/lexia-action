// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const config = {
  input: 'src/main.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [nodeResolve(), commonjs(), typescript()],
}

// biome-ignore lint/style/noDefaultExport: This is required by rollup
export default config
