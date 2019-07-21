// Code DelayedButton Component Here
import React from 'react';


class DelayedButton extends React.Component {

  onDelayedClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }
  render() {
    return(
      <button onClick={this.onDelayedClick} > </button>

    )
  }
}

export default DelayedButton 