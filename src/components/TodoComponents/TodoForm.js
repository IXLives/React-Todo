import React from "react";

function TodoForm() {
  return (
    <div className = 'todoForm'>
        <form onSubmit = {this.App.submitHandler}>
            <input
                type = 'text'
                value = {this.state.id}
                placeholder = '...todo'
                onChange = {}
            />
            <button type = 'submit'>Add Task</button>
        </form>
        <button className = 'clear' onClick = {this.App.clearComplete}>Clear Completed</button>
    </div>
  );
}

export default TodoForm;
