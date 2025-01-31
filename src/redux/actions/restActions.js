
import api from "../../api";
import ActionTypes from "../actionTypes";


export const setRestaurant = (payload) => ({
  type: ActionTypes.REST_SUCCESS,
  payload,
});


export const getRestaurants = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.REST_LOADING });
    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.REST_ERROR, payload: err });
      });
  };
};
