import React, {Component} from 'react'

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

export default AddForm