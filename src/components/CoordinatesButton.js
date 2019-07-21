// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component {

  handleXandY = (event) => {
    const coordinateArray = []
    coordinateArray.push(event.clientX)
    coordinateArray.push(event.clientY)
    this.props.onReceiveCoordinates(coordinateArray)
    debugger 

  }
  render() {
    return(
      <button onClick={this.handleXandY}> </button>

    )
  }
}

export default CoordinatesButton 