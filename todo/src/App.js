import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";

//key for local storage
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const storageToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageToDos) {
      setToDos(storageToDos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
  }, [toDos]);

  function addToDo(todo) {
    //adds the to do in to the area of existing todos
    setToDos([todo, ...toDos]);
  }

  function toggleComplete(id) {
    setToDos(
      //goes through toDos and checks to find the matching ID of the checkbox clicked
      toDos.map(toDo => {
        //if the ID matches, the completed boolean is toggled
        if (toDo.id === id) {
          return {
            ...toDo,
            completed: !toDo.completed
          }
        }
        return toDo;
      })
    )
  }

  function removeToDo(id) {
    //takes the toDo's ID and checks it to see if the ID matches. if the id matches, the toDo is removed from the new array
    setToDos(toDos.filter(toDo => toDo.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <ToDoForm
      //pass addToDo function 
        addToDo={addToDo}
      />
      <ToDoList toDos={toDos} toggleComplete={toggleComplete} removeToDo={removeToDo} />
    </div>
  );
}

export default App;
