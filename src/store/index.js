import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slice/ui-slice";

const store = configureStore({
  reducer: { uiToggle: uiSlice },
});

export default store;
