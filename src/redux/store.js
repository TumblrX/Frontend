import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./createBlog";
import DashBoardReducer from "./DashBoardReducer";
import blogPosts from "./blogPosts";
import ExploreReducer from "./ExploreRecuder";

export default configureStore({
  reducer: {
    create: createReducer,
    DashBoard: DashBoardReducer,
    blogposts: blogPosts,
    Explore: ExploreReducer,
  },
});
