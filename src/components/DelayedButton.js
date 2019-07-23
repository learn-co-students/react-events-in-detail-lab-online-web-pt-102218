// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick
    };

    handleClick = (event) => {
        event.persist()
        return setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    };

    render(){
        return(
            <button onClick={this.handleClick}>Delayed Button</button>
        )
    }

};