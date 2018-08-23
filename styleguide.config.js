/* eslint-env node */

const { join } = require('path')
const { version } = require('./package.json')

const theme = {
  fontFamily: {
    base: [
      '"Montserrat"',
      '"Helvetica Neue"',
      '"Noto Sans"',
      'sans-serif',
    ].join(', '),
    monospace: [
      '"Hasklig"',
      '"Hack"',
      '"Fira Code"',
      '"Fantasque Sans Mono"',
      '"Menlo"',
      'monospace',
    ].join(', '),
  },
  color: {
    codeBackground: '#F9F9F9',
    linkHover: '#464646',
    link: '#000',
    sidebarBackground: '#fff',
    ribbonBackground: '#4b68bdde',
  },
}

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
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: './styles.css',
        },
      ],
    },
  },
  components: 'src/**/*.js',
  styleguideComponents: {
    Wrapper: join(__dirname, '.styleguide/wrapper'),
  },
  printBuildInstructions() {},
  ignore: [
    '**/index.js',
    '**/*.styled.js',
    '**/*.types.js',
    '**/*.test.js',
    '**/test-utils.js',
    '**/theme.js',
  ],
  webpackConfig,
  theme,
  styleguideDir: 'docs',
  ribbon: {
    url: 'https://github.com/jane/jane-components',
    text: 'Contribute on GitHub',
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.md')
  },
  title: 'Jane Components',
  version,
}
