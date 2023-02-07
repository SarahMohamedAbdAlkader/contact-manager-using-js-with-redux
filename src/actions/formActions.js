import { ADD_CONTACT, REMOVE_CONTACT } from "./actionTypes";

export function addContact(person) {
  return {
    type: ADD_CONTACT,
    payload: person,
  };
}

export function removeContact({ personIndex }) {
  return {
    type: REMOVE_CONTACT,
    payload: { personIndex },
  };
}
