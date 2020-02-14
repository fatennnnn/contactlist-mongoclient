import {GET_CONTACT,CONTACT_LOADING,REMOVE_CONTACT,ADD_CONTACT,EDIT_CONTACT} from '../actions/actiontype'

const initialState = {contacts:[],
loading:false};
export const reducerContact = (state = initialState, action) => {
switch (action.type) {
  case GET_CONTACT:
    return { ...state, contacts: action.payload, loading: false };
  // case REMOVE_CONTACT:
  //   return {
  //     ...state,
  //     contacts: state.contacts.filter(el => el._id !== action.payload),
  //     loading: false
  //   };
  // case EDIT_CONTACT:
  //   return state.contacts.map(el =>
  //     el._id == action.payload.id ? { ...action.payload.newContact } : el
  //   );
  case CONTACT_LOADING:
    return { ...state, loading: true };
  // case ADD_CONTACT:
  //   return { ...state, contacts: [action.payload, ...state.contacts] };
  default:
    return state;
}
};
export default reducerContact;
