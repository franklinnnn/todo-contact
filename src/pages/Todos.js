import React from "react";
import "./todos.css";
import AddTodo from "../components/todos/AddTodo";
import TodoList from "../components/todos/TodoList";

const Todos = () => {
  return (
    <div className="todo">
      <h1>TO DO</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todos;
