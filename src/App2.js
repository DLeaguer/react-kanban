import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: '1 Make Better Styles.',
          body: 'body 1',
          priority: 'Medium',
          type: 'queue',
          by: 'Jon',
          to: 'Renee'
        },
        {
          id: 2,
          title: '2 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
          body: 'body 2',
          priority: 'Medium',
          type: 'queue',
          by: 'Jon',
          to: 'Renee'
        },
        {
          id: 3,
          title: '3 Make Better Styles.',
          body: 'body 3',
          priority: 'Medium',
          type: 'progress',
          by: 'Jon',
          to: 'Renee'
        },
        {
          id: 4,
          title: '4 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
          body: 'body 4',
          priority: 'Medium',
          type: 'done',
          by: 'Jon',
          to: 'Renee'
        },
        {
          id: 5,
          title: '5 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
          body: 'body 5',
          priority: 'Medium',
          type: 'done',
          by: 'Jon',
          to: 'Renee'
        }
      ]
    }
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
                {this.state.items.filter( column => column.type === 'queue').map( card => 
                <div key={card.id} className='card'>

                  <div className='infostrong'> 
                    {card.title} 
                  </div>

                  <div className='info'>
                    {card.body}
                  </div>

                  <div className='info'> 
                    Priority: {card.priority} 
                  </div> 

                  <div className='info'> 
                    Assigned by: {card.by} 
                  </div>

                  <div className='emp'>
                    <div className='edit'> Edit </div>
                    <div className='edit'> Delete </div>
                    <div className='worker'> {card.to} </div> 
                  </div>

                </div>)}
              </div>

          </div>

          <div className='cat'>
            <div className='column'>IN PROGRESS</div>

              {/* CARDS */}
              <div className='items'>
              {this.state.items.filter( columnItem => columnItem.type === 'progress').map( dbItem => 
                <div key={dbItem.id} className='card'>

                  <div className='infostrong'> 
                    {dbItem.title} 
                  </div>

                  <div className='info'>
                    {dbItem.body}
                  </div>

                  <div className='info'> 
                    Priority: {dbItem.priority} 
                  </div> 

                  <div className='info'> 
                    Assigned by: {dbItem.by} 
                  </div>

                  <div className='emp'>
                    <div className='edit'> Edit </div>
                    <div className='edit'> Delete </div>
                    <div className='worker'> {dbItem.to} </div> 
                  </div>

                </div>)}
              </div>

          </div>
          <div className='cat'>
            <div className='column'>DONE</div>

              {/* CARDS */}
              <div className='items'>
              {this.state.items.filter( itemColumn => itemColumn.type === 'done').map( itemDB => 
                <div key={itemDB.id} className='itemDB'>

                  <div className='infostrong'> 
                    {itemDB.title} 
                  </div>

                  <div className='info'>
                    {itemDB.body}
                  </div>

                  <div className='info'> 
                    Priority: {itemDB.priority} 
                  </div> 

                  <div className='info'> 
                    Assigned by: {itemDB.by} 
                  </div>

                  <div className='emp'>
                    <div className='edit'> Edit </div>
                    <div className='edit'> Delete </div>
                    <div className='worker'> {itemDB.to} </div> 
                  </div>

                </div>)}
              </div>

          </div>  
        </div>
      </div>
    )
  }
}

export default App;