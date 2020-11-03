import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

function ToDo({toDo, toggleComplete, removeToDo}) {

  //calls the toggle complete function from app.js 
  function handleCheckboxClick() {
    toggleComplete(toDo.id)
  }

  //calls the remove todo function from app.js
  function handleRemoveClick() {
    removeToDo(toDo.id)
  }

  return(
    <div className="list-item">
      <Checkbox color="primary" className="checkbox" onClick={handleCheckboxClick} type="checkbox"></Checkbox>
      <li
        style={{
          color:"white",
          //strikes through the to do task if it is completed
          textDecoration: toDo.completed? "line-through" : null
        }}
      >{toDo.task}</li>
      <Button color="secondary" size="small" onClick={handleRemoveClick}>X</Button>
    </div>
  )
}

export default ToDo;