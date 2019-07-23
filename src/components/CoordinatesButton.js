// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    constructor(props){
        super(props)
        this.xandY = this.xandY
    };

    getXAndY= (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    };

    render(){
        return(
            <button onClick={this.getXAndY}>Button</button>
        )
    }

};