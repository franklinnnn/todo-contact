import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: [
    {
      id: uuid(),
      title: "Sample Appointment",
      contact: "Sample Contact",
      date: "2022-08-30",
      time: "14:00",
      notes:
        "Sample note. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy...",
    },
  ],
  reducers: {
    addAppointment: (state, action) => {
      const newAppointment = {
        id: uuid(),
        title: action.payload.title,
        contact: action.payload.contact,
        date: action.payload.date,
        time: action.payload.time,
        notes: action.payload.notes,
      };
      state.push(newAppointment);
    },
    editAppointment: (state, action) => {
      const { id, title, contact, date, time, notes } = action.payload;
      const currentAppointment = state.find(
        (appointment) => appointment.id === id
      );
      if (currentAppointment) {
        currentAppointment.title = title;
        currentAppointment.contact = contact;
        currentAppointment.date = date;
        currentAppointment.time = time;
        currentAppointment.notes = notes;
      }
    },
    deleteAppointment: (state, action) => {
      const { id } = action.payload;
      const currentAppointmennt = state.find(
        (appointment) => appointment.id === id
      );
      if (currentAppointmennt) {
        return state.filter((appointment) => appointment.id !== id);
      }
    },
  },
});

export const { addAppointment, editAppointment, deleteAppointment } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
