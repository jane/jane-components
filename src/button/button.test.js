// @flow

/* eslint-env jest */

import * as React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

describe('button', (): void => {
  it('renders', (): void => {
    expect(shallow(<Button />)).toMatchSnapshot()
  })

  it('has onClick when passed', (): void => {
    const handleClick = jest.fn()

    const button = shallow(
      <Button onClick={handleClick}>
        <i />
      </Button>
    )

    expect(typeof button.prop('onClick')).toBe('function')
    button.simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })

  it('has box-shadow with type', (): void => {
    const button = shallow(<Button type="warning">foo</Button>)
    expect(button).toMatchSnapshot()
  })
})
