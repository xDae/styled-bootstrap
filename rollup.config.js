import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  moduleName: 'styled-bootstrap',
  plugins: [
    nodeResolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ],
  external: ['react', 'styled-components', 'polished'],
  dest: 'lib/main.js'
};
