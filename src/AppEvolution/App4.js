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
    this.addItem = this.addItem.bind(this);
    this.updateStateFromDb = this.updateStateFromDb.bind(this);
    this.deleteItemById = this.deleteItemById.bind(this);
  }

  componentDidMount() {
    this.updateStateFromDb()
  }

  updateStateFromDb() {
    getItemsFromFakeXHR()
      .then( items => {
        this.setState({items}, () => {
          console.log('this.state', this.state)
        })
      })
  }

  addItem(item) {
    addItemToFakeXHR(item)
    .then( items => {
      this.setState( {items })
    })
  }

  deleteItemById(itemId) {
    console.log('BALETED')
    deleteItemByIdFromFakeXHR(itemId)
    .then( result => {
      this.updateStateFromDb()
    })
  }
    
  render() {
    console.log('>>> this.state.items =', this.state.items)
    return (
      <div className="App">
      
        {/* HEADER */}
        <header className="App-header">
          <div className="App-title">KANBAN</div>
          <div className="App-task">+ NEW TASK</div>
        </header>
        
        {/* CATEGORY */}
        <div className="category">
          <div className='cat'>
            <div className='column'>IN QUEUE</div>
              
              {/* CARDS */}
              <div className='items'>
                <Cards1 items={this.state.items}/>
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
  return props.items.filter( item => item.type === 'queue').map( item => 
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