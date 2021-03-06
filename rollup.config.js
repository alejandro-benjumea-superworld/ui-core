import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  production && terser(),
];

export default [
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
      ...Object.keys(pkg.peerDependencies),
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: true,
        declarationDir: './dist',
        rootDir: 'src/',
        sourceMap: !production,
      }),
      ...plugins,
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: !production,
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
        sourceMap: !production,
        inlineSources: !production,
      }),
      ...plugins,
    ],
    onwarn: function (warning) {
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
      console.warn(warning.message);
    },
  },
];
