import { removeSpecificBlog } from "../../redux/ExploreRecuder";
import configureStore from "../../redux/store";
import { fetchOneBlog } from "./CheckBlogServices";
import { follow } from "../Blog/Followers/followerSection/followservice";
/**
 * handels the action when you click on the X click on check out this blogs
 * you will remove the blog from the BlogArray in the state.
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const onXClick = (ele) => {
  configureStore.dispatch(removeSpecificBlog(ele));
  fetchOneBlog();
};

const onFollowClick = (ele) => {
  const id = ele.target.parentElement.id;
  configureStore.dispatch(removeSpecificBlog(ele));
  fetchOneBlog();
  follow({ _id: id });
};

export { onXClick, onFollowClick };
