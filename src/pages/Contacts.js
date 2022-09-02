import React from "react";
import "./contacts.css";
import AddContact from "../components/contacts/AddContact";
import ContactsList from "../components/contacts/ContactsList";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>CONTACTS</h1>
      <AddContact />
      <ContactsList />
    </div>
  );
};

export default Contacts;
