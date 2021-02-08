import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todoForm.css";
import Todo from "./Todo"

function TodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  function handleChange(evt) {
    setTask(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    createTodo(task);
    setTask("");
  }

  return (
    <div className="new-meme-form">
      <form id="create-todo" onSubmit={handleSubmit}>
        <div className="upload-photo">
          <h2>What to do...</h2>
          <label htmlFor="file-id"></label>
          <input
            value={task}
            onChange={handleChange}
            type="text"
            name="task"
          ></input>
        </div>
        <div className="submit-form">
          <button
            className="btn"
            type="submit"
            form="create-todo"
            id="submit-button"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;


