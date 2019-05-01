import * as React from 'react'
import renderer from 'react-test-renderer'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

type RendererJson = {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: { [propName: string]: any }
  children: null | Array<RendererJson>
}

export const create = (C: React.ReactElement): RendererJson | null =>
  renderer.create(<ThemeProvider theme={theme}>{C}</ThemeProvider>).toJSON()
