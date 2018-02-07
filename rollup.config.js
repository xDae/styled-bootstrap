import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import flow from 'rollup-plugin-flow';
import filesize from 'rollup-plugin-filesize';

const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  plugins: [
    flow(),
    nodeResolve({
      jsnext: true
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    filesize()
  ],
  external: [
    'react',
    'styled-components',
    'polished',
    'prop-types',
    'styled-tools'
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ]
};
