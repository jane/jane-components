import * as React from 'react'
import { render } from 'enzyme'
import Grid from './grid'

describe('grid', () => {
  it('renders', () => {
    expect(render(<Grid />)).toMatchSnapshot()
  })
})
