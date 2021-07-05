import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// eslint-disable-next-line
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/db';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      hasItems: true
    }
  }
    
  // Linked to AddForm in render & handleSubmit in AddForm Component
  addItemToInventory = (newItem) => {
    // this.setState( state => {
    //   return { items: [...state.items, newItem]}
    // })
    
  }

  // addItemToInventory = (item) => {
  //   addItemToFakeXHR(item)
  //     .then( items => {
  //       if (items) {
  //         this.setState( { items } )
  //       }
  //     })
  // }
 
  componentDidMount() {
    // getItemsFromFakeXHR()
    //   .then( items => {
    //     this.setState( {items} )
    //   }, function() {
    //     console.log('componentDidMount this.state updated', this.state)
    //   })
    axios
    .get('/tasks')
    .then( tasks => {
      console.log('tasks', tasks)
      this.setState( {tasks: tasks.data})
    })
    .catch( err => {
      console.log('err', err)
    })
  }
  
  render() {
    console.log('App render this.state.tasks', this.state.tasks)
    return (
      <div className="App">
      
        {/* HEADER */}
        <header className="App-header">
          <div className="App-title">KANBAN</div>
          <Router>
            <div>
              <Link className='App-task' to='/newTask'>+ NEW TASK</Link>
              <Route path='/newTask' component={ () => <AddForm addItem={this.addItemToInventory}/>}/>
            </div>
          </Router>
          {/* <div className="App-task">+ NEW TASK</div> */}
        </header>
        <Router>
          <div>
            <Link className='App-title' to='/home'>Home</Link>
            <Link className='App-title' to='/about/123'>About</Link>
            <Link className='App-title' to='/addForm'>Add Form</Link>
            <Link className='App-title' to='/kanban'>Kanban</Link>
            <Route path='/home' component={Home}/>
            <Route path='/about/:id' component={About}/>
            <Route path='/addForm' component={ () => <AddForm addItem={this.addItemToInventory}/>}/>
            <Route path='/kanban' component={ () => <Category tasks={this.state.tasks}/>}/>
          </div>
        </Router>
        {/* <Category items={this.state.items}/> */}
        {/* <AddForm addItem={this.addItemToInventory}/> */}
      </div>
    )
  }
}

function Home(props) {
  console.log('props', props)
  return <div>MY FAKE HOME COMPONENT HERE</div>
}

function About(props) {
  console.log('props', props)
  return <div>MY FAKE ABOUT COMPONENT HERE</div>
}

// function AddForm(props) {
//   return <div>MY FAKE ABOUT COMPONENT HERE</div>
// }

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  render() {
    console.log('Category render this.props.tasks', this.props.tasks)
    return (
      <div className="category">
        <div className='cat'>
          <div className='column'>IN QUEUE</div>
            <Cards1 tasks={this.props.tasks}/>
        </div>
        <div className='cat'>
          <div className='column'>IN PROGRESS</div>
            <Cards2 tasks={this.props.tasks}/>
        </div>
        <div className='cat'>
            <div className='column'>DONE</div>
              <Cards3 tasks={this.props.tasks}/>
        </div>  
      </div>
    )
  }
}

function Cards1(props) {
  console.log('Cards1 props', props)
  return props.tasks.filter( result => result.type === 'queue')
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
  return props.tasks.filter( result => result.type === 'progress')
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
  return props.tasks.filter( result => result.type === 'done')
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