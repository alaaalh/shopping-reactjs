import { createSlice } from "@reduxjs/toolkit";

import axiosInatance from "./../url/Config";

const data = createSlice({
  name: "data",
  initialState: {
    data: 'loading',
    totalQuantita: 0,
  },
  reducers: {
    storeData(state, action) {
      const dispatchData = action.payload;
      state.data = dispatchData;
    },
  },
});

export const sendCardData = () => {
  return async (dispatch) => {
    const sendReuest = async () => {
      const response = await axiosInatance.get("/books");
      const responseData = await response.data;

      dispatch(
        dataAction.storeData({
          response: responseData,
        })
      );
    };
    try{
      await sendReuest();
    } catch(error){console.log(error)} 
  };
};

export const dataAction = data.actions;

export default data;
