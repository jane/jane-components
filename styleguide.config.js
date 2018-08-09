/*eslint-env node */

const path = require('path')

const babelRc = {
  babelrc: false,
  presets: [require('babel-preset-env'), require('babel-preset-react')],
  plugins: [
    require('babel-plugin-transform-flow-strip-types'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-styled-components').default,
    require('babel-plugin-styled-name').default,
  ],
}

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelRc,
      },
    ],
  },
}

module.exports = {
  components: 'src/**/*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, '.styleguide/wrapper'),
  },
  ignore: [
    '**/index.js',
    '**/*.styled.js',
    '**/*.types.js',
    '**/*.test.js',
    '**/theme.js',
    '**/utils.js',
  ],
  webpackConfig,
  theme: {},
  styleguideDir: 'docs',
  ribbon: {
    url: 'https://github.com/jane/jane-components',
    text: 'Contribute on GitHub',
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.md')
  },
}
