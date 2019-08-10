// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        let cor = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(cor) 
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Button </button>
            </div>
        );
    }
}

export default CoordinatesButton;