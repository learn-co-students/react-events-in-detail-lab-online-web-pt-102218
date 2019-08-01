import React from 'react';

export default class DelayedButton extends React.Component {

	constructor(props){
		super(props)
	}

	clickHandler = event => {
		event.persist()
		this.props.onDelayedClick(event)
	}

	render(){
		return (
			<button onClick={this.clickHandler}>
				Delayed Button
			</button>
		)
	}
}