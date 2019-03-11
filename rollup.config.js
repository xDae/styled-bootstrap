import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import cleanup from 'rollup-plugin-cleanup';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: ['react', 'styled-components'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      flow(),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        extensions: ['.js', '.jsx'],
        jsnext: true,
        main: true
      }),
      commonjs({
        namedExports: {
          react: ['Component', 'createElement']
        }
      }),
      filesize(),
      cleanup(),
      visualizer()
    ]
  }
];
