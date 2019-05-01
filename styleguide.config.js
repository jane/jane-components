/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

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
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    'babel-plugin-styled-name',
  ],
}

const webpackConfig = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
  components: 'src/**/*.{ts,tsx}',
  styleguideComponents: {
    Wrapper: join(__dirname, '.styleguide/wrapper'),
    SectionHeadingRenderer: join(__dirname, '.styleguide/section-heading'),
  },
  printBuildInstructions() {},
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      components: 'src/!(utils)/*.{ts,tsx}',
    },
    {
      name: 'Utils',
      components: 'src/utils/**/*.{ts,tsx}',
    },
  ],
  ignore: [
    '**/index.ts',
    '**/*.styled.ts',
    '**/*.styled.tsx',
    '**/*.types.ts',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/test-utils.ts',
    '**/theme.ts',
  ],
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig,
  theme,
  styleguideDir: 'docs',
  ribbon: {
    url: 'https://github.com/jane/jane-components',
    text: 'GitHub',
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.(ts|tsx)?$/, '.md')
  },
  title: 'Jane Components',
  version,
}
