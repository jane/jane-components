// @flow

import * as React from 'react'
import { type Theme } from '../theme.types'
import SwitchComponent from './switch.styled'

export type SwitchProps = {
  backgroundColor?: string,
  checked?: boolean,
  disabled?: boolean,
  input: {
    value: boolean | string,
    onClick?: () => void,
  },
  name?: string,
  testID?: string,
  theme: Theme,
}

const Switch = ({ testID, ...props }: SwitchProps): React$Element<*> => (
  <SwitchComponent data-testid={testID} {...props} />
)

export default Switch
