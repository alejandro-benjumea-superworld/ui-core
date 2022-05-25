import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const exclude = [
  'node_modules',
  'dist',
  'src/**/*.stories.tsx',
  'src/**/*.stories.ts',
  'src/**/*test.*',
];

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  production && terser(),
];

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: {
      dir: './',
      entryFileNames: pkg.main,
      format: 'cjs',
      sourcemap: !production,
    },
    external: [
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.peerDependencies)
    ],
    plugins: [
      ...plugins,
      typescript({
        declaration: true,
        declarationDir: './dist',
        exclude,
        rootDir: 'src/',
        sourceMap: !production,
      }),
    ],
  },
  
  // ES
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: !production,
    },
    plugins: [
      ...plugins,
      typescript({
        exclude,
        sourceMap: !production,
        inlineSources: !production,
      }),
    ],
  },
];
