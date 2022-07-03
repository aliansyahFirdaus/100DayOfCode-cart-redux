import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./slice/ui-slice";
import counterSlice from "./slice/counter-slice";

const store = configureStore({
  reducer: { uiToggle: uiSlice, cart: counterSlice },
});

export default store;
