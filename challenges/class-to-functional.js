// Turn this class component into a functional one
// LEVEL: EASY

import React from 'react'

export default class MyApp extends React.Component(){
	
	state = {
		counter: 0
	}

	increaseCounter(){
		this.setState((previousState) => { counter: previousState.counter + 1})
	}

	render(){
		return(
            <>
			<h1>{this.state.counter}</h1>
			<button onClick={this.increaseCounter}>Increment</button>
            </>
		)
	}
	
}

// CODE YOUR SOLUTION BELOW