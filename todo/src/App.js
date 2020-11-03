import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import ToDoForm from "./Components/ToDoForm";

function App() {
  const [toDos, setToDos] = useState([]);

  function addToDo(todo) {
    //adds the to do in to the area of existing todos
    setToDos([todo, ...toDos]);
  }

  return (
    <div className="App">
      <Header />
      <ToDoForm
      //pass addToDo function 
        addToDo={addToDo}
      />
    </div>
  );
}

export default App;
