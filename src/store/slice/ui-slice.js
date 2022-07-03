import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: { toggle: false },
  reducers: {
    changeToggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
