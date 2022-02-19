import { configureStore } from "@reduxjs/toolkit";

import data from "./store-data";

const store = configureStore({
    reducer: {data: data.reducer}
})

export default store;

