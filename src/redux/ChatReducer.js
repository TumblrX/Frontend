/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const ChatReducer = createSlice({
  name: 'Chat',
  initialState: {
    messages: ['a', 'b', 'c', 'd'],
    newMessage: '',
    arrivalMessage: '',
    primaryblog: null,
    _id: null,
    owner: {},
    friend: {},
    sound: false,
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
    //   state.messages = [...state.messages, action.payload];
      console.log('add is called ');
      console.log('msgs --> ', state.messages);
      console.log('new --> ', action.payload);
      state.messages = [...state.messages, action.payload];
    },
    setNewMessage: (state, action) => {
      state.newMessage = action.payload;
    },
    setArrivalMessage: (state, action) => {
      state.arrivalMessage = action.payload;
    },
    setPrimaryBlog: (state, action) => {
      state.primaryblog = action.payload;
    },
    setID: (state, action) => {
      state._id = action.payload;
    },
    setOwner: (state, action) => {
      state.owner = action.payload;
    },
    setFriend: (state, action) => {
      state.friend = action.payload;
    },
    setSound: (state, action) => {
      state.sound = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setMessages,
  addMessage,
  setNewMessage,
  setArrivalMessage,
  setPrimaryBlog,
  setID,
  setOwner,
  setFriend,
  setSound,
} = ChatReducer.actions;
export default ChatReducer.reducer;
