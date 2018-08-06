import * as React from 'react'

class Input extends React.Component {
  render() {
    return <input onChange={this.props.onChange} value={this.props.value} />
  }
}

export default Input
