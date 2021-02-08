import React from "react"
import './App.css';
import Todo from "./Todo"
import TodoForm from "./TodoForm"
import { useSelector, useDispatch } from "react-redux";


function App() {

  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch()

  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      task,
    });
  }

  const todo = todos.map(t => (
    <Todo 
      text={item.task}
    />
  )) 

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
      </header>
      <div>
        <h3>ToDos</h3>
        <span>{todo}</span>
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
