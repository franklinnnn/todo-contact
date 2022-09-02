import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addContact } from "../../redux/contactSlice";

const AddContact = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      `user entered contact: name ${name}, number ${number}, email ${email}`
    );
    dispatch(
      addContact({
        name: name,
        number: number,
        email: email,
      })
    );
    setName("");
    setNumber("");
    setEmail("");
  };
  return (
    <form onSubmit={onSubmit} className="add-contact">
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="tel"
        name="phone"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
        // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        placeholder="Contact Number"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input type="submit" value="Add Contact" id="add-contact-button" />
    </form>
  );
};

export default AddContact;
