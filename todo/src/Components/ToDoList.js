import React, { useState } from 'react';
import ToDo from "./ToDo";

function ToDoList ({toDos, toggleComplete, removeToDo}) {
  return(
    //render the list structure
    <ul style={{listStyleType: "none"}}>
      {toDos.map(toDo => (
        // takes the to do and maps it by passing the toDo prop through the toDo component
        <ToDo key={toDo.id} toDo={toDo} toggleComplete={toggleComplete} removeToDo={removeToDo} />
      ))}
    </ul>
  )
}

export default ToDoList;