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
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    'babel-plugin-styled-name',
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
    SectionHeadingRenderer: join(__dirname, '.styleguide/section-heading'),
  },
  printBuildInstructions() {},
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      components: 'src/!(utils)/*.js',
    },
    {
      name: 'Utils',
      components: 'src/utils/**/*.js',
    },
  ],
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
    text: 'GitHub',
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.md')
  },
  title: 'Jane Components',
  version,
}
