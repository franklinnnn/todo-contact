import React from "react";
import TodoForm from "../../components/todos/TodoForm";
import TodoList from "../../components/todos/TodoList";

export const TodosPage = () => {
    return(
        <div>
            <h2>Add To Do</h2>
            <TodoForm />
            <hr />
            <TodoList />
        </div>
    )
}
