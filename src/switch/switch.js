// @flow

import * as React from 'react'
import SwitchComponent from './switch.styled'

export type SwitchProps = {
  backgroundColor?: string,
  checked?: boolean,
  disabled?: boolean,
  input: {
    value: boolean | string,
    onChange?: () => void,
  },
  name?: string,
  testID?: string,
}

const Switch = ({ testID, ...props }: SwitchProps): React$Element<*> => (
  <SwitchComponent data-testid={testID} {...props} />
)

export default Switch
