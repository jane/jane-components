# jane-components

**WIP**

[Documentation](https://jane.github.io/jane-components)

[![npm version](https://img.shields.io/npm/v/jane-components.svg)](https://npm.im/jane-components) [![CircleCI](https://circleci.com/gh/jane/jane-components.svg?style=svg)](https://circleci.com/gh/jane/jane-components) [![Coverage Status](https://coveralls.io/repos/github/jane/jane-components/badge.svg?t=yuKtUx)](https://coveralls.io/github/jane/jane-components) [![Known Vulnerabilities](https://snyk.io/test/github/jane/jane-components/badge.svg)](https://snyk.io/test/github/jane/jane-components)

--------

## Installation

`npm i jane-components react react-dom styled-components`.

You can also install this library and its peerDependencies with `npx install-peerdeps jane-components`.

## Usage

You can import the whole component library, or use named imports:

```javascript
import * as Components from 'jane-components'
// use Components.Button, etc.
import { Button } from 'jane-components'
// use Button
```

You can also import from individual files, which helps with tree-shaking:

```javascript
import Button from 'jane-components/lib/button'
// use Button
```

For component documentation, see the [docs site](https://jane.github.io/jane-components).

## License

[MIT](./LICENSE.md)
