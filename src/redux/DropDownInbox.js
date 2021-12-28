import { createSlice } from '@reduxjs/toolkit';

export const DropDownInbox = createSlice({
  name: 'DropDownInbox',
  initialState: {
    conversations: [],
    blogs: [],
    isSearch: false,
    newMessage: '',
  },
  reducers: {
    resetDropDown: (state) => {
      state.conversations = [];
      state.blogs = [];
      state.isSearch = false;
      state.newMessage = '';
    },
    setConversations: (state, action) => {
        state.conversations = action.payload;
    },
    setBlogs: (state, action) => {
        state.blogs = action.payload;
    },
    setIsSearch: (state, action) => {
        state.isSearch = action.payload;
    },
    setNewMessage: (state, action) => {
        state.newMessage = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setConversations, setBlogs, setIsSearch, setNewMessage,resetDropDown,} = DropDownInbox.actions;
export default DropDownInbox.reducer;
