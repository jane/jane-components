// @flow

import * as React from 'react'
import renderer from 'react-test-renderer'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

export const create = (C: React.Node): string =>
  renderer.create(<ThemeProvider theme={theme}>{C}</ThemeProvider>).toJSON()
