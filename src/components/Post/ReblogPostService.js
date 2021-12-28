/* eslint-disable no-restricted-syntax */
import api from '../../api/api';

const ReblogPostService = async function (fd) {
  try {
    const response = await api.get(`api/user/info`);
    let blogId = response.data.primary_blog;
    if (!blogId) return false;
    console.log(Array.from(fd));
    await api.post(`api/blog/${blogId}/posts`, fd);
  } catch (err) {
    if (err.response) {
      console.log(err.response);
    } else {
      console.log(err);
    }
    return false;
  }
  return true;
};
export default ReblogPostService;
