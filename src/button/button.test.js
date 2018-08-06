import * as React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

describe('button', () => {
  it('renders', () => {
    expect(shallow(<Button />)).toMatchSnapshot()
  })
})
