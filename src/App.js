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
  );
}

export default App;
