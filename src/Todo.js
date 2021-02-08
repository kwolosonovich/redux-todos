import React, { useState } from "react";
import "./todo.css";

function Todo({ task, handleUpdate, handleDelete, id }) {
  const [editingTask, setEditingTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  function handleRemove() {
    handleDelete(id);
  }

  function toggleEdit() {
    setIsEditing((e) => !e);
  }

  function handleChange(evt) {
    setEditingTask(evt.target.value);
  }

  function stopEditing(evt) {
    evt.preventDefault();
    handleUpdate(id, task);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div>
        <form onSubmit={stopEditing}>
          <input type="text" value={editingTask} onChange={handleChange} />
          <button>Stop Editing</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <li>{editingTask}</li>
      <div className="btns">
        <button className="btn" onClick={toggleEdit}>
          Edit
        </button>
        <button className="btn" onClick={handleRemove}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;