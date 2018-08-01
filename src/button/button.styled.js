// @flow

import styled from 'styled-components'
import { type ButtonProps } from './button'
import { type Theme } from '../theme.types'
import { fromTheme } from '../utils'

type StyledProps = { ...ButtonProps, theme: Theme }

export default styled.button`
  white-space: nowrap;
  background-color: ${({ theme, type }: StyledProps): string =>
    type ? theme[type] : ''};
  border-width: 0;
  border-radius: 2px;
  box-sizing: border-box;
  color: ${fromTheme('white')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 16px;
  line-height: 19px;
  padding: 12px 28px;
  box-shadow: ${({ type, theme }: StyledProps) =>
    type ? `0 0 0 4px ${theme[type]}` : ''};
  position: relative;
  text-decoration: none;
  margin: 8px;
  overflow: hidden;
  opacity: ${({ disabled }: StyledProps) => (disabled ? 0.4 : 1)};
  text-transform: uppercase;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${({ theme, type }: StyledProps) =>
      type ? theme[type + 'Darker'] : ''};
    box-shadow: ${({ type, theme }: StyledProps) =>
      type ? `0 0 0 4px ${theme[type + 'Darker']}` : ''};
  }
  :active {
    box-shadow: ${({ type, theme }: StyledProps) =>
      type ? `0 0 0 2px ${theme[type + 'Darker']}` : ''};
    transition-property: box-shadow;
    transition-duration: 0.16s;
    transition-delay: 0s;
    transition-timing: ease-out;
  }
`
