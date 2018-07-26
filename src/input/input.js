import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  render() {
    return (
      <input
        style={this.props.style}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    )
  }
}

Input.propTypes = {
  style: PropTypes.Object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
