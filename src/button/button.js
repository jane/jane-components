// @flow

import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import StandardButton from './button.styled'

export type ButtonProps = {
  disabled?: boolean,
  style?: {},
  submitting?: boolean,
  testID?: string,
  type?: 'primary' | 'secondary' | 'destructive' | 'warning',
}

const Button = ({ testID, ...props }: ButtonProps): React$Element<*> => {
  const ButtonComponent = StandardButton

  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent data-testid={testID} {...props} />
    </ThemeProvider>
  )
}

export default Button
