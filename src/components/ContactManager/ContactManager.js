import React from "react";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from "../../reducers/appReducer";

import AddPersonForm from "../AddPersonForm/AddPersonForm";
import ContactsList from "../ContactsList/ContactsList";

import "./ContactManager.css";

const store = configureStore({ reducer })

export default function ContactManager() {
  return (
    <div className="br-contact-manager-container">
      <Provider store={store}>
        <AddPersonForm />
        <ContactsList />
      </Provider>
    </div>
  );
}
