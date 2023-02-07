import React, { useState } from "react";
import { connect } from "react-redux";

import { addContact } from "../../actions/formActions";

import "./AddPersonForm.css";

function AddPersonForm(props) {
  const [inputVal, setInputVal] = useState("");

  function handleChangeInput({ target: { value } }) {
    setInputVal(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputVal.trim().length) {
      props.addContact(inputVal);
      setInputVal("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="br-add-person-form">
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChangeInput}
        value={inputVal}
      />
      <button type="submit" className="br-add-person-form__submit-btn">
        Add
      </button>
    </form>
  );
}

const mapDipatchToProps = {
  addContact,
};

export default connect(null, mapDipatchToProps)(AddPersonForm);
