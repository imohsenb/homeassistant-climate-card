import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const dev = process.env.ROLLUP_WATCH;

const plugins = [
  json(),
  resolve({
    browser: true,
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  !dev && terser(),
];

export default [
  {
    input: 'src/climate-card.ts',
    output: {
      file: 'dist/climate-card.js',
      format: 'es',
    },
    plugins: [...plugins],
  },
];
