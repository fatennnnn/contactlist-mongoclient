import {
  GET_CONTACT,
  CONTACT_LOADING,
  REMOVE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT
} from "./actiontype";
import axios from "axios";
export const setContactLoading = () => ({
  type: CONTACT_LOADING
});
export const get_cont = () => dispatch => {
    dispatch(setContactLoading());
    axios.get("/get_list").then(res =>
      dispatch({
        type: GET_CONTACT,
        payload: res.data
      })
    );
};
export const del_cont = id => dispatch => {
    axios.delete(`/delete_list/${id}`)
        .then(res =>
        dispatch(get_cont()));
}
export const edit_cont = (id, newContact) => dispatch => {
    axios.put(`modify_list/${id}`,newContact).then(res =>dispatch(get_cont()));
}
export const add_cont = contact => dispatch => {
    axios.post(`/add_list`,contact).then(res => dispatch(get_cont()));
}