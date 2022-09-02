import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import contactSlice from "./contactSlice";
import appointmentSlice from "./appointmentSlice";

export default configureStore({
  reducer: {
    appointments: appointmentSlice,
    contacts: contactSlice,
    todos: todoReducer,
  },
});
