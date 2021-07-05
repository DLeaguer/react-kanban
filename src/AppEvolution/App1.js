import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// eslint-disable-next-line
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/db';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      // tasks: []
    }
    // this.addItem = this.addItem.bind(this);
    // this.updateStateFromDb = this.updateStateFromDb.bind(this);
    // this.deleteItemById = this.deleteItemById.bind(this);
  }

  componentDidMount() {
    this.updateStateFromDb()
  }

  updateStateFromDb() {
    // getItemsFromFakeXHR()
    //   .then( items => {
    //     this.setState({items}, () => {
    //       console.log('this.state', this.state)
    //     })
    //   })
    axios
    .get('/tasks')
    .then( response => {
      console.log("response", response)
      this.setState({items: response.data})
    })
    .catch( err => {
      console.log('err', err)
    })
  }

  renderItemList() {
    if (this.state.hasItems) {
      return <Cards1 items={this.state.items}/>
    } else {
      return null
    }
  }

  // addTask(item) {
  //   addItemToFakeXHR(item)
  //   .then( items => {
  //     this.setState( state => {
  //       return {[tasks: 
  //       ...state.tasks, task]}
  //     } {items })
  // //   })
  // }

  // deleteItemById(itemId) {
  //   console.log('BALETED')
  //   deleteItemByIdFromFakeXHR(itemId)
  //   .then( result => {
  //     this.updateStateFromDb()
  //   })
  // }
    
  render() {
    const myStyleObject = {
      "backgroundColor": "red",
      "border": "5px solid blue"
    }
    console.log('>>> this.state.items =', this.state.items)
    return (
      <div className="App">
      
        {/* HEADER */}
        <header className="App-header">
          <div className="App-title">KANBAN</div>
          <div className="App-task">+ NEW TASK</div>
        </header>
          
          <Router>
            <div>
              <Link className="App-cards" to='/cards1'>In Queue</Link>
              <Link className="App-cards" to='/cards2'>In Progress</Link>
              <Link className="App-cards" to='/cards3'>Done</Link>
              <Link className="App-cards" to='/'>Home</Link>
              <Route path='/cards1' component={ () => <Cards1 items={this.state.items}/>}/>
              <Route path='/cards2' component={ () => <Cards2 items={this.state.items}/>}/>
              <Route path='/cards3' component={ () => <Cards3 items={this.state.items}/>}/>
              <Route path='/' component={Home}/>
            </div>
          </Router>
        
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
                <Cards3 style={myStyleObject} items={this.state.items}/>
              </div>

          </div>  
        </div>
        <AddTask/>
      </div>
    )
  }
}

class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    console.log('SUBMITTED!!!!', this.state)
    // this.props.addItem(this.state)
  }

  handleChange = (e) => {
    e.preventDefault()
    console.log('ZOMG CHANGED', this.state)
    console.log('What Field? ', e.target.title, e.target.type, e.target.priority)
    console.log('VALUE of Field? ', e.target.value)
    // this.setState( state => state[e.target.title])
    // const { name, value } = e.target
    // this.setState({
    //   [name] : value
    // })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}><br></br>
        <label>Title: 
          <input onChange={this.handleChange} type="text" name='title'/>
        </label><br></br>
        <label>Body: 
          <input onChange={this.handleChange} type="text" name='body'/>
        </label><br></br>
        <label>Priority: 
          <select onChange={this.handleChange} name='priority'>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>  
        </label><br></br>
        <label>Category: 
          <select onChange={this.handleChange} name='type'>
            <option value='queue'>In Queue</option>
            <option value='progress'>In Progress</option>
            <option value='done'>Done</option>
          </select>
        </label><br></br>
        <label>Assigned By: 
          <input onChange={this.handleChange} type="text" name='by'/>
        </label><br></br>
        <label>Assigned To: 
          <input onChange={this.handleChange} type="text" name='to'/>
        </label><br></br>
        <input type='submit'/>
        <br></br><br></br><br></br><br></br><br></br>
      </form>
    )
  }

}

function Cards1(props) {
  return props.items.filter( item => item.type === 'queue').map( item => 
  <div key={item.id} id='queuecards' className='card'>

    <div className='infostrong'>{item.title}</div>
    <div className='info'>{item.body}</div>
    <div className='info'>Priority: {item.priority}</div> 
    <div className='info'>Assigned by: {item.by}</div>
    
    <div className='emp'>
      <div className='edit'> Edit </div>
      <div className='edit'> Delete </div>
      <div className="blank"></div>
      <div className='worker'> {item.to} </div> 
    </div>
    
  </div>)
}

function Cards2(props) {
  return props.items.filter( item => item.type === 'progress').map( item => 
  <div key={item.id} id='progresscards' className='card'>

    <div className='infostrong'>{item.title}</div>
    <div className='info'>{item.body}</div>
    <div className='info'>Priority: {item.priority}</div> 
    <div className='info'>Assigned by: {item.by}</div>
    
    <div className='emp'>
      <div id='progressedit' className='edit'> Edit </div>
      <div id='progressedit' className='edit'> Delete </div>
      <div className="blank"></div>
      <div className='worker'> {item.to} </div> 
    </div>
    
  </div>)
}

function Cards3(props) {
  return props.items.filter( item => item.type === 'done').map( item => 
  <div key={item.id} id='donecards' className='card'>

    <div className='infostrong'>{item.title}</div>
    <div className='info'>{item.body}</div>
    <div className='info'>Priority: {item.priority}</div> 
    <div className='info'>Assigned by: {item.by}</div>
    
    <div className='emp'>
      <div id='doneedit' className='edit'> Edit </div>
      <div id='doneedit' className='edit'> Delete </div>
      <div className="blank"></div>
      <div className='worker'> {item.to} </div> 
    </div>
    
  </div>)
}

function Home(props) {
  return <div></div>
}

export default App;