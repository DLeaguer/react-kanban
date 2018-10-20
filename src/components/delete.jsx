import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/actions.js';

class Delete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.card.id,
      title: this.props.card.title,
      body: this.props.card.body,
      priority: this.props.card.priority,
      type: this.props.card.type,
      by: this.props.card.by,
      to: this.props.card.to
    }
  }

  handleDelete = (e) => {
    console.log("handleSubmit - DELETE - this.props:", this.props.card);
    e.preventDefault();
    console.log('\n delete.jsx Deleted!!:', this.state);
    console.log('\n delete.jsx Deleted id:', this.props.card.id);
    this.props.dispatch(deleteItem(this.state, this.props.card.id));
  }

  render() {
    return (
      <form className="deleteForm" onSubmit={this.handleDelete}>
        <p className="deleteConfirm">Are you sure you want to delete this card?</p>
        <label className="deleteLabel">Task ID:<br />
          <input className="deleteInput" type="text" name="title" value={this.props.card.id} readOnly />
        </label>
        <br />
        <label className="deleteLabel">Title:<br />
          <input className="deleteInput" onChange={this.handleChange} type="text" name="title" value={this.props.card.title} readOnly />
        </label>
        <br />
        <label className="deleteLabel">Body:<br />
          <input className="deleteInput" onChange={this.handleChange} type="text" name="body" value={this.props.card.body} readOnly />
        </label>

        <button className="deleteSubmitBtn" type="submit" >Delete Card</button>

      </form>
    )
  }
}

export default connect()(Delete);