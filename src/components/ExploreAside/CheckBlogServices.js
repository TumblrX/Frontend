import api from "../../api/api";
import configureStore from "../../redux/store";
import { pushCheckBlogs, pushSpecificBlog } from "../../redux/ExploreRecuder";
/**
 * Fetch  Blogs from the Back end
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const fetchBlogs = () => {
  api
    .get("api/blog/explore/0/for-you")
    .then((response) => {
      configureStore.dispatch(pushCheckBlogs(response.data.forYouBlogs));
    })
    .catch((err) => {
    });
};

/**
 * Fetch only one   Blog from the Back end
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const fetchOneBlog = () => {
  api
    .get("api/blog/explore/0/for-you")
    .then((response) => {
      if (response.data.forYouBlogs.length === 0) {
        // some time the data return emtpy from the back end so if it is empty
        // request again
        fetchOneBlog();
        return;
      }
      configureStore.dispatch(pushSpecificBlog(response.data.forYouBlogs[0]));
    })
    .catch((err) => {
    });
};

export { fetchBlogs, fetchOneBlog };
