import { configureStore } from '@reduxjs/toolkit';
import  createReducer  from './createBlog'

export default configureStore({
  reducer: {
    create: createReducer
  },
});
