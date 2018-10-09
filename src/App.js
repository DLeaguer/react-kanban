import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/db';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    getItemsFromFakeXHR()
      .then( items => {
        this.setState( {items} )
      })
  }

  render() {
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
                <Cards items={this.state.items}/>
              </div>

          </div>
          <div className='cat'>
            <div className='column'>IN PROGRESS</div>

              {/* CARDS */}
              <div className='items'>
                <Cards items={this.state.items}/>
              </div>

          </div>
          <div className='cat'>
            <div className='column'>DONE</div>

              {/* CARDS */}
              <div className='items'>
                <Cards items={this.state.items}/>
              </div>

          </div>  
        </div>
      </div>
    )
  }
}

function Cards(props) {
  return props.items.map( item => 
  <div className='card'>

    <div className='infostrong'> 
      {item.description} 
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