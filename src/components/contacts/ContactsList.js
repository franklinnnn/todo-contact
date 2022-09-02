import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../redux/contactSlice";
import { Edit, Delete, Phone, Email } from "@mui/icons-material";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const contactsSort = [...contacts].sort((a, b) => (a.name > b.name ? 1 : -1));

  const handleDeleteClick = (id) => {
    dispatch(deleteContact({ id }));
  };

  const ContactCard = () =>
    contactsSort.map((contact) => (
      <div key={contact.id} className="contact-card">
        <div className="contact-info">
          <h3>{contact.name}</h3>
          <h4>
            <Phone fontSize="small" />
            {contact.number}
          </h4>
          <h4>
            <Email fontSize="small" />
            {contact.email}
          </h4>
        </div>
        <div>
          <Link to={`/edit-contact/${contact.id}`}>
            <Edit className="contact-buttons" />
          </Link>
          <Delete
            className="contact-buttons"
            onClick={() => handleDeleteClick(contact.id)}
          />
        </div>
      </div>
    ));

  return (
    <div className="contact-list">
      {contactsSort.length ? <ContactCard /> : <p>No Contacts</p>}
    </div>
  );
};
export default ContactsList;
