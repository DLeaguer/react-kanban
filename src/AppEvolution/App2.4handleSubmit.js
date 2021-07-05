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
    
  // Linked to AddForm in render & handleSubmit in AddForm Component
  addItemToInventory = (newItem) => {
    this.setState( state => {
      return { items: [...state.items, newItem]}
    })
  }

  render() {
    console.log('App render this.state.items', this.state.items)
    return (
      <div className="App">
      
        {/* HEADER */}
        <header className="App-header">
          <div className="App-title">KANBAN</div>
          <div className="App-task">+ NEW TASK</div>
        </header>
        <Category items={this.state.items}/>
        <AddForm addItem={this.addItemToInventory}/>
      </div>
    )
  }
}

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    console.log('Category render this.props.items', this.props.items)
    return (
      <div className="category">
        <div className='cat'>
          <div className='column'>IN QUEUE</div>
            <Cards1 items={this.props.items}/>
        </div>
        <div className='cat'>
          <div className='column'>IN PROGRESS</div>
            <Cards2 items={this.props.items}/>
        </div>
        <div className='cat'>
            <div className='column'>DONE</div>
              <Cards3 items={this.props.items}/>
        </div>  
      </div>
    )
  }
}

function Cards1(props) {
  return props.items.filter( result => result.type === 'queue')
  .map( card => 
    <div key={card.id} className='items'>
      <div id='queuecards' className='card'>
        <div className='infostrong'>{card.title}</div>
        <div className='info'>{card.body}</div>
        <div className='info'>Priority: {card.priority}</div> 
        <div className='info'>Assigned by: {card.by} </div>
        <div className='emp'>
          <div id='queueedit' className='edit'>Edit</div>
          <div id='queueedit' className='edit'>Delete</div>
          <div className='worker'>{card.to}</div> 
        </div>
      </div>
    </div>
  )
}

function Cards2(props) {
  return props.items.filter( result => result.type === 'progress')
  .map( card => 
    <div key={card.id} className='items'>
      <div id='progresscards' className='card'>
        <div className='infostrong'>{card.title}</div>
        <div className='info'>{card.body}</div>
        <div className='info'>Priority: {card.priority}</div> 
        <div className='info'>Assigned by: {card.by}</div>
        <div className='emp'>
          <div id='progressedit' className='edit'> Edit </div>
          <div id='progressedit' className='edit'> Delete </div>
          <div className='worker'> {card.to} </div> 
        </div>
      </div>
    </div>
  )
}

function Cards3(props) {
  return props.items.filter( result => result.type === 'done')
  .map( card => 
    <div key={card.id} className='items'>
      <div id='donecards' className='card'>
        <div className='infostrong'>{card.title}</div>
        <div className='info'>{card.body}</div>
        <div className='info'>Priority: {card.priority}</div> 
        <div className='info'>Assigned by: {card.by}</div>
        <div className='emp'>
          <div id='doneedit' className='edit'> Edit </div>
          <div id='doneedit' className='edit'> Delete </div>
          <div className='worker'> {card.to} </div> 
        </div>
      </div>
    </div>
  )
}

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      title: null,
      body: null,
      priority: null,
      type: null,
      by: null,
      to: null 
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMITTED!!!!!', this.state)
    this.props.addItem(this.state)
  }

  handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    this.setState( {
      [name] : value
    })
  }


  render() {
    return (
    <form onSubmit={this.handleSubmit}><br/>
      <label>Title: <br/> <input onChange={this.handleChange} type="text" name='title' placeholder='Enter Title...'/></label>
      <br/>
      <label>Body: <br/><input onChange={this.handleChange} type="text" name='body' placeholder='Enter Body...'/></label>
      <br/>
      <label>Priority: <br/>
        <select onChange={this.handleChange} name="priority">
          <option>Select Priority...</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Blocker">Blocker</option>
        </select>
      </label>
      <br/>
      <label>Category: <br/>
        <select onChange={this.handleChange} name="type">
          <option>Select Category...</option>
          <option value="queue">In Queue</option>
          <option value="progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </label>
      <br/>
      <label>Assigned by: <br/><input onChange={this.handleChange} type="text" name='by' placeholder='Enter Name...'/></label>
      <br/>
      <label>Assigned to: <br/><input onChange={this.handleChange} type="text" name='to' placeholder='Enter Name...'/></label>
      <br/>
      <input type="submit"/>
      <br/>
      <br/>
    </form>
    )
  }
}

export default App;