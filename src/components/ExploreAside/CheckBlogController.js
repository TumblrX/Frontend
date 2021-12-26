import { removeSpecificBlog } from "../../redux/ExploreRecuder";
import configureStore from "../../redux/store";
import { fetchOneBlog } from "./CheckBlogServices";
const onXClick = (ele) => {
 
  configureStore.dispatch(removeSpecificBlog(ele));
  fetchOneBlog();
};

export { onXClick };
