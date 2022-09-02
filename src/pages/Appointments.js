import React from "react";
import "./appointments.css";
import AddAppointment from "../components/appointments/AddAppointment";
import AppointmentsList from "../components/appointments/AppointmentsList";

const Appointments = () => {
  return (
    <div className="appointments">
      <h1>APPOINTMENTS</h1>
      <AddAppointment />
      <AppointmentsList />
    </div>
  );
};

export default Appointments;
