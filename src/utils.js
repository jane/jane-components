// @flow

import { type Theme } from './theme.types'

export const fromTheme = (key: string) => ({
  theme,
}: {
  theme: Theme,
}): string => theme[key]