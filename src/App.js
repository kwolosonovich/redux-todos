import React from "react"
import './App.css';
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useSelector, useDispatch } from "react-redux";


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
      </header>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
