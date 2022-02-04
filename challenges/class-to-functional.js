// Turn this class component into a functional one
// LEVEL: EASY

import React from 'react'

export default class MyApp extends React.Component(){
	
	state = {
		counter: 0
	}

	increaseCounter(){
		this.setState((previousState) => {
            return { counter: previousState.counter + 1}
        })
	}

	render(){
		return(
            <>
			<h1>{this.state.counter}</h1>
			<button onClick={this.increaseCounter.bind(this)}>Increment</button>
            </>
		)
	}
	
}

// CODE YOUR SOLUTION BELOW

function CounterFunctionApp() {
    let [counter, setCounter] = useState(0);
    let style = {
      background:"blue"
    }
    let increaseCounter = ()=>{
      setCounter(counter+1);
    };
  
    return(
      <>
        <h1>{counter}</h1>
        <button style={style} onClick={increaseCounter}>Increment</button>
      </>)
  }