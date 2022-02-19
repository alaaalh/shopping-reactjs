import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "data",
  initialState: {
    data: [],
    storeAvatar:[],
    totalQuantita: 0,
  },
  reducers: {
    storeData(state, action) {
      const dispatchData = action.payload;
      const exciting = state.data.find(item => data._id === dispatchData._id)

      if(!exciting){
          state.data.push({
            _id: dispatchData._id,
            title: dispatchData.title,
            author: dispatchData.author,
            price: dispatchData.price,
            amount: dispatchData.amount,
            createdAt: dispatchData.createdAt,
            description: dispatchData.description,
            rate: dispatchData.rate,
          });
      }
      console.log(state.data)
    },
  },
});

export const dataAction = data.actions;

export default data;
