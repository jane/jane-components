// @flow

/* eslint-env jest */

import * as React from 'react'
import { render } from 'enzyme'
import Grid from './grid'

describe('grid', (): void => {
  it('renders', (): void => {
    expect(render(<Grid />)).toMatchSnapshot()
  })
})
