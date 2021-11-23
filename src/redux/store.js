import { configureStore } from '@reduxjs/toolkit';
import createReducer from './createBlog';
import DashBoardReducer from './DashBoardReducer';

export default configureStore({
  reducer: {
    create: createReducer,
    DashBoard: DashBoardReducer,
  },
});
