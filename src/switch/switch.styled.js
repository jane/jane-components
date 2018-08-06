// @flow

import React from 'react'
import styled, { css } from 'styled-components'
import { type Theme } from '../theme.types'
import { fromTheme } from '../utils'

// TODO: Add conditional passing of backgroundColor(s)

const SwitchBox = styled.label`
  background-color: ${({ disabled, checked }: SwitchProps) =>
    disabled
      ? fromTheme('e0')
      : checked
        ? fromTheme('action')
        : fromTheme('e0')};
  border-radius: 24px;
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: 33px;
  min-width: 60px;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  position: relative;
  transition: background-color 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 60px;
  ${({ disabled }) => (disabled ? '' : 'opacity: 40%')};
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: 25px;
  left: ${({ checked }) => (checked ? 'calc(100% - 25px - 4px)' : '4px')};
  position: absolute;
  top: 4px;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 25px;
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
    <SwitchThumb checked={!!input.value} />
    <input
      {...input}
      checked={!!input.value}
      type="checkbox"
      style={{
        opacity: 0,
        width: '100%',
        height: '100%',
      }}
    />
  </SwitchBox>
)

export default Switch
