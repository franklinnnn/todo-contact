import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../../redux/todoSlice";
import { Link } from "react-router-dom";

const EditTodo = ({ onClose }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();

  const currentTodo = todos.filter((todos) => todos.id === params.id);
  const { title } = currentTodo[0];

  const [values, setValues] = useState({ title });

  const handleEditTodo = (e) => {
    e.preventDefault();

    setValues({ title: "" });
    dispatch(editTodo({ id: params.id, title: values.title }));

    console.log(`updated todo: ${values.title}`);
    navigate("/todos");
    onClose();
  };

  return (
    <form onSubmit={handleEditTodo} className="edit-todo">
      <input
        type="text"
        placeholder="Edit task"
        defaultValue={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        className="edit-todo-input"
      />
      <div className="edit-todo-buttons">
        <input type="submit" value="Edit Todo" id="edit-todo-button" />
        {/* <Link to="/todos">
          <input type="submit" value="Cancel" id="edit-todo-button" />
        </Link> */}
        <input type="submit" value="Cancel" id="edit-todo-button" />
      </div>
    </form>
  );
};

export default EditTodo;
