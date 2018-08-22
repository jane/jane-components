// @flow

import React from 'react'
import styled from 'styled-components'
import fromTheme from '../utils/from-theme'
import { type SwitchProps } from './switch'

const SwitchBox = styled.label`
  background-color: ${({ disabled, checked }: SwitchProps) =>
    disabled
      ? fromTheme('e0')
      : checked
        ? fromTheme('action')
        : fromTheme('e0')};
  border-radius: 24px;
  color: white;
  height: 33px;
  min-width: 60px;
  opacity: ${({ disabled }: SwitchProps) => (disabled ? '.5' : '1')};
  position: relative;
  transition: background-color 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 60px;
  ${({ disabled }: SwitchProps) => (disabled ? '' : 'opacity: 40%')};
  &:hover {
    background-color: ${({ disabled, checked }: SwitchProps) =>
      disabled
        ? fromTheme('c')
        : checked
          ? fromTheme('acitonDarker')
          : fromTheme('c')};
  }
`

const SwitchThumb = styled.div`
  background-color: white;
  border-radius: 24px;
  cursor: ${({ disabled }: SwitchProps) =>
    disabled ? 'not-allowed' : 'pointer'};
  height: 25px;
  left: ${({ checked }: SwitchProps) =>
    checked ? 'calc(100% - 25px - 4px)' : '4px'};
  position: absolute;
  top: 4px;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 25px;
`

const Input = styled.input`
  cursor: ${({ disabled }: SwitchProps) =>
    disabled ? 'not-allowed' : 'pointer'};
  height: 100%;
  opacity: 0;
  width: 100%;
`

const Switch = ({
  disabled,
  backgroundColor,
  testID,
  input,
  ...props
}: SwitchProps) => (
  <SwitchBox
    checked={!!input.value}
    disabled={disabled}
    backgroundColor={backgroundColor || 'primary'}
    data-testid={testID}
    {...props}
  >
    <Input
      {...input}
      checked={!!input.value}
      aria-checked={!!input.value}
      type="checkbox"
    />
    <SwitchThumb checked={!!input.value} disabled={disabled} />
  </SwitchBox>
)

export default Switch
