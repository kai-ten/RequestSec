import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
  {
    input: 'lib/main.ts', // your entry point
    output: {
      name: 'requestsec', // package name
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**'],
        babelHelpers: 'bundled',
      }),
      typescript({
        compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' },
      }),
    ],
  },
  {
    input: 'lib/main.ts', // your entry point
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**'],
        babelHelpers: 'bundled',
      }),
      typescript({
        compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' },
      }),
    ],
  },
];
