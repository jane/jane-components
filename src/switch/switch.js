// @flow

import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { type Theme } from '../theme.types'
import SwitchComponent from './switch.styled'

export type SwitchProps = {
  backgroundColor?: string,
  checked?: boolean,
  disabled?: boolean,
  input: {
    value: boolean | string,
    onClick?: () => void,
    onChange?: () => void,
  },
  name?: string,
  testID?: string,
} & Theme

const Switch = ({ testID, ...props }: SwitchProps): React$Element<*> => (
  <ThemeProvider theme={theme}>
    <SwitchComponent data-testid={testID} {...props} />
  </ThemeProvider>
)

export default Switch
