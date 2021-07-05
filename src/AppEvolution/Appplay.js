import React, { Component } from 'react';
import logo from './puppy.gif';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  decrement = (e) => {
    console.log('decrementing', e)
    this.setState({
      count: this.state.count -1
    })
  }

  increment = (e) => {
    console.log('incrementing', e)
    this.setState({
      count: this.state.count +1
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Title name="OMFG I'M CONFIGURABLE" />
        <Title name="LOLLERSKATES" />
        <h1>count: {this.state.count}</h1>
        <div>(use buttons below)</div>
        <div className='App-incr-decr' >
          <p>
            <input onClick={this.increment} type="button" value="increment"/>
            <input onClick={this.decrement} type="button" value="decrement"/> 
          </p>
        </div>
          <a href="https://giphy.com/gifs/puppy-black-and-white-2FhASosZtLUPe" target='blank'><img src={logo} className="App-logo" alt="logo" /></a>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hey this my kanban!</p>
          <p>Don't mess with my kanban!!!!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
      </div>
    );
  }
}

function Title(props) {
  return <h1>{props.name}</h1>
}



export default App;
