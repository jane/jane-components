import Input from './input'
import * as React from 'react'

class InputContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <div>
        input container rendering
        <Input
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
      </div>
    )
  }
}

export default InputContainer
