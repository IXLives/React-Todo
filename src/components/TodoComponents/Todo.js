import React from "react";

const Todo = props => {
  //console.log('props in toDo', props.task);
  const clickHandler = () => {
    props.selectItem(props.task.id);
  };

  return (
    <div
      className={`task${props.task.completed ? " completed" : ""}`}
      onClick={clickHandler}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
