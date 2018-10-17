import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Done(props) {
  return props.tasks.filter( result => result.type === 'done')
  .map( card => 
    <div key={card.id} className='items'>
      <div id='donecards' className='card'>
        <div className='infostrong'>{card.title}</div>
        <div className='info'>{card.body}</div>
        <div className='info'>Priority: {card.priority}</div> 
        <div className='info'>Assigned by: {card.by}</div>
        <div className='emp'>
          <Router>
            <div>
              <Link id='doneedit' className='edit' to={`/edit/${card.id}`}>Edit</Link>
              <Link id='doneedit' className='edit' to={`/delete/${card.id}`}>Delete</Link>
              <Route path='/edit/:id' component={props.editItemFromInventory}/>
              <Route path='/delete/:id' component={props.deleteItemFromInventory}/>
            </div>
          </Router>
          <div className='worker'> {card.to} </div> 
        </div>
      </div>
    </div>
  )
}

export default Done