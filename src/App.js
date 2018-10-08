import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{
        id: 1,
        description: 'Make Better Styles.',
        priority: 'Medium',
        by: 'Jon',
        to: 'Renee'
      },
      {
        id: 2,
        description: 'Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
        priority: 'Medium',
        by: 'Jon',
        to: 'Renee'
      }]
    }
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
          <div className='column'>IN QUEUE</div>
          <div className='columncenter'>IN PROGRESS</div>
          <div className='column'>DONE</div>
        </div>
        
        {/* CARDS */}
        <div className='items'>

          {this.state.items.map( item => 
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
            
          </div>)}  
          
        </div>
        
      </div>
    )
  }
}

export default App;