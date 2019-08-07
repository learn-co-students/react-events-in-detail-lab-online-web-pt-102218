// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props)
        this.onReceiveCoordinates = this.props.onReceiveCoordinates
    }

    orderCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.orderCoordinates}></button> 
        )
    }
}