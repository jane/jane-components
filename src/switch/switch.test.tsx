/* eslint-env jest */

import * as React from 'react'
import { mount } from 'enzyme'
import { create } from '../test-utils'
import Switch from './switch'

describe('switch', (): void => {
  const handleClick = jest.fn()
  const input = {
    value: false,
    onChange: handleClick,
  }
  const inputTrue = {
    value: true,
    onChange: handleClick,
  }

  it('renders', (): void => {
    expect(create(<Switch input={input} />)).toMatchSnapshot()
  })
  it('renders differently when checked', (): void => {
    expect(create(<Switch input={inputTrue} checked />)).toMatchSnapshot()
  })
  it('handles onChange on the input to toggle on', (): void => {
    const sc = mount(<Switch input={input} checked={false} />)
    expect(typeof sc.prop('input').onChange).toBe('function')
    sc.find('input').simulate('change')
    expect(sc.props().input.onChange).toHaveBeenCalled()
  })
  it('handles onChange on the input to toggle off', (): void => {
    const inputTrue = {
      value: true,
      onChange: handleClick,
    }
    const sc = mount(<Switch input={inputTrue} checked />)
    expect(typeof sc.prop('input').onChange).toBe('function')
    sc.find('input').simulate('click')
    expect(sc.props().input.onChange).toHaveBeenCalled()
  })
})
