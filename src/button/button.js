// @flow

import * as React from 'react'
import StandardButton from './button.styled'

export type ButtonProps = {
  disabled?: boolean,
  style?: {},
  submitting?: boolean,
  testID?: string,
  onClick?: () => void,
  type?: 'primary' | 'secondary' | 'destructive' | 'warning',
  fullWidth?: boolean,
}

const Button = ({ testID, ...props }: ButtonProps): React$Element<*> => (
  <StandardButton data-testid={testID} {...props} />
)

export default Button
