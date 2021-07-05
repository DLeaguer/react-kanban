import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Delete from './delete.jsx'
import Edit from './edit.jsx'
import { connect } from 'react-redux'

function Progress(props) {
  // const fakeArray = []  // force array to return fakeArray.filter()
  console.log('Queue props', props)
  console.log('Queue props.tasks', props.tasks)
  return props.tasks.filter( result => result.type === 'progress')
  .map( card => 
    <div key={card.id} className='items' onClick={() => console.log('id @ delete:', card.id)}>
      <div id='progresscards' className='card'>
        <div className='infostrong'>{card.title}</div>
        <div className='info'>{card.body}</div>
        <div className='info'>Priority: {card.priority}</div> 
        <div className='info'>Assigned by: {card.by} </div>
        <div className='emp'>
          <Router>
            <div>
              <Link to='/edit' id='progressedit' className='edit' type='button' onClick={() => console.log('id @ delete:', card.id)}>Edit</Link>
              <Link to='/delete' id='progressedit' className='edit' type='button' onClick={() => console.log('id @ delete:', card.id)}>Delete</Link>
              <Route path='/edit' component={ () => <Edit card={card} editTask={props.editTask} key={card.id}/> } />
              <Route path='/delete' component={ () => <Delete card={card} deleteItem={props.deleteItem} key={card.id}/> } />
            </div>
          </Router>
          <div className='worker'> {card.to} </div> 
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  tasks: [],
}

const mapStateToProps = state => {
  console.log('Progress mapStateToProps state', state)
  return {
    tasks: state, 
    lol: 'Progress omgIjustEnteredAPropInThisComponent'
  }
}  

export default connect(mapStateToProps)(Progress)