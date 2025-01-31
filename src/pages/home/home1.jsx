import React, { useEffect } from "react";
import api from "../../api";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../redux/actionTypes";

const Home1 = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionTypes.REST_LOADING });
    api
      .get("/restaurants")
      .then((response) => {
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.REST_ERROR, payload: error });
      });
  }, []);

  return <div>
    <h1>Restaurant</h1>
    <hr/>
    {isLoading?<h1>Yükleniyorr..</h1>:error?<p>Hataa!!</p>:restaurants.map((item)=><h1 key={item.id}>{item.name}</h1>)}
  </div>;
};

export default Home1;
