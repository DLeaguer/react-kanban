import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

import Localhost from './components/localhost.jsx'
import Sample from './components/sample.jsx'
import About from './components/about.jsx'
import Category from './components/category.jsx'
import AddForm from './components/addForm.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }
 
  componentDidMount() {
    axios
    .get('/tasks')
    .then( tasksGet => {
      console.log('tasks', tasksGet)
      this.setState( {tasks: tasksGet.data})
    })
    .catch( err => {
      console.log('err axios GET/tasks', err)
    })
  }
 
  addItemToInventory = (newItem) => {
    console.log('addItemToInventory newItem', newItem)
    axios
    .post('/newTask', newItem)
    .then( newPost => {
      console.log('newPost', newPost)
      this.setState( {tasks: newPost.data})
    })
    .catch( err => {
      console.log('err axios POST/newTask', err)
    })
  }

  deleteItemFromInventory = (deleteItem) => {
    console.log('deleteItemFromInventory deleteItem', deleteItem)
    axios
    .delete('/delete/:id', deleteItem)
    .then( results => {
      console.log('deleteItem results', results)
      this.setState( {tasks: results.data} )
    })
  }

  editItemFromInventory = (editItem) => {
    console.log('editItemFromInventory editItem', editItem)
    axios
    .put('/edit/:id', editItem)
    .then( results => {
      console.log('editItem results', results)
      this.setState( {tasks: results.data} )
    })
  }
 
  render() {
    console.log('App render this.state.tasks', this.state.tasks)
    return (
      <div className="App">
        <Router>
          <div>
          <header className="App-header">
              <Link className="App-title" to='/' activeclassname='App-title-active'>KANBAN</Link>
              <div className="route">
                <Link className='App-title' to='/sample'>Sample</Link>
                <Link className='App-title' to='/about/123'>About</Link>
                <Link className='App-title' to='/kanban'>Kanban board</Link>
              </div>
              <Link className='App-task' to='/newTask'>+ NEW TASK</Link>
            </header>
            
            <hr />
            
            <Route path='/' component={Localhost}/>
            <Route path='/sample' component={Sample}/>
            <Route path='/about/:id' component={About}/>
            <Route path='/kanban' component={ () => <Category tasks={this.state.tasks}/>}/>
            <Route path='/newTask' component={ () => <AddForm addItem={this.addItemToInventory}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;