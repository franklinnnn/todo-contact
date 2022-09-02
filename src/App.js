<<<<<<< HEAD
import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Contacts from "./pages/Contacts";
import Appointments from "./pages/Appointments";
import About from "./pages/About";
import EditContact from "./components/contacts/EditContact";
import EditAppointment from "./components/appointments/EditAppointment";
import EditTodo from "./components/todos/EditTodo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="todos" element={<Todos />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="about" element={<About />} />
            <Route exact path="/edit-contact/:id" element={<EditContact />} />
            <Route
              exact
              path="/edit-appointment/:id"
              element={<EditAppointment />}
            />
            <Route exact path="/edit-todo/:id" element={<EditTodo />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
=======
import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { TodosPage } from "./containers/todosPage/TodosPage";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    TODOS: "/todos"
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  return (
    <>
      <nav>
        <div class="title-container">
          <h1>Appointment Planner</h1>
        </div>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
        <NavLink to={ROUTES.TODOS} activeClassName="active">
          To Do's
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>
          <Route path={ROUTES.TODOS}>
            <TodosPage />
          </Route>
        </Switch>
      </main>
    </>
>>>>>>> b8ad17b2a7623a889462115600b14a4f1826f69b
  );
}

export default App;
