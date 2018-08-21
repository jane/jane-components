// @flow

/* eslint-env jest */

import fromTheme from './from-theme'

describe('fromTheme', (): void => {
  it('returns value from a theme', (): void => {
    const props = {
      theme: {
        bg: 'blue',
        color: 'red',
      },
    }

    // $FlowFixMe
    expect(fromTheme('bg')(props)).toBe('blue')
    // $FlowFixMe
    expect(fromTheme('color')(props)).toBe('red')
  })
})
