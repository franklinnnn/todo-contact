import React from "react";

const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    <select
      name={name}
      onChange={onChange}
      className="appointment-contact-picker"
    >
      <option value={""} key={-1} selected="selected">
        Select contact
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};

export default ContactPicker;
