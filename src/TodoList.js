import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./todoList.css"

function TodoList() {
  const todos = useSelector((st) => st.todos);
  const dispatch = useDispatch();

  function update(id, updatedTask) {
    dispatch({
      type: "UPDATE_TODO",
      id,
      updatedTask,
    });
  }

  function deleteTodo(id) {
    dispatch({ type: "REMOVE_TODO", id });
  }

  function handleCreate(task) {
    dispatch({
      type: "ADD_TODO",
      task,
    });
  }


  const showTodos = todos.map((todo) => (
    <Todo
      handleDelete={deleteTodo}
      id={todo.id}
      key={todo.id}
      task={todo.task}
      handleUpdate={update}
    />
  ));
  return (
    <div>
      <TodoForm createTodo={handleCreate} />
      <ul className="list">{showTodos}</ul>
    </div>
  );
}

export default TodoList;
