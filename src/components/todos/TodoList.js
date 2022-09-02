import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../../redux/todoSlice";
import { Edit, Delete } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import EditTodo from "./EditTodo";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleDeleteClick = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const TodoCard = () =>
    todos.map((todo) => (
      <div key={todo.id} className="todo-card">
        <div>{todo.title}</div>
        <div>
          <Link to={`/edit-todo/${todo.id}`}>
            <Edit className="todo-buttons" />
          </Link>
          <Delete
            className="todo-buttons"
            onClick={() => handleDeleteClick(todo.id)}
          />
          {/* <div>
            <button onClick={handleOpenEdit}>open test dialog</button>
            <Dialog open={openEdit} onClose={handleCloseEdit}>
              <DialogContentText>Edit Task</DialogContentText>
                <TextField id={todo.id} label={todo.title} />
                <DialogActions>
                  <button onClick={handleCloseEdit}>edit</button>
                  <button onClick={handleCloseEdit}>cancel</button>
                </DialogActions>
              <EditTodo
                id={todo.id}
                title={todo.title}
                onClose={handleCloseEdit}
              />
            </Dialog>
          </div> */}
        </div>
      </div>
    ));

  return (
    <div className="todo-list">
      {todos.length ? <TodoCard /> : <p>No tasks</p>}
    </div>
  );
};

export default TodoList;
