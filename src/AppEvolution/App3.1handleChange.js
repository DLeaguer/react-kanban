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
  }

  addItemToInventory = (item) => {
    addItemToFakeXHR(item)
      .then( items => {
        if (items) {
          this.setState({ items }, function() {
            console.log('this.state =', this.state)
          })
        }
      })
  }
  
  render() {
    console.log('App render this.state.items', this.state.items)
    console.log('App render this.props', this.props)
    return (
      <div className="App">
      
        {/* HEADER */}
        <header className="App-header">
          <div className="App-title">KANBAN</div>
          <div onClick={this.addItemToInventory} className="App-task">+ NEW TASK</div>
        </header>
        <Category items={this.state.items}/>
        <AddForm/>
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

  componentDidMount() {
    getItemsFromFakeXHR()
      .then( items => {
        this.setState({items}, () => {
          console.log('componentDidMount this.state', this.state)
        })
      })
  }

  render() {
    return (
      <div className="category">
        <div className='cat'>
          <div className='column'>IN QUEUE</div>
            <Cards1 items={this.state.items}/>
        </div>
        <div className='cat'>
          <div className='column'>IN PROGRESS</div>
            <Cards2 items={this.state.items}/>
        </div>
        <div className='cat'>
          <div className='column'>DONE</div>
            <Cards3 items={this.state.items}/>
        </div>  
      </div>
    )
  }
}

function Cards1(props) {
  console.log('Cards1 props.items =', props.items)
  return props.items.filter( response => response.type === 'queue')
    .map( result =>
      <div key={result.id} className='items'>
        <div id='queuecards' className='card'>
          <div className='infostrong'>{result.title}</div>
          <div className='info'>{result.body}</div>
          <div className='info'>Priority: {result.priority}</div> 
          <div className='info'>Assigned by: {result.by}</div>
          <div className='emp'>
            <div id='queueedit' className='edit'>Edit</div>
            <div id='queueedit' className='edit'>Delete</div>
            <div className='worker'>{result.to}</div> 
          </div>
        </div>
      </div>
  ) 
}

function Cards2(props) {
  return props.items.filter( item => item.type === 'progress')
    .map( item => 
      <div key={item.id} className="items">
        <div id='progresscards' className='card'>
          <div className='infostrong'>{item.title}</div>
          <div className='info'>{item.body}</div>
          <div className='info'>Priority: {item.priority}</div> 
          <div className='info'>Assigned by: {item.by} </div>
          <div className='emp'>
            <div id='progressedit' className='edit'> Edit </div>
            <div id='progressedit' className='edit'> Delete </div>
            <div className='worker'> {item.to} </div> 
          </div>
          
        </div>
      </div>
  )
}

function Cards3(props) {
  return props.items.filter( item => item.type === 'done')
    .map( item =>
      <div key={item.id} className="items">
        <div id='donecards' className='card'>
          <div className='infostrong'>{item.title} </div>
          <div className='info'>{item.body}</div>
          <div className='info'>Priority: {item.priority}</div> 
          <div className='info'>Assigned by: {item.by} </div>
          <div className='emp'>
            <div id='doneedit' className='edit'> Edit </div>
            <div id='doneedit' className='edit'> Delete </div>
            <div className='worker'> {item.to} </div> 
          </div>
        </div>
      </div>
  ) 
}

class AddForm extends Component {
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
    console.log('SUBMITTED!!!!!', this.state)
  }

  handleChange = (e) => {
    e.preventDefault()
    // console.log('ZOMG CHANGED!!!!!', e.target)
    // console.log('what field?', e.target.name)
    // console.log('what VALUE?', e.target.value)
    
    const { name, value} = e.target
    this.setState( {
      [name] : value
    })

    // if (e.target.name === 'title') {
    //   this.setState( {'title': e.target.value}, function() {
    //     console.log('this.state after updating form: title', this.state)
    //   })
    // } 
    // else if (e.target.name === 'body') {
    //   this.setState( {'body': e.target.value}, function() {
    //     console.log('this.state after updating form: body', this.state)
    //   })
    // }
    // else if (e.target.name === 'priority') {
    //   this.setState( {'priority': e.target.value}, function() {
    //     console.log('this.state after updating form: priority', this.state)
    //   })
    // }
    // else if (e.target.name === 'type') {
    //   this.setState( {'type': e.target.value}, function() {
    //     console.log('this.state after updating form: type', this.state)
    //   })
    // }
    // else if (e.target.name === 'by') {
    //   this.setState( {'by': e.target.value}, function() {
    //     console.log('this.state after updating form: by', this.state)
    //   })
    // }
    // else if (e.target.name === 'to') {
    //   this.setState( {'to': e.target.value}, function() {
    //     console.log('this.state after updating form: to', this.state)
    //   })
    // }
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>Title: <input onChange={this.handleChange} type="text" name='title'/></label>
      <br/>
      <label>Body: <input onChange={this.handleChange} type="text" name='body'/></label>
      <br/>
      <label>Priority: 
        <select onChange={this.handleChange} name="priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <br/>
      <label>Type: 
        <select onChange={this.handleChange} name="type">
          <option value="queue">In Queue</option>
          <option value="progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </label>
      <br/>
      <label>Assigned by: <input onChange={this.handleChange} type="text" name='by'/></label>
      <br/>
      <label>Assigned to: <input onChange={this.handleChange} type="text" name='to'/></label>
      <br/>
      <input type="submit"/>
      <br/>
      <br/>
    </form>
    )
  }
}

export default App;