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
  const checkBlogList = document.querySelectorAll(".check-blog-list>li");
  for (let i = 0; i < 4; i++) {
    if (ele.target.parentElement === checkBlogList[i]) {
      configureStore.dispatch(removeSpecificBlog(i));
    }
  }
  fetchOneBlog();
};

const onFollowClick = (ele) => {
  const checkBlogList = document.querySelectorAll(".check-blog-list>li");
  for (let i = 0; i < 4; i++) {
    if (ele.target.parentElement === checkBlogList[i]) {
      configureStore.dispatch(removeSpecificBlog(i));
    }
  }
  const id = ele.target.parentElement.id;

  fetchOneBlog();
  follow({ _id: id });
};

export { onXClick, onFollowClick };
