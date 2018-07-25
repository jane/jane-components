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
  webpackConfig,
  theme: {
    spaceFactor: 30,
    color: {
      border: '#eff4fc',
      link: '#a3ffec',
      sidebarBackground: '#192a33',
    },
    fontFamily: {
      // base: '"Oxygen" sans-serif'
    },

    fontSize: {
      h1: 40,
      h2: 36,
      small: 10,
      text: 12,
      base: 11,
    },
    sidebarWidth: 230,
  },
  styleguideDir: 'docs',
  ribbon: {
    url: 'https://github.com/jane/jane-components',
    text: 'Contribute on GitHub',
  },
}
