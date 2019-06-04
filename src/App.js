import React from 'react';



const todoList = [
  {
    
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDo: todoList,
      task: '',
      id: '',
      completed: ''
    };
  }

  submitHandler = event => {

  };

  cleaComplete = event => {

  };

  render() {
    return (
      <div className = 'todoApp'>
        <h2>Welcome to your Todo App!</h2>
        <div className = 'tobeDone'>

        </div>
      </div>
    );
  }
}

export default App; 
