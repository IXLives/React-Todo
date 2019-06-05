import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    //console.log(props);
    
    return (<div>
        {props.toDos.map((item, index) => {
            return <Todo task={item} />;
          })}</div>
    ) 
    
};

export default TodoList;

