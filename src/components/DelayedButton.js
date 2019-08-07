// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    constructor(props) {
        super(props)
        this.onDelayedClick = this.props.onDelayedClick
        this.delay = this.props.delay
    }

    delayedOutput = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
        
    }

    render() {
        return (
            <button onClick={this.delayedOutput}></button>
        )
    }
}