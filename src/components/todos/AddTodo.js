import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`user entered: ${value}`);
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="add-todo">
      <input
        type="text"
        placeholder="Add task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className="add-todo-input"
      />
      <input type="submit" value="Add" className="add-todo-button" />
    </form>
  );
};

export default AddTodo;
