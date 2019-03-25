import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: '',
    id: '',
    completed: false
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form className="todoList" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          className="inputField"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
          required
        />
        <input type="submit" value="submit" className="btn" />
      </form>
    );
  }
}

export default AddTodo;
