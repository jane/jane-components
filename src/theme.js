// @flow
import type { Theme } from './theme.types'

export const newThemeColors = {
  white: '#ffffff',
  primary: '#042A70',
  primaryDarker: '#032057',
  secondary: '#F3F3F3',
  secondaryDarker: '#E0E0E0',
  destructive: '#13A399',
  destructiveDarker: '#108A81',
  warning: '#F6BB43',
  warningDarker: '#E4A931',
}

const theme: Theme = {
  ...newThemeColors,
}

export default theme
