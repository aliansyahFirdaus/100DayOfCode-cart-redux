import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: { toggle: false, notificationDetail: null },
  reducers: {
    changeToggle(state) {
      state.toggle = !state.toggle;
    },
    notificationHandler(state, action) {
      if (action.payload) {
        state.notificationDetail = {
          title: action.payload.title,
          status: action.payload.status,
          message: action.payload.message,
        };
      } else {
        state.notificationDetail = action.payload
      }
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
