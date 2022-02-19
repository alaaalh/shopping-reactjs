import "./App.css";
import { Fragment } from "react";
import { useEffect } from "react";
import MainBage from "./Page/main-bage";
import axiosInatance from "./url/Config";
import { useDispatch } from "react-redux";

import { dataAction } from "./store/store-data";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataFromBackEnd = async () => {
      const response = await axiosInatance.get("/books");
      const responseData = await response.data;

      responseData.map((response) => {
        return dispatch(
          dataAction.storeData({
            _id: response._id,
            title: response.title,
            author: response.author,
            price: response.price,
            amount: response.amount,
            createdAt: response.createdAt,
            description: response.description,
            rate: response.rate,
          })
        );
      });
    };
    getDataFromBackEnd();
  }, [dispatch]);

  return (
    <Fragment>
      <MainBage />
    </Fragment>
  );
}

export default App;
