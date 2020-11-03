import React, { useState } from 'react';

function ToDoForm ({addToDo}) {

 const [toDo, setToDo] = useState({
   id:"",
   task:"",
   completed: false
 })

 function handleChange(e) {
   //sets the todo state to the value that is currently in the input section
   setToDo({...toDo, task: e.target.value});
 }

 function handleSubmit(e) {
   //prevents the page from refreshing when the form is submitted
   e.preventDefault();
   //remove white spaces from the todo
   if(toDo.task.trim()) {
     //sends the todo back to the addToDo function in App.js where it is added to the array of toDos
     addToDo({...toDo, id: 1+Math.random()})

     //clears the input field
     setToDo({...toDo, task:""})
   }
 }

  return (
    <form>
      <input value={toDo.task} onChange={handleChange}></input>
      <button></button>
    </form>
  )
}

export default ToDoForm;