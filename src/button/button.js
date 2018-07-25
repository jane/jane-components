import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static defaultProps = {
    somethingElse: true
  }

  render () {
    return (
      <button onClick={this.props.onClick} style={{backgroundColor: this.props.color, width: this.props.somethingElse ? '100%' : 100}}>{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  /** The backgroundColor prop is how you color the shit you dumbass */
  backgroundColor: PropTypes.string,
  somethingElse: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Button
