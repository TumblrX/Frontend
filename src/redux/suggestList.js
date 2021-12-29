/* eslint-disable linebreak-style */
import { createSlice } from "@reduxjs/toolkit";

export const suggestList = createSlice({
  name: "suggestList",
  initialState: {
    items: [],
    tags: [],
  },
  reducers: {
    setDataItems: (state, action) => {
      for (let i = 0; i < action.payload.length; i++)
        state.items.push(action.payload[i]);
    },
    setTag: (state, action) => {
      console.log("Iam here ya 3am ");
      state.tags = action.payload;
      console.log(state.tags);
    },
    truncateItems: (state, action) => {
      state.items = [];
    },
  },
});
// Action creators are generated for each case reducer function
export const { setDataItems, setTag, truncateItems } = suggestList.actions;
export default suggestList.reducer;
