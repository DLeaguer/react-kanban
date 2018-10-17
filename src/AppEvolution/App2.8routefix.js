import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// eslint-disable-next-line
// import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/db';
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
        {/* <Router>
          <header className="App-header">
           
            <div className="App-title">KANBAN</div>
            <div className="App-task">+ NEW TASK</div>
          </header>
        </Router> */}
        <Router>
          <div>
          <header className="App-header">
              <Link className="App-title" to='/' activeclassname='App-title-active'>KANBAN</Link>
              <div className="route">
                <Link className='App-title'  to='/sample'>Sample</Link>
                <Link className='App-title' to='/about/123'>About</Link>
                {/* <Link className='App-title' to='/addForm'>Add Form</Link> */}
                <Link className='App-title' to='/kanban'>Kanban board</Link>
              </div>
              <Link className='App-title' to='/newTask'>+ NEW TASK</Link>
            </header>
            
            <hr />
            
            <Route path='/' component={Localhost}/>
            <Route path='/sample' component={Sample}/>
            <Route path='/about/:id' component={About}/>
            {/* <Route path='/addForm' component={ () => <AddForm addItem={this.addItemToInventory}/>}/> */}
            <Route path='/kanban' component={ () => <Category tasks={this.state.tasks}/>}/>
            <Route path='/newTask' component={ () => <AddForm addItem={this.addItemToInventory}/>}/>
          </div>
        </Router>
        {/* <Category items={this.state.items}/> */}
        {/* <AddForm addItem={this.addItemToInventory}/> */}
      </div>
    )
  }
}

function Localhost(props) {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      {/* <a href="https://giphy.com/gifs/puppy-black-and-white-2FhASosZtLUPe" target='blank'><img src={logo} className="App-logo" alt="logo" /></a> */}
    </div>
  )
}

function Sample(props) {
  console.log('props', props)
  return (
    <div><br/>MY FAKE SAMPLE COMPONENT HERE
      <br/><br/>
      <a href="https://github.com/DLeaguer/react-kanban"><img src={require('./example.png')} alt="example board"/></a>
      <br/><br/>
      <a href="https://github.com/DLeaguer/react-kanban"><img src={require('./board.jpg')} alt="kanban board"/></a>
      <br/><br/>
    </div>
  )
}

function About(props) {
  console.log('props', props)
  return (
    <div><br/>MY FAKE ABOUT COMPONENT HERE
      <br/><br/>
      {/* <img src={require('./puppy.gif')} alt="puppy gif"/> */}
      <a href="https://giphy.com/gifs/puppy-black-and-white-2FhASosZtLUPe" target='blank'><img src={require('./puppy.gif')} alt="puppy gif" /></a>
    </div>
  )
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
      <div>
        <br/>
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
        <br/>
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
      <div className='addForm'>
          <label>Title: <br/> <input onChange={this.handleChange} type="text" name='title' placeholder='Enter Title...'/></label>
          <br/><br/>
          <label>Body: <br/><input onChange={this.handleChange} type="text" name='body' placeholder='Enter Body...'/></label>
          <br/><br/>
          <label>Priority: <br/>
            <select onChange={this.handleChange} name="priority">
              <option>Select Priority...</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Blocker">Blocker</option>
            </select>
          </label>
          <br/><br/>
          <label>Category: <br/>
            <select onChange={this.handleChange} name="type">
              <option>Select Category...</option>
              <option value="queue">In Queue</option>
              <option value="progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </label>
          <br/><br/>
          <label>Assigned by: <br/><input onChange={this.handleChange} type="text" name='by' placeholder='Enter Name...'/></label>
          <br/><br/>
          <label>Assigned to: <br/><input onChange={this.handleChange} type="text" name='to' placeholder='Enter Name...'/></label>
          <br/><br/>
          <input type="submit"/>
          <br/>
          <br/><br/><br/>
      </div>
    </form>
    )
  }
}

export default App;