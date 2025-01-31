
import api from "../../api";
import ActionTypes from "../actionTypes";

// Aksiyon (Nesne) Oluşturan Fonksiyonlar
// Senkron Fonksiyonlar
export const setRestaurant = (payload) => ({
  type: ActionTypes.REST_SUCCESS,
  payload,
});

// Asenkron Thunk Aksiyonu
// Senkkron aksiyonlardan farklı olarak api isteği atıp ardından dispatch ile reducer'a haber gönderebilecez
export const getRestaurants = () => {
  return async (dispatch) => {
    // reducer'a haber gönder
    dispatch({ type: ActionTypes.REST_LOADING });

    // api isteği at
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
