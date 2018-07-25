import * as React from 'react'
import { shallow } from 'enzyme'
import Span from './span'

describe('span', () => {
  it('renders', () => {
    expect(shallow(<Span />)).toMatchSnapshot()
  })
})
