import { ADD_CONTACT, REMOVE_CONTACT } from "../actions/actionTypes";

const initialState = {
  contacts: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((data, i) => i !== action.payload.personIndex),
      };
    default:
      return state;
  }
}
