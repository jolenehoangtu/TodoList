import React, { Component } from 'react';
import Header from './components/Header';
import Todo from "./components/Todo"
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state={
    todos:[
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Breakfast with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Walk dog around',
        completed: false
      }
    ]
  }
  //Toggle Complete - check box
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;

    })});
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //Add todo
  addTodo =(title) =>{
    const newTodo = {
      id: 4,
      title: title,
      complete: false
    }
    this.setState({todos: [...this.state.todos, newTodo] });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container"> 
        <Header/> 
        <AddTodo addTodo={this.addTodo}/>
        <Todo todos={this.state.todos} 
        markComplete={this.markComplete}
        delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
