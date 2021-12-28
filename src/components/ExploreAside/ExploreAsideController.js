import { fetchBlogs } from "./CheckBlogServices";
/**
 * once you click on Show more tags you will retrieve more blogs .
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const showMoreTags = function () {
  fetchBlogs();
};

export { showMoreTags };
