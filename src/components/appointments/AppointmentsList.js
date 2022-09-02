import React from "react";
import { useSelector, useDispatch } from "react-redux/";
import { deleteAppointment } from "../../redux/appointmentSlice";
import { Link } from "react-router-dom";
import { Edit, Delete, Phone, Email } from "@mui/icons-material";

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);
  const appointmentsSort = [...appointments].sort((a, b) => a.date - b.date);
  console.log(appointmentsSort);

  const handleDeleteClick = (id) => {
    dispatch(deleteAppointment({ id }));
  };

  const AppointmentCard = () =>
    appointmentsSort.map((appointment) => (
      <div key={appointment.id} className="appointment-card">
        <div className="appointment-info">
          <h3>{appointment.title}</h3>
          <h4>with {appointment.contact}</h4>
          <h4>
            {appointment.date}, {appointment.time}
          </h4>
          <div className="appointment-notes">
            <p>Notes</p>
            <p>{appointment.notes}</p>
          </div>
        </div>
        <div>
          <Link to={`/edit-appointment/${appointment.id}`} title="Edit">
            <Edit className="appointment-buttons" />
          </Link>
          <Delete
            className="appointment-buttons"
            onClick={() => handleDeleteClick(appointment.id)}
            title="Delete"
          />
        </div>
      </div>
    ));

  return (
    <div className="appointment-list">
      {appointmentsSort.length ? <AppointmentCard /> : <p>No Appointments</p>}
    </div>
  );
};

export default AppointmentsList;
