import React from "react";


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItem: ''
    };
  }

  changeHandler = e => {
    this.setState({ toDoItem: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addTask(this.state.toDoItem);
    this.setState({ toDoItem: '' });
  };

  
  
  render() {
    return (
      <form onSubmit = {this.submitHandler}>
        <input 
          type = 'text' 
          placeholder = '...todo' 
          name = 'todo' 
          onChange = {this.changeHandler}
          value = {this.state.toDoItem} 
        />
        <button>Add Task</button>
        <button onClick = {this.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
};

// function TodoForm(props) {
//   return (
//     <div className = 'todoForm'>
//         <form onSubmit = {props.methods.submitHandler}>
//             <input
//                 type = 'text'
//                 value = {props.methods.state.id}
//                 placeholder = '...todo'
//                 onChange = {props.methods.changeHandler}
//             />
//             <button type = 'submit'>Add Task</button>
//         </form>
//         <button className = 'clear' onClick = {props.methods.clearComplete}>Clear Completed</button>
//     </div>
//   );
// }

export default TodoForm;

