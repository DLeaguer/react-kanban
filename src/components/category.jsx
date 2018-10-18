import React, {Component} from 'react'

import Queue from './queue.jsx'
import Progress from './progress.jsx'
import Done from './done.jsx'

import { connect } from 'react-redux'

class Category extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    console.log('Category render this.props', this.props)
    return (
      <div>
        <br/>
        <div className="category">
          <div className='cat'>
            <div className='column'>IN QUEUE</div>
              <Queue/>
          </div>
          <div className='cat'>
            <div className='column'>IN PROGRESS</div>
              <Progress/>
          </div>
          <div className='cat'>
              <div className='column'>DONE</div>
                <Done/>
          </div>  
        </div>
        <br/>
      </div>
    )
  }
}

export default connect()(Category)