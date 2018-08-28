// @flow

import * as React from 'react'
import renderer from 'react-test-renderer'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

type RendererJson = {
  type: string,
  props: { [propName: string]: * },
  children: null | RendererJson[],
}

export const create = (C: React.Node): RendererJson | null =>
  renderer.create(<ThemeProvider theme={theme}>{C}</ThemeProvider>).toJSON()
