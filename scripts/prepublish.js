const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const flow = require('rollup-plugin-flow');

const packageJson = require('../package.json');

shell.echo(chalk.bold(`${packageJson.name}@${packageJson.version}`));

shell.echo(chalk.gray('\n=> Clean dist.'));
shell.rm('-rf', 'lib');
shell.rm('-rf', 'es');

let cache;

rollup
  .rollup({
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
      })
    ],
    external: [
      'react',
      'styled-components',
      'polished',
      'prop-types',
      'styled-tools'
    ],
    // If you have a bundle you want to re-use (e.g., when using a watcher to rebuild as files change),
    // you can tell rollup use a previous bundle as its starting point.
    // This is entirely optional!
    cache
  })
  .then(bundle => {
    // Cache our bundle for later use (optional)
    cache = bundle;

    bundle.write({
      format: 'cjs',
      dest: 'lib/index.js'
    });

    bundle.write({
      format: 'es',
      dest: 'es/index.js'
    });
  })
  .catch(console.error); // log errors

const licence = path.join(__dirname, '..', 'LICENSE');
shell.echo(chalk.gray('\n=> Copy LICENSE.'));
shell.cp(licence, './');
