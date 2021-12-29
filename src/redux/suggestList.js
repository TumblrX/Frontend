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

    //   for (let i = 0; i < action.payload.length; i++)
        state.tags.push(action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const { setDataItems, setTag } = suggestList.actions;
export default suggestList.reducer;
