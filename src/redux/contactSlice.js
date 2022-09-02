import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const contactSlice = createSlice({
  name: "contacts",
  initialState: [
    {
      id: uuid(),
      name: "John Doe",
      number: "2223334444",
      email: "jdoe@email.com",
    },
    {
      id: uuid(),
      name: "Test Contact",
      number: "1234567890",
      email: "test.contact@email.com",
    },
  ],
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: uuid(),
        name: action.payload.name,
        number: action.payload.number,
        email: action.payload.email,
      };
      state.push(newContact);
    },
    editContact: (state, action) => {
      const { id, name, number, email } = action.payload;
      const currentContact = state.find((contact) => contact.id === id);
      if (currentContact) {
        currentContact.name = name;
        currentContact.number = number;
        currentContact.email = email;
      }
    },
    deleteContact: (state, action) => {
      const { id } = action.payload;
      const currentContact = state.find((contact) => contact.id === id);
      if (currentContact) {
        return state.filter((contact) => contact.id !== id);
      }
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
