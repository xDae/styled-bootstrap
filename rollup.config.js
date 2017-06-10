import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';

const pkg = require('./package.json');

// const external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/index.js',
  plugins: [
    nodeResolve({
      jsnext: true
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['react', 'styled-components', 'polished', 'prop-types'],
  targets: [
    {
      dest: pkg.main,
      format: 'cjs'
    },
    {
      dest: pkg.module,
      format: 'es'
    }
  ]
};
