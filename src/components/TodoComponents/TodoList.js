import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  //console.log(props);

  return (
    <div className="todoList">
      {props.toDos.map((item, index) => {
        return <Todo task={item} selectItem={props.selectItem} />;
      })}
    </div>
  );
};

export default TodoList; 
