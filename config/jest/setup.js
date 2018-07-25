const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

const mm = require('mq-polyfill').default

process.browser = true
mm(window)
