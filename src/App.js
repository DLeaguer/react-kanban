import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

import Localhost from './components/localhost.jsx'
import Sample from './components/sample.jsx'
import About from './components/about.jsx'
import Category from './components/category.jsx'
import AddForm from './components/addForm.jsx'
import { getAllItems } from './actions/actions.js'

import { connect } from 'react-redux'

// let page1Style = {height: '100px', backgroundColor: 'salmon', color: 'white'};

// let pageOne = () => {
//   return ( <div style={page1Style}>Page 1</div> )
// }

class App extends Component {
 
  componentDidMount() {
    console.log('App mount this.props', this.props)
    // this.props.dispatch( {type: 'GET_ALL_ITEMS'} )
    this.props.dispatch(getAllItems())
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
    .put('/delete', deleteItem)
    .then( results => {
      console.log('deleteItem results', results)
      this.setState( {tasks: results.data} )
    })
    .catch( err => {
      console.log('error deleteItemFromInventory', err)
    })
  }

  //Function to edit a task
  editTask = (taskFromEditForm, id) => {
    console.log("\n--> Editing task: ", taskFromEditForm);
    console.log("\n--> Editing task id: ", id);
    axios
      .put("/editTask", taskFromEditForm)
      .then(editServerData => {
        console.log("\nCheck - editServerData:", editServerData)
        this.setState({ tasks: editServerData.data })
      })
      .catch(err => {
        console.log("Error w/axios PUT/editTask:", err);
      })
  }

  // editItemFromInventory = (editItem) => {
  //   console.log('editItemFromInventory editItem', editItem)
  //   axios
  //   .put('/edit/:id', editItem)
  //   .then( results => {
  //     console.log('editItem results', results)
  //     this.setState( {tasks: results.data} )
  //   })
  // }
 
  render() {
    console.log('App render this.state', this.state)
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
            <Route path='/kanban' component={ () => <Category/>}/>
            <Route path='/newTask' component={ () => <AddForm addItem={this.addItemToInventory}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default connect()(App);