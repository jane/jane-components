import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

const babelConfig = {
  exclude: 'node_modules/**',
  babelrc: false,
  presets: [
    [
      'env',
      {
        modules: false,
      },
    ],
    'stage-2',
    'react',
  ],
  plugins: ['transform-flow-strip-types', 'transform-class-properties'],
  comments: false,
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [external(), babel(babelConfig), resolve(), commonjs()],
}
