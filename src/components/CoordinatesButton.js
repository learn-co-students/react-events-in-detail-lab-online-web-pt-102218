import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick= this.handleClick.bind(this)
  }

  handleClick(e) {
    let coordData = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordData)
  }


  render() {
    return(
      <button onClick={this.handleClick}>Button</button>
    )
  }
}
