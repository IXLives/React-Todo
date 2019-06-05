import React from "react";


const TodoForm = props => {
  return (
    <form>
      <input 
        type = 'text' 
        placeholder = '...todo' 
        name = 'Todo' 
        onChange = {props.change}
        value = '' 
      />
      <button type = 'submit' onClick = {props.submit}>Add Task</button>
      <button className = 'clear' onClick = {props.clear}>Clear Completed</button>
    </form>
  );
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

