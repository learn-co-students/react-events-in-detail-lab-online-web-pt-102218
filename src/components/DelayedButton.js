// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render(){
        return(
            <button onClick={this.handleClick}>Another button</button>
        )
    }
}

export default DelayedButton;