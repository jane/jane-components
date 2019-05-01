import styled from 'styled-components'
import { ButtonProps } from './button'
import { Theme } from '../theme.types'
import { fromTheme } from '../utils'

type StyledProps = { theme: Theme } & ButtonProps

export default styled.button`
  white-space: nowrap;
  background-color: ${({ theme, type }: StyledProps): string =>
    type ? theme.buttonTypes[type] : ''};
  border-width: 0;
  border-radius: 2px;
  box-sizing: border-box;
  color: ${fromTheme('white')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 10px
    ${({ iconOnlyButton }: StyledProps) => (iconOnlyButton ? '10px' : '28px')};
  box-shadow: ${({ type, theme }: StyledProps) =>
    type ? `0 0 0 4px ${theme.buttonTypes[type]}` : ''};
  position: relative;
  text-decoration: none;
  margin: 4px;
  overflow: hidden;
  opacity: ${({ disabled }: StyledProps) => (disabled ? 0.4 : 1)};
  text-transform: uppercase;
  width: ${({ fullWidth }: StyledProps) => (fullWidth ? '100%' : null)};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${({ theme, type }: StyledProps) =>
      type ? theme.buttonTypes[type + 'Darker'] : ''};
    box-shadow: ${({ type, theme }: StyledProps) =>
      type ? `0 0 0 4px ${theme.buttonTypes[type + 'Darker']}` : ''};
  }
  :active {
    box-shadow: ${({ type, theme }: StyledProps) =>
      type ? `0 0 0 2px ${theme.buttonTypes[type + 'Darker']}` : ''};
    transition-property: box-shadow;
    transition-duration: 0.16s;
    transition-delay: 0s;
    transition-timing: ease-out;
  }
`
