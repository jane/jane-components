// @flow

/* eslint-env jest */

import * as React from 'react'
import { create } from '../test-utils'
import Grid from './grid'

describe('grid', (): void => {
  it('renders', (): void => {
    expect(create(<Grid />)).toMatchSnapshot()
  })
})
