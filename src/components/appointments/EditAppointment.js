import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { editAppointment } from "../../redux/appointmentSlice";
import { Link } from "react-router-dom";
import ContactPicker from "./ContactPicker";
import { Edit } from "@mui/icons-material";

const EditAppointment = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);
  const navigate = useNavigate();

  const currentAppointment = appointments.filter(
    (appointment) => appointment.id === params.id
  );
  const { title, contact, date, time, notes } = currentAppointment[0];

  const [values, setValues] = useState({ title, contact, date, time, notes });

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const contactNames = useSelector((state) => state.contacts);

  const getContactNames = () => {
    return contactNames.map((contact) => contact.name);
  };

  const handleEditAppointment = (e) => {
    e.preventDefault();
    setValues({ title: "", contact: "", date: "", time: "", notes: "" });
    dispatch(
      editAppointment({
        id: params.id,
        title: values.title,
        contact: values.contact,
        date: values.date,
        time: values.time,
        notes: values.notes,
      })
    );
    console.log(
      `user updated appointment:
            ${values.title}, ${values.contact}, ${values.date}, ${values.time}, ${values.notes}`
    );
    navigate("/appointments");
  };

  return (
    <div>
      <form onSubmit={handleEditAppointment} className="edit-appointment">
        <h2>
          <Edit />
          Edit Appointment
        </h2>
        <input
          type="text"
          name="title"
          defaultValue={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          required
          placeholder="Title"
        />

        <ContactPicker
          name="contact"
          defaultValue={values.contact}
          contacts={getContactNames()}
          onChange={(e) => setValues({ ...values, contact: e.target.value })}
          placeholder="Appointment with"
        />

        <div className="edit-appointment-date-time">
          <input
            type="date"
            name="date"
            min={getTodayString()}
            defaultValue={date}
            onChange={(e) => setValues({ ...values, date: e.target.value })}
            required
          />

          <input
            type="time"
            name="time"
            defaultValue={time}
            onChange={(e) => setValues({ ...values, time: e.target.value })}
            required
          />
        </div>

        <input
          type="text"
          name="notes"
          defaultValue={values.notes}
          onChange={(e) => setValues({ ...values, notes: e.target.value })}
          placeholder="notes"
        />

        <div className="edit-appointment-buttons">
          <input
            type="submit"
            value="Edit Appointment"
            id="edit-appointment-button"
          />

          <Link to="/appointments">
            <input type="submit" value="Cancel" id="edit-appointment-button" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditAppointment;
