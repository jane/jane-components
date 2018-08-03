// @flow
import type { Theme } from './theme.types'

export const colors = {
  action: '#042A70',
  actionDarker: '#032057',
  attention: '#13A399',
  attentionDarker: '#108A81',
  error: '#BF112E',
  errorDarker: '#A60F28',
  warning: '#F5941C',
  warningDarker: '#DB8419',
  sneakpeeks: '#7941F1',
  sneakpeeksDarker: '#6D3AD9',
  alt: '#54B1CC',
  altDarker: '#429FBA',
  //there are the whites and grays, not sure what to name them
  //and they havent all been added

  white: '#ffffff',
  f3: '#F3F3F3',
  e0: '#E0E0E0',
  c: '#cccccc',
}

export const buttonTypes = {
  primary: colors.action,
  primaryDarker: colors.actionDarker,
  secondary: colors.f3,
  secondaryDarker: colors.e0,
  destructive: colors.error,
  destructiveDarker: colors.errorDarker,
  warning: colors.warning,
  warningDarker: colors.warningDarker,
  sneakpeeks: colors.sneakpeeks,
  sneakpeeksDarker: colors.sneakpeeksDarker,
  alt: colors.alt,
  altDarker: colors.altDarker,
}

const theme: Theme = {
  buttonTypes,
  ...colors,
}

export default theme
