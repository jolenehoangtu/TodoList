import React, { Component } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };
  //Toggle Complete - check box
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Generate id for each todo task
  generateID = () => {
    const lettersNumbers =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomId = '';
    for (let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * lettersNumbers.length);
      randomId += lettersNumbers[random];
    }
    return randomId;
  };

  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //Add todo
  addTodo = (title, id) => {
    const newTodo = {
      id: this.generateID(),
      title: title,
      complete: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="border">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todo
              todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
