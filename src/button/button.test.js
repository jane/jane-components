import * as React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

describe('button', () => {
  it('renders', () => {
    expect(shallow(<Button />)).toMatchSnapshot()
  })

  it('has onClick when passed', () => {
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
})
