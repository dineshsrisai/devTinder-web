import { createSlice } from "@reduxjs/toolkit";

const requests = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequests: () => {
      return null;
    },
  },
});

export const { addRequests, removeRequests } = requests.actions;

export default requests.reducer;
