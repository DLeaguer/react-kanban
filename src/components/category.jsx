import React, {Component} from 'react'

import Queue from './queue.jsx'
import Progress from './progress.jsx'
import Done from './done.jsx'

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
              <Queue tasks={this.props.tasks}/>
          </div>
          <div className='cat'>
            <div className='column'>IN PROGRESS</div>
              <Progress tasks={this.props.tasks}/>
          </div>
          <div className='cat'>
              <div className='column'>DONE</div>
                <Done tasks={this.props.tasks}/>
          </div>  
        </div>
        <br/>
      </div>
    )
  }
}

export default Category