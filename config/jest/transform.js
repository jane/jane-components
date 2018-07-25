const babelConfig = require('../../.babelrc.json')
const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer(babelConfig)
