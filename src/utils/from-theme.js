// @flow

import { type Theme } from '../theme.types'

export default (key: string) => ({ theme }: { theme: Theme }): string =>
  theme[key]
