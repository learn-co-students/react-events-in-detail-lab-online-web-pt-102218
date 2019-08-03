import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  render() {
    return (
      <button
        onClick={e => {
          e.persist();
          return(
            setTimeout(() => this.props.onDelayedClick([e.clientX, e.clientY])),
            this.props.delay
          );
        }}
      >
        word
      </button>
    );
  }
}
