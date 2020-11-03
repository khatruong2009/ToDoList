import React from 'react';

function ToDo({toDo, toggleComplete, removeToDo}) {

  function handleCheckboxClick() {
    toggleComplete(toDo.id)
  }

  function handleRemoveClick() {
    removeToDo(toDo.id)
  }

  return(
    <div style={{display: "flex"}}>
      <input onClick={handleCheckboxClick} type="checkbox"></input>
      <li
        style={{
          color:"white",
          //strikes through the to do task if it is completed
          textDecoration: toDo.completed? "line-through" : null
        }}
      >{toDo.task}</li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  )
}

export default ToDo;