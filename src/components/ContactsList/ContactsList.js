import React from "react";
import { connect } from "react-redux";

import { removeContact } from "../../actions/formActions";

import "./ContactsList.css";

function ContactsList({ contacts = [], removeContact }) {
  const handleRemoveContact = ({ index }) => {
    removeContact({ personIndex: index });
  };

  return (
    <ul className="br-contacts-list">
      {contacts?.map((contact, index) => (
        <li key={index}>
          {contact}
          <button onClick={() => handleRemoveContact({ index })}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDipatchToProps = {
  removeContact,
};

export default connect(mapStateToProps, mapDipatchToProps)(ContactsList);
