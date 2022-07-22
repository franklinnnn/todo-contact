import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	const todos = useSelector((state) => state.todos);

	return (
        <section className="todo">
            <h2>To Do</h2>
            <ul>
                {todos.map((todo) => (
                    <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
                ))}
            </ul>
        </section>
	);
};

export default TodoList;
