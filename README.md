# jane-components

[WIP]

[![npm version](https://img.shields.io/npm/v/jane-components.svg)](https://npm.im/jane-components) [![CircleCI](https://circleci.com/gh/jane/jane-components.svg?style=svg)](https://circleci.com/gh/jane/jane-components) [![Coverage Status](https://coveralls.io/repos/github/jane/jane-components/badge.svg?t=yuKtUx)](https://coveralls.io/github/jane/jane-components)

[Docs](https://jane.github.io/jane-components)
--------

## Installation

`npm i jane-components react react-dom styled-components`.

You can also install this library and its peerDependencies with `npx install-peerdeps jane-components`.

## Usage

```javascript
import * as React from 'react'
import { render } from 'react-dom'
import * as J from 'jane-components'

const App = () => (
  <div>
    <J.Something />
  </div>
)

render(<App />, document.querySelector('main'))
```

## License

[MIT](./LICENSE.md)
