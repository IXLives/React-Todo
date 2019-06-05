 import React from 'react';

const Todo = props =>  {
    //console.log('props in toDo', props.task);
     return (
       
             <p>{props.task.task}</p>
         
     );
 };

 export default Todo;