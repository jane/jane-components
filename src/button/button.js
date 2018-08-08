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
}

const Button = ({ testID, ...props }: ButtonProps): React$Element<*> => {
  const ButtonComponent = StandardButton

  return <ButtonComponent data-testid={testID} {...props} />
}

export default Button
