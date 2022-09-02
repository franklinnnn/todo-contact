import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: uuid(),
      title: "Sample task 1",
    },
    {
      id: uuid(),
      title: "Sample task 2",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const currentTodo = state.find((todo) => todo.id === id);
      if (currentTodo) {
        currentTodo.title = title;
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const currentTodo = state.find((todo) => todo.id === id);
      if (currentTodo) {
        return state.filter((todo) => todo.id !== id);
      }
    },
  },
});

export const { addTodo, toggleComplete, editTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;

