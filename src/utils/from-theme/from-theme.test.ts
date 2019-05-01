/* eslint-env jest */

import fromTheme from './from-theme'
import theme from '../../theme'

describe('fromTheme', (): void => {
  it('returns value from a theme', (): void => {
    expect(fromTheme('f3')({ theme })).toBe('#F3F3F3')
  })
})
