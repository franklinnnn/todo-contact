import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { editContact } from "../../redux/contactSlice";
import { Link } from "react-router-dom";
import { Edit } from "@mui/icons-material";

const EditContact = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const navigate = useNavigate();

  const currentContact = contacts.filter((contact) => contact.id === params.id);
  const { name, number, email } = currentContact[0];

  const [values, setValues] = useState({ name, number, email });

  const handleEditContact = (e) => {
    e.preventDefault();
    setValues({ name: "", number: "", email: "" });
    dispatch(
      editContact({
        id: params.id,
        name: values.name,
        number: values.number,
        email: values.email,
      })
    );
    console.log(
      `user updated contact: ${values.name}, ${values.number}, ${values.email}`
    );
    navigate("/contacts");
  };

  return (
    <div>
      <form onSubmit={handleEditContact} className="edit-contact">
        <h2>
          <Edit />
          Edit Contact
        </h2>
        <input
          type="text"
          name="name"
          defaultValue={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          placeholder="Name"
        />

        <input
          type="tel"
          name="number"
          defaultValue={values.number}
          onChange={(e) => setValues({ ...values, number: e.target.value })}
          required
          // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          placeholder="Contact Number"
        />

        <input
          type="email"
          name="email"
          defaultValue={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          placeholder="Email"
        />
        <div className="edit-contact-buttons">
          <input type="submit" value="Edit Contact" id="edit-contact-button" />

          <Link to="/contacts">
            <input type="submit" value="Cancel" id="edit-contact-button" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
