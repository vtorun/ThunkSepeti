import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../redux/actions/restActions";

const Home2 = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <div>
      <h1>Restaurant</h1>
      <hr />
      {isLoading ? (
        <h1>Yükleniyorr..</h1>
      ) : error ? (
        <p>Hataa!!</p>
      ) : (
        restaurants.map((item) => <h1 key={item.id}>{item.name}</h1>)
      )}
    </div>
  );
};

export default Home2;
