import React from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos: [
        {
          task: 'Learn React',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Learn Animations',
          id: Date.now(),
          completed: false
        }
      ],
      task: '',
      id: Date.now(),
      completed: false
    };
  }

  selectItem = event => {
    this.setState({completed: true});
  };

  submitHandler = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: false,
    };

    this.setState({
      toDo: [...this.state.toDo, newTask]
    });
  };

  clearComplete = event => {

  };

  changeHandler = event => {
    this.setState({ [event.target.task]: event.target.value });
  };

  render() {
    return (
      <div className = 'todoApp'>
        <h2>Welcome to your Todo App!</h2>
        <div className = 'tobeDone'>
          <Todo />
         <TodoList 
          toDos = {this.state.toDos}
         />
        </div>
        <div className = 'inputForm'>
          <TodoForm 
            change = {this.changeHandler}
            clear = {this.clearComplete}
            submit = {this.submitHandler}
          />
        </div>
      </div>
    );
  }
}

export default App; 
