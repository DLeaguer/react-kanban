import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/db';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  addItemToInventory = (item) => {
    addItemToFakeXHR(item)
      .then( items => {
        if (items) {
          this.setState({ items }, function() {
            console.log('addItemToInventory this.state', this.state)
          })
        }
      })
  }
  
  componentDidMount() {
    getItemsFromFakeXHR()
      .then( items => {
        this.setState({items}, () => {
          console.log('componentDidMount this.state', this.state)
        })
      })
  }

  render() {
    const myStyleObject = {
      backgroundColor: 'red',
      border: '1px solid blue'
    }
    console.log('App render this.state.items', this.state.items)
    console.log('App render this.props', this.props)
    return (
      <div className="App">
      
        {/* HEADER */}
        <header className="App-header">
          <div className="App-title">KANBAN</div>
          <div onClick={this.addItemToInventory} className="App-task">+ NEW TASK</div>
        </header>
        
        {/* RENDER LISTS */}
        {this.state.items.map( result => <div key={result.id} className='column'>{result.id}. {result.type} - {result.body}</div>)}

        {/* RENDER LISTS */}
        { this.state.items.map( function(result) {
          return <div key={result.id} className="column">Task {result.id} is assigned to {result.to} with a priority of {result.priority} assigned by {result.by}</div>
        })}
        
        {/* CATEGORY */}
        <div className="category">
          <div className='cat'>
            <div className='column'>IN QUEUE</div>
              
              {/* CARDS */}
              <div className='items'>
                <Cards1 style={myStyleObject} items={this.state.items}/>
              </div>

          </div>
          <div className='cat'>
            <div className='column'>IN PROGRESS</div>

              {/* CARDS */}
              <div className='items'>
                <Cards2 items={this.state.items}/>
              </div>

          </div>
          <div className='cat'>
            <div className='column'>DONE</div>

              {/* CARDS */}
              <div className='items'>
                <Cards3 items={this.state.items}/>
              </div>

          </div>  
        </div>

        
      </div>
    )
  }
}

function Cards1(props) {
  console.log('Cards1 props', props)
  console.log('Cards1 props.items', props.items)
  return props.items.filter( item => item.type === 'queue').map( result => <CardList key={result.id} title={result.title} body={result.body} priority={result.priority} by={result.by} to={result.to}/>)
}

function CardList(props) {
  return <div className='card'>

    <div className='infostrong'> 
      {props.title} 
    </div>

    <div className='info'>
      {props.body}
    </div>
    
    <div className='info'> 
      Priority: {props.priority} 
    </div> 
    
    <div className='info'> 
      Assigned by: {props.by} 
    </div>
    
    <div className='emp'>
      <div className='edit'> Edit </div>
      <div className='edit'> Delete </div>
      <div className='worker'> {props.to} </div> 
    </div>
    
  </div>
}

function Cards2(props) {
  return props.items.filter( item => item.type === 'progress').map( item => 
  <div key={item.id} className='card'>

    <div className='infostrong'> 
      {item.title} 
    </div>
    
    <div className='info'>
      {item.body}
    </div>
    
    <div className='info'> 
      Priority: {item.priority} 
    </div> 
    
    <div className='info'> 
      Assigned by: {item.by} 
    </div>
    
    <div className='emp'>
      <div className='edit'> Edit </div>
      <div className='edit'> Delete </div>
      <div className='worker'> {item.to} </div> 
    </div>
    
  </div>)
}

function Cards3(props) {
  return props.items.filter( item => item.type === 'done').map( item => 
  <div key={item.id} className='card'>

    <div className='infostrong'> 
      {item.title} 
    </div>
    
    <div className='info'>
      {item.body}
    </div>
    
    <div className='info'> 
      Priority: {item.priority} 
    </div> 
    
    <div className='info'> 
      Assigned by: {item.by} 
    </div>
    
    <div className='emp'>
      <div className='edit'> Edit </div>
      <div className='edit'> Delete </div>
      <div className='worker'> {item.to} </div> 
    </div>
    
  </div>)
}

export default App;