 import React from 'react';

const Todo = props =>  {
    console.log('props in toDo', props);
     return (
         <div className = 'display'>
             {props.task}
         </div>
     );
 };

 export default Todo;