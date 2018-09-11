// @flow

import * as React from 'react'
import StandardButton from './button.styled'

export type ButtonProps = {
  /**
   * Disables button
   */
  disabled?: boolean,
  /**
   * Pass a style object to add or override styles
   */
  style?: {},
  /**
   * Give your button an attribute of data-testid, useful for testing
   */
  testID?: string,
  /**
   * Callback that runs when button is clicked
   */
  onClick?: () => void,
  type?: 'primary' | 'secondary' | 'destructive' | 'warning',
  /**
   * Use this prop if you want button to take up 100% of container
   */
  fullWidth?: boolean,
  /**
   * Use this prop if your button's only child is an icon
   */
  iconOnlyButton?: boolean,
}

const Button = ({ testID, ...props }: ButtonProps): React$Element<*> => (
  <StandardButton data-testid={testID} {...props} />
)

export default Button
