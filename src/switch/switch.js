// @flow

import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Switch from './switch.styled'

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

const Button = ({ testID, ...props }: SwitchProps): React$Element<*> => {
  const SwitchComponent = Switch

  return (
    <ThemeProvider theme={theme}>
      <SwitchComponent data-testid={testID} {...props} />
    </ThemeProvider>
  )
}

export default Switch
