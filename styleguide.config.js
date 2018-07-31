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
  components: 'src/**/[A-z]*.js',
  //ignore: [
  //'src/**/index.js',
  //],
  webpackConfig,
  theme: {},
  styleguideDir: 'docs',
  ribbon: {
    url: 'https://github.com/jane/jane-components',
    text: 'Contribute on GitHub',
  },
}
