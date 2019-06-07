import React from "react";

//import Todo from './components/TodoComponents/Todo';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos: [],
      toDo: '',
    };
  }

  selectItem = id => {
    const newList = this.state.toDos.map(task => {
      if (task.id === id) {
        const newObj = {
          ...task,
          completed: !task.completed
        };
        return newObj;
      } else {
        return task;
      }
    });

    this.setState({ toDos: newList });
  };

  addTask = newTask => {
    const newTodoTask = {
      task: newTask,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDos: [...this.state.toDos, newTodoTask],
      toDo: ''
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    let toDos = this.state.toDos.filter(todo => !todo.completed);
    this.setState({toDos});
  };

  render() {
    return (
      <div className="todoApp">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList toDos={this.state.toDos} selectItem={this.selectItem} />
        <TodoForm toDos={this.state.toDos} addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
