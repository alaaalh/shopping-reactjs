import "./App.css";
import { Fragment } from "react";
import { useEffect } from "react";
import MainBage from "./Page/main-bage";
import { useDispatch } from "react-redux";

import { sendCardData } from './store/store-data'

function App() {
  const dispatch = useDispatch();

  useEffect(() => { 

    dispatch(sendCardData())
    
  }, [dispatch]);

  return (
    <Fragment>
      <MainBage />
    </Fragment>
  );
}

export default App;
