import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAppointment } from "../../redux/appointmentSlice";
import ContactPicker from "./ContactPicker";

const AddAppointment = () => {
  const [title, setTitle] = useState();
  const [contact, setContact] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [notes, setNotes] = useState();

  const dispatch = useDispatch();
  const contactNames = useSelector((state) => state.contacts);

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contactNames.map((contact) => contact.name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      `user entered appointment: title: ${title}, date: ${date}, time: ${time}, notes: ${notes}`
    );
    dispatch(
      addAppointment({
        title: title,
        contact: contact,
        date: date,
        time: time,
        notes: notes,
      })
    );
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
    setNotes("");
  };
  return (
    <form onSubmit={onSubmit} className="add-appointment">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Title"
      />
      <ContactPicker
        name="contact"
        value={contact}
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
      />
      <div className="add-appointment-date-time">
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <input
        type="text"
        name="notes"
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
      />

      <input
        type="submit"
        value="Add Appointment"
        id="add-appointment-button"
      />
    </form>
  );
};

export default AddAppointment;
