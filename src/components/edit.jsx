import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions/actions.js';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.states = {
      id: props.id,
      title: props.title,
      body: props.body,
      priority: props.priority,
      status: props.status,
      createdBy: props.createdBy,
      assignedTo: props.assignedTo
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.card.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    console.log("handleSubmit - EDIT - this.props:", this.props.card);
    e.preventDefault();
    console.log('\n Updated!!:', this.state);
    console.log('\n Updated id:', this.props.card.id);
    // this.props.editTask(this.state, this.props.card.id);
    this.props.dispatch(editTask(this.state, this.props.card.id));
  }

  render() {
    return (
      <form className="editForm" onSubmit={this.handleSubmit}>
        <label className="editLabel">Task ID:<br />
          <input className="editInput" type="text" name="title" value={this.props.card.id} readOnly />
        </label>
        <br />
        <label className="editLabel">Title:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="title" placeholder={this.props.card.title} />
        </label>
        <br />
        <label className="editLabel">Body:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="body" placeholder={this.props.card.body} />
        </label>
        <br />
        <label className="editLabel">Priority:<br />
          <select className="editSelect" onChange={this.handleChange} name="priority">
            <option>{this.props.card.priority}</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Blocker">Blocker</option>
          </select>
        </label>
        <br />
        <label className="editLabel">Type:<br />
          <select className="editSelect" onChange={this.handleChange} name="type">
            <option>{this.props.card.status}</option>
            <option value="queue">Queue</option>
            <option value="progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
        <br />
        <label className="editLabel">Created By:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="by" placeholder={this.props.card.by} />
        </label>
        <br />
        <label className="editLabel">Assigned To:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="to" placeholder={this.props.card.to} />
        </label>

        <button className="editSubmitBtn" type="submit" >Update!</button>

      </form>
    )
  }
}

export default connect()(Edit);