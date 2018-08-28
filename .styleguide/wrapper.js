// @flow

import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

export default ({ children }: { children: React.Node }): React.Node => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
