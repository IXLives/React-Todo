 import React from 'react';

 function Todo(props) {
     return (
         <div className = 'display'>
             <h2><strong>{props.listItem.taks}</strong></h2>
         </div>
     )
 }

 export default Todo;