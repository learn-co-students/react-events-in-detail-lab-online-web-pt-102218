// Code DelayedButton Component Here
import React from 'react';


class DelayedButton extends React.Component {

  onDelayedClick = (event) => {
   event.setTimeout === this.props.delay 
  }
  render() {
    return(
      <button onClick={this.onDelayedClick} > </button>

    )
  }
}

export default DelayedButton 